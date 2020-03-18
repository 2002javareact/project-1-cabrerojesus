import React, { SyntheticEvent } from "react"
import { Reimbursement } from "../Models/Reimbursement"
import { Users } from "../Models/Users"
import { Container, Col, Form, FormGroup, Label, Input, Button, Card, CardTitle, CardText } from "reactstrap"
import { Redirect } from "react-router"

interface INewReimbursementProps{
    newReimbursement:Reimbursement
    currentUser:Users
    NewReimbursementActionMapper:(author:number,amount:number,dateSubmitted:number,description:string,type:number)=>void
    errorMessage:string
}

interface INewReimbursementState{
    author:number,
    amount:number,
    dateSubmitted:number,
    description:string,
    type:number
}
export class NewReimbursementComponent extends React.Component<INewReimbursementProps,INewReimbursementState>{
    constructor(props:any){
        super(props)
        this.state = {
            author:0,
            amount:0,
            dateSubmitted:0,
            description:'',
            type:0
        }
    }


    updateAuthor = (e: any) => {
        this.setState({
            author: e.currentTarget.value
        })
    }

    updateAmount = (e: any) => {
        this.setState({
            amount: e.currentTarget.value
        })
    }

    updateDateSubmitted = (e: any) => {
        this.setState({
            dateSubmitted: e.currentTarget.value
        })
    }

    updateDescription = (e: any) => {
        this.setState({
            description: e.currentTarget.value
        })
    }

    updateType = (e: any) => {
        this.setState({
            type: e.currentTarget.value
        })
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.NewReimbursementActionMapper(this.state.author, this.state.amount,this.state.dateSubmitted,this.state.description,this.state.type)
        // when we reach this point we don;t get that return value from the mapper
        // that value got hijacked and was sent to dispatch
    }


    render(){
        return(
            this.props.currentUser.username === ''?
            <Redirect to = '/'/>
            :
            this.props.newReimbursement.description === ''?
            <Container>
                <h2>New Reimbursement</h2>
              <Col>  
              <Form onSubmit = {this.submit}>          
                <FormGroup>
                <Label>amount</Label>
                <Input onChange={this.updateAmount} value={this.state.amount} type="number" name="amount" id="amount" placeholder="amount" required/>
                </FormGroup>
            
                <FormGroup>
                <Label>date submitted </Label>
                <Input onChange={this.updateDateSubmitted} value={this.state.dateSubmitted} type="date" name="dateSubmitted" id="dateSubmitted" placeholder="date submitted" required/>
                </FormGroup>
            
                <FormGroup>
                <Label>description</Label>
                <Input onChange={this.updateDescription} value={this.state.description} type="text" name="description" id="description" placeholder="description" required/>
                </FormGroup>
            
                <FormGroup>
                <Label>type (1: Lodging 2: Food 3: Travel 4: Other</Label>
                <Input onChange={this.updateType} value={this.state.type} type="number" name="type" id="type" placeholder=""required/>
                </FormGroup>
                <Button>Submit</Button>
             </Form>
             </Col>            
             </Container>       
        :
            <Container>
                <Card>
                    <CardTitle>{`author: ${this.props.newReimbursement.author} resolver: ${this.props.newReimbursement.resolver}`}</CardTitle>
                    <CardText>{`description: ${this.props.newReimbursement.description}`}</CardText>
                    <CardText>{`amount: ${this.props.newReimbursement.amount}`}</CardText>
                    <CardText>{`date submitted ${this.props.newReimbursement.dateSubmitted}`}</CardText>
                    <CardText>{`date resolved: ${this.props.newReimbursement.dateResolved}`}</CardText>
                    <CardText>{`status: ${this.props.newReimbursement.status}`}</CardText>
                    <CardText>{`type: ${this.props.newReimbursement.type}`}</CardText>
                </Card>
                <p>{this.props.errorMessage}</p>
            </Container>
        )
    }
}//end of class
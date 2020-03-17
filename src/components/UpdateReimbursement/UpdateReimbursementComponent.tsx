import { Reimbursement } from "../Models/Reimbursement"
import { Users } from "../Models/Users"
import React, { SyntheticEvent } from "react"
import { Container, Col, Form, FormGroup, Label, Input, Button, Card, CardTitle, CardText } from "reactstrap"
import { Redirect } from "react-router"





interface IUpdateReimbursementProps{
    updatedReimbursement:Reimbursement
    currentUser:Users
    UpdateReimbursementActionMapper:(reimbursementId:number,amount:number,dateResolved:number,description:string,resolver:number,status:number,type:number)=>void
}

interface IUpdateReimbursementState{
    reimbursementId:number,
    amount:number,
    dateResolved:number,
    description:string,
    resolver:number,
    status:number,
    type:number
}
export class UpdateReimbursementComponent extends React.Component<IUpdateReimbursementProps,IUpdateReimbursementState>{
    constructor(props:any){
        super(props)
        this.state = {
            reimbursementId:0,
            amount:0,
            dateResolved:0,
            description:'',
            resolver:this.props.currentUser.userId,
            status:0,
            type:0
        }
    }

    updateReimbursementId = (e: any) => {
        this.setState({
            reimbursementId: e.currentTarget.value
        })
    }


    updateAmount = (e: any) => {
        this.setState({
            amount: e.currentTarget.value
        })
    }


    updateDateResolved = (e: any) => {
        this.setState({
            dateResolved: e.currentTarget.value
        })
    }

    updateDescription = (e: any) => {
        this.setState({
            description: e.currentTarget.value
        })
    }

    updateResolver = (e: any) => {
        this.setState({
            resolver: e.currentTarget.value
        })
    }

    updateStatus = (e: any) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    updateType = (e: any) => {
        this.setState({
            type: e.currentTarget.value
        })
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.UpdateReimbursementActionMapper(this.state.reimbursementId, this.state.amount,this.state.dateResolved,this.state.description,this.state.resolver,this.state.status,this.state.type)
        // when we reach this point we don;t get that return value from the mapper
        // that value got hijacked and was sent to dispatch
    }


    render(){
        return(
            this.props.currentUser.username === '' || this.props.currentUser.role.roleId > 2?
            <Redirect to = '/'/>
            :
            this.props.updatedReimbursement.description === ''?
            <Container>
                <h2>Update Reimbursement</h2>
              <Col>
                <Form onSubmit = {this.submit}> 
                <FormGroup>
                <Label>reimbursementId</Label>
                <Input onChange={this.updateReimbursementId} value={this.state.reimbursementId} type="number" name="reimbursementId" id="reimbursementId" placeholder="reimbursement Id of reimbursement to update" required/>
                </FormGroup>
           
                <FormGroup>
                <Label>amount</Label>
                <Input onChange={this.updateAmount} value={this.state.amount} type="number" name="amount" id="amount" placeholder=" amount"/>
                </FormGroup>
          
             
                <FormGroup>
                <Label>date resolved</Label>
                <Input onChange={this.updateDateResolved} value={this.state.dateResolved} type="date" name="dateResolved" id="dateResolved" placeholder=" date resolved"/>
                </FormGroup>
           
                <FormGroup>
                <Label>description</Label>
                <Input onChange={this.updateDescription} value={this.state.description} type="text" name="description" id="description" placeholder="reimbursement description"/>
                </FormGroup>
             
                <FormGroup>
                <Label>resolver</Label>
                <Input onChange={this.updateResolver} value={this.state.resolver} type="number" name="resolver" id="resolver" placeholder="reimbursement resolver"/>
                </FormGroup>
        
                <FormGroup>
                <Label>status (1. Approved 2. Denied 3. Pending)</Label>
                <Input onChange={this.updateStatus} value={this.state.status} type="number" name="status" id="status" placeholder=" 1. Approved 2. Denied 3. Pending"/>
                </FormGroup>
             
                <FormGroup>
                <Label>type (1:Lodging 2: Travel 3:Food 4: Other)</Label>
                <Input onChange={this.updateType} value={this.state.type} type="number" name="type" id="type" placeholder="1:Lodging 2: Travel 3:Food 4: Other"/>
                </FormGroup>
                <Button>Submit</Button>
                </Form>
                </Col>
                </Container>     
                :
                <Card>
                <CardTitle>{`author: ${this.props.updatedReimbursement.author} resolver: ${this.props.updatedReimbursement.resolver}`}</CardTitle>
                <CardText>{`description: ${this.props.updatedReimbursement.description}`}</CardText>
                <CardText>{`amount: ${this.props.updatedReimbursement.amount}`}</CardText>
                <CardText>{`date submitted ${this.props.updatedReimbursement.dateSubmitted}`}</CardText>
                <CardText>{`date resolved: ${this.props.updatedReimbursement.dateResolved}`}</CardText>
                <CardText>{`status: ${this.props.updatedReimbursement.status}`}</CardText>
                <CardText>{`type: ${this.props.updatedReimbursement.type}`}</CardText>
                </Card>
        )
    }
}//end of class
import { Users } from "../Models/Users"
import { Reimbursement } from "../Models/Reimbursement"
import React, { SyntheticEvent } from "react"
import { FormGroup, Label, Input, Button, Col, Container } from "reactstrap"
import { Redirect } from "react-router"
import { CardDeck } from "../CardDeck/CardDeck"
import { ReimbursementInfoComponent } from "../ReimbursementInfo/ReimbursementInfo"


interface IReimbursementByStatusProps{
    currentUser:Users
    reimbursement:Reimbursement[]
    errorMessage:string
    ReimbursementByAuthorActionMapper:(statusId:number)=>void
}

interface IReimbursemenByStatusState{
    authorId:number
}

export class ReimbursementByAuthorComponent extends React.Component<IReimbursementByStatusProps,IReimbursemenByStatusState>{
    constructor(props:any){
        super(props)
        this.state =({
            authorId:0
        })
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.ReimbursementByAuthorActionMapper(this.state.authorId)
    }


    updateAuthorId = (e: any) => {
        this.setState({
            authorId: e.currentTarget.value
        })
    }
    render(){
        let userDisplay = this.props.reimbursement.map((ele)=>{
            return <ReimbursementInfoComponent reimbursement={ele} key={ele.reimbursementId}/>})
        return(
            this.props.currentUser.username === ''?
            <Redirect to = '/'/>
            :
            this.props.currentUser.role.roleId <= 2 && this.props.currentUser.userId !== this.state.authorId?
            <Redirect to = '/'/>
            :
             <>
                <form onSubmit ={this.submit}>
                <FormGroup row>
                        <Label for="userId" sm={2}>UserId</Label>
                        <Col sm={6}>
                            <Input onChange={this.updateAuthorId} value={this.state.authorId} type="number" name="statusIdInput" id="statusIdInput" placeholder="Enter Reimbursement Status Id" required />
                        </Col>
                    </FormGroup>
                    <Button color='info'>Submit</Button>                    
                </form>
                <Container>
                    <CardDeck elementsPerRow={3}>
                         {userDisplay}
                    </CardDeck>
                </Container>
                <p>{this.props.errorMessage}</p>
            </>            
         )
     }
}
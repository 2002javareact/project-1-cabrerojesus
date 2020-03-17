import React, { SyntheticEvent } from 'react'
import { FormGroup, Label, Col, Input, Button, Container } from 'reactstrap'
import { Reimbursement } from '../Models/Reimbursement'
import { Redirect } from 'react-router'
import { Users } from '../Models/Users'
import { ReimbursementInfoComponent } from '../ReimbursementInfo/ReimbursementInfo'
import { CardDeck } from '../CardDeck/CardDeck'

interface IReimbursementByStatusProps{
    currentUser:Users
    reimbursement:Reimbursement[]
    errorMessage:string
    ReimbursementByStatusActionMapper:(statusId:number)=>void
}

interface IReimbursemenByStatusState{
    statusId:number
}

export class ReimbursementByStatusComponent extends React.Component<IReimbursementByStatusProps,IReimbursemenByStatusState>{
    constructor(props:any){
        super(props)
        this.state =({
            statusId:0
        })
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.ReimbursementByStatusActionMapper(this.state.statusId)
    }


    updateStatusId = (e: any) => {
        this.setState({
            statusId: e.currentTarget.value
        })
    }
    render(){
        let userDisplay = this.props.reimbursement.map((ele)=>{
            return <ReimbursementInfoComponent reimbursement={ele} key={ele.reimbursementId}/>})
        return(
            this.props.currentUser.username === '' || this.props.currentUser.role.roleId > 2?
            <Redirect to = '/'/>
            :
            <>           
              <form onSubmit ={this.submit}>
                <FormGroup row>
                        <Label for="statusId" sm={2}>Status Id (1: Approved 2: Denied 3: Pending)</Label>
                        <Col sm={6}>
                            <Input onChange={this.updateStatusId} value={this.state.statusId} type="number" name="statusIdInput" id="statusIdInput" placeholder="Enter Reimbursement Status Id" required />
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
import { Reimbursement } from "../Models/Reimbursement";
import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";




interface IReimbursementInfoProps{
    reimbursement:Reimbursement
}
export class ReimbursementInfoComponent extends React.Component<IReimbursementInfoProps,any>{


    render(){
        return(
            <Card>
                <CardTitle>{`author: ${this.props.reimbursement.author} resolver: ${this.props.reimbursement.resolver}`}</CardTitle>
                <CardText>{`description: ${this.props.reimbursement.description}`}</CardText>
                <CardText>{`amount: ${this.props.reimbursement.amount}`}</CardText>
                <CardText>{`date submitted ${this.props.reimbursement.dateSubmitted}`}</CardText>
                <CardText>{`date resolved: ${this.props.reimbursement.dateResolved}`}</CardText>
                <CardText>{`status: ${this.props.reimbursement.status}`}</CardText>
                <CardText>{`type: ${this.props.reimbursement.type}`}</CardText>
            </Card>
        )
    }
}
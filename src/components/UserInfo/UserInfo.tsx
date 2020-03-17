  
import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'
import { Users } from '../Models/Users'
import { Redirect } from 'react-router'

interface IUserInfoProps{
    currentUser:Users
}

export class UserInfoComponent extends React.Component<IUserInfoProps,any>{


    render(){
        return(
            this.props.currentUser.username !== ''? 
            <Card>
                <CardTitle>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</CardTitle>
                <CardText>{`Username: ${this.props.currentUser.username}`}</CardText>
                <CardText>{`Role: ${this.props.currentUser.role.role}`}</CardText>
                <CardText>{`Email: ${this.props.currentUser.email}`}</CardText>
            </Card>
            :
            <Redirect to='/login'/>
        )
    }
}
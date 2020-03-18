import React, { SyntheticEvent } from 'react';
import { Users } from '../Models/Users';
import { FormGroup, Label, Col, Input, Button, Card, CardText, CardTitle } from 'reactstrap';
import { Redirect } from 'react-router';


interface IUserIdProps{
    userById:Users
    currentUser:Users
    errorMessage:string
    UserByIdActionMapper:(uId:number)=>void
}
interface IuserIdState{
    userId:number
}

export class UsersByIdComponent extends React.Component<IUserIdProps,IuserIdState>{
   constructor(props:any){
   super(props)
   this.state = ({
       userId:this.props.currentUser.userId
   })
}
    getUserId = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.UserByIdActionMapper(this.state.userId)
    }


updateUserId = (e: any) => {
    this.setState({
        userId: e.currentTarget.value
    })
}

render(){
    
    return(
        this.props.currentUser.username === ''?
        <Redirect to ='/'/>
        :
        <>           
            <form onSubmit ={this.getUserId}>
               <FormGroup row>
                    <Label for="userId" sm={2}>UserId</Label>
                     <Col sm={6}>
                         <Input onChange={this.updateUserId} value={this.state.userId} type="number" name="userIdInput" id="userIdInput" placeholder="Enter User Id" required />
                     </Col>
                </FormGroup>
                <Button color='info'>Submit</Button>
            </form>
         <Card>
                <CardTitle>{this.props.userById.firstName} {this.props.userById.lastName}</CardTitle>
                <CardText>{`Username: ${this.props.userById.username}`}</CardText>
                <CardText>{`Role: ${this.props.userById.role.role}`}</CardText>
                <CardText>{`Email: ${this.props.userById.email}`}</CardText>
        </Card>
        <p>{this.props.errorMessage}</p>
        </>
    )
}

}//end of class
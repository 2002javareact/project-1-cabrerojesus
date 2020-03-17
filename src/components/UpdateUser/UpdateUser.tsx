import React, { SyntheticEvent } from  "react"
import { Users } from "../Models/Users"
import { Col, FormGroup, Label, Input, Form, Container, Button, Card, CardTitle, CardText } from "reactstrap"
import { Redirect } from "react-router"

interface IUpdateUserProps{
    updatedUser:Users
    currentUser:Users
    UpdateUserActionMapper:(userId:number,username:string,password:string,firstName:string,lastName:string,email:string)=>void
}

interface IUpdateUserState{
    userId:number
    username:string
    password:string
    firstName:string
    lastName:string
    email:string
}
export class UpdateUserComponent extends React.Component<IUpdateUserProps,IUpdateUserState>{
    constructor(props:any){
        super(props)
        this.state = {
            userId:0,
            username:'',
            password:'',
            firstName:'',
            lastName:'',
            email:''
        }
    }

    updateUserId = (e: any) => {
        this.setState({
            userId: e.currentTarget.value
        })
    }

    updateUsername = (e: any) => {
        this.setState({
            username: e.currentTarget.value
        })
    }

    updatePassword = (e: any) => {
        this.setState({
            password: e.currentTarget.value
        })
    }

    updateFirstName = (e: any) => {
        this.setState({
            firstName: e.currentTarget.value
        })
    }

    updateLastName = (e: any) => {
        this.setState({
            lastName: e.currentTarget.value
        })
    }

    updateEmail = (e: any) => {
        this.setState({
            email: e.currentTarget.value
        })
    }

    submitUser = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.UpdateUserActionMapper(this.state.userId,this.state.username, this.state.password,this.state.firstName,this.state.lastName,this.state.email)
        // when we reach this point we don;t get that return value from the mapper
        // that value got hijacked and was sent to dispatch
    }


    render(){
        return(
            this.props.currentUser.username === '' || this.props.currentUser.role.roleId !== 1 ?
            <Redirect to = '/'/>
            :
            this.props.updatedUser.username === ''?
            <>
            <Container>
                <h2>Update User</h2>
              <Col>
                <Form onSubmit = {this.submitUser}> 
                    <FormGroup>
                    <Label>userId</Label>
                    <Input onChange={this.updateUserId} value={this.state.userId} type="number" name="userId" id="userId" placeholder="userId of user to update" required/>
                    </FormGroup>
                    
                    <FormGroup>
                    <Label>username</Label>
                    <Input onChange={this.updateUsername} value={this.state.username} type="text" name="username" id="username" placeholder="new username"/>
                    </FormGroup>
                    
                    <FormGroup>
                    <Label>password</Label>
                    <Input onChange={this.updatePassword} value={this.state.password} type="password" name="password" id="password" placeholder="new password"/>
                    </FormGroup>
                
                    <FormGroup>
                    <Label>First Name</Label>
                    <Input onChange={this.updateFirstName} value={this.state.firstName} type="text" name="firstName" id="firstName" placeholder="First Name"/>
                    </FormGroup>
            
                    <FormGroup>
                    <Label>Last Name</Label>
                    <Input onChange={this.updateLastName} value={this.state.lastName} type="text" name="lastName" id="lastName" placeholder="Last Name"/>
                    </FormGroup>
                
                    <FormGroup>
                    <Label>email</Label>
                    <Input onChange={this.updateEmail} value={this.state.email} type="email" name="email" id="email" placeholder="Email"/>
                    </FormGroup>
                    <Button>Submit</Button>
             </Form>
             </Col>
             </Container>
            
            </>        
            :
            <Card>
                <h3>Updated User</h3>
                <CardTitle>{this.props.updatedUser.firstName} {this.props.updatedUser.lastName}</CardTitle>
                <CardText>{`Username: ${this.props.updatedUser.username}`}</CardText>
                <CardText>{`Role: ${this.props.updatedUser.role.role}`}</CardText>
                <CardText>{`Email: ${this.props.updatedUser.email}`}</CardText>
             </Card>
        )
    }
}//end of class
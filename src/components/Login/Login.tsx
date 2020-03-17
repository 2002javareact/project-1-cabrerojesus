import React, { SyntheticEvent } from 'react';
import { Form, FormGroup, Label, Input, Button, Col, Container } from 'reactstrap';
import { Redirect } from 'react-router';
import { Users } from '../Models/Users';




export interface ILoginProps{
    user:Users
    errorMessage:string
    LoginActionMapper:(u:string,p:string)=>void
}

export interface ILoginState {
    username: string
    password: string
}

export class LoginComponent extends React.Component<ILoginProps, ILoginState>{
    constructor(props: any) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }


    submitLogin = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.LoginActionMapper(this.state.username, this.state.password)
        // when we reach this point we don;t get that return value from the mapper
        // that value got hijacked and was sent to dispatch
        }

  

    updateUser = (e: any) => {
        this.setState({
            username: e.currentTarget.value
        })
    }
    updatePassword = (e: any) => {
        this.setState({
            password: e.currentTarget.value
        })
    }
    
    render() {
        return (           
            this.props.user.firstName? 
            <Redirect to='/homepage'/>
            :
            <>
    <Container className="login">
        <h2>Sign In</h2>
        <Form onSubmit={this.submitLogin}>
          <Col>
            <FormGroup>
              <Label>username</Label>
              <Input onChange={this.updateUser} value={this.state.username} type="text" name="username" id="username" placeholder="your username" required />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input onChange={this.updatePassword} value={this.state.password} type="password" name="password" id="password" placeholder="your password" required />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
                <p>{this.props.errorMessage}</p>
            </>
        )
    }
}
import React, { SyntheticEvent } from 'react';
import { Users } from '../Models/Users';
import { FormGroup, Label, Col, Input, Button, Card, CardBody, CardText } from 'reactstrap';
import { FetchUserById } from './FetchUserById';


interface IUserId{
    userId:number|undefined
    user:Users|undefined
    errorMessage:string
}


export class UsersByIdComponent extends React.Component<any,IUserId>{
    constructor(props:any){
        super(props)
        this.state = {
            userId: undefined,
            user: undefined,
            errorMessage:''
        }
    }


    getUserId = async (e: SyntheticEvent) => {
        e.preventDefault()
        try{
            let user = await FetchUserById(this.state.userId)
            this.setState({
                user
            })
            console.log(user)
        }catch(e){
            if (e.status === 404) {
                this.setState({
                errorMessage: e.message
            })
        }
            else{
                this.setState({
                    errorMessage:e.message
                })
            }               
        }
    }


updateUserId = (e: any) => {
    this.setState({
        userId: e.currentTarget.value
    })
}


render(){
    return(
        <>
            <form onSubmit ={this.getUserId}>
               <FormGroup row>
                    <Label for="userId" sm={2}>UserId</Label>
                     <Col sm={6}>
                         <Input onChange={this.updateUserId} value={this.state.userId} type="text" name="userIdInput" id="userIdInput" placeholder="Enter User Id" required />
                     </Col>
                </FormGroup>
                <Button color='info'>Submit</Button>
            </form>
            <FormGroup row>
                    <Card>
                        <CardBody>
                            <CardText>{this.state.user}</CardText>
                        </CardBody>
                    </Card>
            </FormGroup>
            <p>{this.state.errorMessage}</p>
        </>
    )
}

}//end of class
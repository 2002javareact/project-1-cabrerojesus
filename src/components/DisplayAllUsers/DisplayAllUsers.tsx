import React from 'react'
import { Users } from '../Models//Users';
import { CardDeck } from '../CardDeck/CardDeck';
import { UserInfoComponent } from '../UserInfo/UserInfo';
import { Redirect } from 'react-router';
import { Container } from 'reactstrap';

interface IViewAllUsersProps {
    currentUser:Users
    allUsers:Users[]
    errorMessage:string
    getAllUsersActionMapper: ()=>void
}


export class ViewAllUsersComponent extends React.Component<IViewAllUsersProps,any>{

    // runs when component starts to exist
    componentDidMount(){
        // check to see if we already have users (redux store)
        if(this.props.allUsers.length !== 0){
            //return
            //make sure they are admin
        }else if(this.props.currentUser.role.roleId <= 2){            
            this.props.getAllUsersActionMapper()
        }else {
            //they weren't admin so do nothing
            //return
        }
    }

    render(){
        //turn array of users into display components
        let userDisplay = this.props.allUsers.map((ele)=>{
            return <UserInfoComponent currentUser={ele} key={ele.userId}/>
        })
        return(
            this.props.currentUser.role.roleId <= 2?
            <>
            <Container>
                <CardDeck elementsPerRow={4}>
                    {userDisplay}
                </CardDeck>
            </Container>
            <p>{this.props.errorMessage}</p>
            </>
            :
            <Redirect to='/'/>
        )
    }
}
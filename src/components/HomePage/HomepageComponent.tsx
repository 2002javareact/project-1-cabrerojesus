import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import { Redirect } from 'react-router';

export class HomepageComponent extends React.Component<any,any>{





    render(){
        return (
           
            <ButtonGroup>
            <Button>Update User</Button>
            <Button>Find User By User Id</Button>
            <Button>Display All Users</Button>
          </ButtonGroup>

        )
    }

}
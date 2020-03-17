import { useState } from "react";
import React from "react";
import { NavbarToggler, Navbar, Collapse, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import { IState } from "../../Reducers";
import { connect } from "react-redux";

//this is a function component
const NBUserComponent = (props:any) => {
    // useState is a hook
    // hooks are special functions provided by react for doing specific things
    // useState allows us to build a varibale that react keeps track of like state
    // hooks are only available in functions
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
     <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Actions
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                 <Link to='/users/id'>Find User By Id</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to='/reimbursement/author'>Find Reimbursement by Author</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to='/new/reimbursement'>Submit New Reimbursement</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state:IState) =>{
  return {
      currentUser:state.login.user,
      errorMessage:state.login.errorMessage
  }
}

export default connect(mapStateToProps)(NBUserComponent)
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from 'reactstrap';

  
  class AppNavbar extends React.Component {
    state = {
        isOpen: false,
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
      return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
              <NavbarBrand href="/">Shopping List</NavbarBrand>
              <NavbarToggler onClick={this.toggle}></NavbarToggler>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="https://github.com">Github</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
        </div>
      )
    }
  }
  
export default AppNavbar;

import { Component, PropTypes } from 'react';
var rbs = require('react-bootstrap'),
Navbar = rbs.Navbar,
Nav = rbs.Nav,
NavItem = rbs.NavItem,
NavDropdown = rbs.NavDropdown,
MenuItem = rbs.MenuItem
;

export default class ResumeHeader extends Component {
  render() {

    return (
      <div>
        <Navbar fixedTop>
          <div className="nav-wrapper">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Ian Sellar</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="#summary">Professional Summary</NavItem>
              <NavItem eventKey={2} href="#skills">Skills</NavItem>
              <NavItem eventKey={3} href="#history">Work History</NavItem>
              <NavItem eventKey={4} href="#education">Education</NavItem>
              <NavItem eventKey={5} href="#projects">Projects</NavItem>
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}

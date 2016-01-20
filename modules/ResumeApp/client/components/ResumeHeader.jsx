import { Component, PropTypes } from 'react';
var rbs = require('react-bootstrap'),
Navbar = rbs.Navbar,
Nav = rbs.Nav,
NavItem = rbs.NavItem,
NavDropdown = rbs.NavDropdown,
MenuItem = rbs.MenuItem
;

export default class ResumeHeader extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    sections: PropTypes.array.isRequired
  };

  render() {

    var NavItems = this.props.sections.map(function(section, key){
      return (<NavItem eventKey={key} href={"#" + section.refname}>{section.name}</NavItem>);
    });

    return (
      <div>
        <Navbar fixedTop>
          <div className="nav-wrapper">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">{this.props.name}</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              {NavItems}
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}

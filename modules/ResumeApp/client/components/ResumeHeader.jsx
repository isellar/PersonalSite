import { Component, PropTypes } from 'react';
import ResumeInfoItem  from './ResumeInfoItem';

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
    sections: PropTypes.array.isRequired,
    info: PropTypes.array
  };

  render() {
    var self = this;
    var NavItems = this.props.sections.map(function(section, key){
      return (<NavItem key={key} href={"#" + section.refname}>{section.name}</NavItem>);
    });
    var info = this.props.info ? this.props.info : [];

    return (
        <Navbar fixedTop inverse className="row">
          <div className="nav-wrapper">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">{this.props.name}</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                {NavItems}
              </Nav>
              <Nav pullRight>
                {this.props.info.map(function(item, key){
                  return (<ResumeInfoItem item={item} last={key === self.props.info.length -1} />);
                })}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
    );
  }
}

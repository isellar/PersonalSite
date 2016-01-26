import { Component, PropTypes } from 'react';
import Icon from './Icon';

var rbs = require('react-bootstrap'),
Navbar = rbs.Navbar;

export default class ResumeInfoItem extends Component {
  static propTypes = {
    item: PropTypes.string.isRequired,
    last: PropTypes.bool.isRequired
  };

  validateEmail(email) 
  {
    //http://stackoverflow.com/a/9204568/3897302
    return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
  }

  validatePhone(phone){
    if(phone)
      return phone.match(/^\+?\(?([0-9]{3})?[-.() ]*([0-9]{3})[-.() ]*([0-9]{4})$/);
    else
      return false;
  }

  stripPhone(phone){
    return phone.replace(/\D/g,'');
  }

  procInfo(infoitem, key){
    var addon = this.props.last ? null : (<span>&nbsp;•&nbsp;</span>);
    var item;
    if(this.validateEmail(infoitem)){
      item = (<Navbar.Brand><a href={"mailto:" + infoitem}>{infoitem}</a>{addon}</Navbar.Brand>);
    }
    else if(this.validatePhone(infoitem)){
      item = (<Navbar.Brand><a href={"tel:+" + this.stripPhone(infoitem)}>{infoitem}</a>{addon}</Navbar.Brand>)
    }
    else{
      item = (<Navbar.Brand>{infoitem}{addon}</Navbar.Brand>);
    }

    return item;
  }

  render() {
    return this.procInfo(this.props.item);
  }
}

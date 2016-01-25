import { Component, PropTypes } from 'react';
var rbs = require('react-bootstrap')
;

export default class ResumeFooter extends Component {
  static propTypes = {
    info: PropTypes.object
  };

  render() {
    return (
      <div id="banner-info">
        <span> 
          {this.props.info}
        </span>
      </div>
    );
  }
}

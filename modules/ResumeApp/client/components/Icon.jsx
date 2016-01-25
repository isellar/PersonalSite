import { Component, PropTypes } from 'react';

export default class Icon extends Component {
  static propTypes = {
    faicon: PropTypes.string.isRequired
  };

  render() {
    return (
      <i className = {"fa fa-" + this.props.faicon}></i>
    );
  }
}
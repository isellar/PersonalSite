import { Component, PropTypes } from 'react';

export default class ResumeApp extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  };

  componentWillMount() {
    require('./css/ResumeApp.import.css');
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

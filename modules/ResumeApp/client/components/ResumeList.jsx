import { Component, PropTypes } from 'react';
import ResumeSection from './ResumeSection';

export default class PlayerList extends Component {
  static propTypes = {
    sections: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className="list-wrapper">
        {this.props.sections.map(section => <ResumeSection key={section._id} section={section} />)}
      </div>
    );
  }
}

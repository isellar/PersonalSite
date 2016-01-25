import { Component, PropTypes } from 'react';
import ResumeSection from './ResumeSection';

export default class ResumeList extends Component {
  static propTypes = {
    sections: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className="list-wrapper col-lg-12">
        {this.props.sections.map(section => <ResumeSection key={section._id} section={section} />)}
      </div>
    );
  }
}

import { Component } from 'react';
import ReactMixin from 'react-mixin';

import ResumeHeader from './components/ResumeHeader';
import ResumeList from './components/ResumeList';
import ResumeFooter  from './components/ResumeFooter';

import Resume from 'ResumeApp/collections/Resume';

var rbs = require('react-bootstrap'),
Panel = rbs.Panel;

@ReactMixin.decorate(ReactMeteorData)
export default class ResumeMain extends Component {

  state = {
    hideCompleted: false
  };

  getMeteorData() {
    Meteor.subscribe('resume');

    const resume = Resume.findOne({"status": "locked"});

    return {
      resume
    };
  }

  render() {
    var resume = this.data.resume;

    if (!resume) {
      const title = (
        <h3>No Resume Found</h3>
      );
      return (
        <Panel header={title} bsStyle="danger">
          Could not find a default resume.
        </Panel>
      );
    }

    return (
        <div>
          <ResumeHeader name={resume.name} sections={resume.sections.map(function (section) { return {name: section.name, refname: section.refname}; })}/>
          <div className="container main">
            <ResumeList sections={this.data.resume.sections} />
          </div>
          <ResumeFooter />
        </div>
    );
  }
};

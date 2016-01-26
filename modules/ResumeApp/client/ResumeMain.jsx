import { Component } from 'react';
import ReactMixin from 'react-mixin';

import ResumeHeader from './components/ResumeHeader';
import ResumeList from './components/ResumeList'

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
      return(<div></div>);
    }
    console.log(resume);

    return (
        <div>
          <ResumeHeader info={resume.infoitems} name={resume.name} sections={resume.sections.map(function (section) { return {name: section.name, refname: section.refname}; })}/>
          <div className="container main">
            <ResumeList sections={this.data.resume.sections} />
          </div>
        </div>
    );
  }
};

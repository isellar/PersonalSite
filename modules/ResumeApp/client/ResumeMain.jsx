import { Component } from 'react';
import ReactMixin from 'react-mixin';

import ResumeHeader from './components/ResumeHeader';
import ResumeList from './components/ResumeList';
import ResumeFooter  from './components/ResumeFooter';

import Sections from 'ResumeApp/collections/Sections';

@ReactMixin.decorate(ReactMeteorData)
export default class ResumeMain extends Component {

  state = {
    hideCompleted: false
  };

  getMeteorData() {
    Meteor.subscribe('sections');

    const sections = Sections.find().fetch();

    return {
      sections
    };
  }

  render() {
    if (!this.data.sections) {
      console.log(this.data.sections);
      return null;
    }

    return (
        <div>
          <ResumeHeader />
          <div className="container main">
            <ResumeList sections={this.data.sections} />
          </div>
          <ResumeFooter />
        </div>
    );
  }
};

// jshint esnext:true

import Resume from 'ResumeApp/collections/Resume';
import MyResume from 'ResumeApp/collections/MyResume'; 

Meteor.startup(function () {
	var existingResume = Resume.findOne({name: MyResume.name, status: "locked"});
	if(!existingResume){
		console.warn("No resumes found, adding");
		Resume.insert(MyResume);
	}
	else if(existingResume.version < MyResume.version){
		console.warn("Newer version of resume, updating");
		Resume.update({_id: existingResume._id}, {$set: {status: "archive"}});
		Resume.insert(MyResume);
	}
});

// This code only runs on the server
Meteor.publish('resume', function () {
  return Resume.find();
});

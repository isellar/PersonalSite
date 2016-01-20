// jshint esnext:true

import Players from 'ResumeApp/collections/Sections';

Meteor.methods({
  /*addPlayer: function (name) {
    // Make sure the user is logged in before inserting a player
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Players.insert({
      name: name,
      createdAt: new Date(),
      creator: Meteor.userId()
    });
  },
  deletePlayer: function (playerId) {
    //var player = Players.findOne(playerId);
    if (player.private && task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Players.remove(playerId);
  }*/
});

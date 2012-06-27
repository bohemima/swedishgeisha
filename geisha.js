Chatrooms = new Meteor.Collection("chatrooms");
Messages = new Meteor.Collection("messages");


if (Meteor.is_client) {
  Template.room.messages = function (){
    return Messages.find({}, {sort: { timestamp: 1 }});
  };

  Template.room.events = {
    'click button': function() {
      Messages.insert({author: $("#user").val(), "text": $("#msg").val(), "timestamp":new Date() });
      $("#msg").val('').focus();
    }
  }
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    Messages.remove({});
    // code to run on server at startup
  });
}

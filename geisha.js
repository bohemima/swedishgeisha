Chatrooms = new Meteor.Collection("chatrooms");
Messages = new Meteor.Collection("messages");


if (Meteor.is_client) {
  Template.hello.greeting = function () {
    return "Welcome to geisha.";
  };

  Template.room.messages = function (){
    return Messages.find({});
  };

  Template.room.events = {
    'click button': function() {
      Messages.insert({author: $("#user").val(), "text": $("#msg").val() });
      $("#msg").val('').focus();
    }
  }
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

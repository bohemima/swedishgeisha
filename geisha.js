Chatrooms = new Meteor.Collection("chatrooms");
Messages = new Meteor.Collection("messages");


if (Meteor.is_client) {
  Template.room.messages = function (){
    return Messages.find({}, {sort: { timestamp: 1 }});
  };

  Template.room.events = {
    'click button': function() {
      var user = $("#user").val(),
        msg = $("#msg").val();

      if (msg.length == 0 || user.length == 0) {
        alert('Men skriv något tard');
        return;
      }

      Messages.insert({author: user, "text": msg, "timestamp":new Date() });
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

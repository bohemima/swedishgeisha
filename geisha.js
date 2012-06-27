if (Meteor.is_client) {

  Template.main.logged_in = function () {
    return !!Session.get("name");
  };

  Template.main.events = {
    'click button': function () {
      var n = $('#user-name').val();
      if(!n) { return ; }
      Session.set("name", n);
    }
  };

  Template.room.messages = function (){
    return Messages.find({}, {sort: { timestamp: 1 }});
  };

  Template.room.events = {
    'click button': function() {
      var msg = $("#msg").val();

      if (msg.length == 0 || user.length == 0) {
        alert('Men skriv något tard');
        return;
      }

      Messages.insert({author: Session.get("name"), "text": msg, "timestamp":new Date() });
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

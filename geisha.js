if (Meteor.is_client) {

  Template.main.logged_in = function () {
    return !!Session.get("name");
  };

  Template.main.events = {
    'submit form': function (e) {
      e.preventDefault();
      var n = $('#user-name').val();
      if(!n) { return ; }
      Session.set("name", n);
    }
  };

  Template.room.messages = function (){
    return Messages.find({}, {sort: { timestamp: 1 }});
  };

  Template.room.rendered = function () {
    var id = '.time-' + this._id;
    Meteor.defer(function () {
      $(id).filter(':not([data-time="time"])').attr('data-time', 'time').timeago();
    });
  };

  Template.room.events = {
    'click button': function(e) {
      e.preventDefault();
      var msg = $("#msg").val();

      if (msg.length == 0) {
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

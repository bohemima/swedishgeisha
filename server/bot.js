var query = Messages.find({});

var handle = query.observe({
  added: function(message) {
    console.log(message);
  }
});

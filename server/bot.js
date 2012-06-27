var query = Messages.find({});

var handle = query.observe({
  added: function(message) {
    if (!message.is_bot) {
      Messages.insert({ author: 'Ichimitsu', timestamp: new Date(), text: 'hi, you are so cute!', is_bot: true }) 
    }
  }
});

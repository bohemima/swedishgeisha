var query = Messages.find({});

var handle = query.observe({
  added: function(message) {
    if (!message.is_bot) {
	var n = Math.floor(Math.random()*5);
	var message = null;
	switch (n) {
	case 1:
	    message = 'Tihi, your shirt is untucked. *giggles*';
	case 2:
	    message = 'Anata wa baka desu ka.';
	case 3:
	    message = 'Kore wa baka desu ka.';
	default:
	    message = 'Hi! You are so cute!';
	}

	Messages.insert({ author: 'Ichimitsu', timestamp: new Date(), text: message+"n: "+n, is_bot: true }) ;
    }
  }
});

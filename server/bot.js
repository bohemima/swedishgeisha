var query = Messages.find({});

var handle = query.observe({
  added: function(message) {
    if (!message.is_bot) {
	var n = Math.floor(Math.random()*5);
	var message = null;
//	setTimeout(function() {
	    switch (n) {
	    case 0:
		message = 'Tihi, your shirt is untucked. *giggles*';
		break;
	    case 1:
		message = 'Anata wa baka desu ka.';
		break;
	    case 2:
		message = 'Kore wa baka desu ka.';
		break;
	    case 3:
		message = 'Trololololololololololololololol';
		break;
	    case 4:
		message = 'This is a easter egg, that is in summer';
		break;
	    default:
		message = 'Hi! You are so cute!';
		break;
	    }

	    Messages.insert({ author: 'Ichimitsu', timestamp: new Date(), text: message, is_bot: true }) ;
//	}, n*1000);
    }
  }
});

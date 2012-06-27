var query = Messages.find({});

var handle = query.observe({
  added: function(message) {
    var doTalk = Math.floor(Math.random()*4);
      if (!message.is_bot && (doTalk % 3 == 0)) {
	var n = Math.floor(Math.random()*12);
	var message = null;
	var fiber = Fiber(function() {
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
			message = 'This is an easter egg, that is in summer (okay, grammarnazi...)';
			break;
	            case 5:
		        message = 'Fjåååårtååååån!';
		        break;
	            case 6:
		        message = 'Du kan va!';
		        break;
	            case 7:
		        message = 'Jag känner en båååt!';
		        break;
  	            case 8:
		        message = 'Micke är dum :( Han sitter och dödar mina konversationsmöjligheter :(';
		        break;
	            case 9:
		        message = 'Humpti dumpti satt on a wall';
		        break;
	            case 10:
		        message = 'Mesa horni, mesa looove you looooong time, only 5 dolla';
		        break;
	            case 11:
		        message = 'Mesa sucki sucki, 20 dolla, mesa love you loooooong time';
		        break;
		    default:
			message = 'Hi! You are so cute!';
			break;
		}

		Messages.insert({ author: 'Ichimitsu', timestamp: new Date(), text: message, is_bot: true }) ;
	});

	Meteor.setTimeout(function() { fiber.run(); }, n*1000);
    }
  }
});

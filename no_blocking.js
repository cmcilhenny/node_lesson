// The following is a set of code sniptes that "block". Take a moment to figure out the following: 
	// Why are they blocking? 
	// Rewrite them to be non-blocking


// example 1. Classic example (ie. basically every example you'll find on the internet)
	var contents = fs.readFileSync('/etc/hosts');
	console.log(contents);
	console.log('Doing something else');

// example 2. An example that looks kinda what we've been doing with Ruby.
var post = db.query("select * from posts where id = 1");
doSomethingWithPost(post)
doSomethingElse();

// 

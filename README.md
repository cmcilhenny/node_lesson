node_lesson
===========

notes for a class lesson on Node research and blocking vs. non-blocking. 

What is Node?
===========

### nodejs.org definition

"Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices." 

### Some other definitions

=> Node allows you to build scalable network applications using Javascript on the server-side.

### Helpful snipits of info
	* Ryan Dahl is node's origin author
	* Node was itially released in May of 2009
	* Node is written in C, C++, JavaScript
	* Visit the node website at nodejs.org

### Node in the real world

=> A few good examples of Node:

	* fast file upload (like Flckr)
	* real-time data apps (like HipChat)
	* websocket server — keeping an open connection with a server, 	  which is distinct from HTTP.

=> Actual companies/sites

	* PayPal website(front-end)
	* Walmart (mobile apps)
	* eHarmony
	* Washington Post
	* Atom.io 

=> A few good things to note that Node isn't:

	* a web framework
	* multi-threaded

### Blocking vs. Non-Blocking
So, Node applications are designed to maximize throughput and efficiency, using non-blocking I/O and asynchronous events.

* What does the above sentence mean? 
* What are non-blocking I/O and asynchronous events?

		I/O: input/output

		Blocking: 
		2 people go grocery shopping together with one list. The first takes the list with them to find an item and leaves the second without the list and without the ability to do anything until the 1st comes back. 
		
		Non-Blocking:

		Asynchonous:

### Non-Blocking Exercises

yah javascript!


Resources used
===========
* JavaScript.is(sexy): http://javascriptissexy.com/learn-node-js-completely-and-with-confidence/
* The Node Beginner Book by Manuel Kiessling
*  Professional Node.js: Building Javascript Based Scalable Software
*  Node.js Wikipedia: http://en.wikipedia.org/wiki/Node.js
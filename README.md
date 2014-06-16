node_lesson
===========

notes for a class lesson on Node research and blocking vs. non-blocking. 

What is Node?
===========

### nodejs.org definition

"Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices." 

### Some other definitions

=> Node allows you to build scalable network applications using Javascript on the server-side.
=> Node is a command line interpreter for JavaScript.

### Helpful snipits of info
	* Ryan Dahl is node's origin author
	* Node was itially released in May of 2009
	* Node is written in C, C++, JavaScript
	* Visit the node website at nodejs.org

### Node in the real world

=> A few good uses cases for Node:

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

Before we get into definitions, we already have some experience with this basic concept of blocking. Our &lt;script&gt; tags in html are a great example of this. If organized in certain ways, javascript files can block the rendering of a page. It is because of blocking that we always put our script tags last — after links to CSS and insome cases, after html.

######I/O: 
input/output

######Blocking: 
Imagine you're operating the cash register in a bakery. You handle your customers sequentially and synchronously, like this:

* Take order
* Tell baker to bake the bread
* Wait until bread is baked
* Charge money
* Deliver bread
* GOTO first -- next customer
		
######Non-Blocking:
Given the above scenario, a "non-blocking" implimentation is


* Take order
* Tell baker to bake the bread, and notify you when finished. When notified:
	* Charge money
	* Deliver bread
* GOTO 1 -- next customer

In the second scenario, you can more efficiently handle requests for bread because, instead of waiting for bread to be ready before handling the next customer, you can start handling the next customer while waiting for bread. 


######Asynchonous:
Asynchronous code doesn’t have to wait – your program can continue to run. You do this to keep your site or app responsive, reducing waiting time for the user (ie. non-blocking).


### Non-Blocking Exercises

yah javascript! See attached files.




===
Resources used
===========
* JavaScript.is(sexy): http://javascriptissexy.com/learn-node-js-completely-and-with-confidence/
* The Node Beginner Book by Manuel Kiessling
*  Professional Node.js: Building Javascript Based Scalable Software
*  Node.js Wikipedia: http://en.wikipedia.org/wiki/Node.js
*  Node presentation pdf: http://s3.amazonaws.com/four.livejournal/20091117/jsconf.pdf
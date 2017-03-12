# synchronous-dispatcher

This is a synchronus dispatcher that enables you to dispatch application-wide events everywhere in your app and handle them
everywhere inside your app. Simple is beautiful - and usually works better as well! Goodbye Redux and other overly complicated
"architectures", "paradigms", "frameworks" and other such brain farts. Dispatch wherever you want. Handle wherever you like. For fast coding. Just forget
all academic theorizations for a second and try it out - You'll notice that this just works. Use it with Angular or React or whatever
you like. Make no mistake: It just works. I've been around for quite a while and I know what I am talking about.

## Installation

npm install synchronous-dispatcher

## Usage

When you want to dispatch an event somewhere in your app, type:

dispatch('MY-EVENT', someObject);

And when you want to catch the event:

handle('MY-EVENT', function(item) {
  console.log("I catch the event here..');
  console.log(item);
});

Or:

handle('MY-EVENT', theEventHandlerFunctionHere);

## License

Apache 2.0

## Author

Heikki Kupiainen / Oppikone


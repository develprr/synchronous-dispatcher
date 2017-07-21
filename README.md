# synchronous-dispatcher

This is a synchronous dispatcher that enables you to dispatch application-wide events everywhere in your app and handle them
everywhere inside your app. Simple is beautiful - and usually works better as well! This is a framework for no-nonsense fast coding. Just forget
all academic theorizations for a second and try it out - You'll notice that this just works. Use it with Angular or React or whatever you like.

If you like to know more about Synchronous Dispatcher, please visit the [blog post](http://www.oppikone.fi/blog/introducing-synchronous-dispatcher.html) or check out a [sample React App](https://github.com/develprr/synchronous-dispatcher-demo) using Synchronous Dispatcher.

## Installation

npm install synchronous-dispatcher

## Usage

When you want to dispatch an event somewhere in your app:


```js
import { dispatch } from 'synchronous-dispatcher';

dispatch('MY-EVENT', someObject);

```

And when you want to catch the event:


```js

import { handle } from 'synchronous-dispatcher';

handle('MY-EVENT', function(item) {
  console.log('I catch the event here..');
  console.log(item);
});

```

You can also register a handler under specified ID. It is useful
when you want to explicitely emove that handler later:

```js

handle('MY-EVENT', 'MANAGER', function(item) {
  console.log('I catch the event here..');
  console.log(item);
});

```

Note that if you define a new handler for 'MY-EVENT' under same ID 'MANAGER',
your new handler will override the previous one. If you want one event to launch many handlers,
you must define each handler under different ID!

When you want to kill a certain handler for a certain event, in this case a handler with id 'MANAGER' for 'MY-EVENT':

```js

import { unhandle } from 'synchronous-dispatcher';

unhandle('MY-EVENT', 'MANAGER')

```


## License

Apache 2.0

## Author

Heikki Kupiainen / Oppikone

## Tutorial

Please visit the [blog post](http://www.oppikone.fi/blog/introducing-synchronous-dispatcher.html) for tutorial.

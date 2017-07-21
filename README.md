# synchronous-dispatcher

This is a synchronous dispatcher that enables you to dispatch application-wide events everywhere in your app and handle them
everywhere inside your app. Simple is beautiful - and usually works better as well! . For fast coding. Just forget
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

When you want to remove an event from event space alltogether:

```js

import { unhandle } from 'synchronous-dispatcher';

unhandle('MY-EVENT')

```


## License

Apache 2.0

## Author

Heikki Kupiainen / Oppikone

## Tutorial


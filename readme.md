# fromeventsource

Install with `npm install fromeventsource`

Turns EventSource into and readable object stream. It expects each message to be
valid JSON.

It disables the reconnection of EventSource and only supports unnamed messages
right now (`onmessage`). However PRs to enable this functionality are welcome.



## usage

```js
var fromEventSource = require('fromeventsource')

fromEventSource(new EventSource('/sse'))
  .pipe(process)
```

or just pass in a string:

```js
var fromEventSource = require('fromeventsource')

fromEventSource('/sse')
  .pipe(process)
```
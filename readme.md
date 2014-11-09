# fromeventsource

Install with `npm install fromeventsource`

It disables the reconnection of EventSource and only supports unnamed messages
right now (`onmessage`). However PRs to enable this functionality are welcome.

## usage

```js
var fromEventSource = require('fromeventsource')

fromEventSource(new EventSource('/sse'))
  .pipe(process)
```
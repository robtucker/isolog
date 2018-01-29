# isolog

Typescript logger.

### Usage

```bash
npm install --save-dev isolog
```

You can import a logger instance:

```typescript
import { logger } from "isolog";

logger.debug('debug');
logger.info('info');
logger.warn('warn');
logger.error('error');
logger.critical('critical');
```

Or you can use free functions

```typescript
import { debug, info, warn, error, critical } from 'isolog'
```

### Handlers


Custom handlers can be added to the logger instance using the addHandler method:

```typescript
import { logger, ConsoleHandler } from 'isolog'

const customHandler = new ConsoleHandler();

logger.addHandler(customHandler)
```


It's also possible to construct a new Isolog instance with custom handlers as arguments to the constructor.

```typescript
import { Isolog, ConsoleHandler } from 'isolog'

const customHandler = new ConsoleHandler();

const loggerWithHandler = new Isolog(customHandler)
```

Each handler accepts a configration object which is unique to the handler but will typically contain a LOG_LEVEL property. If no LOG_LEVEL is provided then it will default to 100;

Data will only be logged if the method invoked exceeds the level set on the handler.

The default log levels are:

```typescript
{
    debug: 100,
    info: 200,
    warn: 300,
    error: 400,
    critical: 500
}
```

It's possible to override these on a per handler basis by passing in a LEVELS object as a property on the configuration object.

###Custom handlers

A valid handler must extend the BaseHandler and implement the handle method: `abstract handle (data: any[]): void`

The handle method accepts an array of args. The args come as an array, because there is an unknown number of them, including potentially 0.

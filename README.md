###Installation

```
npm install -save-dev isolog
```

###Usage

First one or more handlers must be added to the Logger. 

```
import { Logger, ConsoleHandler } from isolog;

config = {LOG_LEVEL: 200};

var handler = new ConsoleHandler(config);

Logger.addHandler(handler);

```

Each handler accepts a configration object which will typically contain a LOG_LEVEL property. If no LOG_LEVEL is provided then it will default to 100;

Then one of the log methods can be invoked:

```
Logger.debug('foo');
Logger.info('foo');
Logger.warn('foo');
Logger.error('foo');
Logger.critical('foo');
```

Data will only be logged if the method invoked exceeds the level set on the handler.

The default log levels are:

```
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

A valid handler must extend the BaseHandler and implement the handle method: `abstract handle (data: any): void`

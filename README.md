###Installation

```
npm install --save-dev isolog
```

###Usage

First one or more handlers must be added to the Logger. 

```
import { Logger, ConsoleHandler } from "isolog";

var config = {LOG_LEVEL: 200};

var handler = new ConsoleHandler(config);

Logger.addHandler(handler);

```

Each handler accepts a configration object which will typically contain a LOG_LEVEL property. If no LOG_LEVEL is provided then it will default to 100;

Subsequent modules can simply import the logger and invoke one of the 5 methods:

```
import { Logger } from "isolog";

Logger.debug('debug');
Logger.info('info');
Logger.warn('warn');
Logger.error('error');
Logger.critical('critical');
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

import * as colors from "colors";
Object.keys(colors);

import { Logger, ConsoleHandler } from "../src";

var config = {LOG_LEVEL: 100};

var handler = new ConsoleHandler(config);

Logger.addHandler(handler);

Logger.debug('debug'.magenta);
Logger.info('info'.magenta);
Logger.warn('warn'.magenta);
Logger.error('error'.magenta);
Logger.critical('critical'.magenta);

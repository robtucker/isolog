import { LogLevels, LogLevel } from "./log-levels"

export interface HandlerConfig {
    LOG_LEVEL: LogLevel
    LEVELS?: LogLevels
}


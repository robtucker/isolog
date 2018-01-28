export type LogLevel = 100 | 200 | 300 | 400 | 500

export interface LogLevels {
    debug: LogLevel,
    info: LogLevel,
    warn: LogLevel,
    error: LogLevel,
    critical: LogLevel
}

export type Level = keyof LogLevels


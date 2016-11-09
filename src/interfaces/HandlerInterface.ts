export interface HandlerInterface {

    /**
     * Required handle method 
     * Defines how the handler will actually log the data
     * Specific to each handler
     * 
     */
    handle(data:any): void;

    /**
     * Generic log method, not specific to any handler
     * This method checks the levels and invokes the handle method
     */
    log (data: any, level: string): void;

}
import { bean, log } from "../src/decorators";
import LogFactory from "../src/factorys/log-factorary.class";
const tracer = require('tracer')

export default class CustomLog extends LogFactory {


    private logger = tracer.colorConsole({
        level: 'info',
        format: "[{{title}}] {{timestamp}} {{file}}:{{line}} {{message}}",
        dateformat: "HH:MM:ss.l",
        stackIndex: 2,
        preprocess: (data:any) => {
            data.title = data.title.toUpperCase()
        }
    });

    @bean 
    public createLog():CustomLog{
        return new CustomLog()
    }

    public log(message?:string, ...optionalParams:any){
        this.logger.info(message, ...optionalParams)
    }
}
import { bean } from "../decorators";
import LogFactory from "../factorys/log-factorary.class";
 export default class LogDefault extends LogFactory {

    @bean
    createLog(){
        return new LogDefault()
    }
    public log(message:string, ...optionalParams:any){
        console.log(message, optionalParams)

    }
 }
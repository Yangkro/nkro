import expres from 'express'
import ServerFactory from "../factorys/server-factory.class";
import { bean, log } from '../decorators/index'
import { initRourer } from '../decorators/route.decorators';

export default class ExpressServer extends ServerFactory{

    @bean
    public createServer():ServerFactory{
        return new ExpressServer()
    }

    public setMiddleware(middleware:any){
        this.middleware.push(middleware)
    }

    public start(port: number, callback: () => void): void {
        const app  = expres()
        this.middleware.forEach((middleware:any)=>{
            app.use(middleware)
        })
        initRourer(app)
        app.listen(port, callback)
    }
}
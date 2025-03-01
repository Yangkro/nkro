export default abstract class ServerFactory{
    protected middleware: any[] = []

    public abstract setMiddleware(middleware:any):void

    public abstract start(port:number, callback:()=>void):void
}
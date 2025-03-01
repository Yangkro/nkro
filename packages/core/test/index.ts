import ServerFactory from "../src/factorys/server-factory.class";

import { app, log, autoware } from "../src/decorators/index";

@app
class Main {


    @autoware
    public server!: ServerFactory

    public main(){
        this.server.start(8080,()=>{
            process.stdout.write('server is running \n http://localhost:8080')
        })

    }
}
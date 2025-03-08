import { createInstance } from "../src/decorators";
import { get } from "../src/decorators/route.decorators";
@createInstance
class FirstPage {

    @get('/')
    public index(req: any, res:any){
        res.send('Hello World')
    }
}
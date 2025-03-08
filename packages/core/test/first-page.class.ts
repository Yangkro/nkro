import { createInstance } from "../src/decorators";
import { get } from "../src/decorators/route.decorators";
@createInstance
class FirstPage {

    @get('/hello')
    public index(req: any, res:any){
        res.send('Hello World')
    }
}

export default FirstPage
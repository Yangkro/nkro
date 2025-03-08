import { createInstance, before, after, log } from "../src/decorators";
import FirstPage from "./first-page.class";

@createInstance
export class AopTest {
    @before(FirstPage, 'index')
    public beforeIndex(){
        log('before index')
    }

    @after(FirstPage, 'index')
    public afterIndex(){
        log('after index')
    }
    
}

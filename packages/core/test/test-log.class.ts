import { createInstance, log } from "../src/decorators";

@createInstance
export default class TestLog {

    constructor(){
        log('this is a test log')
    }
}
import 'reflect-metadata'
import BeanFactory from '../factorys/bean-factoray.class'
import LogFactory from '../factorys/log-factorary.class'
import { ConstructorType } from '../../Interface'
import test from '../../script/test'

export function createInstance(target:ConstructorType){
    const instance = new target()
    BeanFactory.registerBean(target.name, instance)
}
export function app (target:ConstructorType){
    test(()=>{
        const app = new target() as any
        app['main']()
    })
}
export function bean(target:any, propertyName:string , descriptor:PropertyDescriptor){
    const returnType = Reflect.getMetadata('design:returntype', target, propertyName)
    BeanFactory.registerBean(returnType.name, target[propertyName])
}

// 根据类型进行赋值
export function autoware(target:any, propertyName:string){
    const returnType = Reflect.getMetadata('design:type', target, propertyName)
    Object.defineProperty(target, propertyName, {
        get:function propertyGetter(){
            return BeanFactory.getBean(returnType.name)()
        }
    })
}


// log decorator
export function log(message?:string, ...optionalParams:any){
    const logBean = BeanFactory.getBean(LogFactory.name)
    if(logBean){
        const lobObject = logBean()
        lobObject.log(message, ...optionalParams)
    }else {
        console.log(message, ...optionalParams)
    }
}
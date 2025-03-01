import 'reflect-metadata'
import BeanFactory from '../factorys/bean-factoray.class'
import LogFactory from '../factorys/log-factorary.class'
import { ConstructorType } from '../../Interface'

export function createInstance(target:ConstructorType){
    const instance = new target()
    BeanFactory.registerBean(target.name, instance)
}
export function app (target:ConstructorType){
    const app = new target()
    // app['mian']()
}
export function bean(target:any, propertyName:string , descriptor:PropertyDescriptor){
    const returnType = Reflect.getMetadata('design:type', target, propertyName)
    BeanFactory.registerBean(returnType.name, target[propertyName])
}

export function autoware(target:any, propertyName:string){
    const returnType = Reflect.getMetadata('design:type', target, propertyName)
    Object.defineProperty(target, propertyName, {
        get:function(){
            const bean = BeanFactory.getBean(returnType.name)
            return bean
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
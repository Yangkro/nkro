import { IRouterMatcher } from 'express';
const RouteMap: Record<string,Record<string,any>> = {
    get:<Record<string,Function>>{},
    post:<Record<string,Function>>{},
    put:<Record<string,Function>>{},
    delete:<Record<string,Function>>{},
    patch:<Record<string,Function>>{},
    options:<Record<string,Function>>{},
    head:<Record<string,Function>>{},
    all:<Record<string,Function>>{}
}

export function get(path:string){
    return function(target:any, propertyName:string,descriptor:PropertyDescriptor){
        RouteMap.get[path] = target[propertyName]
    }
}

export function post(path:string){
    return function(target:any, propertyName:string,descriptor:PropertyDescriptor){
        RouteMap.post[path] = target[propertyName]
    }
}

export function put(path:string){
    return function(target:any, propertyName:string,descriptor:PropertyDescriptor){
        RouteMap.put[path] = target[propertyName]
    }
}

export function delete_(path:string){
    return function(target:any, propertyName:string,descriptor:PropertyDescriptor){
        RouteMap.delete[path] = target[propertyName]
    }
}

export function patch(path:string){
    return function(target:any, propertyName:string,descriptor:PropertyDescriptor){
        RouteMap.patch[path] = target[propertyName]
    }
}

export function options(path:string){
    return function(target:any, propertyName:string,descriptor:PropertyDescriptor){
        RouteMap.options[path] = target[propertyName]
    }
}

export function head(path:string){
    return function(target:any, propertyName:string,descriptor:PropertyDescriptor){
        RouteMap.head[path] = target[propertyName]
    }
}

export function all(path:string){
    return function(target:any, propertyName:string,descriptor:PropertyDescriptor){
        RouteMap.all[path] = target[propertyName]
    }
}

export const  initRourer = (app:Express.Application)=>{
    for(let method in RouteMap){
        for(let path in RouteMap[method]){
            if(app[method as keyof IRouterMatcher<Express.Application>]){
                (app[method as keyof Express.Application] as IRouterMatcher<Express.Application>)(path, RouteMap[method][path]);
            }

        }
    }
}

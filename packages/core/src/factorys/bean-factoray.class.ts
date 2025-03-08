export default class BeanFactory {
    private static beanMapper: Map<string, any> = new Map<string, any>()

    public static registerBean(beanName: string, bean: any) {
        this.beanMapper.set(beanName, bean)
        console.log(11111, this.beanMapper)
    }

    
    public static getBean(beanName: string) {
        return this.beanMapper.get(beanName)
    }

}
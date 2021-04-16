// 类 类型： 可以通过接口实现

(() => {
    interface IFly {
        // @ts-ignore
        fly()
    }

    class Person implements IFly{
        fly(){
            console.log('i will fly')
        }
    }

    const person = new Person();
    person.fly()

    interface ISwim {
        // @ts-ignore
        swim()
    }

    class Superman implements IFly, ISwim{
        fly(){
            console.log('i will fly')
        }
        swim(){
            console.log('i will swim')
        }
    }

    const superman = new Superman()
    superman.fly()
    superman.swim()

    interface IflyAndISwim extends ISwim, IFly{}

    class Superman1 implements IflyAndISwim{
        fly(){
            console.log('i will fly')
        }
        swim(){
            console.log('i will swim')
        }
    }

    const superman1 = new Superman()
    superman1.fly()
    superman1.swim()
})()

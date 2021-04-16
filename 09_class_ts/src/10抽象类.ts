//抽象类及抽象方法，抽象方法没有具体实现，抽象类不能实例化

(() => {
    abstract class Animal {
        //抽象方法
        // @ts-ignore
        abstract eat()

        //实例方法
        sleep(){
            console.log('睡觉')
        }
    }

    class Dog extends Animal{
        eat() {
            console.log('吃')
        }
    }

    const dog:Dog = new Dog()
    dog.eat()
    dog.sleep()
})()

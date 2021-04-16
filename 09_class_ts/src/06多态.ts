// 多态父类型引用指向子类型对象，不同类型的对象针对相同的方法有不同行为

(() => {
    class Animal {
        do(str: string){
            console.log('Animal is doing '+str)
        }
    }
    class Dog extends Animal{
        do(str: string) {
            console.log('dog is dong '+ str)
        }
    }
    //正常情况
    const animal:Animal = new Animal()
    animal.do('跑')
    const dog:Dog = new Dog()
    dog.do('吃')

    //父类用子类函数
    const dog1:Animal = new Dog()
    dog1.do('跳')
})()

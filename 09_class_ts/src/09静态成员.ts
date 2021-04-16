// static

(() => {
    class Person {
        static name1: string

        constructor() {
            // 不能通过实例对象直接调用静态属性
            // this.name1 = name;
        }

        sayHi() {
            console.log('hi')
        }
    }

    const person = new Person()
    person.sayHi()
    console.log(Person.name1 = 'longfei') // 通过类名修改获取
})()

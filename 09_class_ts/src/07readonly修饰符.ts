(() => {
    class Person {
        readonly name: string
        constructor(name: string) {
            this.name = name
        }
        sayHi(){
            console.log('123', this.name)
            //this.name = 'lf' 类中普通函数也无法修改
        }
    }
    const person: Person = new Person('longfei')//构造函数修改
    console.log(person)
    console.log(person.name)
    // person.name = '隆飞' readonly修饰后无法外部修改
    console.log(person.name)
})()

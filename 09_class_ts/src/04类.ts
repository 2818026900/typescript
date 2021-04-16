(() => {
    class Person {
        private name: string
        private age: number
        private gender: string
        constructor(name:string='小甜甜', age:number=3, gender:string='女') {
            this.name = name
            this.age = age
            this.gender = gender
        }

        sayHi(str:string):string {
            console.log(str)
            return `大家好，我是${this.name}，今年${this.age}岁，是个${this.gender}孩子`
        }

    }

    const person = new Person('隆飞',23, '男')
    console.log(person.sayHi('介绍一下吧'))
})()

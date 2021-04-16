//ts中书写js中类的演示

(() => {
    //定义一个接口
    interface IPerson {
        firstName: string
        lastName: string
    }

    //定义一个类
    class Person{
        //定义公共的字段（属性）
        firstName: string
        lastName: string
        fullName: string
        //定义一个构造器函数
        constructor(firstName:string, lastName:string) {
            //更新属性数据
            this.firstName = firstName
            this.lastName = lastName
            this.fullName = this.firstName + '_' + this.lastName
        }
    }

    //定义函数
    function showFullName(person:IPerson) {
        return person.firstName + '_' + person.lastName
    }

    //实例化对象
    const  person = new Person('诸葛','孔明')
    console.log(person)
    console.log(showFullName(person))
})()

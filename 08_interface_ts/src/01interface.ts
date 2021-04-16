//接口是对象的状态和行为的抽象

(() => {
    interface IPerson {
        readonly id: number // 只读
        name: string
        age: number
        sex?: string // 可选
    }

    const person: IPerson = {
        id: 1,
        name: '0001',
        age: 12
    }
    console.log(person)

    const man: IPerson = {
        id: 1,
        name: '0001',
        age: 12,
        sex: '男'
    }

    console.log(man)
})()

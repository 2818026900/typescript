// getters 和 setters

(() => {
    class Person {
        private _name: string

        constructor(name: string) {
            this._name = name;
        }

        get name(): string {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }
    }
    const person = new Person('longfei')
    console.log(person)
    // @ts-ignore
    console.log(person.name)
    // @ts-ignore
    console.log(person.name = '隆飞')
})()

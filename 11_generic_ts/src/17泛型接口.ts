(() => {
    interface IBaseCRUD<T>{
        data: Array<T>
        add: (t:T) => T
        getUserId: (id:number) => T
    }

    class User {
        id?: number
        name: string
        age: number
        constructor(name:string, age:number) {
            this.name = name
            this.age = age
        }
    }

    class UserCRUD implements IBaseCRUD<User>{
        data:Array<User>=[]
        add(user:User):User {
            user.id = Date.now() + Math.random()
            this.data.push(user)
            return user
        }
        getUserId(id:number):User {
            // @ts-ignore
            return this.data.find(user => user.id === id)
        }
    }

    const userCRUD = new UserCRUD();
    userCRUD.add(new User('jack',10))
    const user =userCRUD.add(new User('job',20))
    console.log(userCRUD.data)
    if (user.id != null) {
        const user1 = userCRUD.getUserId(user.id)
        console.log(user1)
    }
})()

(() => {
    class genericeNumber<T> {
        defaultValue!: T //！代表一定有值
        add!: (x: T, y: T) => T
    }
    const g1:genericeNumber<number> =new genericeNumber<number>()
    g1.defaultValue = 100
    g1.add = function (x, y) {
        return x + y
    }
    console.log(g1.add(g1.defaultValue, 20))
})()


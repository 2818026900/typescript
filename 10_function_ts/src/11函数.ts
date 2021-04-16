(() => {
    //函数声明
    function add(x:number , y:number):number {
        return x + y
    }
    console.log(add(10, 10))
    //函数表达式（匿名函数）
    const add2 = function ( x1:number, y1:number):number {
        return x1 + y1
    }
    console.log(add2(100, 200))

    //完整写法
    const add3: (x2:number, y2:number) => number = function ( x2:number, y2:number):number {
        return x2 + y2
    }
    console.log(add3(100, 200))
})()

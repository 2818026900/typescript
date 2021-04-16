// 函数名相同参数不同
(() => {
    function add(x:string, y:string):string
    function add(x:number, y:number):number

    // @ts-ignore
    function add(x:string|number, y:string|number):string|number {
        if(typeof x === 'string'&& typeof y === 'string'){
            return x+y
        }else if(typeof x === 'number'&& typeof y === 'number'){
            return x+y
        }
    }
    console.log(add('10','20'))
    console.log(add(10,20))
    //console.log(add(10,'20'))
})()

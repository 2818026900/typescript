//基础类型

(() => {
    console.log('测试')

    //布尔类型boolean
    let flag:boolean = true
    console.log(typeof flag + ' ' + flag)

    // 数字类型number
    let a1: number = 10 // 十进制
    let a2: number = 0b1010 // 二进制0b开头
    let a3: number = 0o12 // 八进制0o开头
    let a4: number = 0xa // 十六进制0x开头
    console.log(a1,'0b_'+a2,'0o_'+a3,'0x_'+a4)

    // 字符串string
    let name: string = 'lmy'
    console.log(typeof name + ' ' + name)

    // undefined和null 可以赋给任何类型（非严格模式）
    let und: undefined = undefined
    console.log(typeof und + ' ' + und )

    let nll: null = null
    console.log(typeof nll + ' ' + nll)

    // 数组与元组
    //数组中数据类型相同
    let arr1: number[] = [10, 20, 30]

    let arr2: Array<number> = [100, 200, 300]

    console.log('arr1_' + arr1 + ' arr2_' + arr2)

    // 元组中数据类型可以不同,但是已经在定义时限定死了，数据应保持一致
    let tuple1: [string, number, boolean] = ['元组', 100, true]
    console.log(tuple1)
    console.log(tuple1[0].split(''))
    console.log(tuple1[1].toFixed(2))

    // 枚举enum
    enum Color{
        red,
        green,
        blue
    }
    let color: Color = Color.red
    console.log(color)
    console.log('=============')
    for (let colorKey in Color) {
        console.log(colorKey)
    }

    // any类型 类型，个数不确定情况 无法在编译中检查出错误例： 当str为number时调用字符串的split函数
    let str : any = 100
    str = '年少不知软饭香，错把青春到插秧'
    console.log(typeof str + '_' + str)

    // void类型
    function showMsg():void {
        console.log('msg')
    }
    console.log(showMsg())

    // object类型
    function getObj(obj: object):object {
        console.log(obj)
        return {
            name: 'name',
            age: 123
        }
    }

    console.log(getObj(
        {
            name: 'li',
            age: 123
        }
    ))
    console.log('===============')

    // 联合类型union
    function getStr(s: number | string):string {
        console.log(typeof s + '_'+s)
        return s.toString()
    }
    console.log(typeof getStr(123) + '_' +getStr(123))
    console.log('===============')

    // 类型断言(<类型>变量名 || <值> as 类型) 断定类型
    function getStrLength(s: number | string):number {
        return (<string>s).length ?  (<string>s).length : s.toString().length
    }
    console.log(getStrLength(12334))

    // 类型推断
    let txt = 100 // 推断为number
    console.log(typeof txt + '_' + txt)
    let txt1 // 推断为any
    txt1 = 100
    txt1 = 'str'
    console.log(typeof txt1 + '_' + txt1)
    console.log('===============')
})()

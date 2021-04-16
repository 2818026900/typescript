//类型注解,一种轻量级为函数或者变量添加的约束

(() => {
    function showMsg(str:String) {
        return '床前明月光,'+str
    }
    let msg = '疑是地上霜'
    // let msg = { 10, 20 ,30} 此处msg应为字符串，类型注解相当于泛型
    console.log(showMsg(msg))
})()

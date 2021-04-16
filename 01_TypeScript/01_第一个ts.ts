(() => {
    // str参数为String类型
    function sayHi(str:String) {
        return '你好' + str
    }
    let text = '小甜甜'
    console.log(sayHi(text))
})()

//手动编译通过tsc filename.ts
//在html文件中引入编译成功的js文件

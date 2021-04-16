(() => {
    // 通过接口方式作为函数类型使用
    // 定义接口
    interface ISearchFunc {
        //定义一个调用签名
        (source: string, subString: string): boolean
    }
    // 定义函数
    const searchString:ISearchFunc = function (source: string, subString:  string):boolean {
        return source.search(subString) > -1
    }

    console.log(searchString('接口实现', '接'))
})()

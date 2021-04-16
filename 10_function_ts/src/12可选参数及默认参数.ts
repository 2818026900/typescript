(() => {
    // 定义一个函数
    function FullName(firstname:string='东方', lastname?:string) {
        if(lastname){
            return firstname+'_'+lastname
        }else {
            return lastname
        }
    }
    //函数调用
    console.log(FullName())
    console.log(FullName('诸葛'))
    console.log(FullName('诸葛','孔明'))
})()

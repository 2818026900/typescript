(() => {

    function showMsg(str: string, ...args:string[]) {
        console.log(str)
        console.log(args)
    }
    showMsg('1','2','3','4')
})()


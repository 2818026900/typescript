(() => {
    function getArr<T>(value:T, count:number):T[] {
        const arr:T [] = []
        for(let i =0; i<count; i++){
            arr.push(value)
        }
        return arr
    }
    const arr1 = getArr<number>(100,3)
    console.log(arr1)
    const arr2 = getArr<string>('abc',2)
    console.log(arr2)
    console.log(arr2[0].split(''))
})()

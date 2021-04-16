(() => {
    function getMsg<K,V>(value1:K, value2:V): [K, V] {
        return [value1, value2]
    }
    console.log(getMsg<string, number>('abc', 123))
})()

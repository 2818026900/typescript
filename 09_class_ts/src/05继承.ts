(() => {
    class a {
        ASay(){
            console.log('a(爹)说，我是你爹')
        }
    }

    class b extends a{
        BSay(){
            super.ASay() // 调用父类函数
            console.log('b(儿子)说，我才是你爹')
        }
    }

    const B = new b()
    B.BSay()
})()

"use strict";
// static
(function () {
    var Person = /** @class */ (function () {
        function Person() {
            // 不能通过实例对象直接调用静态属性
            // this.name1 = name;
        }
        Person.prototype.sayHi = function () {
            console.log('hi');
        };
        return Person;
    }());
    var person = new Person();
    person.sayHi();
    console.log(Person.name1 = 'longfei'); // 通过类名修改获取
})();

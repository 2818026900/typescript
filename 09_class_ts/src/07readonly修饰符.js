"use strict";
(function () {
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.sayHi = function () {
            console.log('123', this.name);
            //this.name = 'lf' 类中普通函数也无法修改
        };
        return Person;
    }());
    var person = new Person('longfei'); //构造函数修改
    console.log(person);
    console.log(person.name);
    // person.name = '隆飞' readonly修饰后无法外部修改
    console.log(person.name);
})();

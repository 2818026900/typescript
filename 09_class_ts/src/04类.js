"use strict";
(function () {
    var Person = /** @class */ (function () {
        function Person(name, age, gender) {
            if (name === void 0) { name = '小甜甜'; }
            if (age === void 0) { age = 3; }
            if (gender === void 0) { gender = '女'; }
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        Person.prototype.sayHi = function (str) {
            console.log(str);
            return "\u5927\u5BB6\u597D\uFF0C\u6211\u662F" + this.name + "\uFF0C\u4ECA\u5E74" + this.age + "\u5C81\uFF0C\u662F\u4E2A" + this.gender + "\u5B69\u5B50";
        };
        return Person;
    }());
    var person = new Person('隆飞', 23, '男');
    console.log(person.sayHi('介绍一下吧'));
})();

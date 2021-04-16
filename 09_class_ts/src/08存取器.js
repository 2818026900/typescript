"use strict";
// getters 和 setters
(function () {
    var Person = /** @class */ (function () {
        function Person(name) {
            this._name = name;
        }
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var person = new Person('longfei');
    console.log(person);
    // @ts-ignore
    console.log(person.name);
    // @ts-ignore
    console.log(person.name = '隆飞');
})();

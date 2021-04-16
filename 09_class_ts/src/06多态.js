"use strict";
// 多态父类型引用指向子类型对象，不同类型的对象针对相同的方法有不同行为
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.do = function (str) {
            console.log('Animal is doing ' + str);
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.do = function (str) {
            console.log('dog is dong ' + str);
        };
        return Dog;
    }(Animal));
    //正常情况
    var animal = new Animal();
    animal.do('跑');
    var dog = new Dog();
    dog.do('吃');
    //父类用子类函数
    var dog1 = new Dog();
    dog1.do('跳');
})();

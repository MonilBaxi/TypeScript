//Symbol
var _a;
//key of object
var s1 = Symbol("s1");
var data = (_a = {},
    _a[s1] = "Monil Baxi",
    _a);
console.log(data[s1]);
//key to function
var s2 = Symbol("s2");
var demoUser = /** @class */ (function () {
    function demoUser() {
    }
    demoUser.prototype[s2] = function () {
        return "Monil Baxi";
    };
    return demoUser;
}());
var s3 = new demoUser();
console.log(s3[s2]());

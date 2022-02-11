//Typescript
//tsc 2nd_program.ts --watch  to compile
let a: number = 10;
var b: String = "Hello World"
const c: boolean = true;
let d: string[] = ["peter", "lallu", "hello"]
console.log(a + '' + b + c);
console.log(d);


//Interface
interface monil {
    name: string,
    surname: string,
    age: number,
    checkme: (number) => string
}
let user: monil = {
    name: "moonil",
    surname: 'baxi',
    age: 10,
    checkme: (a) => {
        return " " + a;
    }
}
console.log(user);


//use of any
let anyUser: any = {
    name: "moonil",
    surname: 'baxi',
    age: 10
}
anyUser.name = 10;
console.log(anyUser);


//use of union
let union: string | number = "monil";
console.log(union);


///function
function m(a: number, b?: number): string {
    return b ? " " + a + b : " " + a;
}
console.log(m(10));
console.log(m(10, 20));


//class
class t {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
}



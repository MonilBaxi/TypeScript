//Symbol


//key of object
let s1=Symbol("s1");
let data={
    [s1]:"Monil Baxi"
}
console.log(data[s1]);


//key to function
let s2=Symbol("s2");

class demoUser{
    [s2](){
        return "Monil Baxi";
    }
}
let s3=new demoUser()
console.log(s3[s2]());

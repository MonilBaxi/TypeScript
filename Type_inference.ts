//Type Inference
//IN Tpe Inference if the value is not assigned then it can take 'any' data type
let mom;    //Variable 'mom' implicitly has an 'any' type, but a better type may be inferred from usage.
mom="Sonal Baxi";
mom=52;
mom=true;
//No error as value is not assigned

//But if value assigned during initializing then it will take only  that data type else gives error
let dad="ninad Baxi"; //dad:string
// dad=10 //error
// dad=true //error

//If value assigned to const then the type  is  value
const ten=10; //ten:10
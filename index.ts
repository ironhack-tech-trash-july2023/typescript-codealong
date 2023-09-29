
//
// 2 ways to define types: Implicit & Explicit
//

let amountA = 20; // implicit
let amountB: number = 20; // explicit


//
// Functions
//

function calcTotal(a: number, b: number): number {
    return a + b;
}

calcTotal(5, 10);


//
// Arrays
//

const numbers = [2, 4, 6]; // implicit

let names: string[]; // explicit
names = ["alice", "bob"];

names.push("charly");


// 
// Interfaces
// 

interface User {
    userName: string,
    age: number,
    likesPizza?: boolean
}

let user1: User;
let user2: User;

user1 = {
    userName: "alice",
    age: 30,
    likesPizza: true
}

user2 = {
    userName: "bob",
    age: 40,
}


// 
// Interfaces + Arrays
// 

let usersArr: User[];

usersArr = [
    {userName: "alice", age: 30, likesPizza: true},
    {userName: "bob", age: 40},
    {userName: "charly", age: 50},
];


//
//
//


function sendEmail(userDetails: User){
    console.log(`sending email to.... ${userDetails.userName}`)
}

sendEmail({userName: "david", age: 60});



//
// Unions
//

let charactersArr: null | User[];
//
// 2 ways to define types: Implicit & Explicit
//
var amountA = 20; // implicit
var amountB = 20; // explicit
//
// Functions
//
function calcTotal(a, b) {
    return a + b;
}
calcTotal(5, 10);
//
// Arrays
//
var numbers = [2, 4, 6]; // implicit
var names; // explicit
names = ["alice", "bob"];
names.push("charly");
var user1;
var user2;
user1 = {
    userName: "alice",
    age: 30,
    likesPizza: true
};
user2 = {
    userName: "bob",
    age: 40,
};
// 
// Interfaces + Arrays
// 
var usersArr;
usersArr = [
    { userName: "alice", age: 30, likesPizza: true },
    { userName: "bob", age: 40 },
    { userName: "charly", age: 50 },
];
//
//
//
function sendEmail(userDetails) {
    console.log("sending email to.... ".concat(userDetails.userName));
}
sendEmail({ userName: "david", age: 60 });
//
// Unions
//
var charactersArr;

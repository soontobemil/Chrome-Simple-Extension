 var a = 5; 
 const b = 2;
 let myName = "jay";

 console.log(a + b);
 console.log(a * b);
 console.log(a / b);
 console.log("hello" + myName)
  
 myName = "smart"

 console.log("hello" + myName)

 const amIFat = null;
 let something;
 console.log(something, amIFat);
 
 const daysOfWeek = ["mon", "tue", "wen", "thur", "fri"];
 const nonsense = [false, true, "happy", "so cool"];

 // get item from array
 console.log(daysOfWeek, nonsense);
 console.log(daysOfWeek[4]);

 // add one more day to the array (push is too add one more item to the array)
 daysOfWeek.push("sat");

 console.log(daysOfWeek);

 const toBuy = ["potato", 'kimchi','whatever'];
 toBuy.push("i need grocery mall");
 console.log(toBuy);


 const playerName = "Jay";
 const playerPoints = "2391283";
 const playerHnadsome = true;
 
 //object property - different from arrays
const player = {
    name:"jay", 
    points: 10,
    fat: false,
};
console.log(player);

//update
player.fat = true;  // objects within constant are changable but not player = blah.
player.lastname = "potato"; // you can create any kind of objects
player.points = player.points + 15;
console.log(player);

 //function

 function sayHello(nameOfPerson, age) {
     console.log("hello my name is " + nameOfPerson + " And I am " + age);
 }

 sayHello("jay", 24);


 //calculator
 function plus(a, b){
     console.log (a + b)
 }
 
 plus (9, 40);

 function divide (a,b){
     console.log(a/b)
 }
 divide (4,60);

 ////

 const playerr = {
     name: "jay",
     sayHelloo: function (other) {
         console.log ("hello"+ other)
     },
 };

 playerr.sayHelloo("jay");

 ///// recap

 "test1"
 2+5
 const aa = 5 //constant don't allow us to update
 let isJayFat = true;

 console.log (aa);

 isJayFat = false; // updating the variable when Let is used previously.

 console.log (isJayFat);

 const d12 = null; // nothingness = something

function plus(pot,sal){
    console.log(pot+sal);
}

plus(5,10);
plus(5,12);
plus(5,485);
plus(5,1640);

const calculatorr = {
    add: function (a,b) {
        console.log (a,b);
    },
};

calculatorr.add(5,1);



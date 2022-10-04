const h1 = document.querySelector ("div.hello:first-child h1");

function handleTitleClick() {
    h1.style.color = "black";
}

function handleMouseEnter() {
    h1.innerText = "Keep Drinking";{
        h1.style.color = "Blue";
    }
}

function handleMouseLeave() {
    h1.innerText = "Stop Drinking!";{
        h1.style.color = "RED";
    }
}

function handleWindowResize() {
    document.body.style.background = "tomato";
}

function handleWindowCopy() {
    alert("Copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI!");
}

function handleWindowOnline() {
    alert("WIFI Connected");
}

h1.addEventListener("click", handleTitleClick); // = title.onClick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("offline", handleWindowOnline);

// console.dir(title);
// you can later add removeEventListener as supposed to title.onClick

document.title = "Jay's Coding Class" // javascript is already connected to HTML

//handleTitleClick() () - means press play

//const title = document.getElementById ("title")
//const hellos = document.getElementsByClassName ("hello"); 
//getelementsbytaganme refers /anchor/div/section/button
//const title = document.querySelectorAll (".hello h1") or queryselector all
//console.log (hellos); 

//console.dir(title); //dir brings components of all properties
//console.log(title.id);
//console.log(title.className);







const age = parseInt( Console.log ("How old are you?"));///execute from insise to outside (prompt)
// we use parseint to convert string to a number.

if (isNaN(age) || age <0) { //isNaN = this chekcs whether something is true or flase
  console.log ("please write a real positive number");  /// or || or one or the other
} else if (age < 18) {
    Alert ("You are underage.");
} else if (age >= 18 && age <= 50){ //&& both conditions 
    console.log ("You can drink");
} else if (age >= 51 && age <= 99){
    console.log ("You are too old to drink");
} else if (age === 100){ //equal sign is === (100%) or !== (if age is not)
    console.log ("Dammm Son!!!!");
} else if (age > 100){
    console.log ("Invalid Age");
}

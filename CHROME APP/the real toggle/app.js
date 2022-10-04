const h1 = document.querySelector ("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("active");
}

    h1.addEventListener("click", handleTitleClick);


//const colorChange = "active"; // only copy once
        
  // if (h1.classList.contains(colorChange)) { // ===  className이 active와 같은지 확인
   // h1.classList.remove(colorChange); 
  // } else {
    //   h1.classList.add(colorChange);
 //  }
//}


// h1.addEventListener("click", handleTitleClick);

   // const currentColor = h1.style.color;
    //let newColor;
   // if (h1.style.color === "blue") { //=== (is) blue
        //newColor = "tomato"; // = changing the colour
//} else {
       // newColor = "blue";
//}
    //h1.style.color = newColor
//}  --- 이건 css를 사용하지않고 자바에서 값을 불러와 css을 건드는 방법임 (사용x)
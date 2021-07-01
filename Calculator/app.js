// This coding is for calculator 

/* there are four four operations
  1. Addition
  2. Subtraction
  3. Multiplication
  4. Division

  suppose there are two value x and y
  1. "x" is for the first input value
  2. "y" is for the second input value

*/

// this function is for addition

function addNumber() {
  // let  x,y,a;

  let x = parseInt(document.querySelector("#value1").value); // 
  let y = parseInt(document.querySelector("#value2").value);
   a = x + y;

  document.getElementById('result').value= a;
  
}


// this function is for subtraction

function subtractNumber(){

  // let x,y,b;

   let x = parseInt(document.querySelector("#value1").value);
   let y = parseInt(document.querySelector("#value2").value);
   b = x - y;

   document.getElementById('result').value= b;

}


// this function is for multiplication

function multipleNumber(){

  // let x,y,c;

  let x = parseInt(document.querySelector("#value1").value);
  let y = parseInt(document.querySelector("#value2").value);
   c = x * y;

  document.getElementById('result').value= c;
  
}


// this function is for division 

function divideNumber(){

  // let x,y,d;

  let x = parseInt(document.querySelector("#value1").value);
  let y = parseInt(document.querySelector("#value2").value);
   d = x / y;

   document.getElementById("result").value= d;

 }


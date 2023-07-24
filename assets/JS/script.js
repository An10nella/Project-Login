var objPeople = [
    {
    username :"admin01", 
    password :"123"

},
{
    username :"admin02" ,
    password: "234" 

},
{
    username :"admin03" ,
    password :"345" 
    
}
] 


//     for (i=0 ; i<objPeople.length ; i++){
//         if(username== objPeople[i].username && password == objPeople[i].password){
//             alert ("Login successfully");
            

//         }
//     }
      
// }
var attempt = 3; 
var btnPrimary = document.getElementById("btn btn-primary")
var username = document.getElementById("name")
var password = document.getElementById("Password")
function validate(){
  
    if(username== objPeople[i].username && password == objPeople[i].password){

alert ("Login successfully")
// window.location = "success.html" // Redirecting to other page.

}
else if(username!= objPeople[i].username && password != objPeople[i].password){
attempt --;
alert("You have left "+attempt+" attempt;")

// if( attempt == 0){

 return 

}
}










// function Welcome(counter = 2) {

//     const username = prompt("Enter username:")
//     const password = prompt("Enter password:")
  
//     if (counter == 0) {
//       console.log("Errors please try again") 
//      console.log("You have 0 attempt.")
//      console.log("you have failed 3 times")
//       return;
//     }
  

//     if (username == x && password == y) {
//       myarr();
    
//     } else {
//         console.log("Errors please try again") 
//         console.log("You have "+ counter +  " attempts.")
//       Welcome(counter - 1);
//     }
//   }

// function myarr() {
//     console.log("Available Fruit:")
//     console.log(arrFruits)
  
    // let list = prompt("Enter the fruit you want to select:")
     
//      let list = prompt("Enter the fruit you want to select:")
//      list in arrFruits
  
//     if (list .includes(arrFruits)) {
//       console.log("You have selected " + [list])
//     } else {
//       console.log("This fruit is not in the basket.")
//       myarr()
   
//     }
//   }
 
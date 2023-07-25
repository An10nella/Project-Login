var users= [
    {
    username01 :"admin01", 
    password :"123"

},
{
    username02 :"admin02" ,
    password: "234" 

},
{
    username03 :"admin03" ,
    password :"345" 
    
}
] 


// var btnPrimary = document.getElementById("btn btn-primary")
var username = document.getElementById("name").value
var password = document.getElementById("Password").value

function Welcome(){
  // for (i=0 ; i<users.length ; i++){
    // if( counter == 0){
    //     alert("You have reached "+attempt+" attempt;")
    //  return 
    // }

     
    

    if(username== users){

   alert ("Login successfully")}}
  
  //  window.location = "login.html"
  //  displayWelcome(username)
  //   setTimeout(() => {
  //     window.location.href = "login.html"
  //   }, 2000);
  //  return 
// }
// else if(username!= users[i].username && password !=users[i].password){

//    alert("You have left "+attempt+" attempt;")
//    Welcome(counter - 1)
// }
// }

// }
// const loginPopup = document.querySelector(".main")
// window.addEventListener("load",function(){
// showPopup()
// })
// function showPopup(){
//    const timeLimit = 2
//     let i = 0
//     const timer = setInterval(function(){
//         i++;
//         if(i == timeLimit){
//             clearInterval(timer)
//             loginPopup.classList.add("show")
//         }
//     }
//     )

// }

// const fighters = [
//     "🐉",
//     "🐥",
//     "🐊",
//     "💩",
//     "🦍",
//     "🐢",
//     "🐩",
//     "🦀",
//     "🐝",
//     "🤖",
//     "🐘",
//     "🐸",
//     "🕷",
//     "🐆",
//     "🦕",
//     "🦁",
//   ]

  
//   let stageEl = document.getElementById("stage")
//   let fightButtonEl = document.getElementById("fightButton")

//   fightButtonEl.addEventListener("click",function(){

//     let char01 =  Math.floor(Math.random(fighters)*fighters.length)
//     let char02 = Math.floor(Math.random(fighters)*fighters.length)

//     let diff = 0
 
//     stageEl.innerHTML = `${fighters[char01]} VS ${fighters[char02]}`
//     if(fighters[3] == fighters[char01] || fighters[3] == fighters[char02]){
//         stageEl.innerHTML += `<br> ${fighters[3]} is the winner`
//       }else{
//         if(char01 > char02){
//           diff = char01 - char02
//           stageEl.innerHTML += `<br> ${fighters[char01]} win by ${diff} points`
//           if(diff>9){
//             fightButtonEl.style.backgroundColor="#ff5"
//           }else{
//             fightButtonEl.style.backgroundColor="#fff"
//           }
//         }else if(char01 < char02){
//           diff = char02 - char01
//           stageEl.innerHTML += `<br> ${fighters[char02]} win by ${diff} points`
//           if(diff>9){
//             fightButtonEl.style.backgroundColor="#ff5"
//           }else{
//             fightButtonEl.style.backgroundColor="#fff"
//           }
//         }else{
//           stageEl.innerHTML += `<br> Tie Game`
//           fightButtonEl.style.backgroundColor="#f0f"
//         }
//       }
//   })

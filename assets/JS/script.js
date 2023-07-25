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


// var btnPrimary = document.getElementById("btn btn-primary")
var username = document.getElementById("name").value
var password = document.getElementById("Password").value

function Welcome(counter = 2){
  for (i=0 ; i<objPeople.length ; i++){
    // if( counter == 0){
    //     alert("You have reached "+attempt+" attempt;")
    //  return 
    // }

     
    

    if(username== objPeople[i].username && password == objPeople[i].password){

   alert ("Login successfully")
   window.location = "login.html"
   displayWelcome(username)
    setTimeout(() => {
      window.location.href = "login.html"
    }, 2000);
   return 
}
else if(username!= objPeople[i].username && password != objPeople[i].password){

   alert("You have left "+attempt+" attempt;")
   Welcome(counter - 1)
}
}

}
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

const fighters = [
    "🐉",
    "🐥",
    "🐊",
    "💩",
    "🦍",
    "🐢",
    "🐩",
    "🦀",
    "🐝",
    "🤖",
    "🐘",
    "🐸",
    "🕷",
    "🐆",
    "🦕",
    "🦁",
  ]

  
  let stageEl = document.getElementById("stage")
  let fightButtonEl = document.getElementById("fightButton")

  fightButtonEl.addEventListener("click",function(){

    let char01 =  Math.floor(Math.random(fighters)*fighters.length)
    let char02 = Math.floor(Math.random(fighters)*fighters.length)

    let diff = 0
 
    stageEl.innerHTML = `${fighters[char01]} VS ${fighters[char02]}`
    if(fighters[3] == fighters[char01] || fighters[3] == fighters[char02]){
        stageEl.innerHTML += `<br> ${fighters[3]} is the winner`
      }else{
        if(char01 > char02){
          diff = char01 - char02
          stageEl.innerHTML += `<br> ${fighters[char01]} win by ${diff} points`
          if(diff>9){
            fightButtonEl.style.backgroundColor="#ff5"
          }else{
            fightButtonEl.style.backgroundColor="#fff"
          }
        }else if(char01 < char02){
          diff = char02 - char01
          stageEl.innerHTML += `<br> ${fighters[char02]} win by ${diff} points`
          if(diff>9){
            fightButtonEl.style.backgroundColor="#ff5"
          }else{
            fightButtonEl.style.backgroundColor="#fff"
          }
        }else{
          stageEl.innerHTML += `<br> Tie Game`
          fightButtonEl.style.backgroundColor="#f0f"
        }
      }
  })

var users= [
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

var maxAttempts = 2;
var attempts = 0;
// var btnPrimary = document.getElementById("btn btn-primary")
function Welcome(){
var username = document.getElementById("username").value
var password = document.getElementById("password").value
for (i=0; i<users.length; i++){
  if(username==users[i].username && password == users[i].password){
    alert("login successfully")
    main()
    

  }
  
  
// else i(username!= users[i].username && password !=users[i].password){
    
else{  
    
    var remainingAttempts = maxAttempts - attempts;
    if (remainingAttempts >= 0 ) {
      attempts++
      
      alert("Incorrect username or password. You have " + remainingAttempts + " attempt(s) remaining.")
      return
      

    }}
  

    
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

function main(){
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
}

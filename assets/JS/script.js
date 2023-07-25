var users = [
  {
    username: "admin01",
    password: "123"
  },
  {
    username: "admin02",
    password: "234"
  },
  {
    username: "admin03",
    password: "345"
  }
];

var maxAttempts = 3
var attempts = 0

function Welcome() {
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  var isValidUser = false

  for (var i = 0; i < users.length; i++) {
    if (username == users[i].username && password == users[i].password) {
      isValidUser = true;
      alert("Login successful")
      document.getElementById("username").disabled = true
      document.getElementById("password").disabled = true
      document.querySelector("button").disabled = true
      
    }
  }

  if (!isValidUser) {
    attempts++
    var remainingAttempts = maxAttempts - attempts
    if (remainingAttempts > 0) {
      alert(
        "Incorrect username or password. You have " +remainingAttempts +" attempt(s) remaining.")
    } else {
      alert("You have exceeded the maximum number of login attempts.")
      return

    }
  }
}

setTimeout(function () {
  document.getElementById("welcomeMessage").style.display = "none"
  document.getElementById("logoutButton").style.display = "block"
  // document.getElementById("stage")
  // document.getElementById("fightButton")
}, 2000)


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

  function logout() {
    
    window.location.href = "index.html";
  }


  
 

  


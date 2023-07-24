function Welcome(counter = 2) {

  
    if (counter == 0) {
      console.log("Errors please try again") 
     console.log("You have 0 attempt.")
     console.log("you have failed 3 times")
      return;
    }
  

    if (username == x && password == y) {
      
    
    } else {
        console.log("Errors please try again") 
        console.log("You have "+ counter +  " attempts.")
      Welcome(counter - 1);
    }
}
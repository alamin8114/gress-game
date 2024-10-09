// ======================Dom part start ==============
    // ============playerOne Dom
    let playerOne           =document.querySelector(".playerOne") 
    let playerOneInput     =document.querySelector(".playerOneInput ") 

    // ============playerTwo Dom
    let playerTwo           =document.querySelector(".playerTwo") 
    let playerTwoInput      =document.querySelector(".playerTwoInput") 

    // ============playerThree Dom
    let playerThree         =document.querySelector(".playerThree") 
    let playerThreeInput    =document.querySelector(".playerThreeInput") 

    // =============other Dom
    let error               =document.querySelector(".error")
    let result              =document.querySelector(".result")
    let winner              =document.querySelector(".winner")
    let change              =0
    let change2             =0
    let changeNumber        =document.querySelector(".changeNumber")
    let changeCount         =document.querySelector(".changeCount ")
    let changeCount2         =document.querySelector(".changeCount2 ")
    // +++++++++++++ function ++++++++++++++++
    changeCount.innerHTML   = change
    changeCount2.innerHTML   = change2

    // =============playerOne start
    
    let handelClick = ()=>{
        if (playerOneInput.value == ""){
            error.innerHTML = "Please Enter An Number"
        }
        else{
            if(playerOneInput.value > 10){
                error.innerHTML = "Error :Write between 1 and 10"
                playerOneInput.value = ""
            }
            else{
                playerOne.style = "display:none"
                error.innerHTML =""
                playerTwo.style = "display:block"
            }
        }
        }
    // =============playerTwo start

    let handelClick2 = ()=>{
        if(playerTwoInput.value == ""){
            error.innerHTML = "Please Enter An Number"
        }
        else{
            if(playerTwoInput.value > 10){
                error.innerHTML = "Error :Write between 1 and 10"
                playerTwoInput.value = ""
            }
            else{
                if(playerOneInput.value == playerTwoInput.value){
                    winner.style ="display:block"
                    result.innerHTML ="Winner Player 2"
                    playerTwo.style = "display:none"
                }
                else{
                    change++
                    changeCount.innerHTML = change 
                    if(change == 5){
                    error.innerHTML = ""
                    playerThree.style = "display:block"
                    playerTwo.style = "display:none" 
                    }
                }
            }
        }
    }

    // =============playerThree start

    let handelClick3 =()=>{
    if(playerThreeInput.value == ""){
        error.innerHTML = "Please Enter An Number"
    }
    else{
        if(playerThreeInput.value > 10){
            error.innerHTML = "Error :Write between 1 and 10"
            playerThreeInput.value = ""
        }
        else{
            if(playerOneInput.value == playerThreeInput.value){
                winner.style ="display:block"
                result.innerHTML ="Winner Player 3"
                playerThree.style ="display:none"
            }
            else{
                change2++
                    changeCount2.innerHTML = change2 
                    if(change2 == 5){
                    winner.style ="display:block"
                    result.innerHTML ="Winner Player 1"
                    playerThree.style ="display:none"
                    }
            }
        }
    }
}

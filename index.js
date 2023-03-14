
const playerX = 'x';
const playerO = 'o';
const board = document.getElementById("board")
let playerOne = true


console.log(board)

 
        function clicksquare(event){const myCell = event.target
        myCell.innerText=playerX
        
        console.log(myCell)
        }

        


        






  
board.addEventListener("click",clicksquare)

 
 
let cell = document.getElementsByClassName("cell");
function playerClick(id){
  
    cell[id].innerHTML="X";


}
function Restart(){
 let cell =document.getElementsByClassName("cell");
 for(let i of cell){
    i.innerHTML="";
 }

}

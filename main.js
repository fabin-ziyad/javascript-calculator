var screen=document.getElementById('screen');

function btnclick(value){
  screen.value += value;
}
function ClearScreen(){
  screen.value=" ";
}
function findResult(){
  var result=eval(screen.value);
  screen.value=result;
}


let currentDate = Date.now();


function move_companies(id){
  
  document.getElementById(id).style.marginTop = ((Date.now() - currentDate) / 25) + "px";
  a = document.getElementById(id).style.marginTop;
  if (parseInt(a.slice(0, a.length - 2)) >= window.innerHeight) {
    currentDate = Date.now()
  }

}

setInterval(move_companies, 5, "exante")
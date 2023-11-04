
let exante_time = [Date.now() - Math.random() * 20000];
let myprotein_time = [Date.now() - Math.random() * 20000];


function move_companies(id, scale, time){
  
  document.getElementById(id).style.marginTop = ((Date.now() - time[0]) / scale) + "px";
  a = document.getElementById(id).style.marginTop;
  if (parseInt(a.slice(0, a.length - 2)) >= window.innerHeight) {
    time[0] = Date.now()
  }

}

setInterval(move_companies, 5, "exante", 25, exante_time)
setInterval(move_companies, 5, "myprotein", 50, myprotein_time)
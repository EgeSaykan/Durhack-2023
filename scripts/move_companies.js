
let exante_time = [Date.now() - Math.random() * 20000];
let myprotein_time = [Date.now() - Math.random() * 20000];
let selfish = [Date.now() + Math.random() * 20000];
let glossy = [Date.now() + Math.random() * 20000];
let espa = [Date.now() + Math.random() * 20000];
let lookfantastic = [Date.now() + Math.random() * 20000];
let matalan = [Date.now() + Math.random() * 20000];


function move_companies(id, scale, time){
  
  document.getElementById(id).style.marginTop = ((Date.now() - time[0]) / scale) + "px";
  a = document.getElementById(id).style.marginTop;
  if (parseInt(a.slice(0, a.length - 2)) >= window.innerHeight) {
    time[0] = Date.now() + Math.random() * 20000
  }
// testing if I can commit hello
}

setInterval(move_companies, 5, "exante", 25, exante_time)
setInterval(move_companies, 5, "myprotein", 70, myprotein_time)
setInterval(move_companies, 5, "selfish", 15, selfish)
setInterval(move_companies, 5, "glossy-box", 35, glossy)
setInterval(move_companies, 5, "espa", 45, espa)
setInterval(move_companies, 5, "lookfantastic", 22, lookfantastic)
setInterval(move_companies, 5, "matalan", 30, matalan)
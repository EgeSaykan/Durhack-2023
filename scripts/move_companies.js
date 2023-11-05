const meteorArray = [
  ["exante",[Date.now() - Math.random() * 20000]],
  ["myprotein",[Date.now() - Math.random() * 20000]],
  ["selfish",[Date.now() - Math.random() * 20000]],
  ["glossy",[Date.now() + Math.random() * 20000]],
  ["espa",[Date.now() - Math.random() * 20000]],
  ["lookfantastic",[Date.now() + Math.random() * 20000]],
  ["matalan",[Date.now() + Math.random() * 20000]],
  ["homebase",[Date.now() - Math.random() * 20000]],
  ["cola",[Date.now() - Math.random() * 20000]],
  ["hale",[Date.now() + Math.random() * 20000]],
  ["hut",[Date.now() - Math.random() * 20000]]
];
const meteorArray2 = [
  ["exante-page-2",[Date.now() - Math.random() * 20000]],
  ["selfish-page-2",[Date.now() - Math.random() * 20000]],
  ["glossy-page-2",[Date.now() + Math.random() * 20000]],
  ["espa-page-2",[Date.now() - Math.random() * 20000]],
  ["lookfantastic-page-2",[Date.now() + Math.random() * 20000]],
  ["matalan-page-2",[Date.now() + Math.random() * 20000]],
  ["homebase-page-2",[Date.now() - Math.random() * 20000]],
  ["cola-page-2",[Date.now() - Math.random() * 20000]],
  ["hale-page-2",[Date.now() + Math.random() * 20000]]
];

function move_companies(id, scale, time, i, second) {
  let temp = ((Date.now() - time[0]) / scale);
  document.getElementById(id).style.marginTop = temp + "px";
  if (second){
    let temp_x = window.innerWidth * i / 10
    if (temp > window.innerHeight - 255 && temp < window.innerHeight - 30 && rocketLeft < temp_x + 155 && rocketLeft + 15 > temp_x) {
      const meteorHref = document.getElementById(id).getAttribute("href");
      window.location.href = meteorHref;
    }
  }
  
  a = document.getElementById(id).style.marginTop;
  if (parseInt(a.slice(0, a.length - 2)) >= window.innerHeight) {
    time[0] = Date.now() + Math.random() * 20000
  }
}

for (let i = 0; i < meteorArray.length; i++) {
  console.log(meteorArray[i])
  setInterval(move_companies, 5, meteorArray[i][0], Math.random() * 40 + 15, meteorArray[i][1], i, false)
}
for (let i = 0; i < meteorArray2.length; i++) {
  setInterval(move_companies, 5, meteorArray2[i][0], Math.random() * 40  + 15, meteorArray2[i][1], i, true)
}

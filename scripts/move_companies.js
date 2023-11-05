const meteorArray = [
  [["exante"],[Date.now() - Math.random() * 20000]],
  [["myprotein"],[Date.now() - Math.random() * 20000]],
  [["selfish"],[Date.now() - Math.random() * 20000]],
  [["glossy"],[Date.now() + Math.random() * 20000]],
  [["espa"],[Date.now() - Math.random() * 20000]],
  [["lookfantastic"],[Date.now() + Math.random() * 20000]],
  [["matalan"],[Date.now() + Math.random() * 20000]],
  [["homebase"],[Date.now() - Math.random() * 20000]],
  [["cola"],[Date.now() - Math.random() * 20000]],
  [["hale"],[Date.now() + Math.random() * 20000]],
  [["hut"],[Date.now() - Math.random() * 20000]]
];

function move_companies(id, scale, time) {
  document.getElementById(id).style.marginTop = ((Date.now() - time[0]) / scale) + "px";
  a = document.getElementById(id).style.marginTop;
  if (parseInt(a.slice(0, a.length - 2)) >= window.innerHeight) {
    time[0] = Date.now() + Math.random() * 20000
  }
}

for (let i = 0; i < meteorArray.length; i++) {
  console.log(meteorArray[i])
  setInterval(move_companies, 5, meteorArray[i][0], Math.random() * 45, meteorArray[i][1])
  setInterval(move_companies, 5, meteorArray[i][0]+ "-page-2", Math.random() * 45, meteorArray[i][1])
}
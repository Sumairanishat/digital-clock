
setInterval(() => {
  let date= new Date();
document.getElementById('seconds').innerHTML = date.getSeconds()<10? "0" + date.getSeconds() : date.getSeconds();
document.getElementById('minutes').innerHTML =date.getMinutes();
document.getElementById('hours').innerHTML = date.getHours()<12? date.getHours() : date.getHours()-12;
}, 1000);


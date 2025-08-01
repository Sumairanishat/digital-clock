/*let count=0;
seconds=()=>{
    let secondsText = document.getElementById('seconds').textContent;
    let secondsInt = parseInt(secondsText);
    console.log("sec");
    secondsInt++;
    document.getElementById('seconds').textContent=secondsInt;
    count++;
}
minutes=()=>{
  let minutesText= document.getElementById('minutes').textContent;
  let minutesInt = parseInt(minutesText);
  console.log('min');
  minutesInt++;
 document.getElementById('minutes').textContent=minutesInt;
 count++
}

for(let i=1;i<=3;i++){
  
   setTimeout(seconds,1000*i);
  
 
  
}*/

setInterval(() => {
  let date= new Date();
document.getElementById('seconds').innerHTML = date.getSeconds()<10? "0" + date.getSeconds() : date.getSeconds();
document.getElementById('minutes').innerHTML =date.getMinutes();
document.getElementById('hours').innerHTML = date.getHours()<12? date.getHours() : date.getHours()-12;
}, 1000);


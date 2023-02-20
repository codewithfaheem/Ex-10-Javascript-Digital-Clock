var radius = 65;
var angle = (Math.PI * 0);

function digiClock() {
  let dateTime = new Date();
  let hour = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();

  hour = hour < 10 ? `0${hour}` : hour;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;


  document.getElementById('hours').innerText = `${hour}`
  document.getElementById('minutes').innerText = `${min}`
  document.getElementById('seconds').innerText = `${sec}`

  angle = (sec * 6 - 90) * Math.PI / 180;
  //(sec * 6) => getting angle by multiplying 'sec' with '6' '(6 = 360/60) => 6 comes by dividing total angle to total number of seconds. 
  //(sec * 6 - 90) => '-90' because angle '0' is parallel to x-axis but we've to start from y-axis
  //(sec * 6 - 90) * Math.PI / 180 => converting angle into radians by formula (angle * pie/i80), because we need value in px not in angle.
}

function animateClock() {
  let top = radius * Math.sin(angle);
  let left = radius * Math.cos(angle);
  document.getElementById('ss').style.top = (top + 59) + 'px'
  document.getElementById('ss').style.left = (left + 59) + 'px'

  requestAnimationFrame(animateClock)
}

requestAnimationFrame(animateClock)
setInterval(digiClock, 1000)


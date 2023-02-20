var radius = 1.65;
var secAngle = -90 * (Math.PI / 180);
var minAngle = -90 * (Math.PI / 180);
var hourAngle = -90 * (Math.PI / 180);

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

  // hourAngle = (hour * 30 - 90) * Math.PI / 180;
  minAngle = (min * 6 - 90) * Math.PI / 180;
  secAngle = (sec * 6 - 90) * Math.PI / 180;
  //(sec * 6) => getting angle by multiplying 'sec' with '6' '(6 = 360/60) => 6 comes by dividing total angle to total number of seconds. 
  //(sec * 6 - 90) => '-90' because angle '0' is parallel to x-axis but we've to start from y-axis
  //(sec * 6 - 90) * Math.PI / 180 => converting angle into radians by formula (angle * pie/i80), because we need value in px not in angle.
}

function animateClock() {
  let hourTop = radius * Math.sin(hourAngle);
  let hourLeft = radius * Math.cos(hourAngle);
  let minTop = radius * Math.sin(minAngle);
  let minLeft = radius * Math.cos(minAngle);
  let secTop = radius * Math.sin(secAngle);
  let secLeft = radius * Math.cos(secAngle);
  document.getElementById('hh').style.top = (hourTop + 1.35) * 40 + 'px'
  document.getElementById('hh').style.left = (hourLeft + 1.35) * 40 + 'px'
  document.getElementById('mm').style.top = (minTop + 1.35) * 40 + 'px'
  document.getElementById('mm').style.left = (minLeft + 1.35) * 40 + 'px'
  document.getElementById('ss').style.top = (secTop + 1.35) * 40 + 'px'
  document.getElementById('ss').style.left = (secLeft + 1.35) * 40 + 'px'

  requestAnimationFrame(animateClock)
}

requestAnimationFrame(animateClock)
setInterval(digiClock, 1000)


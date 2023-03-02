let month = "01";
let date = "20";
let year = "2024";
let time = "19:00";
let zone = "GMT-04:00";

var end = new Date(`${month}/${date}/${year} ${time} ${zone}`);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'Done! :D';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);

        document.getElementById('countdown').innerHTML = days + 'd ' + hours + 'h ';
  
      }

    timer = setInterval(showRemaining, 1000 * 60 * 60);

    
    showRemaining();


let options = { weekday: 'long', month: 'short', day: 'numeric', hour: 'numeric', hour12: true};
let intTime = new Intl.DateTimeFormat([], options).formatToParts(end);
console.log(`${intTime[0].value}${intTime[1].value}${intTime[2].value}${intTime[3].value}${intTime[4].value} ${intTime[5].value = '-'} ${intTime[6].value}${intTime[7].value}${intTime[8].value}`);




















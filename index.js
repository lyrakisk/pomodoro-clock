var timer;
var length = 25; //starting pomodoro length
var max_length = 180;
var state = "stopped";
var seconds = 0;
var minutes = length;

function counter(){
  seconds = $(".seconds").html();
  minutes = $(".minutes").html();

  if (seconds == 0){
    if(minutes > 0){
      minutes -= 1;
      seconds = 59;
      $(".seconds").html(seconds);
      $(".minutes").html(minutes);
    }
  } else{
      seconds -= 1;
      if(seconds >= 10){
        $(".seconds").html(seconds);
    } else{
        $(".seconds").html("0"+seconds);
    }
  }

  if (seconds == 0 && minutes == 0){
    clearInterval(timer);
    state = "stopped";
    new Audio('clapping.mp3').play()
  }
}

function reset(){
  clearInterval(timer);
  $(".minutes").html(length);
  $(".seconds").html("00");
  seconds = $(".seconds").html();
  minutes = $(".minutes").html();
}

function add(){
  if(state=="stopped" && length < max_length){
    length += 1;
    minutes = length;
    $(".minutes").html(length);
    $(".length").html(length);
  }
}

function subtract(){
  if(state == "stopped" && length > 1){
    length -= 1;
    $(".minutes").html(length);
    $(".length").html(length);
  }
}

//EVENT HANDLING 
$(".start").click(function(){
  if ((state == "stopped" || state == "paused") && (minutes > 0 || seconds > 0)){
    timer = setInterval(counter, 1000);
    state = "running";
  }
});

$(".stop").click(function(){
  if(state == "running"){
    clearInterval(timer);
    state = "paused";
  }
});

$(".reset").click(function(){
  reset();
  state = "stopped";
});

$(".add").click(function(){
  add();
});

$(".subtract").click(function(){
  subtract();
});
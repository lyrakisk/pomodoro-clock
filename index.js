var timer;
var length = 25; //starting pomodoro length
var state = "stopped";

function counter(){
  var seconds = $(".seconds").html();
  var minutes = $(".minutes").html();
  if (seconds==0){
    if(minutes>0){
      minutes -= 1;
      seconds = 59;
      $(".seconds").html(seconds);
      $(".minutes").html(minutes);
    }
  }
  else{
    seconds -= 1;
    if(seconds>=10){
      $(".seconds").html(seconds);
    }
    else{
      $(".seconds").html("0"+seconds);
    }
  }
  if(seconds==0 && minutes==0){
    clearInterval(timer);
    state = "stopped";
    new Audio('clapping.mp3').play()
  }
}

function reset(){
  clearInterval(timer);
  $(".minutes").html(length);
  $(".seconds").html("00");
}

function add(){
  if(state=="stopped" && length<59){
    length +=1;
    $(".minutes").html(length);
    $(".length").html(length);
  }
}

function subtract(){
  if(state=="stopped" && length>0){
    length -=1;
    $(".minutes").html(length);
    $(".length").html(length);
  }
}

//EVENT HANDLING FUNCTIONS
$(".start").click(function(){
  timer = setInterval(counter,1000);
  state = "running";
});

$(".stop").click(function(){
  if(state=="running"){
    clearInterval(timer);
    state = "paused";
  }
});

$(".reset").click(function(){
  reset();
  state = "stopped";
});

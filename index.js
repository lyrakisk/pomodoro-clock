var timer;
var length = 25; //starting pomodoro length
var state = "stopped";

function counter(){
  var seconds = $(".seconds").html();
  if (seconds==0){
    var minutes = $(".minutes").html();
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
}

function reset(){
  clearInterval(timer);
  $(".minutes").html(length);
  $(".seconds").html("00");
}

function add(){
  if(state=="stopped"){
    length +=1;
    $(".minutes").html(length);
    $(".length").html(length);
  }
}

function subtract(){
  if(state=="stopped"){
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
  clearInterval(timer);
  state = "paused";
});

$(".reset").click(function(){
  reset();
  state = "stopped";
});
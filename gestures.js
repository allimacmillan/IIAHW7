var downX = 0;
var downY = 0;
var clicks = 0;

$( "#gestureArea" ).mousedown(function(event) {
  downX = event.pageX;
  downY = event.pageY;
  $("#gestureResult").text("Mouse down");
});

$( "#gestureArea" ).mouseup(function(event) {
  upX = event.pageX;
  upY = event.pageY;
  if (upX < downX) {
    $("#gestureResult").text("Swipe left");
  } else if (upX > downX) {
    $("#gestureResult").text("Swipe right");
  } else {
    $("#gestureResult").text("Mouse up");
  }
});

$( "#gestureArea" ).dblclick(function() {
  $("#gestureResult").text("Double click");
});

$( "#gestureArea" ).click(function() {
  clicks += 1;
  if (clicks == 3) {
    $("#gestureResult").text("Triple click");
    clicks = 0;
  }
});

$( "#gestureArea" ).mousemove(function() {
  clicks = 0;
});

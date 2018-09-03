var ball = document.getElementById("ball").style;

var x = 0;
var y = 0;
var y_value = 0;
var direction = 1;
var repeat = 0;
var initial_speed = 10;
var final_speed = 0;
var gravity = 10;

function ballmove(Event)
{
    if (Event.keyCode == 32)
        {
//            clearInterval(repeat)
            repeat = setInterval(play,30)
        }
}
function play()
{
    get_y()
    console.log(y)
    y_value += y;
    var yy = y_value +"px";
    ball.bottom = y_value;
    x+=10
    ball.left = x;
}

function get_y()
{
    final_speed = initial_speed - gravity * 0.03;
    y = (initial_speed**2 - final_speed**2)/2*gravity;
    
    
    initial_speed = final_speed;
    return y;
    
}
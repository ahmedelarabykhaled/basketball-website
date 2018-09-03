var ball = document.getElementById("ball").style;
var score_num = document.getElementById("score_num")

var initial_speed = 5;
var final_speed = 0;
var y = 0;
var y_value = 0;
var x = 0;
var gravity = 15;
var repeat = 0; 
var score = 0;

var w = window.innerWidth
var width = w.toString() +"px"


score_num.innerHTML = "0"



function ballmove(Event)
{
    if (Event.keyCode == 32)
        {
            clearInterval(repeat);
            initial_speed = 5;
            final_speed = 0;
            y = 0;
            repeat = setInterval(play,30);
        }
}



    



function play()
{
    if (y < 0 && y_value < 0)
        {
            ball.bottom = "0px";
            clearInterval(repeat)
        }
    else
        {
            get_y()
            y_value += y;
            if (x > window.innerWidth)
                {
                    x = 0;
                }
            else
                {
                    x += 10;        
                }
            
            ball.left = x;
            ball.bottom = y_value;
            console.log(x)
            if (y_value > 300 && y_value < 325)
                {
                    if(x > window.innerWidth-200 && x < window.innerWidth-175)
                        {
                            score += 5;
                            score_num.innerHTML = ""+score.toString()+"";
                        }
                }
        }
}

function get_y()
{
    final_speed = initial_speed - gravity * 0.03;
    y = (initial_speed**2 - final_speed**2)/2*gravity;
    initial_speed = final_speed;
    return y;   
}
var array = [123, "Pick up drycleaning", false];
var [id, title, completed] = array;

var a = 1;
var b = 5;
[a,b] = [b,a];

function countdown({ 
    initial, 
    final: final = 0, 
    interval: interval = 1, 
    initial: current 
}) {
    
    while (current > final) {
        console.log(current);
        current -= interval;
    }

}

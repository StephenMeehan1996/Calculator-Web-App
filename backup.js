var forScreen = [];
var numArray = [];
var operator;
var counter = 0;

if(down === "/" || down === "*" || down === "+" || down === "-" ){
    counter++;
    var num1 = numArray.join("");
    console.log(num1);
    var numArray = [];
}

function writeScreen(pressedButton){

    var toScreen = $("."+ pressedButton).html();
    forScreen.push(toScreen);
    console.log(forScreen);
    $("h1").html(forScreen);
     
 }
$(document).keypress(function(event){

    var down = event.key;
    console.log(down);
    var target ;
    
        switch(down)
    { 
        case "7":
            target = "seven";
            pressed(target);
            writeScreen(target);
            break;
        case "8":
            target = "eight";
            pressed(target);
            writeScreen(target);
            break;
        case "9":
             target = "nine";
             pressed(target);
             writeScreen(target);
            break;
       case "/":
            target = "divide";
            pressed(target);
            writeScreen(target);
            break;
       case "4":
            target = "four";
            pressed(target);
            writeScreen(target);
            break;
        case "5":
             target = "five";
             pressed(target);
             writeScreen(target);
             break;
        case "6":
            target = "six";
            pressed(target);
            writeScreen(target);
            break;
        case "*":
            target = "multiply";
            pressed(target);
            writeScreen(target);
            break;
            case "1":
            target = "one";
            pressed(target);
            writeScreen(target);
            break;
        case "2":
            target = "two";
            pressed(target);
            writeScreen(target);
            break;
        case "3":
             target = "three";
             pressed(target);
             writeScreen(target);
            break;
       case "-":
            target = "minus";
            pressed(target);
            writeScreen(target);
            break;
       case "0":
            target = "zero";
            pressed(target);
            writeScreen(target);
            break;
        case ".":
             target = "point";
             pressed(target);
             writeScreen(target);
             break;
        case "+":
            target = "plus";
            operator = down;
            pressed(target);
            writeScreen(target);
            break;
        case "=":
            target = "equals";
            pressed(target);
            writeScreen(target);
            break;
        case "Enter":
            target = "equals";
            pressed(target);
            writeScreen(target);
            break;
            
        
    }

    
});
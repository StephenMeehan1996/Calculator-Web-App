let num1 = '';
let num2 = '';
let operator = '';
let total = ''; 


$("button").click(function(e){
     
    var button = $(this).attr("class");
    console.log(button);
    pressed(button);

    let btn = e.target.innerHTML;

    if(btn >= '0' && btn <= '9'){
        handleNumber(btn);
    }
    else{
        handleOperator(btn);
    }
    

});

$(document).keypress(function(event){

    var down = event.key;
    let btn = event.key.innerHTML;
    console.log(down);
    var target ;
    
        switch(down)
    { 
        case "7":
            target = "seven";
            pressed(target);
            handleNumber(down);
            break;
        case "8":
            target = "eight";
            pressed(target);
            handleNumber(down);
            break;
        case "9":
             target = "nine";
             pressed(target);
             handleNumber(down);
            break;
       case "/":
            target = "divide";
            pressed(target);
            handleOperator(down);
            break;
       case "4":
            target = "four";
            pressed(target);
            handleNumber(down);
            break;
        case "5":
             target = "five";
             pressed(target);
             handleNumber(down);
             break;
        case "6":
            target = "six";
            pressed(target);
            handleNumber(down);
            break;
        case "*":
            target = "multiply";
            pressed(target);
            handleOperator(down);
            break;
            case "1":
            target = "one";
            pressed(target);
            handleNumber(down);
            break;
        case "2":
            target = "two";
            pressed(target);
            handleNumber(down);
            break;
        case "3":
             target = "three";
             pressed(target);
             handleNumber(down);
            break;
       case "-":
            target = "minus";
            pressed(target);
            handleOperator(down);
            break;
       case "0":
            target = "zero";
            pressed(target);
            handleNumber(down);
            break;
        case ".":
             target = "point";
             pressed(target);
             writeScreen(target);
             break;
        case "+":
            target = "plus";
            pressed(target);
            handleOperator(down);
            break;
        case "=":
            target = "equals";
            pressed(target);
            handleOperator(down);
            break;
        case "Enter":
            target = "equals";
            pressed(target);
            handleOperator(down);
            break;
            
        
    }

    
});

function handleNumber(num)
{
    if(num1 === '')
    {
        num1 = num;

    }
    else
    {
        num2 = num;

    }
    displayButton(num);
}
function handleOperator(oper)
{
     if(operator === '')
     {
         operator = oper
     }
     else
     {
         handleTotal()
         operator = oper;

     }
}
function handleTotal() {
    switch (operator) {
        case '+':
            total = +num1 + +num2;
            displayButton(total);
            break;
        case '-':
            total = +num1 - +num2;
            displayButton(total);
            break;
        case '/':
            total = +num1 / +num2;
            displayButton(total);
            break;
        case '*':
            total = +num1 * +num2;
            displayButton(total);
            break;
        case 'AC':
            $(".display").text("0");
            num1 = '';
            num2 = '';
            operator = '';
            total = '';
            console.log(num1,num2.operator,total);
            break;
    }
    updateVariables();
}


function displayButton(btn){

    $(".display").text(btn);
}

function updateVariables() {
    num1 = total;
    num2 = '';
}


function pressed(pressedButton)
{
    $("."+ pressedButton).addClass("pressed");

    setTimeout(function(){
        $("."+ pressedButton).removeClass("pressed");
    },100);


}


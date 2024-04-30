var numbers = document.getElementById('numbers')
var operators = document.getElementById('operators')
var screen = document.getElementById('screen')
var Rscreen = document.getElementById('Resultscreen')

var Operators = ['+', '-', '*', '/']

var solve = false;

numbers.querySelectorAll('button').forEach(button =>{
    button.addEventListener('click', function(){
        Press(this.textContent);
    })
    // console.log('Done');
});

operators.querySelectorAll('button').forEach(button =>{
    button.addEventListener('click', function(){
        if(this.textContent=='='){

        }else{
            PressOp(this.textContent);
        }
    })
    // console.log('Done');
});

function Press(num){
    if(solve){
        screen.textContent = '';
        solve= false;
    }
    screen.textContent += num;
    // Rscreen.textContent = eval(Rscreen.textContent)
}

function PressOp(oper){
    if(solve){
        screen.textContent = '';
        solve = false;
    }
    screen.textContent += " "+ oper + " ";
    // Rscreen.textContent = eval(Rscreen.textContent)
}


// if(Operators.includes('/')){
//     console.log('works')
// }else{
//     console.log('nah')
// }



function Solve(){
    let x = screen.textContent;
    if(Operators.includes(x.slice(-2))){
    screen.textContent += '0';
    }
    console.log(screen.textContent)
    Rscreen.textContent = eval(screen.textContent);
    screen.textContent = '';
    solve = true;
}

function clearAll(){
    Rscreen.textContent = '';
    screen.textContent = '';
}

function backspace(){
    screen.textContent = screen.textContent.slice(0,-1);
}
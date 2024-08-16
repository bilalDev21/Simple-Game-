let title = document.querySelector('.title');
let turn = 'x';
let square = [];

function theEnd(n1, n2, n3) {
    title.innerHTML = `${square[n1]}  winner`;
    document.getElementById('item'+n1).style.background = '#000';
    document.getElementById('item'+n2).style.background = '#000';
    document.getElementById('item'+n3).style.background = '#000';

    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000)
}
function winner() {
    for (let i=1; i<10; i++) {
        square[i] = document.getElementById('item'+i).innerHTML;
    }
    if (square[1] == square[2] && square[2] == square[3] && square[1] !='') {
        theEnd(1, 2, 3)
    }else if (square[4] == square[5] && square[5] == square[6] && square[4] !='') {
        theEnd(4, 4, 6)
    }else if(square[7] == square[8] && square[7] == square[8] && square[7] !='') {
        theEnd(7, 8, 9)
    }


    else if(square[1] == square[4] && square[4] == square[7] && square[1] !='') {
        theEnd(1, 4, 7)
    }
    else if(square[2] == square[5] && square[5] == square[8] && square[2] !='') {
        theEnd(2, 5, 8)
    }
    else if(square[3] == square[6] && square[6] == square[9] && square[3] !='') {
        theEnd(3, 6, 9)
    }

    
    else if(square[1] == square[5] && square[5] == square[9] && square[1] !='') {
        theEnd(1, 5, 9)
    }
    else if(square[3] == square[5] && square[5] == square[7] && square[3] !='') {
        theEnd(3, 5, 7)
    }


    
}


function Game(id) {
    let element = document.getElementById(id);
    if (turn == 'x' && element.innerHTML == ''){
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O';
    }else if (element.innerHTML == '') {
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X';
    }
    winner()
}
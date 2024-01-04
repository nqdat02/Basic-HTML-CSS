const column = document.querySelector('.column');
const player = document.getElementById('player');
const btn = document.getElementById('climb');
let isClimbing = false;
let isFalling = false;
let isChange = false;
let climbHeight = 0;
const climbStep = 10;
const fallStep = 5;

const main = () => {
    btn.addEventListener('mousedown', () => {
        isClimbing = true;
        isFalling = false;
        climb();
    });
    
    btn.addEventListener('mouseup', () => {
        isClimbing = false;
        isFalling = true;
        fall();
    });
}

const climb = () => {
    if (isClimbing && climbHeight < 500) {
        climbHeight += climbStep;
        if (isChange){
            player.src = 'Ca2-6/man.png';
            isChange = false;            
        }
        else {
            player.src = 'Ca2-6/man2.png';
            isChange = true;
        }
        player.style.bottom = climbHeight + 'px';
        setTimeout(climb, 100);
    } else {
        if (climbHeight >= 500) {
            player.src = 'Ca2-6/man.png';
            alert('Chúc mừng bạn đã giành được cờ !!!');
            climbHeight = 0;
            player.style.bottom = 0 + 'px';
            isClimbing = false;
        }
    }
}

const fall = () => {
    if (isFalling && climbHeight > 0) {
        climbHeight -= fallStep;
        player.style.bottom = climbHeight + 'px';
        setTimeout(fall, 100);
    } else {
        isFalling = false;
    }
}

main();
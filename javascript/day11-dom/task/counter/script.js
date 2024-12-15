let count = 0;

document.querySelector('#pls').addEventListener('click', add);
document.querySelector('#min').addEventListener('click', min);


function add() {
    count++;
    document.querySelector('#show').innerHTML = count;

    if(count > 0) {
        document.querySelector('#min').disabled = false;
    }
    
}
function min() {
    if (count <= 0) {
        document.querySelector('#min').disabled = true;
    }
    else {
        count--;
        document.querySelector('#min').disabled = false;
    }

    document.querySelector('#show').innerHTML = count;
}


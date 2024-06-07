const countValue = document.querySelector('#counter');

function increament () {
    // get value from Ui , we get string from countvalue.innertext so we use parseint for int value
    let value = parseInt(countValue.innerText);
    // updating value
    value = value + 1;
    // set value into UI
    countValue.innerText=value;

}

function decreament() {

    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText=value;
    
}



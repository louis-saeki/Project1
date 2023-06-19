function sayHello(){
    const input = document.getElementById("userInput").value;
    alert(`Hello ${input}! How are you today?`)
}


function sayHelloToFriend(){
    const input = document.getElementById("myFriend").value;
    alert(`Hello ${input}! How are you today?`)
}

function updateTable() {
    const input = parseInt(document.getElementById("userInput").value);
    const val1 = parseInt(document.getElementById('r1c2-value').innerHTML);
    const val2 = parseInt(document.getElementById('r2c2-value').innerHTML);
    const val3 = parseInt(document.getElementById('r3c2-value').innerHTML);
    const total1 = val1 * input;
    const total2 = val2 * input;
    const total3 = val3 * input;
    document.getElementById('table1').rows[1].cells[2].innerText = total1.toString();
    document.getElementById('table1').rows[2].cells[2].innerText = total2.toString();
    document.getElementById('table1').rows[3].cells[2].innerText = total3.toString();
}


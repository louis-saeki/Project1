function sayHello(){
    const input = document.getElementById("userInput").value;
    alert(`Hello ${input}! How are you today?`)
}


function sayHelloToFriend(){
    const input = document.getElementById("myFriend").value;
    alert(`Hello ${input}! How are you today?`)
}

function updateTable1() {
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

function updateTable2() {
    const input = parseInt(document.getElementById("table2-input").value);
    const el = document.getElementById('table2');
    const val1 = parseInt(el.rows[1].cells[1].innerHTML);
    const val2 = parseInt(el.rows[2].cells[1].innerHTML);
    const val3 = parseInt(el.rows[3].cells[1].innerHTML);
    const total1 = val1 * input;
    const total2 = val2 * input;
    const total3 = val3 * input;
    el.rows[1].cells[2].innerText = total1.toString();
    el.rows[2].cells[2].innerText = total2.toString();
    el.rows[3].cells[2].innerText = total3.toString();
}


function updateTable(tableId, type) {
    const input = parseInt(document.getElementById(`${tableId}-input`).value);
    const el = document.getElementById(tableId);
    const val1 = parseInt(el.rows[1].cells[1].innerHTML);
    const val2 = parseInt(el.rows[2].cells[1].innerHTML);
    const val3 = parseInt(el.rows[3].cells[1].innerHTML);

    let total1 = val1;
    let total2 = val2;
    let total3 = val3;

    if(type === 'multiply') {
        total1 = val1 * input;
        total2 = val2 * input;
        total3 = val3 * input;
    }

    if(type === 'add') {
        total1 = val1 + input;
        total2 = val2 + input;
        total3 = val3 + input;
    }

    if(type === 'subtract') {
        total1 = val1 - input;
        total2 = val2 - input;
        total3 = val3 - input;
    }

    if(type === 'divide') {
        total1 = val1 / input;
        total2 = val2 / input;
        total3 = val3 / input;
    }

    el.rows[1].cells[2].innerText = total1.toString();
    el.rows[2].cells[2].innerText = total2.toString();
    el.rows[3].cells[2].innerText = total3.toString();
}


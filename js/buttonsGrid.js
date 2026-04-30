const order = ['btn1','btn2','btn3','btn6','btn9','btn8','btn7','btn4'];

document.getElementById('btn5').onclick = function() {
    const labels = order.map(id => document.getElementById(id).innerHTML);
    labels.unshift(labels.pop());
    order.forEach((id, i) => {
        document.getElementById(id).innerHTML = labels[i];
    });
};
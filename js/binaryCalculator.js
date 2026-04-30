const res = document.getElementById('res');

document.getElementById('btn0').onclick = () => res.innerHTML += '0';
document.getElementById('btn1').onclick = () => res.innerHTML += '1';
document.getElementById('btnSum').onclick = () => res.innerHTML += '+';
document.getElementById('btnSub').onclick = () => res.innerHTML += '-';
document.getElementById('btnMul').onclick = () => res.innerHTML += '*';
document.getElementById('btnDiv').onclick = () => res.innerHTML += '/';

document.getElementById('btnClr').onclick = () => res.innerHTML = '';

document.getElementById('btnEql').onclick = function() {
    const expression = res.innerHTML;

    let a, b, operator, result;

    if (expression.includes('+')) {
        [a, b] = expression.split('+');
        result = parseInt(a, 2) + parseInt(b, 2);
    } else if (expression.includes('-')) {
        [a, b] = expression.split('-');
        result = parseInt(a, 2) - parseInt(b, 2);
    } else if (expression.includes('*')) {
        [a, b] = expression.split('*');
        result = parseInt(a, 2) * parseInt(b, 2);
    } else if (expression.includes('/')) {
        [a, b] = expression.split('/');
        result = Math.floor(parseInt(a, 2) / parseInt(b, 2));
    }

    res.innerHTML = result.toString(2);
};
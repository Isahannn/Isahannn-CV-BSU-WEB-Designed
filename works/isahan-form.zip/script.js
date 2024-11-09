document.getElementById('date').addEventListener('input', function(e) {
    var input = e.target;
    var value = input.value.replace(/\D/g, '').slice(0, 6);
    if (value.length >= 2) {
        value = value.slice(0, 2) + '.' + value.slice(2);
    }
    if (value.length >= 5) {
        value = value.slice(0, 5) + '.' + value.slice(5);
    }
    input.value = value;
});
var btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    document.getElementById('welcome').className = "hidden";
    document.getElementById('play').classList.remove('hidden');
for (var i = 0; i < 100; i++) {
    var number = i + 1;
    if (number%15==0) {
        document.getElementById('numeri').innerHTML += '<li class="blue zoom">FizzBuzz!!</li>';
    }
    else if (number%3==0) {
        document.getElementById('numeri').innerHTML += '<li class="red zoom">Fizz</li>';    
    } 
    else if (number%5==0) {
        document.getElementById('numeri').innerHTML += '<li class="green zoom">Buzz</li>';
    } 
    else {
        document.getElementById('numeri').innerHTML += '<li class="normal">' + number + '</li>'; 
    }
}
});
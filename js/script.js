for (var i = 0; i < 100; i++) {
    var number = i + 1;
    var three = number%3==0;
    var five = number%5==0;
    if (three && five) {
        document.getElementById('numeri').innerHTML += '<li class="blue">FizzBuzz!!</li>';
    }
    else if (three) {
        document.getElementById('numeri').innerHTML += '<li class="red">Fizz</li>';    
    } 
    else if (five) {
        document.getElementById('numeri').innerHTML += '<li class="green">Buzz</li>';
    } 
    else {
        document.getElementById('numeri').innerHTML += '<li class="normal">' + number + '</li>'; 
    }
}

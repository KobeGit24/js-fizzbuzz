for (var i = 0; i < 100; i++) {
    var numero = i + 1;
    var three = numero%3==0;
    var five = numero%5==0;
    if (three && five) {
        document.getElementById('numeri').innerHTML += 'FizzBuzz' + " ";  
        document.getElementById('numeri').className = "red";
    }
    else if (three) {
        document.getElementById('numeri').innerHTML += 'Fizz' + " ";  
        document.getElementById('numeri').className = "green";      
    } 
    else if (five) {
        document.getElementById('numeri').innerHTML += 'Buzz' + " "; 
        document.getElementById('numeri').className = "blue";
    } 
    else {
        document.getElementById('numeri').innerHTML += numero + " "; 
    }
}

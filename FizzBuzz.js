let output = document.getElementById('output');

function fizzBuzz(number){
    for (let i = 1; i <= number; i++) {
        if (i % 7 == 0 && i % 8 == 0) {
            output.innerHTML += 'Fizz Buzz <br>';
        }else if (i % 8 == 0){
            output.innerHTML += 'Buzz <br>';
        }else if (i % 7 == 0){
            output.innerHTML += 'Fizz <br>';
        }else{
            output.innerHTML += i + '<br>';
        }
    }
}
fizzBuzz(100)
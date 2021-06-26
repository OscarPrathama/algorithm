let output = document.getElementById('output');

function Ganjil(number){
    for (let i = 0; i <= number; i++) {
        if (i % 2 == 0) {
            output.innerHTML += i + ' ';   
        }
    }
}
// Ganjil(12)

function Genap(number){
    for (let i = 0; i < number; i++) {
        if (i % 2 == 1) {
            output.innerHTML += i + ' ';
        }
    }
}
Genap(12)
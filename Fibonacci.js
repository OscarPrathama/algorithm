let output = document.getElementById('output');

function Fibonacci(number){
    let a = 0, b = 1, c = a + b;
    for (let i = 0; i <= number; i++) {
        if (i == 0 || i == 1) {
            output.innerHTML += i + ' ';
        }else{
            output.innerHTML += c + ' ';
            a = b, b = c, c = a + b
        }
    }
}
Fibonacci(15)

/*
expected result : 0 1 1 2 3 5 8

start from iterate 2
iterate 2
    - a = 0
    - b = 1
    - c = a + b (1)
iterate 3
    - a = b (1)
    - b = c (1) (liat nilai c di iterate sebelumnya) 
    - c = a + b (2)
iterate 4
    - a = b (1)
    - b = c (2)
    - c = a + b (3)
iterate 5
    - a = b (2)
    - b = c (3)
    - c = a + b (5)
iterate 6
    - a = b (3)
    - b = c (5)
    - c = a + b (8)
*/

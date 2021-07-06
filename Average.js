let output = document.getElementById('output');
let x = null;
function getAvg(...data){
    for (let i = 0; i < data.length; i++) {
        x += data[i];
        output.innerHTML = x/data.length;
    }
}getAvg(25, 25, 25, 25)



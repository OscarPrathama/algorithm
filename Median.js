let output = document.getElementById('output')

function getMedian(...data){
    output.innerHTML = data.sort();
}
getMedian(1, 4, 2, 12, 53, 12)
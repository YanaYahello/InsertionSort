/*
 * read data from textarea, prints validation message if needed
 */
function readData(){
    let inputArea = document.getElementById('inputArr').value.replace(new RegExp('\n', 'g'), '' ).split(',').map(el => parseInt(el));
    let isValid = true;
    inputArea.forEach(function(elem){
        if (isNaN(elem)){
            document.getElementById('validationError').innerHTML='Array contains non number element.';
            isValid = false;
        }
    });
    return isValid ? inputArea : undefined;
}

function clearPreviousResults() {
    document.getElementById('sortedArr').value='';
    document.getElementById('validationError').innerHTML='';
    document.getElementById('numberOfElements').innerText ='';
}

function processSorting() {
    clearPreviousResults();
    var inputArray = readData();
    if (inputArray) {
        var sortedArray = insertionSort(inputArray);
        //print results
        document.getElementById('sortedArr').value = sortedArray.join(', ');
        document.getElementById('numberOfElements').innerHTML = inputArray.length;
    }
}

 function insertionSort (arr){
     for ( let i = 1; i < arr.length; i++ ) {
         const current = arr[i];
         let j = i;
         while (j > 0 && arr[j - 1] > current) {
             arr[j] = arr[j - 1];
             j--;
         }
         arr[j] = current;
     }
     return arr;
 }
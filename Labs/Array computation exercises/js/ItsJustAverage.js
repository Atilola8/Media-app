//This excute the code on the brower 
window.onload = () => clearBox();

//This is to determine the Average and sum of the numbers input.  
function averageAndSum() {
    var numbers = document.querySelector('#numInput').value;
    var sum = 0;
    var average;
    var average_output = document.querySelector('#average-output');
    var sum_output = document.querySelector('#sum-output');

    numbers = numbers.split(',');
    var count = numbers.length;

    for (var i = 0; i < numbers.length; i++) {
        numbers[i] = parseFloat(numbers[i]);
        sum += numbers[i];
    }
    average = sum / count;

    average_output.innerHTML = 'AVERAGE: ' + average;
    sum_output.innerHTML = 'SUM: ' + sum;

}
//This is to clear the words on the browser to refresh. 
function clearBox() {
    document.querySelector('#numInput').value = '';
}


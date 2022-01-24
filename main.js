var item;
var itemList = [];
var listPanel = document.querySelector("#listPanel");
var itemBox = document.querySelector("#item");

function addItemToList(){
    itemList.push(itemBox.value);

    itemBox.value = '';
}

function displayList(){
    for(var i = 0 ; i < itemList.length ; i ++){
        listPanel.innerHTML += "<br>"+itemList[i];
    }
    // for(var item in itemList){
    //     listPanel.innerHTML += "<br>"+item;
    // }
}

function calc(){
    var number1;
    var number2;
    var operation;
    var answer;
    var answerPanel;

    answerPanel = document.querySelector("#answerPanel");
    
    number1 = parseInt(document.querySelector("#n1").value);
    number2 = parseInt(document.querySelector("#n2").value);
    operation = document.querySelector("#op").value;
    
    switch(operation){
        case 'MUL':
            //Multiply
            answer = number1 * number2;
            break;
        case 'SUB':
            //Subtract
            answer = number1 - number2;
            break;
        case 'ADD':
            //Add
            answer = number1 + number2;
            break;
        case 'DIV':
            //Div
            answer = number1 / number2;
            break;    
    }

    answerPanel.innerHTML += "<br>JARVIS SAYS: The answer is "+answer;
}
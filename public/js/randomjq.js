$(document).ready(function(){

    setTimeout(function(){
        $('div.head').slideDown();
    }, 500)

    $('h1.display-3').fadeIn(3500);

    setTimeout(function(){
        $('h1.display-3').slideUp();
    }, 7000)
    
    var participants = [];
    var giftLs = [];
    var i = 0;
    var giftNumber = 1;

    var submitBtn = document.getElementById("submit");
    var myTable = document.getElementById("table-body");
    var randomBtn = document.getElementById("random");
    var randomTable = document.getElementById("random-body");

    let displayPart = function(i){
        var newRow = myTable.insertRow(i);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        cell1.innerHTML = participants[i];
        if (giftLs[i] != "-") {
            cell2.innerHTML = "gift [ "+giftLs[i]+" ]";
        }else{
            cell2.innerHTML = "-";
        }
    }

    let displayRandom = function(i){
        var newRow = randomTable.insertRow(i);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        cell1.innerHTML = participants[i];
        if(giftLs[i] != "-"){
            cell2.innerHTML = "gift [ "+giftLs[i]+" ]";
        }else{
            cell2.innerHTML = "-";
        }
    }

    let submitClick = function(){
        let input = document.getElementById('name').value;
        let checkResult = document.getElementById('gift').checked;
        participants[i] = input;
        if (checkResult === true) {
            giftLs[i] = giftNumber;
            giftNumber++;
        }else{
            giftLs[i] = "-";
        }
        document.getElementById('name').value = '';
        document.getElementById('gift').checked = false;
        displayPart(i);
        i++;
    };

    let randomClick = function(){
        randomTable.innerHTML = "";
        for(let i=0; i<giftLs.length; i++){
            randomNumber = Math.floor(Math.random()*giftLs.length);
            let p = giftLs[i];
            giftLs[i] = giftLs[randomNumber];
            giftLs[randomNumber] = p;
        }
        for(let j=0; j<giftLs.length; j++){
            displayRandom(j);
        }
    }

    randomBtn.addEventListener('click',randomClick);
    submitBtn.addEventListener('click',submitClick);
})
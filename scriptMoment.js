$('#submit').on('click', function(){

console.log("Submit Clicked")

    $.getJSON("stock.json", function(result){
    	
    	console.log(result.bboList[0]);
    	console.log(result.tradeList[0]);

        var x = 0;
        while (x<5){
        console.log(result.bboList[x].timeStr);
        x++;
    }

        console.log(result.tradeList[0].time);


        }); //End getJSON
    }); //End Click Event



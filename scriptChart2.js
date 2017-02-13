var chartData1 = [];
var chartData2 = [];
var chartData3 = [];
var chartData4 = [];
var result = {};

$('#submit').on('click', function(){

console.log("Submit Clicked")

    $.getJSON("stock.json", function(result){
    	
    	console.log(result.bboList[0].ask);
    	// console.log(result.tradeList);

        // $.each(result.bboList, function(i, field){
        	// console.log(field);
            // $("#main").append(field + " ");

        	// }) //End each


    //     }); //End getJSON
    // }); //End Click Event


// FROM CODE SANDBOX

// var array = [];
// var time = "09:30:10.123".split(':');

// var split = time[2].split('.');
// time.push(split[0], split[1]);
// time.splice(2,1);

// for(var x = 0; x<=3;x++){
// array.push(parseInt(time[x]));
// }
// console.log(array);


var chartData = generateChartData();

function generateChartData() {
  var chartData = [];
  
  // var firstDate = new Date( 2012, 0, 1 );
  // firstDate.setDate( firstDate.getDate() - 1000 );
  // firstDate.setHours( 0, 0, 0, 0 );

  // for ( var i = 0; i < 1000; i++ ) {
  //   var newDate = new Date( firstDate );
  //   newDate.setHours( 0, i, 0, 0 );
  //   var a = Math.round( Math.random() * ( 40 + i ) ) + 100 + i;
  //   var b = Math.round( Math.random() * 100000000 );


var firstDate = new Date(2017, 1, 13);
  firstDate.setHours(0, 0, 0, 0);
  
  for(var x=0; x<=result.bboList.length-1; x++){
var newDate = new Date(firstDate);
  var timeStr = result.bboList[x].timeStr;
  var time = timeStr.split(':');
  var split = time[2].split('.');
  time.push(split[0], split[1]);
  time.splice(2,1);
  newDate.setHours(time[0], time[1], time[2], time[3]);

  var ask = result.bboList[x].ask;
      ask = ask.toString()
      ask = ask.slice(0,4)
      ask = ask.slice(0,2) + '.' + ask.slice(2,4)
      ask = Number(ask);

  var bid = result.bboList[x].bid;
      bid = bid.toString()
      bid = bid.slice(0,4)
      bid = bid.slice(0,2) + '.' + bid.slice(2,4)
      bid = Number(bid);


    chartData.push( {
      "date": newDate,
      "value": ask,
      "value2": bid,
      // "volume": b
    } );
  }
  return chartData;
}

var chart = AmCharts.makeChart( "chartdivTwo", {
  "type": "stock",
  "theme": "light",
  "categoryAxesSettings": {
    "minPeriod": "mm"
  },

  "dataSets": [ {
    "color": "#b0de09",
    "fieldMappings": [ {
      "fromField": "value",
      "toField": "value"
    }, {
      "fromField": "value2",
      "toField": "value2"
    } ],

    "dataProvider": chartData,
    "categoryField": "date"
  } ],

  "panels": [ {
    "showCategoryAxis": false,
    "title": "Value",
    "percentHeight": 100,

    "stockGraphs": [ {
      // "id": "g1",
      "valueField": "value",
      "type": "smoothedLine",
      "lineThickness": 2,
      "useDataSetColors": false
      // "bullet": "round"
    }, {
      "valueField": "value2",
      "lineThickness": 2,
      "type": "smoothedLine",
      "useDataSetColors": false
    }] ,


    "stockLegend": {
      "valueTextRegular": " ",
      "markerType": "none"
    }
  }, {
    "title": "Time",
    "percentHeight": 30,
    "stockGraphs": [ {
      "valueField": "volume",
      "type": "column",
      "cornerRadiusTop": 0,
      "fillAlphas": 1
    } ],

    "stockLegend": {
      "valueTextRegular": " ",
      "markerType": "none"
    }
  } ],

  "chartScrollbarSettings": {
    "graph": "g1",
    "usePeriod": "10mm",
    "position": "top"
  },

  "chartCursorSettings": {
    "valueBalloonsEnabled": true
  },

  "periodSelector": {
    "position": "top",
    "dateFormat": "YYYY-MM-DD JJ:NN",
    "inputFieldWidth": 150,
    "periods": [ {
      "period": "hh",
      "count": 1,
      "label": "1 hour",
      "selected": true
    }, {
      "period": "hh",
      "count": 2,
      "label": "2 hours"
    }, {
      "period": "hh",
      "count": 5,
      "label": "5 hour"
    }, {
      "period": "hh",
      "count": 12,
      "label": "12 hours"
    }, {
      "period": "MAX",
      "label": "MAX"
    } ]
  },

  "panelsSettings": {
    "usePrefixes": true
  },

  "export": {
    "enabled": true,
    "position": "bottom-right"
  }
} );


        }); //End getJSON
    }); //End Click Event




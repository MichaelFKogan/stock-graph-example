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



/**
 * Add guide labels for each last data point
 * This will use the first data set
 */
AmCharts.addInitHandler(function(chart) {

  // get sata set
  var dataSet = chart.dataSets[0];

  // iterate through all of the panels
  for (var i = 0; i < chart.panels.length; i++) {

    // get panel
    var panel = chart.panels[i];

    // get last data point
    var dataPoint = dataSet.dataProvider[dataSet.dataProvider.length - 1];

    // init guides if necessary
    if (typeof panel.valueAxes[0].guides !== "object")
      panel.valueAxes[0].guides = [];

    // iterate through all graphs in chart
    for (var x = 0; x < panel.stockGraphs.length; x++) {

      // get graph
      var graph = panel.stockGraphs[x];

      // add separate field for label
      if (graph.type === undefined || graph.type === "line" || graph.type === "smoothedLine") {

        // add a guide at this value
        panel.valueAxes[0].guides.push({
          "value": dataPoint[graph.valueField],
          "inside": false,
          "label": dataPoint[graph.valueField],
          "lineAlpha": 0,
          "color": chart.colors[x]
        });

      }
    }
  }

}, ["stock"]);

var chart = AmCharts.makeChart("chartdiv", {
  "type": "stock",
  "theme": "light",

  "dataSets": [{
    "fieldMappings": [{
      "fromField": "value",
      "toField": "value"
    }, {
      "fromField": "value2",
      "toField": "value2"
    }],

    "dataProvider": generateChartData(),
    "categoryField": "date"
  }],

  "panels": [{
    "showCategoryAxis": false,
    "title": "Value",
    "percentHeight": 100,
    }],

    
    "stockGraphs": [{
      "valueField": "value",
      "lineThickness": 2,
      "type": "smoothedLine",
      "useDataSetColors": false
    }, {
      "valueField": "value2",
      "lineThickness": 2,
      "type": "smoothedLine",
      "useDataSetColors": false
    }]
  }],

  "chartCursorSettings": {
    "valueBalloonsEnabled": true
  },

  "valueAxesSettings": {
    "inside": false
  },
  
  "categoryAxesSettings": {
    "minPeriod": "mm",
    "equalSpacing": true,
    "startOnAxis": true
  },

  "panelsSettings": {
    "marginRight": 50
  }
});

function generateChartData() {
  // console.log(result)
  var chartData = [];
  
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

    chartData.push({
      "date": newDate,
      "value": ask,
      "value2": bid,
    });
    }
  return chartData;
}


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



        }); //End getJSON
    }); //End Click Event




var chart;

var chartData = [
    {
        "makos": "6500 Series<br>12345 Makos",
        "V3.01": 0,
        "V3.0": 0,
        "Holding": 7,
        "Base": 3,
        "V5.0.1.6": 80,
        "V5.0.2.1": 10
    },
    {
        "makos": "6086 Series<br>1234 Makos",
        "V3.01": 95,
        "V3.0": 4,
        "Holding": 0.7,
        "Base": 0.3,
        "V5.0.1.6": 0,
        "V5.0.2.1": 0
    },
    {
        "makos": "7550 Series<br>123 Makos",
        "V3.01": 50,
        "V3.0": 45,
        "Holding": 2.2,
        "Base": 2.8,
        "V5.0.1.6": 0,
        "V5.0.2.1": 0
    },
    {
        "makos": "8875 Series<br>12 Makos",
        "V3.01": 4,
        "V3.0": 95,
        "Holding": 1,
        "Base": 0,
        "V5.0.1.6": 0,
        "V5.0.2.1": 0
    }
];

AmCharts.ready(function () {
    // SERIAL CHART
    chart = new AmCharts.AmSerialChart();
    chart.dataProvider = chartData;
    chart.categoryField = "makos";
    chart.plotAreaBorderAlpha = 0.2;
    chart.marginTop = 10;
    
    // AXES
    // Category
    var categoryAxis = chart.categoryAxis;
    categoryAxis.gridAlpha = 0.1;
    categoryAxis.axisAlpha = 0;
    categoryAxis.gridPosition = "start";
    //categoryAxis.labelsEnabled = false;
    
    // value                      
    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.stackType = "regular";
    valueAxis.gridAlpha = 0.1;
    valueAxis.axisAlpha = 0;
    valueAxis.maximum = 100;
    chart.addValueAxis(valueAxis);
    
    //Balloons
    var balloon = chart.balloon;
    balloon.adjustBorderColor = true;
    balloon.color = "#414143";
    balloon.cornerRadius = 0;
    balloon.borderThickness = 1;
    balloon.fillAlpha = 1;
    
    // GRAPHS
    // firstgraph 
    var graph = new AmCharts.AmGraph();
    graph.title = "V3.01";
    graph.valueField = "V3.01";
    graph.type = "column";
    graph.lineAlpha = 0;
    graph.fillAlphas = 1;
    graph.lineColor = "#305f9c";
    graph.totalText = "hi";
    graph.balloonText = "<b><span>[[title]]</b></span><br><span style='font-size:14px'><b>[[value]]%</b> Makos</span>";
    chart.addGraph(graph);
    
    // fifth graph 
    graph = new AmCharts.AmGraph();
    graph.title = "V5.0.1.6";
    graph.valueField = "V5.0.1.6";
    graph.type = "column";
    graph.lineAlpha = 0;
    graph.fillAlphas = 1;
    graph.lineColor = "#305f9c";
    graph.balloonText = "<b><span>[[title]]</b></span><br><span style='font-size:14px'><b>[[value]]%</b> Makos</span>";
    chart.addGraph(graph);
    
    // second graph                              
    graph = new AmCharts.AmGraph();
    graph.title = "V3.0";
    graph.valueField = "V3.0";
    graph.type = "column";
    graph.lineAlpha = 0;
    graph.fillAlphas = 1;
    graph.lineColor = "#3a87ad";
    graph.balloonText = "<b><span>[[title]]</b></span><br><span style='font-size:14px'><b>[[value]]%</b> Makos</span>";
    chart.addGraph(graph);
    
    // sixth graph  
    graph = new AmCharts.AmGraph();
    graph.title = "V5.0.2.1";
    graph.valueField = "V5.0.2.1";
    graph.type = "column";
    graph.lineAlpha = 0;
    graph.fillAlphas = 1;
    graph.lineColor = "#3a87ad";
    graph.balloonText = "<b><span>[[title]]</b></span><br><span style='font-size:14px'><b>[[value]]%</b> Makos</span>";
    chart.addGraph(graph);
    
    // third graph              
    graph = new AmCharts.AmGraph();
    graph.title = "Holding";
    graph.valueField = "Holding";
    graph.type = "column";
    graph.lineAlpha = 0;
    graph.fillAlphas = 1;
    graph.lineColor = "#6eb2cc";
    graph.balloonText = "<b><span>[[title]]</b></span><br><span style='font-size:14px'><b>[[value]]%</b> Makos</span>";
    chart.addGraph(graph);
    
    // fourth graph 
    graph = new AmCharts.AmGraph();
    graph.title = "Base";
    graph.valueField = "Base";
    graph.type = "column";
    graph.lineAlpha = 0;
    graph.fillAlphas = 1;
    graph.lineColor = "#a6d9e8";
    graph.balloonText = "<b><span>[[title]]</b></span><br><span style='font-size:14px'><b>[[value]]%</b> Makos</span>";
    chart.addGraph(graph);
     
      
    // LEGEND
 //   var legend = new AmCharts.AmLegend();
 //   legend.position = "top";
 //   legend.borderAlpha = 0;
 //   legend.horizontalGap = 10;
 //  legend.switchType = "v";
 //   chart.addLegend(legend);
    
    // WRITE
    chart.write("chartdiv");
});

// Make chart 2D/3D
function setDepth() {
    if (document.getElementById("rb1").checked) {
        chart.depth3D = 0;
        chart.angle = 0;
    } else {
        chart.depth3D = 20;
        chart.angle = 30;
    }
    chart.validateNow();
}
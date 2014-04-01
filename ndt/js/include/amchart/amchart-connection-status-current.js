var chart;

var chartData = [
    {
        "Online": 130,
        "Offline": 4,
        "AwaitingConnection": 24
    }
];

AmCharts.ready(function () {
    // SERIAL CHART
    chart = new AmCharts.AmSerialChart();
    chart.dataProvider = chartData;
    chart.categoryField = "makos";
    chart.plotAreaBorderAlpha = 0;
    chart.autoMargins = false;
    chart.marginLeft = 0;
    chart.marginRight = 0;
    chart.marginTop = 20;
    chart.marginBottom = 0;
    chart.color = "#414143";
    chart.fontFamily = "DejaRip";
    chart.fontSize = 14;
    
    // AXES
    // Category
    var categoryAxis = chart.categoryAxis;
    categoryAxis.gridAlpha = 0;
    categoryAxis.axisAlpha = 0;
    categoryAxis.gridPosition = "start";
    //categoryAxis.labelsEnabled = false;
    
    // value                      
    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.stackType = "100%";
    valueAxis.gridAlpha = 0;
    valueAxis.axisAlpha = 0;
    valueAxis.labelsEnabled = true;
    valueAxis.totalText = "[[total]] total Makos";
    valueAxis.totalTextColor = "#414143";
    chart.addValueAxis(valueAxis);
    
    //Balloons
    var balloon = chart.balloon;
    balloon.adjustBorderColor = true;
    balloon.cornerRadius = 0;
    balloon.borderThickness = 1;
    balloon.fillAlpha = 1;
    balloon.showBullet = true;
    
    // GRAPHS
    
    
    // second graph                              
    graph = new AmCharts.AmGraph();
    graph.title = "Offline";
    graph.labelText = "[[title]]";
    graph.valueField = "Offline";
    graph.type = "column";
    graph.markerType = "triangleUp";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6;
    graph.lineColor = "#e35559";
    graph.color = "#ffffff";
    graph.balloonText = "<span style='font-size:14px;'><i class='icon-warning-sign red'></i> [[value]] [[title]]</span>";
    chart.addGraph(graph);
    
    // firstgraph 
    var graph = new AmCharts.AmGraph();
    graph.title = "Secondary internet connection";
    graph.labelText = "[[title]]";
    graph.valueField = "AwaitingConnection";
    graph.type = "column";
    graph.markerType = "square";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6;
    graph.lineColor = "#e2881b";
    graph.color = "#ffffff";
    graph.balloonText = "<span style='font-size:14px;'><i class='icon-flag orange'></i> [[value]] [[title]]</span>";
    chart.addGraph(graph);
    
    // third graph              
    graph = new AmCharts.AmGraph();
    graph.title = "Primary internet connection";
    graph.labelText = "[[title]]";
    graph.valueField = "Online";
    graph.type = "column";
    graph.markerType = "round";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6;
    graph.lineColor = "#44b3b7";
    graph.color = "#ffffff";
    graph.balloonText = "<span style='font-size:14px;'><i class='icon-ok-sign green'></i> [[value]] [[title]]</span>";
    chart.addGraph(graph);
    
    // LEGEND
    var legend = new AmCharts.AmLegend();
    legend.position = "bottom";
    //legend.valueText = "[[value]]";
//    legend.valueWidth = 10;
    legend.valueAlign = "left";
    legend.equalWidths = false;
    legend.markerSize = 8;
    legend.autoMargins = false;
    legend.periodValueText = "[[value.sum]]";               
    chart.addLegend(legend);
    
    // WRITE
    chart.write("connection-status-current");
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
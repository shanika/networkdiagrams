var chart;

var chartData = [
    {
        "downloaddsl": 1617,
        "downloadcellular": 691,
        "uploaddsl": 1138,
        "uploadcellular": 530
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
    valueAxis.totalText = "[[total]] GB usage";
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
        
    // fourth graph              
    graph = new AmCharts.AmGraph();
    graph.title = "Upload Cellular";
    graph.labelText = "[[title]]";
    graph.valueField = "uploadcellular";
    graph.type = "column";
    graph.lineAlpha = 0.5;
    graph.fillAlphas = 0.3;
    graph.lineColor = "#7c52a8";
    graph.color = "#ffffff";
    graph.markerType = "triangleUp";
    graph.balloonText = "<span><i class='icon-download purple'></i> <b>[[title]]</b>: [[value]] GB</span>";
    chart.addGraph(graph);
    
    // third graph              
    graph = new AmCharts.AmGraph();
    graph.title = "Upload xDSL";
    graph.labelText = "[[title]]";
    graph.valueField = "uploaddsl";
    graph.type = "column";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6;
    graph.lineColor = "#7c52a8";
    graph.color = "#ffffff";
    graph.markerType = "triangleUp";
    graph.balloonText = "<span><i class='icon-Upload purple'></i> <b>[[title]]</b>: [[value]] GB</span>";
    chart.addGraph(graph);
    
    // secondgraph 
    var graph = new AmCharts.AmGraph();
    graph.title = "Download Cellular";
    graph.labelText = "[[title]]";
    graph.valueField = "downloadcellular";
    graph.type = "column";
    graph.lineAlpha = 0.5;
    graph.fillAlphas = 0.3;
    graph.lineColor = "#305f9c";
    graph.color = "#ffffff";
    graph.markerType = "triangleDown";
    graph.balloonText = "<span><i class='icon-download navyblue'></i> <b>[[title]]</b>: [[value]] GB</span>";
    chart.addGraph(graph);
    
    // first graph                              
    graph = new AmCharts.AmGraph();
    graph.title = "Download xDSL";
    graph.labelText = "[[title]]";
    graph.valueField = "downloaddsl";
    graph.type = "column";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6;
    graph.lineColor = "#305f9c";
    graph.color = "#ffffff";
    graph.markerType = "triangleDown";
    graph.balloonText = "<span><i class='icon-download navyblue'></i> <b>[[title]]</b>: [[value]] GB</span>";
    chart.addGraph(graph);
    
    // LEGEND
    var legend = new AmCharts.AmLegend();
    legend.position = "bottom";
    legend.valueAlign = "left";
    legend.equalWidths = false;
    legend.markerSize = 8;
    legend.autoMargins = false;
    legend.periodValueText = "[[value.sum]] GB";               
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
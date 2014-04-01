var chart;

var chartData = [
    {
        "day": 4,
        "PCICompliant": 158,
        "PCInonCompliant": 65
    },
    {
        "day": 5,
        "PCICompliant": 159,
        "PCInonCompliant": 68
    },
    {
        "day": 6,
        "PCICompliant": 161,
        "PCInonCompliant": 69
    },
    {
        "day": 7,
        "PCICompliant": 163,
        "PCInonCompliant": 64
    },
    {
        "day": 8,
        "PCICompliant": 166,
        "PCInonCompliant": 69
    },
    {
        "day": 9,
        "PCICompliant": 168,
        "PCInonCompliant": 72
    },
    {
        "day": 10,
        "PCICompliant": 169,
        "PCInonCompliant": 73
    }
];

AmCharts.ready(function () {
    // SERIAL CHART
    chart = new AmCharts.AmSerialChart();
    chart.pathToImages = "http://www.amcharts.com/lib/3/images/";
    chart.dataProvider = chartData;
    chart.marginTop = 10;
    chart.categoryField = "day";
    
    // AXES
    // Category
    var categoryAxis = chart.categoryAxis;
    categoryAxis.gridAlpha = 0.07;
    categoryAxis.axisColor = "#c1c1c9";
    categoryAxis.startOnAxis = true;
    
    // Value
    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.stackType = "regular"; // this line makes the chart "stacked"
    valueAxis.gridAlpha = 0.07;
    valueAxis.axisColor = "#c1c1c9";
    //valueAxis.title = "Traffic incidents";
    chart.addValueAxis(valueAxis);
    
    //Balloons
    var balloon = chart.balloon;
    balloon.adjustBorderColor = true;
    balloon.color = "#414143";
    balloon.cornerRadius = 0;
    balloon.borderThickness = 1;
    balloon.fillAlpha = 1;
    
    // GRAPHS
    
    // second graph
    graph = new AmCharts.AmGraph();
    graph.type = "line";
    graph.lineColor = "#c6991e";
    graph.title = "PCI Disabled";
    graph.valueField = "PCInonCompliant";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6;
    graph.bullet = "round";
    graph.bulletSize = 4;
    graph.balloonText = "<span><i class='icon-pci icon-large yellow'></i> <b>[[title]]</b><br>[[value]] Makos</span>";
    chart.addGraph(graph);
    
    // first graph
    var graph = new AmCharts.AmGraph();
    graph.type = "line";
    graph.lineColor = "#44b3b7";
    graph.title = "PCI Enabled";
    graph.valueField = "PCICompliant";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6; // setting fillAlphas to > 0 value makes it area graph
    graph.bullet = "round";
    graph.bulletSize = 4;
    graph.balloonText = "<span><i class='icon-pci icon-large green'></i> <b>[[title]]</b><br>[[value]] Makos</span>";
    chart.addGraph(graph);
    
    // LEGEND
    var legend = new AmCharts.AmLegend();
    legend.position = "top";
    legend.valueText = "[[value]]GB";
    legend.valueWidth = 100;
    legend.valueAlign = "left";
    legend.equalWidths = false;
    legend.markerSize = 6;
    legend.markerType = "round";
    //legend.periodValueText = "[[]]"; // this is displayed when mouse is not over the chart.                
    chart.addLegend(legend);
    
    // CURSOR
    var chartCursor = new AmCharts.ChartCursor();
    chartCursor.cursorAlpha = 1;
    chartCursor.cursorColor = "#ffffff";
    chartCursor.categoryBalloonColor = "#414143";
    chart.addChartCursor(chartCursor);
    
    // SCROLLBAR
    //var chartScrollbar = new AmCharts.ChartScrollbar();
    //chartScrollbar.color = "#FFFFFF";
    //chart.addChartScrollbar(chartScrollbar);
    
    // WRITE
    chart.write("chartdiv");
});
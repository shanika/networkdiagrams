var chart;

var chartData = [
    {
        "day": "Nov 02 0:00",
        "online": 1587,
        "offline": 650,
        "awaiting-connection": 121
    },
    {
        "day": "Nov 02 06:00",
        "online": 1597,
        "offline": 683,
        "awaiting-connection": 146
    },
    {
        "day": "Nov 02 12:00",
        "online": 1617,
        "offline": 691,
        "awaiting-connection": 138
    },
    {
        "day": "Nov 02 18:00",
        "online": 1630,
        "offline": 642,
        "awaiting-connection": 127
    },
    {
        "day": "Nov 03 0:00",
        "online": 1587,
        "offline": 650,
        "awaiting-connection": 121
    },
    {
        "day": "Nov 03 06:00",
        "online": 1597,
        "offline": 683,
        "awaiting-connection": 146
    },
    {
        "day": "Nov 03 12:00",
        "online": 1617,
        "offline": 691,
        "awaiting-connection": 138
    },
    {
        "day": "Nov 03 18:00",
        "online": 1630,
        "offline": 642,
        "awaiting-connection": 127
    },
    {
        "day": "Nov 04 00:00",
        "online": 1630,
        "offline": 642,
        "awaiting-connection": 127
    }
    ];

AmCharts.ready(function () {
    // SERIAL CHART
    chart = new AmCharts.AmSerialChart();
    chart.dataProvider = chartData;
    chart.marginTop = 10;
    chart.categoryField = "day";
    chart.startDuration = 1;
    
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
    
    // third graph
    graph = new AmCharts.AmGraph();
    graph.type = "line";
    graph.lineColor = "#ebd04f";
    //graph.hidden = true;
    graph.title = "Awaiting connection";
    graph.valueField = "awaiting-connection";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6;
    graph.bullet = "square";
    graph.bulletBorderColor = "#ffffff";
    graph.bulletSize = 6;
    graph.bulletColor = "#c6991e";
    graph.balloonText = "<span style='font-size:14px;'><i class='icon-flag yellow'></i> [[value]] [[title]]</span>";
    chart.addGraph(graph);
    
    // second graph
    graph = new AmCharts.AmGraph();
    graph.type = "line";
    graph.lineColor = "#e35559";
    graph.title = "Offline";
    graph.valueField = "offline";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6;
    graph.bullet = "triangleUp";
    graph.bulletBorderColor = "#ffffff";
    graph.bulletSize = 6;
    graph.balloonText = "<span style='font-size:14px;'><i class='icon-warning-sign red'></i> [[value]] [[title]]</span>";
    chart.addGraph(graph);
    
    // first graph
    var graph = new AmCharts.AmGraph();
    graph.type = "line";
    graph.lineColor = "#44b3b7";
    graph.title = "Online";
    graph.valueField = "online";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6; // setting fillAlphas to > 0 value makes it area graph
    graph.bullet = "round";
    graph.bulletBorderColor = "#ffffff";
    graph.bulletSize = 6;
    graph.balloonText = "<span style='font-size:14px;'><i class='icon-ok-sign green'></i> [[value]] [[title]]</span>";
    chart.addGraph(graph);
    
    // LEGEND
    var legend = new AmCharts.AmLegend();
    legend.position = "top";
    legend.valueText = "[[value]]";
    legend.valueWidth = 100;
    legend.valueAlign = "left";
    legend.equalWidths = false;
    legend.markerSize = 6;
//    legend.markerType = "round";
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
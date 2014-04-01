var chart;

var chartData = [
    {
        "day": new Date(2013, 10, 2),
        "online": 1587,
        "offline": 650,
        "awaiting-connection": 121
    },
    {
        "day": new Date(2013, 10, 3),
        "online": 1597,
        "offline": 683,
        "awaiting-connection": 146
    },
    {
        "day": new Date(2013, 10, 4),
        "online": 1617,
        "offline": 691,
        "awaiting-connection": 138
    },
    {
        "day": new Date(2013, 10, 5),
        "online": 1630,
        "offline": 642,
        "awaiting-connection": 127
    },
    {
        "day": new Date(2013, 10, 6),
        "online": 1660,
        "offline": 699,
        "awaiting-connection": 105
    },
    {
        "day": new Date(2013, 10, 7),
        "online": 1683,
        "offline": 721,
        "awaiting-connection": 109
    },
    {
        "day": new Date(2013, 10, 8),
        "online": 1691,
        "offline": 737,
        "awaiting-connection": 112
    },
    {
        "day": new Date(2013, 10, 9),
        "online": 1698,
        "offline": 680,
        "awaiting-connection": 101
    },
    {
        "day": new Date(2013, 10, 10),
        "online": 1775,
        "offline": 664,
        "awaiting-connection": 97
    },
    {
        "day": new Date(2013, 10, 11),
        "online": 1746,
        "offline": 648,
        "awaiting-connection": 93
    },
    {
        "day": new Date(2013, 10, 12),
        "online": 1818,
        "offline": 637,
        "awaiting-connection": 101
    },
    {
        "day": new Date(2013, 10, 13),
        "online": 1813,
        "offline": 633,
        "awaiting-connection": 87
    },
    {
        "day": new Date(2013, 10, 14),
        "online": 1899,
        "offline": 621,
        "awaiting-connection": 79
    },
    {
        "day": new Date(2013, 10, 15),
        "online": 1910,
        "offline": 540,
        "awaiting-connection": 81
    },
    {
        "day": new Date(2013, 10, 16),
        "online": 2165,
        "offline": 232,
        "awaiting-connection": 75
    },
    {
        "day": new Date(2013, 10, 17),
        "online": 2245,
        "offline": 219,
        "awaiting-connection": 88
    },
    {
        "day": new Date(2013, 10, 18),
        "online": 2263,
        "offline": 201,
        "awaiting-connection": 82
    },
    {
        "day": new Date(2013, 10, 19),
        "online": 2280,
        "offline": 285,
        "awaiting-connection": 87
    },
    {
        "day": new Date(2013, 10, 20),
        "online": 2359,
        "offline": 277,
        "awaiting-connection": 71
    }
];

AmCharts.ready(function () {
    // SERIAL CHART
    chart = new AmCharts.AmSerialChart();
    chart.dataProvider = chartData;
    chart.marginTop = 10;
    chart.categoryField = "day";
    chart.color = "#414143";
    chart.fontFamily = "DejaRip";
    chart.fontSize = 14;
    
    // AXES
    // Category
    var categoryAxis = chart.categoryAxis;
    categoryAxis.gridAlpha = 0.07;
    categoryAxis.axisColor = "#c1c1c9";
    categoryAxis.startOnAxis = true;
    categoryAxis.parseDates = true;
    
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
    graph.lineColor = "#e35559";
    graph.title = "Offline";
    graph.valueField = "offline";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6;
    graph.bullet = "triangleUp";
    graph.markerType = "triangleUp";
    graph.bulletBorderColor = "#ffffff";
    graph.bulletBorderThickness = 1;
    graph.bulletBorderAlpha = 1;
    graph.bulletSize = 8;
    graph.balloonText = "<span style='font-size:14px;'><i class='icon-warning-sign red'></i> [[value]] [[title]]</span>";
    chart.addGraph(graph);
    
    // third graph
    graph = new AmCharts.AmGraph();
    graph.type = "line";
    graph.lineColor = "#e2881b";
    //graph.hidden = true;
    graph.title = "Secondary internet connection";
    graph.valueField = "awaiting-connection";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6;
    graph.bullet = "square";
    graph.markerType = "square";
    graph.bulletBorderColor = "#ffffff";
    graph.bulletBorderThickness = 1;
    graph.bulletBorderAlpha = 1;
    graph.bulletSize = 6;
    graph.balloonText = "<span style='font-size:14px;'><i class='icon-medkit orange'></i> [[value]] [[title]]</span>";
    chart.addGraph(graph);
    
    // first graph
    var graph = new AmCharts.AmGraph();
    graph.type = "line";
    graph.lineColor = "#44b3b7";
    graph.title = "Primary internet connection";
    graph.valueField = "online";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6; // setting fillAlphas to > 0 value makes it area graph
    graph.bullet = "round";
    graph.markerType = "round";
    graph.bulletBorderColor = "#ffffff";
    graph.bulletBorderThickness = 1;
    graph.bulletBorderAlpha = 1;
    graph.bulletSize = 8;
    graph.balloonText = "<span style='font-size:14px;'><i class='icon-ok-sign green'></i> [[value]] [[title]]</span>";
    chart.addGraph(graph);
    
    // LEGEND
    var legend = new AmCharts.AmLegend();
    legend.position = "bottom";
    legend.valueText = "[[value]]";
    legend.valueWidth = 100;
    legend.valueAlign = "left";
    legend.equalWidths = false;
    legend.markerSize = 8;
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
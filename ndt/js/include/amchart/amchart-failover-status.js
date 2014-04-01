var chart;

var chartData = [
    {
        "day": 4,
        "primary": 1587,
        "secondary": 650,
        "offline": 121
    },
    {
        "day": 5,
        "primary": 1597,
        "secondary": 683,
        "offline": 146
    },
    {
        "day": 6,
        "primary": 1617,
        "secondary": 691,
        "offline": 138
    },
    {
        "day": 7,
        "primary": 1630,
        "secondary": 642,
        "offline": 127
    },
    {
        "day": 8,
        "primary": 1660,
        "secondary": 699,
        "offline": 105
    },
    {
        "day": 9,
        "primary": 1683,
        "secondary": 721,
        "offline": 109
    },
    {
        "day": 10,
        "primary": 1691,
        "secondary": 737,
        "offline": 112
    },
    {
        "day": 11,
        "primary": 1698,
        "secondary": 680,
        "offline": 101
    },
    {
        "day": 12,
        "primary": 1775,
        "secondary": 664,
        "offline": 97
    },
    {
        "day": 13,
        "primary": 1746,
        "secondary": 648,
        "offline": 93
    },
    {
        "day": 14,
        "primary": 1818,
        "secondary": 637,
        "offline": 101
    },
    {
        "day": 15,
        "primary": 1813,
        "secondary": 633,
        "offline": 87
    },
    {
        "day": 16,
        "primary": 1899,
        "secondary": 621,
        "offline": 79
    },
    {
        "day": 17,
        "primary": 1910,
        "secondary": 540,
        "offline": 81
    },
    {
        "day": 18,
        "primary": 2165,
        "secondary": 232,
        "offline": 75
    },
    {
        "day": 19,
        "primary": 2245,
        "secondary": 219,
        "offline": 88
    },
    {
        "day": 20,
        "primary": 2263,
        "secondary": 201,
        "offline": 82
    },
    {
        "day": 21,
        "primary": 2280,
        "secondary": 285,
        "offline": 87
    },
    {
        "day": 22,
        "primary": 2359,
        "secondary": 277,
        "offline": 71
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
    
    // third graph
    graph = new AmCharts.AmGraph();
    graph.type = "line";
    graph.lineColor = "#e35559";
    //graph.hidden = true;
    graph.title = "Offline";
    graph.valueField = "offline";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6;
    graph.bullet = "round";
    graph.bulletSize = 4;
    graph.balloonText = "<span style='font-size:14px;'><i class='icon-warning-sign red'></i> [[value]] [[title]]</span>";
    chart.addGraph(graph);
    
    // second graph
    graph = new AmCharts.AmGraph();
    graph.type = "line";
    graph.lineColor = "#e2881b";
    graph.title = "Secondary internet connection";
    graph.valueField = "secondary";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6;
    graph.bullet = "round";
    graph.bulletSize = 4;
    graph.balloonText = "<span style='font-size:14px;'><i class='icon-medkit orange'></i> [[value]] [[title]]</span>";
    chart.addGraph(graph);
    
    // first graph
    var graph = new AmCharts.AmGraph();
    graph.type = "line";
    graph.lineColor = "#44b3b7";
    graph.title = "Primary internet connection";
    graph.valueField = "primary";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6; // setting fillAlphas to > 0 value makes it area graph
    graph.bullet = "round";
    graph.bulletSize = 4;
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
var chart;

var chartData = [
    {
        "day": new Date(2013, 10, 4),
        "DownloadDSL": 1587,
        "Download3G": 650,
        "UploadDSL": 1121,
        "Upload3G": 520
    },
    {
        "day": new Date(2013, 10, 5),
        "DownloadDSL": 1597,
        "Download3G": 683,
        "UploadDSL": 1146,
        "Upload3G": 540
    },
    {
        "day": new Date(2013, 10, 6),
        "DownloadDSL": 1617,
        "Download3G": 691,
        "UploadDSL": 1138,
        "Upload3G": 530
    },
    {
        "day": new Date(2013, 10, 7),
        "DownloadDSL": 1630,
        "Download3G": 642,
        "UploadDSL": 1127,
        "Upload3G": 520
    },
    {
        "day": new Date(2013, 10, 8),
        "DownloadDSL": 1660,
        "Download3G": 699,
        "UploadDSL": 1105,
        "Upload3G": 500
    },
    {
        "day": new Date(2013, 10, 9),
        "DownloadDSL": 1683,
        "Download3G": 721,
        "UploadDSL": 1109,
        "Upload3G": 500
    },
    {
        "day": new Date(2013, 10, 10),
        "DownloadDSL": 1691,
        "Download3G": 737,
        "UploadDSL": 1112,
        "Upload3G": 510
    },
    {
        "day": new Date(2013, 10, 11),
        "DownloadDSL": 1597,
        "Download3G": 683,
        "UploadDSL": 1146,
        "Upload3G": 540
    },
    {
        "day": new Date(2013, 10, 12),
        "DownloadDSL": 1617,
        "Download3G": 691,
        "UploadDSL": 1138,
        "Upload3G": 530
    },
    {
        "day": new Date(2013, 10, 13),
        "DownloadDSL": 1597,
        "Download3G": 1683,
        "UploadDSL": 1346,
        "Upload3G": 740
    },
    {
        "day": new Date(2013, 10, 14),
        "DownloadDSL": 1617,
        "Download3G": 691,
        "UploadDSL": 1138,
        "Upload3G": 530
    },
    {
        "day": new Date(2013, 10, 15),
        "DownloadDSL": 1597,
        "Download3G": 683,
        "UploadDSL": 1146,
        "Upload3G": 540
    },
    {
        "day": new Date(2013, 10, 16),
        "DownloadDSL": 1617,
        "Download3G": 691,
        "UploadDSL": 1138,
        "Upload3G": 530
    },
    {
        "day": new Date(2013, 10, 17),
        "DownloadDSL": 1597,
        "Download3G": 683,
        "UploadDSL": 1146,
        "Upload3G": 540
    },
    {
        "day": new Date(2013, 10, 18),
        "DownloadDSL": 1617,
        "Download3G": 691,
        "UploadDSL": 1138,
        "Upload3G": 530
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
    
    // fourth graph
    graph = new AmCharts.AmGraph();
    graph.type = "line";
    graph.lineColor = "#ffffff";
    graph.fillColors = "#7c52a8";
    graph.legendColor = "#ed83e6";
    //graph.hidden = true;
    graph.title = "Upload Cellular";
    graph.valueField = "Upload3G";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.3;
    graph.bullet = "triangleUp";
    graph.markerType = "triangleUp";
    graph.bulletBorderColor = "#ffffff";
    graph.bulletBorderThickness = 1;
    graph.bulletBorderAlpha = 1;
    graph.bulletSize = 8;
    graph.bulletColor = "#ed83e6";
    graph.balloonText = "<span><i class='icon-upload purple'></i> <b>[[title]]</b>: [[value]] GB</span>";
    chart.addGraph(graph);
    
    // third graph
    graph = new AmCharts.AmGraph();
    graph.type = "line";
    graph.lineColor = "#7c52a8";
    //graph.hidden = true;
    graph.title = "Upload xDSL";
    graph.valueField = "UploadDSL";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6;
    graph.bullet = "triangleUp";
    graph.markerType = "triangleUp";
    graph.bulletBorderColor = "#ffffff";
    graph.bulletBorderThickness = 1;
    graph.bulletBorderAlpha = 1;
    graph.bulletSize = 8;
    graph.bulletColor = "#7c52a8";
    graph.balloonText = "<span><i class='icon-upload purple'></i> <b>[[title]]</b>: [[value]] GB</span>";
    chart.addGraph(graph);
    
    // second graph
    graph = new AmCharts.AmGraph();
    graph.type = "line";
    graph.lineColor = "#ffffff";
    graph.fillColors = "#305f9c";
    graph.legendColor = "#3a87ad";
    graph.title = "Download Cellular";
    graph.valueField = "Download3G";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.3;
    graph.bullet = "triangleDown";
    graph.markerType = "triangleDown";
    graph.bulletBorderColor = "#ffffff";
    graph.bulletBorderThickness = 1;
    graph.bulletBorderAlpha = 1;
    graph.bulletSize = 8;
    graph.bulletColor = "#3a87ad";
    graph.balloonText = "<span><i class='icon-download navyblue'></i> <b>[[title]]</b>: [[value]] GB</span>";
    chart.addGraph(graph);
    
    // first graph
    var graph = new AmCharts.AmGraph();
    graph.type = "line";
    graph.lineColor = "#305f9c";
    graph.title = "Download xDSL";
    graph.valueField = "DownloadDSL";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6; // setting fillAlphas to > 0 value makes it area graph
    graph.bullet = "triangleDown";
    graph.markerType = "triangleDown";
    graph.bulletBorderColor = "#ffffff";
    graph.bulletBorderThickness = 1;
    graph.bulletBorderAlpha = 1;
    graph.bulletSize = 8;
    graph.bulletColor = "#305f9c";
    graph.balloonText = "<span><i class='icon-download navyblue'></i> <b>[[title]]</b>: [[value]] GB</span>";
    chart.addGraph(graph);
    
    // LEGEND
    var legend = new AmCharts.AmLegend();
    legend.position = "bottom";
    legend.valueText = "[[value]] GB";
    legend.valueWidth = 100;
    legend.valueAlign = "left";
    legend.equalWidths = false;
    legend.markerSize = 6;
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
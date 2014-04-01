var chart;

var chart5Data = [{
    year: 2000,
    online: 1587,
    awaiting-connection: 650,
    offline: 121},
{
    year: 1995,
    online: 1567,
    awaiting-connection: 683,
    offline: 146},
{
    year: 1996,
    online: 1617,
    awaiting-connection: 691,
    offline: 138},
{
    year: 1997,
    online: 1630,
    awaiting-connection: 642,
    offline: 127},
{
    year: 1998,
    online: 1660,
    awaiting-connection: 699,
    offline: 105},
{
    year: 1999,
    online: 1683,
    awaiting-connection: 721,
    offline: 109},
{
    year: 2000,
    online: 1691,
    awaiting-connection: 737,
    offline: 112},
{
    year: 2001,
    online: 1298,
    awaiting-connection: 680,
    offline: 101},
{
    year: 2002,
    online: 1275,
    awaiting-connection: 664,
    offline: 97},
{
    year: 2003,
    online: 1246,
    awaiting-connection: 648,
    offline: 93},
{
    year: 2004,
    online: 1218,
    awaiting-connection: 637,
    offline: 101},
{
    year: 2005,
    online: 1213,
    awaiting-connection: 633,
    offline: 87},
{
    year: 2006,
    online: 1199,
    awaiting-connection: 621,
    offline: 79},
{
    year: 2007,
    online: 1110,
    awaiting-connection: 210,
    offline: 81},
{
    year: 2008,
    online: 1165,
    awaiting-connection: 232,
    offline: 75},
{
    year: 2009,
    online: 1145,
    awaiting-connection: 219,
    offline: 88},
{
    year: 2010,
    online: 1163,
    awaiting-connection: 201,
    offline: 82},
{
    year: 2011,
    online: 1180,
    awaiting-connection: 285,
    offline: 87},
{
    year: 2012,
    online: 1159,
    awaiting-connection: 277,
    offline: 71}];

AmCharts.ready(function() {
    // SERIAL CHART
    chart = new AmCharts.AmSerialChart();
    
    chart5.pathToImages = "http://www.amcharts.com/lib/images/";
    chart5.zoomOutButton = {
        backgroundColor: '#000000',
        backgroundAlpha: 0.15
    };
    chart5.dataProvider = chart5Data;
    chart5.marginTop = 10;
    chart5.autoMarginOffset = 3;
    chart5.marginRight = 0;        
    chart5.categoryField = "year";

    // AXES
    // Category
    var categoryAxis = chart5.categoryAxis;
    categoryAxis.gridAlpha = 0.07;
    categoryAxis.axisColor = "#DADADA";
    categoryAxis.startOnAxis = true;
    categoryAxis.showLastLabel = false;

    // Value
    var valueAxis = new AmCharts.ValueAxis();
    valueAxis5.stackType = "regular"; // this line makes the chart "stacked"
    valueAxis5.gridAlpha = 0.07;
    valueAxis5.title = "Traffic incidents";
    chart5.addValueAxis(valueAxis5);

    // GUIDES are vertical (can also be horizontal) lines (or areas) marking some event.
    // first guide
    var guide1 = new AmCharts.Guide();
    guide1.category = "2001";
    guide1.lineColor = "#CC0000";
    guide1.lineAlpha = 1;
    guide1.dashLength = 2;
    guide1.inside = true;
    guide1.labelRotation = 90;
    guide1.label = "fines for speeding increased";
    categoryAxis.addGuide(guide1);

    // second guide
    var guide2 = new AmCharts.Guide();
    guide2.category = "2007";
    guide2.lineColor = "#CC0000";
    guide2.lineAlpha = 1;
    guide2.dashLength = 2;
    guide2.inside = true;
    guide2.labelRotation = 90;
    guide2.label = "motorcycle maintenance fee introduced";
    categoryAxis.addGuide(guide2);


    // GRAPHS
    // first graph
    var graph = new AmCharts.AmGraph();
    graph.type = "line";
    graph.hidden = true;
    graph.title = "Online";
    graph.valueField = "online";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6; // setting fillAlphas to > 0 value makes it area graph
    chart5.addGraph(graph);

    // second graph
    graph = new AmCharts.AmGraph();
    graph.type = "line";
    graph.title = "Awaiting Connection";
    graph.valueField = "awaiting-connection";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6;
    chart5.addGraph(graph);

    // third graph
    graph = new AmCharts.AmGraph();
    graph.type = "line";
    graph.title = "Offline";
    graph.valueField = "offline";
    graph.lineAlpha = 1;
    graph.fillAlphas = 0.6;
    chart5.addGraph(graph);

    // LEGEND
    var legend = new AmCharts.AmLegend();
    legend.position = "top";
    chart5.addLegend(legend);

    // CURSOR
    var chartCursor = new AmCharts.ChartCursor();
    chartCursor.zoomable = false; // as the chart displayes not too many values, we disabled zooming
    chartCursor.cursorAlpha = 0;
    chart5.addChartCursor(chartCursor);

    // WRITE
    chart5.write("chartdiv5");
});
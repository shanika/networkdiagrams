var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var day = today.getDate();

var chartData = [{
    year: 04,
    cars: 1587,
    motorcycles: 650,
    bicycles: 121
}, {
    year: 05,
    cars: 1597,
    motorcycles: 683,
    bicycles: 146
}, {
    year: 06,
    cars: 1617,
    motorcycles: 691,
    bicycles: 138
}, {
    year: 07,
    cars: 1630,
    motorcycles: 642,
    bicycles: 127
}, {
    year: 08,
    cars: 1660,
    motorcycles: 699,
    bicycles: 105
}, {
    year: 09,
    cars: 1683,
    motorcycles: 721,
    bicycles: 109
}, {
    year: 10,
    cars: 1691,
    motorcycles: 737,
    bicycles: 112
}, {
    year: 11,
    cars: 1798,
    motorcycles: 680,
    bicycles: 101
}, {
    year: 12,
    cars: 1975,
    motorcycles: 664,
    bicycles: 97
}, {
    year: 13,
    cars: 2046,
    motorcycles: 648,
    bicycles: 93
}, {
    year: 14,
    cars: 2218,
    motorcycles: 637,
    bicycles: 101
}, {
    year: 15,
    cars: 2213,
    motorcycles: 633,
    bicycles: 87
}, {
    year: 16,
    cars: 3125,
    motorcycles: 621,
    bicycles: 79
}, {
    year: 17,
    cars: 10110,
    motorcycles: 210,
    bicycles: 81
}, {
    year: 18,
    cars: 11165,
    motorcycles: 232,
    bicycles: 75
}, {
    year: 19,
    cars: 11185,
    motorcycles: 219,
    bicycles: 88
}, {
    year: 20,
    cars: 14563,
    motorcycles: 201,
    bicycles: 82
}, {
    year: 21,
    cars: 15180,
    motorcycles: 285,
    bicycles: 87
}, {
    year: 22,
    cars: 21159,
    motorcycles: 277,
    bicycles: 71
}];

var chart1Data = [
    {
    date: new Date(year, month, day - 20),
    visits: 5120,
    views: 16734},
{
    date: new Date(year, month, day - 19),
    visits: 5040,
    views: 16320},
{
    date: new Date(year, month, day - 18),
    visits: 4823,
    views: 15002},
{
    date: new Date(year, month, day - 17),
    visits: 4252,
    views: 14288},
{
    date: new Date(year, month, day - 16),
    visits: 3177,
    views: 10645},
{
    date: new Date(year, month, day - 15),
    visits: 3524,
    views: 11212},
{
    date: new Date(year, month, day - 14),
    visits: 6328,
    views: 16687},
{
    date: new Date(year, month, day - 13),
    visits: 5949,
    views: 15878},
{
    date: new Date(year, month, day - 12),
    visits: 6412,
    views: 17987},
{
    date: new Date(year, month, day - 11),
    visits: 6804,
    views: 17963},
{
    date: new Date(year, month, day - 10),
    visits: 5726,
    views: 16254},
{
    date: new Date(year, month, day - 9),
    visits: 3599,
    views: 11747},
{
    date: new Date(year, month, day - 8),
    visits: 2482,
    views: 9878},
{
    date: new Date(year, month, day - 7),
    visits: 6605,
    views: 16784},
{
    date: new Date(year, month, day - 6),
    visits: 7237,
    views: 17986},
{
    date: new Date(year, month, day - 5),
    visits: 6249,
    views: 18658},
{
    date: new Date(year, month, day - 4),
    visits: 6764,
    views: 18698},
{
    date: new Date(year, month, day - 3),
    visits: 7582,
    views: 19654},
{
    date: new Date(year, month, day - 2),
    visits: 2846,
    views: 9872},
{
    date: new Date(year, month, day - 1),
    visits: 2718,
    views: 10021},
{
    date: new Date(year, month, day),
    visits: 7826,
    views: 19657}
];

var chart2Data = [
    {
    date: new Date(year, month, day - 6),
    ammap: 175,
    amcharts: 235,
    amstock: 120},
{
    date: new Date(year, month, day - 5),
    ammap: 205,
    amcharts: 315,
    amstock: 187},
{
    date: new Date(year, month, day - 4),
    ammap: 234,
    amcharts: 335,
    amstock: 179},
{
    date: new Date(year, month, day - 3),
    ammap: 213,
    amcharts: 305,
    amstock: 187},
{
    date: new Date(year, month, day - 2),
    ammap: 235,
    amcharts: 336,
    amstock: 198},
{
    date: new Date(year, month, day - 1),
    ammap: 156,
    amcharts: 201,
    amstock: 135},
{
    date: new Date(year, month, day),
    ammap: 168,
    amcharts: 206,
    amstock: 145}
];

var chart4Data = [
    {
    x: 154,
    y: 45,
    value: 112,
    color: "#DAF0FD"},
{
    x: 187,
    y: 85,
    value: 155,
    color: "#FAC314"},
{
    x: 198,
    y: 32,
    value: 160,
    color: "#D84B3C"},
{
    x: 224,
    y: 12,
    value: 95,
    color: "#7f8da9"},
{
    x: 244,
    y: 19,
    value: 78,
    color: "#add981"},
{
    x: 268,
    y: 88,
    value: 53,
    color: "#a481d9"}
];

var chart3Data = [{
    country: "US",
    visits: 9252},
{
    country: "CN",
    visits: 1882},
{
    country: "JP",
    visits: 1809},
{
    country: "DE",
    visits: 1322},
{
    country: "UK",
    visits: 1122},
{
    country: "FR",
    visits: 514},
{
    country: "IN",
    visits: 484},
{
    country: "ES",
    visits: 311}];
    

AmCharts.ready(function() {

var chart = new AmCharts.AmSerialChart();
                chart.pathToImages = "js/include/amchart/images/";
                chart.zoomOutButton = {
                    backgroundColor: '#000000',
                    backgroundAlpha: 0.15
                };
                chart.dataProvider = chartData;
                chart.marginTop = 10;
                chart.categoryField = "year";

                // AXES
                // Category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.gridAlpha = 0.07;
                categoryAxis.axisColor = "#DADADA";
                categoryAxis.startOnAxis = true;

                // Value
                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.stackType = "regular"; // this line makes the chart "stacked"
                valueAxis.gridAlpha = 0.07;
                valueAxis.title = "Appliances";
                chart.addValueAxis(valueAxis);

                // GUIDES are vertical (can also be horizontal) lines (or areas) marking some event.
                // first guide
                var guide1 = new AmCharts.Guide();
                guide1.category = "11";
                guide1.lineColor = "#CC0000";
                guide1.lineAlpha = 1;
                guide1.dashLength = 2;
                guide1.inside = true;
                guide1.labelRotation = 90;
                guide1.label = "Chevron stress test";
                categoryAxis.addGuide(guide1);

                // second guide
                var guide2 = new AmCharts.Guide();
                guide2.category = "17";
                guide2.lineColor = "#CC0000";
                guide2.lineAlpha = 1;
                guide2.dashLength = 2;
                guide2.inside = true;
                guide2.labelRotation = 90;
                guide2.label = "Chevron deployment";
				categoryAxis.addGuide(guide2);


                // GRAPHS
                // first graph
                var graph = new AmCharts.AmGraph();
                graph.type = "line";
                
                graph.title = "Online";
                graph.valueField = "cars";
                graph.lineColor = "#44b3b7";
                graph.lineAlpha = 1;
                graph.fillAlphas = 0.75; // setting fillAlphas to > 0 value makes it area graph
                chart.addGraph(graph);

                // second graph
                graph = new AmCharts.AmGraph();
                graph.type = "line";
                graph.title = "Awaiting connection";
                graph.valueField = "motorcycles";
                graph.lineColor = "#ebd04f";
                graph.lineAlpha = 1;
                graph.fillAlphas = 0.75;
                chart.addGraph(graph);

                // third graph
                graph = new AmCharts.AmGraph();
                graph.type = "line";
                graph.title = "Offline";
                graph.lineColor = "#e35559";
                graph.hidden = true;
                graph.valueField = "bicycles";
                graph.lineAlpha = 1;
                graph.fillAlphas = 0.75;
                chart.addGraph(graph);

                // LEGEND
                var legend = new AmCharts.AmLegend();
                legend.position = "top";
                chart.addLegend(legend);

                // CURSOR
                var chartCursor = new AmCharts.ChartCursor();
                chartCursor.zoomable = false; // as the chart displayes not too many values, we disabled zooming
                chartCursor.cursorAlpha = 0;
                chart.addChartCursor(chartCursor);
                
                // SCROLLBAR
                    var chartScrollbar = new AmCharts.ChartScrollbar();
                
                    chart.addChartScrollbar(chartScrollbar);

                // WRITE
                chart.write("chartdiv5");
	
    // LINE CHART
    var chart1 = new AmCharts.AmSerialChart();
    chart1.dataProvider = chart1Data;
    chart1.marginRight = 0;    
    chart1.categoryField = "date";

    var categoryAxis = chart1.categoryAxis;
    categoryAxis.parseDates = true;
    categoryAxis.dashLength = 5;
    categoryAxis.equalSpacing = true;
    categoryAxis.startOnAxis = false;
    categoryAxis.axisAlpha = 0;
    categoryAxis.autoGridCount = false;
    categoryAxis.gridCount = 8; 
    categoryAxis.showFirstLabel = true;

    var valueAxis1 = new AmCharts.ValueAxis();
    valueAxis1.axisAlpha = 0;
    valueAxis1.dashLength = 5;
    valueAxis1.inside = true;
    chart1.addValueAxis(valueAxis1);


    var graph1 = new AmCharts.AmGraph();
    graph1.bullet = "round";
    graph1.bulletSize = 6;
    graph1.valueField = "visits";
    chart1.addGraph(graph1);

    var graph2 = new AmCharts.AmGraph();
    graph2.type = "column";
    graph2.valueField = "views";
    graph2.fillAlphas = 0.5;
    chart1.addGraph(graph2);

    var chartCursor = new AmCharts.ChartCursor();
    chartCursor.zoomable = false;
    chart1.addChartCursor(chartCursor);

    chart1.write("chartdiv1");



    // PIE CHART
    var chart3 = new AmCharts.AmPieChart();

    chart3.dataProvider = chart3Data;
    chart3.titleField = "country";
    chart3.valueField = "visits";
    chart3.sequencedAnimation = true;
    chart3.startEffect = "elastic";
    chart3.innerRadius = "30%";
    chart3.startDuration = 2;
    chart3.labelText = "[[title]]"
    chart3.hideLabelsPercent = 4;
    chart3.labelRadius = 10;


    chart3.write("chartdiv3");


    // BUBBLE CHART
    var chart4 = new AmCharts.AmXYChart();
    chart4.marginRight = 1;
    chart4.dataProvider = chart4Data;

    var valueAxis3 = new AmCharts.ValueAxis();
    valueAxis3.position = "left";
    valueAxis3.axisAlpha = 0;
    valueAxis3.dashLength = 5;
    valueAxis3.inside = true;
    chart4.addValueAxis(valueAxis3);

    var valueAxis4 = new AmCharts.ValueAxis();
    valueAxis4.position = "bottom";
    valueAxis4.axisAlpha = 0;
    valueAxis4.dashLength = 5;
    valueAxis4.showFirstLabel = false;
    valueAxis4.showLastLabel = false;  
    valueAxis4.autoGridCount = false;
    valueAxis4.gridCount = 5;  
    chart4.addValueAxis(valueAxis4);

    var graph6 = new AmCharts.AmGraph();
    graph6.xField = "x";
    graph6.yField = "y";
    graph6.valueField = "value";
    graph6.lineAlpha = 0;
    graph6.bullet = "round";
    graph6.colorField = "color";
    chart4.addGraph(graph6);

    chart4.write("chartdiv4");


});
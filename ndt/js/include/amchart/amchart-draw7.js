var chart7Data = [{
    year: "2003",
    europe: 2.5,
    namerica: 2.5,
    asia: 2.1,
    lamerica: 0.3,
    meast: 0.2,
    africa: 0.1},
{
    year: "2004",
    europe: 2.6,
    namerica: 2.7,
    asia: 2.2,
    lamerica: 0.3,
    meast: 0.3,
    africa: 0.1},
{
    year: "2005",
    europe: 2.8,
    namerica: 2.9,
    asia: 2.4,
    lamerica: 0.3,
    meast: 0.3,
    africa: 0.1}];

AmCharts.ready(function() {
    // SERIALL CHART
    var chart7 = new AmCharts.AmSerialChart();
    chart7.dataProvider = chart7Data;
    chart7.categoryField = "year";
    chart7.plotAreaBorderAlpha = 0.2;
    chart7.rotate = true;

    // AXES
    // Category
    var categoryAxis = chart7.categoryAxis;
    categoryAxis.gridAlpha = 0.1;
    categoryAxis.axisAlpha = 0;
    categoryAxis.gridPosition = "start";

    // value                      
    var valueAxis7 = new AmCharts.ValueAxis();
    valueAxis7.stackType = "regular";
    valueAxis7.gridAlpha = 0.1;
    valueAxis7.axisAlpha = 0;
    chart7.addValueAxis(valueAxis7);

    // GRAPHS
    // firstgraph 
    var graph7 = new AmCharts.AmGraph();
    graph7.title = "Europe";
    graph7.labelText = "[[value]]";
    graph7.valueField = "europe";
    graph7.type = "column";
    graph7.lineAlpha = 0;
    graph7.fillAlphas = 1;
    graph7.lineColor = "#C72C95";
    chart7.addGraph(graph7);

    // second graph                              
    graph7 = new AmCharts.AmGraph();
    graph7.title = "North America";
    graph7.labelText = "[[value]]";
    graph7.valueField = "namerica";
    graph7.type = "column";
    graph7.lineAlpha = 0;
    graph7.fillAlphas = 1;
    graph7.lineColor = "#D8E0BD";
    chart7.addGraph(graph7);

    // thirdt graph              
    graph7 = new AmCharts.AmGraph();
    graph7.title = "Asia-Pacific";
    graph7.labelText = "[[value]]";
    graph7.valueField = "asia";
    graph7.type = "column";
    graph7.lineAlpha = 0;
    graph7.fillAlphas = 1;
    graph7.lineColor = "#B3DBD4";
    chart7.addGraph(graph7);

    // fourth graph 
    graph7 = new AmCharts.AmGraph();
    graph7.title = "Latin America";
    graph7.labelText = "[[value]]";
    graph7.valueField = "lamerica";
    graph7.type = "column";
    graph7.lineAlpha = 0;
    graph7.fillAlphas = 1;
    graph7.lineColor = "#69A55C";
    chart7.addGraph(graph7);

    // fifth graph 
    graph7 = new AmCharts.AmGraph();
    graph7.title = "Middle-East";
    graph7.labelText = "[[value]]";
    graph7.valueField = "meast";
    graph7.type = "column";
    graph7.lineAlpha = 0;
    graph7.fillAlphas = 1;
    graph7.lineColor = "#B5B8D3";
    chart7.addGraph(graph7);

    // sixth graph  
    graph7 = new AmCharts.AmGraph();
    graph7.title = "Africa";
    graph7.labelText = "[[value]]";
    graph7.valueField = "africa";
    graph7.type = "column";
    graph7.lineAlpha = 0;
    graph7.fillAlphas = 1;
    graph7.lineColor = "#F4E23B";
    chart7.addGraph(graph7);

    // LEGEND
    var legend = new AmCharts.AmLegend();
    legend.position = "right";
    legend.borderAlpha = 0.3;
    legend.horizontalGap = 10;
    legend.switchType = "v";
    chart7.addLegend(legend);

    // WRITE
    chart7.write("chartdiv7");
});


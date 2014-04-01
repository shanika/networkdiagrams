var chart,chartData=[{day:4,primary:1587,secondary:650,offline:121},{day:5,primary:1597,secondary:683,offline:146},{day:6,primary:1617,secondary:691,offline:138},{day:7,primary:1630,secondary:642,offline:127},{day:8,primary:1660,secondary:699,offline:105},{day:9,primary:1683,secondary:721,offline:109},{day:10,primary:1691,secondary:737,offline:112},{day:11,primary:1698,secondary:680,offline:101},{day:12,primary:1775,secondary:664,offline:97},{day:13,primary:1746,secondary:648,offline:93},{day:14,primary:1818,secondary:637,offline:101},{day:15,primary:1813,secondary:633,offline:87},{day:16,primary:1899,secondary:621,offline:79},{day:17,primary:1910,secondary:540,offline:81},{day:18,primary:2165,secondary:232,offline:75},{day:19,primary:2245,secondary:219,offline:88},{day:20,primary:2263,secondary:201,offline:82},{day:21,primary:2280,secondary:285,offline:87},{day:22,primary:2359,secondary:277,offline:71}];AmCharts.ready(function(){chart=new AmCharts.AmSerialChart;chart.pathToImages="http://www.amcharts.com/lib/3/images/";chart.dataProvider=chartData;chart.marginTop=10;chart.categoryField="day";var e=chart.categoryAxis;e.gridAlpha=.07;e.axisColor="#c1c1c9";e.startOnAxis=!0;var t=new AmCharts.ValueAxis;t.stackType="regular";t.gridAlpha=.07;t.axisColor="#c1c1c9";chart.addValueAxis(t);var n=chart.balloon;n.adjustBorderColor=!0;n.color="#414143";n.cornerRadius=0;n.borderThickness=1;n.fillAlpha=1;r=new AmCharts.AmGraph;r.type="line";r.lineColor="#e35559";r.title="Offline";r.valueField="offline";r.lineAlpha=1;r.fillAlphas=.6;r.bullet="round";r.bulletSize=4;r.balloonText="<span style='font-size:14px;'><i class='icon-warning-sign red'></i> [[value]] [[title]]</span>";chart.addGraph(r);r=new AmCharts.AmGraph;r.type="line";r.lineColor="#e2881b";r.title="Secondary internet connection";r.valueField="secondary";r.lineAlpha=1;r.fillAlphas=.6;r.bullet="round";r.bulletSize=4;r.balloonText="<span style='font-size:14px;'><i class='icon-medkit orange'></i> [[value]] [[title]]</span>";chart.addGraph(r);var r=new AmCharts.AmGraph;r.type="line";r.lineColor="#44b3b7";r.title="Primary internet connection";r.valueField="primary";r.lineAlpha=1;r.fillAlphas=.6;r.bullet="round";r.bulletSize=4;r.balloonText="<span style='font-size:14px;'><i class='icon-ok-sign green'></i> [[value]] [[title]]</span>";chart.addGraph(r);var i=new AmCharts.AmLegend;i.position="top";i.valueText="[[value]]";i.valueWidth=100;i.valueAlign="left";i.equalWidths=!1;i.markerSize=6;i.markerType="round";chart.addLegend(i);var s=new AmCharts.ChartCursor;s.cursorAlpha=1;s.cursorColor="#ffffff";s.categoryBalloonColor="#414143";chart.addChartCursor(s);chart.write("chartdiv")});
var chart,chartData=[{day:4,PCICompliant:158,PCInonCompliant:65},{day:5,PCICompliant:159,PCInonCompliant:68},{day:6,PCICompliant:161,PCInonCompliant:69},{day:7,PCICompliant:163,PCInonCompliant:64},{day:8,PCICompliant:166,PCInonCompliant:69},{day:9,PCICompliant:168,PCInonCompliant:72},{day:10,PCICompliant:169,PCInonCompliant:73}];AmCharts.ready(function(){chart=new AmCharts.AmSerialChart;chart.pathToImages="http://www.amcharts.com/lib/3/images/";chart.dataProvider=chartData;chart.marginTop=10;chart.categoryField="day";var e=chart.categoryAxis;e.gridAlpha=.07;e.axisColor="#c1c1c9";e.startOnAxis=!0;var t=new AmCharts.ValueAxis;t.stackType="regular";t.gridAlpha=.07;t.axisColor="#c1c1c9";chart.addValueAxis(t);var n=chart.balloon;n.adjustBorderColor=!0;n.color="#414143";n.cornerRadius=0;n.borderThickness=1;n.fillAlpha=1;r=new AmCharts.AmGraph;r.type="line";r.lineColor="#c6991e";r.title="PCI Disabled";r.valueField="PCInonCompliant";r.lineAlpha=1;r.fillAlphas=.6;r.bullet="round";r.bulletSize=4;r.balloonText="<span><i class='icon-pci icon-large yellow'></i> <b>[[title]]</b><br>[[value]] Makos</span>";chart.addGraph(r);var r=new AmCharts.AmGraph;r.type="line";r.lineColor="#44b3b7";r.title="PCI Enabled";r.valueField="PCICompliant";r.lineAlpha=1;r.fillAlphas=.6;r.bullet="round";r.bulletSize=4;r.balloonText="<span><i class='icon-pci icon-large green'></i> <b>[[title]]</b><br>[[value]] Makos</span>";chart.addGraph(r);var i=new AmCharts.AmLegend;i.position="top";i.valueText="[[value]]GB";i.valueWidth=100;i.valueAlign="left";i.equalWidths=!1;i.markerSize=6;i.markerType="round";chart.addLegend(i);var s=new AmCharts.ChartCursor;s.cursorAlpha=1;s.cursorColor="#ffffff";s.categoryBalloonColor="#414143";chart.addChartCursor(s);chart.write("chartdiv")});
function setDepth(){if(document.getElementById("rb1").checked){chart.depth3D=0;chart.angle=0}else{chart.depth3D=20;chart.angle=30}chart.validateNow()}var chart,chartData=[{Online:130,Offline:4,AwaitingConnection:24}];AmCharts.ready(function(){chart=new AmCharts.AmSerialChart;chart.dataProvider=chartData;chart.categoryField="makos";chart.plotAreaBorderAlpha=0;chart.autoMargins=!1;chart.marginLeft=0;chart.marginRight=0;chart.marginTop=20;chart.marginBottom=0;chart.color="#414143";chart.fontFamily="DejaRip";chart.fontSize=14;var e=chart.categoryAxis;e.gridAlpha=0;e.axisAlpha=0;e.gridPosition="start";var t=new AmCharts.ValueAxis;t.stackType="100%";t.gridAlpha=0;t.axisAlpha=0;t.labelsEnabled=!0;t.totalText="[[total]] total Makos";t.totalTextColor="#414143";chart.addValueAxis(t);var n=chart.balloon;n.adjustBorderColor=!0;n.cornerRadius=0;n.borderThickness=1;n.fillAlpha=1;n.showBullet=!0;r=new AmCharts.AmGraph;r.title="Offline";r.labelText="[[title]]";r.valueField="Offline";r.type="column";r.markerType="triangleUp";r.lineAlpha=1;r.fillAlphas=.6;r.lineColor="#e35559";r.color="#ffffff";r.balloonText="<span style='font-size:14px;'><i class='icon-warning-sign red'></i> [[value]] [[title]]</span>";chart.addGraph(r);var r=new AmCharts.AmGraph;r.title="Secondary internet connection";r.labelText="[[title]]";r.valueField="AwaitingConnection";r.type="column";r.markerType="square";r.lineAlpha=1;r.fillAlphas=.6;r.lineColor="#e2881b";r.color="#ffffff";r.balloonText="<span style='font-size:14px;'><i class='icon-flag orange'></i> [[value]] [[title]]</span>";chart.addGraph(r);r=new AmCharts.AmGraph;r.title="Primary internet connection";r.labelText="[[title]]";r.valueField="Online";r.type="column";r.markerType="round";r.lineAlpha=1;r.fillAlphas=.6;r.lineColor="#44b3b7";r.color="#ffffff";r.balloonText="<span style='font-size:14px;'><i class='icon-ok-sign green'></i> [[value]] [[title]]</span>";chart.addGraph(r);var i=new AmCharts.AmLegend;i.position="bottom";i.valueAlign="left";i.equalWidths=!1;i.markerSize=8;i.autoMargins=!1;i.periodValueText="[[value.sum]]";chart.addLegend(i);chart.write("connection-status-current")});
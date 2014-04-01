var chart;
var arrow;
var axis;

AmCharts.ready(function () {
    // create angular gauge
    chart = new AmCharts.AmAngularGauge();
    chart.addTitle("220 VPN Connections available");

    // create axis
    axis = new AmCharts.GaugeAxis();
    axis.startValue = 0;
    axis.endValue = 220;
    // color bands
    var band1 = new AmCharts.GaugeBand();
    band1.startValue = 0;
    band1.endValue = 70;
    band1.color = "#ebd04f";
    band1.innerRadius = "95%";

    var band2 = new AmCharts.GaugeBand();
    band2.startValue = 70;
    band2.endValue = 140;
    band2.color = "#44b3b7";
    band2.innerRadius = "95%";

    var band3 = new AmCharts.GaugeBand();
    band3.startValue = 140;
    band3.endValue = 220;
    band3.color = "#298986";
    band3.innerRadius = "95%";

    axis.bands = [band1, band2, band3];

    // bottom text
    axis.bottomTextYOffset = -20;
    axis.setBottomText("0 km/h");
    chart.addAxis(axis);

    // gauge arrow
    arrow = new AmCharts.GaugeArrow();
    chart.addArrow(arrow);

    chart.write("vpn-gauge");
    // change value every 2 seconds
    setInterval(randomValue, 2000);
});

// set random value
function randomValue() {
    var value = Math.round(Math.random() * 200);
    arrow.setValue(value);
    axis.setBottomText(value + " VPN connections");
}
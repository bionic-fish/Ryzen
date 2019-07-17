// load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// draw the chart and set the chart values
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['HTML', 8],
        ['CSS', 8],
        ['JS', 5],
    ]);

    // optional ; add a title and set the width | height of the chart
    var options = {'title':'Languages', 'width': 300, 'height':250};

    // display the char inside the <div> element with id | piechart |
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}
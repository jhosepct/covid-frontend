var ctx3 = document.getElementById('myChart3').getContext('2d');
var ctx4 = document.getElementById('myChart4').getContext('2d');

function callServiceWorld(bodyResponse, textStatus, jqXHR) {

    var pais = [];
    var casos = [];


    for (var i=0;i<bodyResponse.length;i++){
        var world=bodyResponse[i];
        pais[i]=world.country;
        console.log(pais[i])
        casos[i]=world.totalCases;
    }
    var myChartBarra = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: pais,
            datasets: [{
                label: '# de infectados en el mundo',
                data: casos,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(75,255,18,0.7)',
                    'rgba(255,128,16,0.7)',
                    'rgba(0,229,235,0.7)',
                    'rgba(255,0,8,0.7)',
                    'rgba(5,32,192,0.7)',
                    'rgba(255,51,85,0.7)',
                    'rgba(46,255,121,0.7)',
                    'rgba(255,146,133,0.7)',
                    'rgba(53,235,116,0.7)',
                    'rgba(255,93,43,0.7)',
                    'rgba(192,0,48,0.7)',
                    'rgba(90,27,255,0.7)',
                    'rgba(255,235,23,0.7)',
                    'rgba(255,135,142,0.7)',
                    'rgba(58,235,20,0.7)',
                    'rgba(108,145,255,0.7)',
                    'rgba(192,120,171,0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255,112,0,0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(75,255,18,0.7)',
                    'rgba(255,128,16,0.7)',
                    'rgba(0,229,235,0.7)',
                    'rgba(255,0,8,0.7)',
                    'rgba(5,32,192,0.7)',
                    'rgba(255,51,85,0.7)',
                    'rgba(46,255,121,0.7)',
                    'rgba(255,146,133,0.7)',
                    'rgba(53,235,116,0.7)',
                    'rgba(255,93,43,0.7)',
                    'rgba(192,0,48,0.7)',
                    'rgba(90,27,255,0.7)',
                    'rgba(255,235,23,0.7)',
                    'rgba(255,135,142,0.7)',
                    'rgba(58,235,20,0.7)',
                    'rgba(108,145,255,0.7)',
                    'rgba(192,120,171,0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255,112,0,0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(75,255,18,1)',
                    'rgba(255,128,16,1)',
                    'rgba(0,229,235,1)',
                    'rgba(255,0,8,1)',
                    'rgba(5,32,192,1)',
                    'rgba(255,51,85,1)',
                    'rgba(46,255,121,1)',
                    'rgba(255,146,133,1)',
                    'rgba(53,235,116,1)',
                    'rgba(255,93,43,1)',
                    'rgba(192,0,48,1)',
                    'rgba(90,27,255,1)',
                    'rgba(255,235,23,1)',
                    'rgba(255,135,142,1)',
                    'rgba(58,235,20,1)',
                    'rgba(108,145,255,1)',
                    'rgba(192,120,171,1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255,112,0,1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(75,255,18,1)',
                    'rgba(255,128,16,1)',
                    'rgba(0,229,235,1)',
                    'rgba(255,0,8,1)',
                    'rgba(5,32,192,1)',
                    'rgba(255,51,85,1)',
                    'rgba(46,255,121,1)',
                    'rgba(255,146,133,1)',
                    'rgba(53,235,116,1)',
                    'rgba(255,93,43,1)',
                    'rgba(192,0,48,1)',
                    'rgba(90,27,255,1)',
                    'rgba(255,235,23,1)',
                    'rgba(255,135,142,1)',
                    'rgba(58,235,20,1)',
                    'rgba(108,145,255,1)',
                    'rgba(192,120,171,1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255,112,0,1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var myChartPie = new Chart(ctx4, {
    type: 'pie',
    data: {
        labels: pais,
        datasets: [{
            label: '# de infectados en el mundo',
            data: casos,
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(75,255,18,0.7)',
                'rgba(255,128,16,0.7)',
                'rgba(0,229,235,0.7)',
                'rgba(255,0,8,0.7)',
                'rgba(5,32,192,0.7)',
                'rgba(255,51,85,0.7)',
                'rgba(46,255,121,0.7)',
                'rgba(255,146,133,0.7)',
                'rgba(53,235,116,0.7)',
                'rgba(255,93,43,0.7)',
                'rgba(192,0,48,0.7)',
                'rgba(90,27,255,0.7)',
                'rgba(255,235,23,0.7)',
                'rgba(255,135,142,0.7)',
                'rgba(58,235,20,0.7)',
                'rgba(108,145,255,0.7)',
                'rgba(192,120,171,0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255,112,0,0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(75,255,18,1)',
                'rgba(255,128,16,1)',
                'rgba(0,229,235,1)',
                'rgba(255,0,8,1)',
                'rgba(5,32,192,1)',
                'rgba(255,51,85,1)',
                'rgba(46,255,121,1)',
                'rgba(255,146,133,1)',
                'rgba(53,235,116,1)',
                'rgba(255,93,43,1)',
                'rgba(192,0,48,1)',
                'rgba(90,27,255,1)',
                'rgba(255,235,23,1)',
                'rgba(255,135,142,1)',
                'rgba(58,235,20,1)',
                'rgba(108,145,255,1)',
                'rgba(192,120,171,1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255,112,0,1)'
            ],
            borderWidth: 1
        }]
    }
});
};

$.getJSON('http://127.0.0.1:5000/world', {}, callServiceWorld);
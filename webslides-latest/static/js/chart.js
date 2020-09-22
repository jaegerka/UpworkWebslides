var visitorsData = $.ajax({
    url: "https://jaegerka.github.io/UpworkWebslides/webslides-latest/demos/Visitors.json",
    dataType: 'json',
  }).done(function(results) {
    console.log(results);
    dates = [];
    device_count = [];
    for (var i = results.length - 1; i>=0; i--) {
      dates.push(results[i].date);
      device_count.push(results[i].device_count);
    }
    console.log(dates);
    console.log(device_count);

    var ctx = document.getElementById("visitors");
    var visitorChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Device Count',
                data: device_count,
                fontFamily: 'Montserrat',
                // pointBackgroundColor: 'rgba(242, 38, 19, 1)',
                // pointBorderColor: 'rgba(242, 38, 19, 1)',
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }]
        },
        options: {
          title: {
              display: true,
              text: 'Visitor Data',
              fontSize: 50,
              fontFamily: 'Montserrat', 
          },
          legend: {
            labels: { 
              fontFamily: 'Montserrat', 
            }
          },
      }
    });
  })


  var metrosData = $.ajax({
    url: "https://jaegerka.github.io/UpworkWebslides/webslides-latest/demos/Metros.json",
    dataType: 'json',
  }).done(function(results) {
    console.log(results);
    device_count2 = [];
    common_evening_metro = [];
    for (var i in results) {
      device_count2.push(results[i].device_count);
      common_evening_metro.push(results[i].common_evening_metro);
    }
    console.log(device_count2);
    console.log(common_evening_metro);

    var ctx = document.getElementById("metros");
    var metroChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: common_evening_metro,
            datasets: [{
                label: 'Device Count',
                data: device_count2,
                fontFamily: 'Montserrat'
                // pointBackgroundColor: 'rgba(31, 58, 147, 1)',
                // pointBorderColor: 'rgba(31, 58, 147, 1)',
                // backgroundColor: 'rgba(0, 0, 0, 0)'
            }]
        },
        options: {
          title: {
              display: true,
              text: 'Metro Data',
              fontSize: 50,
              fontFamily: 'Montserrat', 
          },
          legend: {
            labels: { 
              fontFamily: 'Montserrat', 
            }
          },
          scales: {
          yAxes: [{
              ticks: {
                 beginAtZero: false
              }
          }]
      }
      }
    });
  })

  var crimeData = $.ajax({
    url: "https://jaegerka.github.io/UpworkWebslides/webslides-latest/demos/Crime.json",
    dataType: 'json',
  }).done(function(results) {
    console.log(results);
    dates = [];
    count = [];
    crime = [];
    theftCount = [];
    burglaryCount= [];
    console.log(results.length); 
    for (var i = results.length - 1; i>=0; i--) {

      console.log(i); 

      var tempDate = results[i].date;
      var tempCount = results[i].count;

      if (results[i].crime =="Theft"){

        theftCount.push(tempCount)

      }

      else {
        dates.push(tempDate);
        burglaryCount.push(tempCount); 
      }

    }

    console.log(tempCount); 
      console.log(theftCount); 
      console.log(burglaryCount); 
    console.log(dates);
   

    var ctx = document.getElementById("crime");
    var crimeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Theft',
                data: theftCount,
                fontFamily: 'Montserrat',
                pointBackgroundColor: 'rgba(0, 0, 0, 0.5)',
                pointBorderColor: 'rgba(0, 0, 0, 0.5)',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0.5)'
                }, 
                {
                label: 'Burglary',
                    data: burglaryCount,
                    fontFamily: 'Montserrat',
                    // pointBackgroundColor: 'rgba(0, 0, 0, 1)',
                    // pointBorderColor: 'rgba(0, 0, 0, 1)',
                    backgroundColor: 'rgba(0, 0, 0, 0)'
                }
            ]
        },
        options: {
          title: {
              display: true,
              text: 'Crime Data',
              fontSize: 50,
              fontFamily: 'Montserrat', 
          },
          legend: {
            labels: { 
              fontFamily: 'Montserrat', 
            }
          },
         
        }
    })
  });
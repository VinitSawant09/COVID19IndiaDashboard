function predict(predDays)
{
var actualDeaths = [];
var actualRecovered = [];
var actualConfirmed = [];
var predictedDeaths = [];
var predictedConfirmed = [];
var predictedRecovered = [];
 var x = document.getElementById("overlay");
if(predDays == null)
{
selectedPredDays = 5;

x.style.display = "block";
}
else
{
selectedPredDays = predDays;

x.style.display = "block";


}

 $.ajax(
       {
        url  : "https://api.rootnet.in/covid19-in/stats/history",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response)
            {
                    //console.log(response);
                    if (response!=null)
                    {
                            var cumulativeCounts =[];
                            var cumulativeCases =[];
                            var cumulativeRecovered =[];

                            for (var i=0;i<response.data.length;i++)
                            {
                                var arr = [];
                                arr.push(response.data[i].day);
                                arr.push(response.data[i].summary.deaths);
                                cumulativeCounts.push(arr);

                                var arr = [];
                                arr.push(response.data[i].day);
                                arr.push(response.data[i].summary.total);
                                cumulativeCases.push(arr);

                                var arr = [];
                                arr.push(response.data[i].day);
                                arr.push(response.data[i].summary.discharged);
                                cumulativeRecovered.push(arr);


                            }


                            for (var i=0;i<response.data.length;i++)
                            {
                                var arr = [];

                                arr.push(new Date(response.data[i].day).getTime());
                                arr.push(response.data[i].summary.deaths);
                                actualDeaths.push(arr);

                                 var arr = [];

                                arr.push(new Date(response.data[i].day).getTime());
                                arr.push(response.data[i].summary.total);
                                actualConfirmed.push(arr);

                                 var arr = [];

                                arr.push(new Date(response.data[i].day).getTime());
                                arr.push(response.data[i].summary.discharged);
                                actualRecovered.push(arr);

                            }

                            //console.log(actualDeaths);



                            $.ajax({
                                          type: 'POST',
                                          url: "/predictARIMA",
                                          data: JSON.stringify(
                                          {
                                          "listC" : cumulativeCounts,
                                          "listConfirmed": cumulativeCases,
                                          "listRecovered":cumulativeRecovered,
                                          "predDays": selectedPredDays

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {
                                            console.log(data);
                                            var listData = data['deaths'];
                                            var listConfirmed = data['confirmed'];
                                            var listRecovered = data['recovered'];
                                            var maeDeath = Math.round((data['dmae'] + Number.EPSILON) * 100) / 100;
                                            var maeConfirmed = Math.round((data['cmae'] + Number.EPSILON) * 100) / 100;
                                            var maeRecovered = Math.round((data['rmae'] + Number.EPSILON) * 100) / 100;


                                            for(var i=0;i<listData.length;i++)
                                            {
                                               var arr= [] ;
                                               var myDate = listData[i][0];

                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr.push(dateObj);
                                               arr.push(Math.round((listData[i][1] + Number.EPSILON) * 100) / 100);
                                               predictedDeaths.push(arr);



                                            }

                                            for(var i=0;i<listConfirmed.length;i++)
                                            {
                                               var arr= [] ;
                                               var myDate = listConfirmed[i][0];

                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr.push(dateObj);
                                               arr.push(Math.round((listConfirmed[i][1] + Number.EPSILON) * 100) / 100);
                                               predictedConfirmed.push(arr);



                                            }

                                            for(var i=0;i<listRecovered.length;i++)
                                            {
                                               var arr= [] ;
                                               var myDate = listRecovered[i][0];

                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr.push(dateObj);
                                               arr.push(Math.round((listRecovered[i][1] + Number.EPSILON) * 100) / 100);
                                               predictedRecovered.push(arr);

                                            }


                                        Highcharts.chart('container', {
                                        chart: {
                                            zoomType: 'x'
                                        },
                                        title: {
                                            text: 'COVID-19 deaths over time (Prediction: ARIMA model)'
                                        },
                                        subtitle: {
                                            text: document.ontouchstart === undefined ?
                                                'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
                                        },
                                        xAxis: {
                                            type: 'datetime'
                                        },
                                        yAxis: {
                                            title: {
                                                text: 'Deaths'
                                            }
                                        },
                                        legend: {
                                            enabled: false
                                        },
                                        plotOptions: {

                                                },

                                                    series: [{
                                                        type: 'spline',
                                                        name: 'Predicted Deaths',
                                                        data: predictedDeaths
                                                    },
                                                    {
                                                        type: 'spline',
                                                        name: 'Actual Deaths',
                                                        data: actualDeaths
                                                    }



                                                    ]
                                                });


                                        Highcharts.chart('container1', {
                                        chart: {
                                            zoomType: 'x'
                                        },
                                        title: {
                                            text: 'COVID-19 confirmed over time (Prediction: ARIMA Model)'
                                        },
                                        subtitle: {
                                            text: document.ontouchstart === undefined ?
                                                'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
                                        },
                                        xAxis: {
                                            type: 'datetime'
                                        },
                                        yAxis: {
                                            title: {
                                                text: 'Confirmed'
                                            }
                                        },
                                        legend: {
                                            enabled: false
                                        },
                                        plotOptions: {

                                                },

                                                    series: [{
                                                        type: 'spline',
                                                        name: 'Predicted Confirmed',
                                                        data: predictedConfirmed
                                                    },
                                                    {
                                                        type: 'spline',
                                                        name: 'Actual Confirmed',
                                                        data: actualConfirmed
                                                    }



                                                    ]
                                                });

                                             Highcharts.chart('container2', {
                                        chart: {
                                            zoomType: 'x'
                                        },
                                        title: {
                                            text: 'COVID-19 Recovered over time (Prediction: ARIMA Model)'
                                        },
                                        subtitle: {
                                            text: document.ontouchstart === undefined ?
                                                'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
                                        },
                                        xAxis: {
                                            type: 'datetime'
                                        },
                                        yAxis: {
                                            title: {
                                                text: 'Recovered'
                                            }
                                        },
                                        legend: {
                                            enabled: false
                                        },
                                        plotOptions: {

                                                },

                                                    series: [{
                                                        type: 'spline',
                                                        name: 'Predicted Recovered',
                                                        data: predictedRecovered
                                                    },
                                                    {
                                                        type: 'spline',
                                                        name: 'Actual Recovered',
                                                        data: actualRecovered
                                                    }



                                                    ]
                                                });

                                              document.getElementById('dmae').innerHTML = "Mean Absolute Error (MAE) = "+maeDeath;
                                              document.getElementById('cmae').innerHTML = "Mean Absolute Error (MAE) = "+maeConfirmed;
                                              document.getElementById('rmae').innerHTML = "Mean Absolute Error (MAE) = "+maeRecovered;

                                            var x = document.getElementById("overlay");
                                            if (x.style.display === "none") {
                                                x.style.display = "block";
                                              } else {
                                                x.style.display = "none";
                                              }
                                          }
                                          });

                    }
             }
        });
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
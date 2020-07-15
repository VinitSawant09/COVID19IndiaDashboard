var predictedDeaths = [];
var predictedMaxDeaths = [];
var predictedMinDeaths=[];
var actualDeaths = [];
var actualRecovered = [];
var actualConfirmed = [];
var predictedConfirmed = [];
var predictedMaxConfirmed = [];
var predictedMinConfirmed=[];
var predictedRecovered = [];
var predictedMaxRecovered = [];
var predictedMinRecovered=[];
function predict()
{

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
                    console.log(response);
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
                                          url: "/predictLR",
                                          data: JSON.stringify(
                                          {
                                          "listC" : cumulativeCounts,
                                          "listConfirmed": cumulativeCases,
                                          "listRecovered":cumulativeRecovered

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {
                                             console.log(data)
                                             var listData = data['deaths'];
                                             var listConfirmed = data['confirmed'];
                                             var listRecovered = data['recovered'];
                                             var maeDeath = Math.round((data['dmae'] + Number.EPSILON) * 100) / 100;
                                             var maeConfirmed = Math.round((data['cmae'] + Number.EPSILON) * 100) / 100;
                                             var maeRecovered = Math.round((data['rmae'] + Number.EPSILON) * 100) / 100;
                                             console.log(maeDeath);
                                             console.log(maeConfirmed);
                                             console.log(maeRecovered);



                                            for(var i=0;i<listData.length;i++)
                                            {
                                               var arr= [] ;
                                               var myDate = listData[i][0];

                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr.push(dateObj);
                                               arr.push(Math.round((listData[i][1] + Number.EPSILON) * 100) / 100);
                                               predictedDeaths.push(arr);

                                               var arr1= [] ;
                                               var myDate = listData[i][0];
                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr1.push(dateObj);
                                               arr1.push(Math.round((listData[i][3] + Number.EPSILON) * 100) / 100);
                                               predictedMaxDeaths.push(arr1);

                                               var arr2= [] ;
                                               var myDate = listData[i][0];
                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr2.push(dateObj);
                                               arr2.push(Math.round((listData[i][2] + Number.EPSILON) * 100) / 100);
                                               predictedMinDeaths.push(arr2);

                                            }
                                            //console.log(predictedDeaths)

                                            for(var i=0;i<listConfirmed.length;i++)
                                            {
                                               var arr= [] ;
                                               var myDate = listConfirmed[i][0];

                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr.push(dateObj);
                                               arr.push(Math.round((listConfirmed[i][1] + Number.EPSILON) * 100) / 100);
                                               predictedConfirmed.push(arr);

                                               var arr1= [] ;
                                               var myDate = listConfirmed[i][0];
                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr1.push(dateObj);
                                               arr1.push(Math.round((listConfirmed[i][3] + Number.EPSILON) * 100) / 100);
                                               predictedMaxConfirmed.push(arr1);

                                               var arr2= [] ;
                                               var myDate = listConfirmed[i][0];
                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr2.push(dateObj);
                                               arr2.push(Math.round((listConfirmed[i][2] + Number.EPSILON) * 100) / 100);
                                               predictedMinConfirmed.push(arr2);

                                            }

                                             //console.log(predictedDeaths)

                                            for(var i=0;i<listRecovered.length;i++)
                                            {
                                               var arr= [] ;
                                               var myDate = listRecovered[i][0];

                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr.push(dateObj);
                                               arr.push(Math.round((listRecovered[i][1] + Number.EPSILON) * 100) / 100);
                                               predictedRecovered.push(arr);

                                               var arr1= [] ;
                                               var myDate = listRecovered[i][0];
                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr1.push(dateObj);
                                               arr1.push(Math.round((listRecovered[i][3] + Number.EPSILON) * 100) / 100);
                                               predictedMaxRecovered.push(arr1);

                                               var arr2= [] ;
                                               var myDate = listRecovered[i][0];
                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr2.push(dateObj);
                                               arr2.push(Math.round((listRecovered[i][2] + Number.EPSILON) * 100) / 100);
                                               predictedMinRecovered.push(arr2);

                                            }


                                     ///Predicted deaths graph
                                             Highcharts.chart('container', {
                                        chart: {
                                            zoomType: 'x'
                                        },
                                        title: {
                                            text: 'COVID-19 deaths over time (Prediction: Fb Prophet Model)'
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
                                                        name: 'Deaths',
                                                        data: predictedDeaths
                                                    },
                                                    {
                                                        type: 'spline',
                                                        name: 'Max Deaths',
                                                        data: predictedMaxDeaths
                                                    },
                                                    {
                                                        type: 'spline',
                                                        name: 'Min Deaths',
                                                        data: predictedMinDeaths
                                                    },
                                                    {
                                                        type: 'spline',
                                                        name: 'Actual Deaths',
                                                        data: actualDeaths
                                                    }



                                                    ]
                                                });


                                      ///Predicted confirmed graph
                                             Highcharts.chart('container1', {
                                        chart: {
                                            zoomType: 'x'
                                        },
                                        title: {
                                            text: 'COVID-19 confirmed over time (Prediction: Fb Prophet Model)'
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
                                                        name: 'Confirmed',
                                                        data: predictedConfirmed
                                                    },
                                                    {
                                                        type: 'spline',
                                                        name: 'Max Confirmed',
                                                        data: predictedMaxConfirmed
                                                    },
                                                    {
                                                        type: 'spline',
                                                        name: 'Min Confirmed',
                                                        data: predictedMinConfirmed
                                                    },
                                                    {
                                                        type: 'spline',
                                                        name: 'Actual Confirmed',
                                                        data: actualConfirmed
                                                    }



                                                    ]
                                                });

                                         ///Predicted confirmed graph
                                             Highcharts.chart('container2', {
                                        chart: {
                                            zoomType: 'x'
                                        },
                                        title: {
                                            text: 'COVID-19 Recovered over time (Prediction: Fb Prophet Model)'
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
                                                        name: 'Recovered',
                                                        data: predictedRecovered
                                                    },
                                                    {
                                                        type: 'spline',
                                                        name: 'Max Recovered',
                                                        data: predictedMaxRecovered
                                                    },
                                                    {
                                                        type: 'spline',
                                                        name: 'Min Recovered',
                                                        data: predictedMinRecovered
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

                                        }

                               });
                               }}
        });


}

function toTimestamp(strDate){
 var datum = Date.parse(strDate);
 return datum/1000;
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
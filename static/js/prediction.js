
function predict(predDays)
{
var predictedDeaths = [];
var predictedMaxDeaths = [];
var predictedMinDeaths=[];
var predictedDeathsLog = [];
var predictedMaxDeathsLog = [];
var predictedMinDeathsLog=[];
var actualDeaths = [];
var actualRecovered = [];
var actualConfirmed = [];
var predictedConfirmed = [];
var predictedMaxConfirmed = [];
var predictedMinConfirmed=[];
var predictedConfirmedLog = [];
var predictedMaxConfirmedLog = [];
var predictedMinConfirmedLog = [];
var predictedRecovered = [];
var predictedMaxRecovered = [];
var predictedMinRecovered=[];
var predictedRecoveredLog = [];
var predictedMaxRecoveredLog = [];
var predictedMinRecoveredLog=[];
var selectedPredDays = 5;
var nationalSeries = null;

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
        //url  : "https://api.rootnet.in/covid19-in/stats/history",
         url  : "https://api.covid19india.org/data.json",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response)
            {
                    //console.log(response);

                    if (response!=null)
                    {       /*
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

                            //console.log(actualDeaths);*/

                            nationalSeries = response.cases_time_series;
                                            var cumulativeCounts = [];
                                            var cumulativeCases = [];
                                            var cumulativeRecovered = [];

                                            for (var i =0 ; i<nationalSeries.length ; i++)
                                            {
                                                    var arr = [];

                                                    var x = formatDate(new Date(nationalSeries[i].date+ " 2020"));

                                                    var y = parseInt(nationalSeries[i].totalconfirmed);
                                                    arr.push(x);
                                                    arr.push(y);
                                                    cumulativeCases.push(arr);

                                                    var arr = [];

                                                    var x = formatDate(new Date(nationalSeries[i].date+ " 2020"));
                                                    var y = parseInt(nationalSeries[i].totaldeceased);
                                                    arr.push(x);
                                                    arr.push(y);
                                                    cumulativeCounts.push(arr);

                                                   var arr = [];

                                                    var x = formatDate(new Date(nationalSeries[i].date+ " 2020"));
                                                    var y = parseInt(nationalSeries[i].totalrecovered);
                                                    arr.push(x);
                                                    arr.push(y);
                                                    cumulativeRecovered.push(arr);

                                            }

                                           // console.log(cumulativeCases);


                                            for (var i=0;i<nationalSeries.length;i++)
                                            {
                                                var arr = [];

                                                arr.push(new Date(nationalSeries[i].date+ " 2020").getTime() + (5.5*60*60*1000));
                                                arr.push(parseInt(nationalSeries[i].totaldeceased));
                                                actualDeaths.push(arr);

                                                 var arr = [];

                                                arr.push(new Date(nationalSeries[i].date+ " 2020").getTime() + (5.5*60*60*1000));
                                                arr.push(parseInt(nationalSeries[i].totalconfirmed));
                                                actualConfirmed.push(arr);

                                                 var arr = [];

                                                arr.push(new Date(nationalSeries[i].date+ " 2020").getTime() + (5.5*60*60*1000));
                                                arr.push(parseInt(nationalSeries[i].totalrecovered));
                                                actualRecovered.push(arr);

                                            }
                                             console.log(actualDeaths);



                            $.ajax({
                                          type: 'POST',
                                          url: "/predictLR",
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
                                             console.log(data)
                                             var listData = data['deaths'];
                                             var listConfirmed = data['confirmed'];
                                             var listRecovered = data['recovered'];
                                             var listLogDeaths = data['deathsLog'];
                                             var listLogConfirmed = data['confirmedLog'];
                                             var listLogRecovered = data['recoveredLog'];
                                             var maeDeath = Math.round((data['dmae'] + Number.EPSILON) * 100) / 100;
                                             var maeConfirmed = Math.round((data['cmae'] + Number.EPSILON) * 100) / 100;
                                             var maeRecovered = Math.round((data['rmae'] + Number.EPSILON) * 100) / 100;
                                             var lmaeDeath = Math.round((data['ldmae'] + Number.EPSILON) * 100) / 100;
                                             var lmaeRecovered = Math.round((data['lrmae'] + Number.EPSILON) * 100) / 100;
                                             var lmaeConfirmed = Math.round((data['lcmae'] + Number.EPSILON) * 100) / 100;
                                             //console.log(maeDeath);
                                            // console.log(maeConfirmed);
                                            // console.log(maeRecovered);



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

                                            for(var i=0;i<listLogDeaths.length;i++)
                                            {
                                               var arr= [] ;
                                               var myDate = listLogDeaths[i][0];

                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr.push(dateObj);
                                               arr.push(Math.round((listLogDeaths[i][1] + Number.EPSILON) * 100) / 100);
                                               predictedDeathsLog.push(arr);

                                               var arr1= [] ;
                                               var myDate = listLogDeaths[i][0];
                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr1.push(dateObj);
                                               arr1.push(Math.round((listLogDeaths[i][3] + Number.EPSILON) * 100) / 100);
                                               predictedMaxDeathsLog.push(arr1);

                                               var arr2= [] ;
                                               var myDate = listLogDeaths[i][0];
                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr2.push(dateObj);
                                               arr2.push(Math.round((listLogDeaths[i][2] + Number.EPSILON) * 100) / 100);
                                               predictedMinDeathsLog.push(arr2);

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


                                            for(var i=0;i<listLogConfirmed.length;i++)
                                            {
                                               var arr= [] ;
                                               var myDate = listLogConfirmed[i][0];

                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr.push(dateObj);
                                               arr.push(Math.round((listLogConfirmed[i][1] + Number.EPSILON) * 100) / 100);
                                               predictedConfirmedLog.push(arr);

                                               var arr1= [] ;
                                               var myDate = listLogConfirmed[i][0];
                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr1.push(dateObj);
                                               arr1.push(Math.round((listLogConfirmed[i][3] + Number.EPSILON) * 100) / 100);
                                               predictedMaxConfirmedLog.push(arr1);

                                               var arr2= [] ;
                                               var myDate = listLogConfirmed[i][0];
                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr2.push(dateObj);
                                               arr2.push(Math.round((listLogConfirmed[i][2] + Number.EPSILON) * 100) / 100);
                                               predictedMinConfirmedLog.push(arr2);

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


                                            for(var i=0;i<listLogRecovered.length;i++)
                                            {
                                               var arr= [] ;
                                               var myDate = listLogRecovered[i][0];

                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr.push(dateObj);
                                               arr.push(Math.round((listLogRecovered[i][1] + Number.EPSILON) * 100) / 100);
                                               predictedRecoveredLog.push(arr);

                                               var arr1= [] ;
                                               var myDate = listLogRecovered[i][0];
                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr1.push(dateObj);
                                               arr1.push(Math.round((listLogRecovered[i][3] + Number.EPSILON) * 100) / 100);
                                               predictedMaxRecoveredLog.push(arr1);

                                               var arr2= [] ;
                                               var myDate = listLogRecovered[i][0];
                                               dateObj = new Date(myDate);
                                               dateObj = dateObj.getTime() + (5.5*60*60*1000)

                                               arr2.push(dateObj);
                                               arr2.push(Math.round((listLogRecovered[i][2] + Number.EPSILON) * 100) / 100);
                                               predictedMinRecoveredLog.push(arr2);

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

                                          ///Predicted  graph
                                             Highcharts.chart('container3', {
                                        chart: {
                                            zoomType: 'x'
                                        },
                                        title: {
                                            text: 'COVID-19 Death over time (Log Prediction: Fb Prophet Model)'
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
                                                        data: predictedDeathsLog
                                                    },
                                                    {
                                                        type: 'spline',
                                                        name: 'Max Deaths',
                                                        data: predictedMaxDeathsLog
                                                    },
                                                    {
                                                        type: 'spline',
                                                        name: 'Min Deaths',
                                                        data: predictedMinDeathsLog
                                                    },
                                                    {
                                                        type: 'spline',
                                                        name: 'Actual Deaths',
                                                        data: actualDeaths
                                                    }



                                                    ]
                                                });

                                                Highcharts.chart('container4', {
                                        chart: {
                                            zoomType: 'x'
                                        },
                                        title: {
                                            text: 'COVID-19 Confirmed over time (Log Prediction: Fb Prophet Model)'
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
                                                        data: predictedConfirmedLog
                                                    },
                                                    {
                                                        type: 'spline',
                                                        name: 'Max Confirmed',
                                                        data: predictedMaxConfirmedLog
                                                    },
                                                    {
                                                        type: 'spline',
                                                        name: 'Min Confirmed',
                                                        data: predictedMinConfirmedLog
                                                    },
                                                    {
                                                        type: 'spline',
                                                        name: 'Actual Confirmed',
                                                        data: actualConfirmed
                                                    }



                                                    ]
                                                });

                                            ///Predicted confirmed graph
                                             Highcharts.chart('container5', {
                                        chart: {
                                            zoomType: 'x'
                                        },
                                        title: {
                                            text: 'COVID-19 Recovered over time (Log Prediction: Fb Prophet Model)'
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
                                                        data: predictedRecoveredLog
                                                    },
                                                    {
                                                        type: 'spline',
                                                        name: 'Max Recovered',
                                                        data: predictedMaxRecoveredLog
                                                    },
                                                    {
                                                        type: 'spline',
                                                        name: 'Min Recovered',
                                                        data: predictedMinRecoveredLog
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
                                           document.getElementById('ldmae').innerHTML = "Mean Absolute Error (MAE) = "+lmaeDeath;
                                          document.getElementById('lcmae').innerHTML = "Mean Absolute Error (MAE) = "+lmaeConfirmed;
                                          document.getElementById('lrmae').innerHTML = "Mean Absolute Error (MAE) = "+lmaeRecovered;

                                           var x = document.getElementById("overlay");
                                            if (x.style.display === "none") {
                                                x.style.display = "block";
                                              } else {
                                                x.style.display = "none";
                                              }
                                        }

                               });

                               }}
        });


}

function toTimestamp(strDate){
 var datum = Date.parse(strDate);
 return datum/1000;
}
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

function selectPredDays()
{
 var selectBox = document.getElementById("selectPredDays");
 var selectDays = selectBox.options[selectBox.selectedIndex].value;

 predict(selectDays);
}
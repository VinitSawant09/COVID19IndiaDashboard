var predictedDeaths = [];
var predictedMaxDeaths = [];
var predictedMinDeaths=[];
var actualDeaths = [];
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
                   // console.log(response);
                    if (response!=null)
                    {
                            var cumulativeCounts =[];

                            for (var i=0;i<response.data.length;i++)
                            {
                                var arr = [];
                                arr.push(response.data[i].day);
                                arr.push(response.data[i].summary.deaths);
                                cumulativeCounts.push(arr);

                            }


                            for (var i=0;i<response.data.length;i++)
                            {
                                var arr = [];
                                //console.log(new Date(response.data[i].day).getTime());
                                arr.push(new Date(response.data[i].day).getTime());
                                arr.push(response.data[i].summary.deaths);
                                actualDeaths.push(arr);

                            }

                            //console.log(actualDeaths);



                            $.ajax({
                                          type: 'POST',
                                          url: "/predictLR",
                                          data: JSON.stringify({"listC" : cumulativeCounts}),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {
                                             //console.log(data)
                                             var listData = data['deaths'];
                                            for(var i=0;i<listData.length;i++)
                                            {
                                               var arr= [] ;
                                               var myDate = listData[i][0];
                                               arr.push(myDate);
                                               arr.push(Math.round((listData[i][1] + Number.EPSILON) * 100) / 100);
                                               predictedDeaths.push(arr);

                                               var arr1= [] ;
                                               var myDate = listData[i][0];
                                               arr1.push(myDate);
                                               arr1.push(Math.round((listData[i][3] + Number.EPSILON) * 100) / 100);
                                               predictedMaxDeaths.push(arr1);

                                               var arr2= [] ;
                                               var myDate = listData[i][0];
                                               arr2.push(myDate);
                                               arr2.push(Math.round((listData[i][2] + Number.EPSILON) * 100) / 100);
                                               predictedMinDeaths.push(arr2);

                                            }
                                            //console.log(predictedDeaths)


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
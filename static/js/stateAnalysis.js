var zoneConfirmedStats=[0,0,0,0,0,0,0];
var zoneDeathStats =[0,0,0,0,0,0,0];
var zoneRecoveredStats =[0,0,0,0,0,0,0];
var airportConfirmedStats=[0,0,0,0,0];
var airportDeathStats=[0,0,0,0,0];
var airportRecoveredStats=[0,0,0,0,0];
var entireData=[];
function myFunction()
{

$.ajax(
       {
        url  : "https://api.rootnet.in/covid19-in/stats/latest",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){
        console.log(response.data.regional);
        var arrState= response.data.regional;
        entireData = arrState;
        for (var i=0;i<arrState.length;i++)
        {
            if(arrState[i].loc == 'Tamil Nadu'
                || arrState[i].loc == 'Kerala'
                || arrState[i].loc == 'Karnataka'
                || arrState[i].loc == 'Puducherry'
                || arrState[i].loc == 'Andhra Pradesh'
                || arrState[i].loc == 'Telangana'
            )
            {
              zoneConfirmedStats[1] = zoneConfirmedStats[1] + arrState[i].totalConfirmed;
              zoneDeathStats[1] = zoneDeathStats[1] + arrState[i].deaths;
              zoneRecoveredStats[1] = zoneRecoveredStats[1] + arrState[i].discharged;
            }
            else if(arrState[i].loc == 'Gujarat'
                || arrState[i].loc == 'Maharashtra'
                || arrState[i].loc == 'Goa'
                || arrState[i].loc == 'Dadra and Nagar Haveli and Daman and Diu'
            )
            {
              zoneConfirmedStats[2] = zoneConfirmedStats[2] + arrState[i].totalConfirmed;
               zoneDeathStats[2] = zoneDeathStats[2] + arrState[i].deaths;
              zoneRecoveredStats[2] = zoneRecoveredStats[2] + arrState[i].discharged;
            }
            else if(arrState[i].loc == 'Andaman and Nicobar Islands'
            )
            {
              zoneConfirmedStats[6] = zoneConfirmedStats[6] + arrState[i].totalConfirmed;
              zoneDeathStats[6] = zoneDeathStats[6] + arrState[i].deaths;
              zoneRecoveredStats[6] = zoneRecoveredStats[6] + arrState[i].discharged;
            }
           else if(arrState[i].loc == 'Assam'
                || arrState[i].loc == 'Manipur'
                || arrState[i].loc == 'Arunachal Pradesh'
                || arrState[i].loc == 'Meghalaya'
                || arrState[i].loc == 'Mizoram'
                || arrState[i].loc == 'Nagaland'
                || arrState[i].loc == 'Sikkim'
                || arrState[i].loc == 'Tripura'

            )
            {
             zoneConfirmedStats[5] = zoneConfirmedStats[5] + arrState[i].totalConfirmed;
             zoneDeathStats[5] = zoneDeathStats[5] + arrState[i].deaths;
              zoneRecoveredStats[5] = zoneRecoveredStats[5] + arrState[i].discharged;
            }
           else  if(arrState[i].loc == 'Madhya Pradesh'
                )
            {
            zoneConfirmedStats[4] = zoneConfirmedStats[4] + arrState[i].totalConfirmed;
            zoneDeathStats[4] = zoneDeathStats[4] + arrState[i].deaths;
              zoneRecoveredStats[4] = zoneRecoveredStats[4] + arrState[i].discharged;

            }
           else  if(arrState[i].loc == 'West Bengal'
                    || arrState[i].loc == 'Odisha'
                    || arrState[i].loc == 'Tripura'
                )
            {
             zoneConfirmedStats[3] = zoneConfirmedStats[3] + arrState[i].totalConfirmed;
             zoneDeathStats[3] = zoneDeathStats[3] + arrState[i].deaths;
              zoneRecoveredStats[3] = zoneRecoveredStats[3] + arrState[i].discharged;

            }
           else
           {
           zoneConfirmedStats[0] = zoneConfirmedStats[0] + arrState[i].totalConfirmed;
           zoneDeathStats[0] = zoneDeathStats[0] + arrState[i].deaths;
              zoneRecoveredStats[0] = zoneRecoveredStats[0] + arrState[i].discharged;

           }


        }


         for (var i=0;i<arrState.length;i++)
        {
         if(arrState[i].loc == 'Tamil Nadu'
            || arrState[i].loc == 'Kerala'
                )
                {

                 airportConfirmedStats[4] = airportConfirmedStats[4] + arrState[i].totalConfirmed;
                 airportDeathStats[4] = airportDeathStats[4] + arrState[i].deaths;
                 airportRecoveredStats[4] = airportRecoveredStats[4] + arrState[i].discharged;
                }
         else if(arrState[i].loc == 'Maharashtra'
                 || arrState[i].loc == 'Andhra Pradesh'
                )
                {

                 airportConfirmedStats[3] = airportConfirmedStats[3] + arrState[i].totalConfirmed;
                 airportDeathStats[3] = airportDeathStats[3] + arrState[i].deaths;
                 airportRecoveredStats[3] = airportRecoveredStats[3] + arrState[i].discharged;
                }
         else if(arrState[i].loc == 'Bihar'
                || arrState[i].loc == 'Gujarat'
                || arrState[i].loc == 'Karnataka'
                || arrState[i].loc == 'Uttar Pradesh'
                || arrState[i].loc == 'West Bengal'
                || arrState[i].loc == 'Telangana'
            )
            {

                 airportConfirmedStats[2] = airportConfirmedStats[2] + arrState[i].totalConfirmed;
                 airportDeathStats[2] = airportDeathStats[2] + arrState[i].deaths;
                 airportRecoveredStats[2] = airportRecoveredStats[2] + arrState[i].discharged;
                }
         else if(arrState[i].loc == 'Assam'
                || arrState[i].loc == 'Delhi'
                || arrState[i].loc == 'Goa'
                || arrState[i].loc == 'Madhya Pradesh'
                || arrState[i].loc == 'Manipur'
                || arrState[i].loc == 'Telangana'
                || arrState[i].loc == 'Odisha'
                || arrState[i].loc == 'Rajasthan'
                || arrState[i].loc == 'Punjab'
                || arrState[i].loc == 'Chandigarh'
                || arrState[i].loc == 'Jammu and Kashmir'
            )
            {

                 airportConfirmedStats[1] = airportConfirmedStats[1] + arrState[i].totalConfirmed;
                 airportDeathStats[1] = airportDeathStats[1] + arrState[i].deaths;
                 airportRecoveredStats[1] = airportRecoveredStats[1] + arrState[i].discharged;
                }
         else{

                 airportConfirmedStats[0] = airportConfirmedStats[0] + arrState[i].totalConfirmed;
                 airportDeathStats[0] = airportDeathStats[0] + arrState[i].deaths;
                 airportRecoveredStats[0] = airportRecoveredStats[0] + arrState[i].discharged;

         }
        }
         console.log(zoneConfirmedStats);
         console.log(zoneDeathStats);
         console.log(zoneRecoveredStats);
         console.log(airportConfirmedStats);
         console.log(airportDeathStats);
         console.log(airportRecoveredStats);

         //ConfirmedCases by zones
         Highcharts.chart('sectionWiseCase', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Confirmed Cases distribution by zones in India'
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        accessibility: {
                            point: {
                                valueSuffix: '%'
                            }
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                }
                            }
                        },
                        series: [{
                            name: 'Count',
                            colorByPoint: true,
                            data: [{
                                name: 'North',
                                y: zoneConfirmedStats[0]

                            }, {
                                name: 'South',
                                y: zoneConfirmedStats[1]

                            },{
                                name: 'West',
                                y: zoneConfirmedStats[2],
                                sliced: true,
                                selected: true
                            },{
                                name: 'East',
                                y: zoneConfirmedStats[3]
                            },{
                                name: 'Central',
                                y: zoneConfirmedStats[4]
                            },{
                                name: 'North East',
                                y: zoneConfirmedStats[5]
                            },{
                                name: 'Island',
                                y: zoneConfirmedStats[6]
                            }
                            ]
                        }]
                    });

         //ConfirmedCases by number of airports
         Highcharts.chart('airportWiseCase', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Confirmed Cases distribution by number of international airports '
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        accessibility: {
                            point: {
                                valueSuffix: '%'
                            }
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                }
                            }
                        },
                        series: [{
                            name: 'Count',
                            colorByPoint: true,
                            data: [{
                                name: '0',
                                y: airportConfirmedStats[0]

                            }, {
                                name: '1',
                                y: airportConfirmedStats[1]

                            },{
                                name: '2',
                                y: airportConfirmedStats[2]

                            },{
                                name: '3',
                                y: airportConfirmedStats[3],
                                sliced: true,
                                selected: true
                            },{
                                name: '4',
                                y: airportConfirmedStats[4]
                            }
                            ]
                        }]
                    });
          //Death by zones
         Highcharts.chart('sectionWiseDeaths', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Deaths distribution by zones in India'
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        accessibility: {
                            point: {
                                valueSuffix: '%'
                            }
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                }
                            }
                        },
                        series: [{
                            name: 'Count',
                            colorByPoint: true,
                            data: [{
                                name: 'North',
                                y: zoneDeathStats[0]

                            }, {
                                name: 'South',
                                y: zoneDeathStats[1]

                            },{
                                name: 'West',
                                y: zoneDeathStats[2],
                                sliced: true,
                                selected: true
                            },{
                                name: 'East',
                                y: zoneDeathStats[3]
                            },{
                                name: 'Central',
                                y: zoneDeathStats[4]
                            },{
                                name: 'North East',
                                y: zoneDeathStats[5]
                            },{
                                name: 'Island',
                                y: zoneDeathStats[6]
                            }
                            ]
                        }]
                    });

         //Deaths by number of airports
         Highcharts.chart('airportWiseDeaths', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Deaths distribution by number of international airports '
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        accessibility: {
                            point: {
                                valueSuffix: '%'
                            }
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                }
                            }
                        },
                        series: [{
                            name: 'Count',
                            colorByPoint: true,
                            data: [{
                                name: '0',
                                y: airportDeathStats[0]

                            }, {
                                name: '1',
                                y: airportDeathStats[1]

                            },{
                                name: '2',
                                y: airportDeathStats[2]

                            },{
                                name: '3',
                                y: airportDeathStats[3],
                                sliced: true,
                                selected: true
                            },{
                                name: '4',
                                y: airportDeathStats[4]
                            }
                            ]
                        }]
                    });

          //Recoveries by zones
         Highcharts.chart('sectionWiseRecoveries', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Recoveries distribution by zones in India'
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        accessibility: {
                            point: {
                                valueSuffix: '%'
                            }
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                }
                            }
                        },
                        series: [{
                            name: 'Count',
                            colorByPoint: true,
                            data: [{
                                name: 'North',
                                y: zoneRecoveredStats[0]

                            }, {
                                name: 'South',
                                y: zoneRecoveredStats[1]

                            },{
                                name: 'West',
                                y: zoneRecoveredStats[2],
                                sliced: true,
                                selected: true
                            },{
                                name: 'East',
                                y: zoneRecoveredStats[3]
                            },{
                                name: 'Central',
                                y: zoneRecoveredStats[4]
                            },{
                                name: 'North East',
                                y: zoneRecoveredStats[5]
                            },{
                                name: 'Island',
                                y: zoneRecoveredStats[6]
                            }
                            ]
                        }]
                    });

         //Recoveries by number of airports
         Highcharts.chart('airportWiseRecoveries', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Recoveries distribution by number of international airports '
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        accessibility: {
                            point: {
                                valueSuffix: '%'
                            }
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                }
                            }
                        },
                        series: [{
                            name: 'Count',
                            colorByPoint: true,
                            data: [{
                                name: '0',
                                y: airportRecoveredStats[0]

                            }, {
                                name: '1',
                                y: airportRecoveredStats[1],
                                sliced: true,
                                selected: true

                            },{
                                name: '2',
                                y: airportRecoveredStats[2]

                            },{
                                name: '3',
                                y: airportRecoveredStats[3]

                            },{
                                name: '4',
                                y: airportRecoveredStats[4]
                            }
                            ]
                        }]
                    });
        }
        });



}

function selectZone()
{
        //alert("Hello");
        //console.log(entireData);
        var selectBox = document.getElementById("selectZone");
        var zone = selectBox.options[selectBox.selectedIndex].value;
        var data = [];
        var data1 = [];
        var data2 =[];
       if (zone == 'Islands')
       {
        for (var i=0; i<entireData.length; i++)
        {
            if(entireData[i].loc == 'Andaman and Nicobar Islands')
            {
                var name = entireData[i].loc;
                var y = entireData[i].totalConfirmed;
                var objA= {name,y}
                data.push(objA);

                 var name = entireData[i].loc;
                var y = entireData[i].deaths;
                var objA= {name,y}
                data1.push(objA);

                 var name = entireData[i].loc;
                var y = entireData[i].discharged;
                var objA= {name,y}
                data2.push(objA);

            }
        }
        }
        else if (zone == 'Central')
        {
                 for (var i=0; i<entireData.length; i++)
             {
                if(entireData[i].loc == 'Madhya Pradesh')
                {
                    var name = entireData[i].loc;
                    var y = entireData[i].totalConfirmed;
                    var objA= {name,y}
                    data.push(objA);

                     var name = entireData[i].loc;
                var y = entireData[i].deaths;
                var objA= {name,y}
                data1.push(objA);

                 var name = entireData[i].loc;
                var y = entireData[i].discharged;
                var objA= {name,y}
                data2.push(objA);

                }
             }
        }
        else if (zone == 'West')
        {
                 for (var i=0; i<entireData.length; i++)
             {
                if(entireData[i].loc == 'Gujarat'
                || entireData[i].loc == 'Maharashtra'
                || entireData[i].loc == 'Goa'
                || entireData[i].loc == 'Dadra and Nagar Haveli and Daman and Diu' )
                {
                    var name = entireData[i].loc;
                    var y = entireData[i].totalConfirmed;
                    var objA= {name,y}
                    data.push(objA);

                     var name = entireData[i].loc;
                var y = entireData[i].deaths;
                var objA= {name,y}
                data1.push(objA);

                 var name = entireData[i].loc;
                var y = entireData[i].discharged;
                var objA= {name,y}
                data2.push(objA);

                }
             }
        }
        else if (zone == 'North East')
        {
                 for (var i=0; i<entireData.length; i++)
             {
                if(entireData[i].loc == 'Assam'
                || entireData[i].loc == 'Manipur'
                || entireData[i].loc == 'Arunachal Pradesh'
                || entireData[i].loc == 'Meghalaya'
                || entireData[i].loc == 'Mizoram'
                || entireData[i].loc == 'Nagaland'
                || entireData[i].loc == 'Sikkim'
                || entireData[i].loc == 'Tripura'
                )
                {
                    var name = entireData[i].loc;
                    var y = entireData[i].totalConfirmed;
                    var objA= {name,y}
                    data.push(objA);

                     var name = entireData[i].loc;
                var y = entireData[i].deaths;
                var objA= {name,y}
                data1.push(objA);

                 var name = entireData[i].loc;
                var y = entireData[i].discharged;
                var objA= {name,y}
                data2.push(objA);

                }
             }

        }
        else if (zone == 'South')
        {
                 for (var i=0; i<entireData.length; i++)
             {
                if(entireData[i].loc == 'Tamil Nadu'
                || entireData[i].loc == 'Kerala'
                || entireData[i].loc == 'Karnataka'
                || entireData[i].loc == 'Puducherry'
                || entireData[i].loc == 'Andhra Pradesh'
                || entireData[i].loc == 'Telangana'
                )
                {
                    var name = entireData[i].loc;
                    var y = entireData[i].totalConfirmed;
                    var objA= {name,y}
                    data.push(objA);

                     var name = entireData[i].loc;
                var y = entireData[i].deaths;
                var objA= {name,y}
                data1.push(objA);

                 var name = entireData[i].loc;
                var y = entireData[i].discharged;
                var objA= {name,y}
                data2.push(objA);

                }
             }


        }
         else if (zone == 'North')
         {
            for (var i=0; i<entireData.length; i++)
             {
                if(entireData[i].loc == 'Delhi'
                || entireData[i].loc == 'Uttar Pradesh'
                || entireData[i].loc == 'Rajasthan'
                || entireData[i].loc == 'Himachal Pradesh'
                || entireData[i].loc == 'Jammu and Kashmir'
                || entireData[i].loc == 'Punjab'
                 || entireData[i].loc == 'Bihar'
                || entireData[i].loc == 'Uttarakhand'
                || entireData[i].loc == 'Jharkhand'
                || entireData[i].loc == 'Haryana'
                || entireData[i].loc == 'Chandigarh'
                || entireData[i].loc == 'Chhattisgarh'
                || entireData[i].loc == 'Ladakh'
                )
                {
                    var name = entireData[i].loc;
                    var y = entireData[i].totalConfirmed;
                    var objA= {name,y}
                    data.push(objA);

                     var name = entireData[i].loc;
                var y = entireData[i].deaths;
                var objA= {name,y}
                data1.push(objA);

                 var name = entireData[i].loc;
                var y = entireData[i].discharged;
                var objA= {name,y}
                data2.push(objA);

                }
             }



         }
          else if (zone == 'East')
         {
            for (var i=0; i<entireData.length; i++)
             {
                if(entireData[i].loc == 'Odisha'
                || entireData[i].loc == 'West Bengal'
                )
                {
                    var name = entireData[i].loc;
                    var y = entireData[i].totalConfirmed;
                    var objA= {name,y}
                    data.push(objA);

                     var name = entireData[i].loc;
                var y = entireData[i].deaths;
                var objA= {name,y}
                data1.push(objA);

                 var name = entireData[i].loc;
                var y = entireData[i].discharged;
                var objA= {name,y}
                data2.push(objA);

                }
             }

         }

        //Form new chart based on specific zone

         Highcharts.chart('sectionWiseCase', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Confirmed Cases distribution by specific zone in India'
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        accessibility: {
                            point: {
                                valueSuffix: '%'
                            }
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                }
                            }
                        },
                        series: [{
                            name: 'Count',
                            colorByPoint: true,
                            data: data
                        }]
                    });

         Highcharts.chart('sectionWiseDeaths', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Deaths distribution by specific zone in India'
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        accessibility: {
                            point: {
                                valueSuffix: '%'
                            }
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                }
                            }
                        },
                        series: [{
                            name: 'Count',
                            colorByPoint: true,
                            data: data1
                        }]
                    });

           Highcharts.chart('sectionWiseRecoveries', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Recovery distribution by specific zone in India'
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        accessibility: {
                            point: {
                                valueSuffix: '%'
                            }
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                }
                            }
                        },
                        series: [{
                            name: 'Count',
                            colorByPoint: true,
                            data: data2
                        }]
                    });



}

function selectAirports()
{
        var selectBox = document.getElementById("selectAirports");
        var airports = selectBox.options[selectBox.selectedIndex].value;
        var data = [];
        var data1 = [];
        var data2 =[];
       if (airports == '4')
       {
            for (var i=0; i<entireData.length; i++)
             {
              if(entireData[i].loc == 'Tamil Nadu'
                || entireData[i].loc == 'Kerala'
              )
              {
                 var name = entireData[i].loc;
                 var y = entireData[i].totalConfirmed;
                 var objA= {name,y}
                 data.push(objA);

                 var name = entireData[i].loc;
                 var y = entireData[i].deaths;
                 var objA= {name,y}
                 data1.push(objA);

                 var name = entireData[i].loc;
                 var y = entireData[i].discharged;
                 var objA= {name,y}
                 data2.push(objA);

              }

             }
       }
       else if (airports == '3')
       {
            for (var i=0; i<entireData.length; i++)
             {
              if(entireData[i].loc == 'Maharashtra'
              || entireData[i].loc == 'Andhra Pradesh'

              )
              {
                 var name = entireData[i].loc;
                 var y = entireData[i].totalConfirmed;
                 var objA= {name,y}
                 data.push(objA);

                 var name = entireData[i].loc;
                 var y = entireData[i].deaths;
                 var objA= {name,y}
                 data1.push(objA);

                 var name = entireData[i].loc;
                 var y = entireData[i].discharged;
                 var objA= {name,y}
                 data2.push(objA);

              }

             }
       }
        else if (airports == '2')
       {
         for (var i=0; i<entireData.length; i++)
         {
                if(    entireData[i].loc == 'Bihar'
                || entireData[i].loc == 'Gujarat'
                || entireData[i].loc == 'Karnataka'
                || entireData[i].loc == 'Uttar Pradesh'
                || entireData[i].loc == 'West Bengal'
                || entireData[i].loc == 'Telangana')
                {
                var name = entireData[i].loc;
                 var y = entireData[i].totalConfirmed;
                 var objA= {name,y}
                 data.push(objA);

                 var name = entireData[i].loc;
                 var y = entireData[i].deaths;
                 var objA= {name,y}
                 data1.push(objA);

                 var name = entireData[i].loc;
                 var y = entireData[i].discharged;
                 var objA= {name,y}
                 data2.push(objA);
                }
         }
       }
       else if (airports == '1')
       {
         for (var i=0; i<entireData.length; i++)
         {
                if(    entireData[i].loc == 'Assam'
                || entireData[i].loc == 'Delhi'
                || entireData[i].loc == 'Goa'
                || entireData[i].loc == 'Madhya Pradesh'
                || entireData[i].loc == 'Manipur'
                || entireData[i].loc == 'Telangana'
                || entireData[i].loc == 'Odisha'
                || entireData[i].loc == 'Rajasthan'
                || entireData[i].loc == 'Punjab'
                || entireData[i].loc == 'Chandigarh'
                || entireData[i].loc == 'Jammu and Kashmir')
                {
                var name = entireData[i].loc;
                 var y = entireData[i].totalConfirmed;
                 var objA= {name,y}
                 data.push(objA);

                 var name = entireData[i].loc;
                 var y = entireData[i].deaths;
                 var objA= {name,y}
                 data1.push(objA);

                 var name = entireData[i].loc;
                 var y = entireData[i].discharged;
                 var objA= {name,y}
                 data2.push(objA);
                }
         }
       }
       else if (airports == '0')
       {
         for (var i=0; i<entireData.length; i++)
         {
                if(    entireData[i].loc == 'Ladakh'
                || entireData[i].loc == 'Jharkhand'
                || entireData[i].loc == 'Haryana'
                || entireData[i].loc == 'Chattisgarh'
                || entireData[i].loc == 'Uttarakhand'
                || entireData[i].loc == 'Himachal Pradesh'
                || entireData[i].loc == 'Arunachal Pradesh'
                || entireData[i].loc == 'Meghalaya'
                || entireData[i].loc == 'Mizoram'
                || entireData[i].loc == 'Nagaland'
                || entireData[i].loc == 'Sikkim'
                || entireData[i].loc == 'Tripura'
                || entireData[i].loc == 'Andaman and Nicobar Islands '
                || entireData[i].loc == 'Dadra and Nagar Haveli and Daman and Diu '

                )
                {
                var name = entireData[i].loc;
                 var y = entireData[i].totalConfirmed;
                 var objA= {name,y}
                 data.push(objA);

                 var name = entireData[i].loc;
                 var y = entireData[i].deaths;
                 var objA= {name,y}
                 data1.push(objA);

                 var name = entireData[i].loc;
                 var y = entireData[i].discharged;
                 var objA= {name,y}
                 data2.push(objA);
                }
         }
       }


       //Form new chart based on specific number of airports

         Highcharts.chart('airportWiseCase', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Confirmed Cases distribution by number of airports in India'
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        accessibility: {
                            point: {
                                valueSuffix: '%'
                            }
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                }
                            }
                        },
                        series: [{
                            name: 'Count',
                            colorByPoint: true,
                            data: data
                        }]
                    });

         Highcharts.chart('airportWiseDeaths', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Deaths distribution by number of airports in India'
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        accessibility: {
                            point: {
                                valueSuffix: '%'
                            }
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                }
                            }
                        },
                        series: [{
                            name: 'Count',
                            colorByPoint: true,
                            data: data1
                        }]
                    });

           Highcharts.chart('airportWiseRecoveries', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Recovery distribution by number of airports in India'
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        accessibility: {
                            point: {
                                valueSuffix: '%'
                            }
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                }
                            }
                        },
                        series: [{
                            name: 'Count',
                            colorByPoint: true,
                            data: data2
                        }]
                    });







}
var zoneConfirmedStats=[0,0,0,0,0,0,0];
var zoneDeathStats =[0,0,0,0,0,0,0];
var zoneRecoveredStats =[0,0,0,0,0,0,0];
var airportConfirmedStats=[0,0,0,0,0];
var airportDeathStats=[0,0,0,0,0];
var airportRecoveredStats=[0,0,0,0,0];
var entireData=[];
var veryHighDensityStates =[];
var veryHighDensityLowPopulatedStates = [];
var highDensityStates =[];
var moderateDensityStates =[];
var lowDensityStates =[];
var states =[];
function myFunction()
{

$.ajax(
       {
        //url  : "https://api.rootnet.in/covid19-in/stats/latest",
        url : "https://api.covid19india.org/data.json",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){


        /*
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
        }*/


         states = response.statewise;
         arrState = states
          for (var i=0;i<arrState.length;i++)
        {

            if(arrState[i].state != "Total" && arrState[i].state != "Lakshadweep" && arrState[i].state != "State Unassigned")
              {

            if(arrState[i].state == 'Tamil Nadu'
                || arrState[i].state == 'Kerala'
                || arrState[i].state == 'Karnataka'
                || arrState[i].state == 'Puducherry'
                || arrState[i].state == 'Andhra Pradesh'
                || arrState[i].state == 'Telangana'
            )
            {
              zoneConfirmedStats[1] = zoneConfirmedStats[1] + parseInt(arrState[i].confirmed);
              zoneDeathStats[1] = zoneDeathStats[1] + parseInt(arrState[i].deaths);
              zoneRecoveredStats[1] = zoneRecoveredStats[1] + parseInt(arrState[i].recovered);
            }
            else if(arrState[i].state == 'Gujarat'
                || arrState[i].state == 'Maharashtra'
                || arrState[i].state == 'Goa'
                || arrState[i].state == 'Dadra and Nagar Haveli and Daman and Diu'
            )
            {
              zoneConfirmedStats[2] = zoneConfirmedStats[2] + parseInt(arrState[i].confirmed);
               zoneDeathStats[2] = zoneDeathStats[2] + parseInt(arrState[i].deaths);
              zoneRecoveredStats[2] = zoneRecoveredStats[2] + parseInt(arrState[i].recovered);
            }
            else if(arrState[i].state == 'Andaman and Nicobar Islands'
            )
            {
              zoneConfirmedStats[6] = zoneConfirmedStats[6] + parseInt(arrState[i].confirmed);
              zoneDeathStats[6] = zoneDeathStats[6] + parseInt(arrState[i].deaths);
              zoneRecoveredStats[6] = zoneRecoveredStats[6] + parseInt(arrState[i].recovered);
            }
           else if(arrState[i].state == 'Assam'
                || arrState[i].state == 'Manipur'
                || arrState[i].state == 'Arunachal Pradesh'
                || arrState[i].state == 'Meghalaya'
                || arrState[i].state == 'Mizoram'
                || arrState[i].state == 'Nagaland'
                || arrState[i].state == 'Sikkim'
                || arrState[i].state == 'Tripura'

            )
            {
             zoneConfirmedStats[5] = zoneConfirmedStats[5] + parseInt(arrState[i].confirmed);
             zoneDeathStats[5] = zoneDeathStats[5] + parseInt(arrState[i].deaths);
              zoneRecoveredStats[5] = zoneRecoveredStats[5] + parseInt(arrState[i].recovered);
            }
           else  if(arrState[i].state == 'Madhya Pradesh'
                )
            {
            zoneConfirmedStats[4] = zoneConfirmedStats[4] + parseInt(arrState[i].confirmed);
            zoneDeathStats[4] = zoneDeathStats[4] + parseInt(arrState[i].deaths);
              zoneRecoveredStats[4] = zoneRecoveredStats[4] + parseInt(arrState[i].recovered);

            }
           else  if(arrState[i].state == 'West Bengal'
                    || arrState[i].state == 'Odisha'
                    || arrState[i].state == 'Tripura'
                )
            {
             zoneConfirmedStats[3] = zoneConfirmedStats[3] + parseInt(arrState[i].confirmed);
             zoneDeathStats[3] = zoneDeathStats[3] + parseInt(arrState[i].deaths);
              zoneRecoveredStats[3] = zoneRecoveredStats[3] + parseInt(arrState[i].recovered);

            }
           else
           {
           zoneConfirmedStats[0] = zoneConfirmedStats[0] + parseInt(arrState[i].confirmed);
           zoneDeathStats[0] = zoneDeathStats[0] + parseInt(arrState[i].deaths);
              zoneRecoveredStats[0] = zoneRecoveredStats[0] + parseInt(arrState[i].recovered);

           }
        }

        }

         for (var i=0;i<arrState.length;i++)
        {
         if(arrState[i].state != "Total" && arrState[i].state != "Lakshadweep" && arrState[i].state != "State Unassigned")
              {

         if(arrState[i].state == 'Tamil Nadu'
            || arrState[i].state == 'Kerala'
                )
                {

                 airportConfirmedStats[4] = airportConfirmedStats[4] + parseInt(arrState[i].confirmed);
                 airportDeathStats[4] = airportDeathStats[4] + parseInt(arrState[i].deaths);
                 airportRecoveredStats[4] = airportRecoveredStats[4] + parseInt(arrState[i].recovered);
                }
         else if(arrState[i].state == 'Maharashtra'
                 || arrState[i].state == 'Andhra Pradesh'
                )
                {

                 airportConfirmedStats[3] = airportConfirmedStats[3] + parseInt(arrState[i].confirmed);
                 airportDeathStats[3] = airportDeathStats[3] + parseInt(arrState[i].deaths);
                 airportRecoveredStats[3] = airportRecoveredStats[3] + parseInt(arrState[i].recovered);
                }
         else if(arrState[i].state == 'Bihar'
                || arrState[i].state == 'Gujarat'
                || arrState[i].state == 'Karnataka'
                || arrState[i].state == 'Uttar Pradesh'
                || arrState[i].state == 'West Bengal'
                || arrState[i].state == 'Telangana'
            )
            {

                 airportConfirmedStats[2] = airportConfirmedStats[2] + parseInt(arrState[i].confirmed);
                 airportDeathStats[2] = airportDeathStats[2] + parseInt(arrState[i].deaths);
                 airportRecoveredStats[2] = airportRecoveredStats[2] + parseInt(arrState[i].recovered);
                }
         else if(arrState[i].state == 'Assam'
                || arrState[i].state == 'Delhi'
                || arrState[i].state == 'Goa'
                || arrState[i].state == 'Madhya Pradesh'
                || arrState[i].state == 'Manipur'
                || arrState[i].state == 'Telangana'
                || arrState[i].state == 'Odisha'
                || arrState[i].state == 'Rajasthan'
                || arrState[i].state == 'Punjab'
                || arrState[i].state == 'Chandigarh'
                || arrState[i].state == 'Jammu and Kashmir'
            )
            {

                 airportConfirmedStats[1] = airportConfirmedStats[1] + parseInt(arrState[i].confirmed);
                 airportDeathStats[1] = airportDeathStats[1] + parseInt(arrState[i].deaths);
                 airportRecoveredStats[1] = airportRecoveredStats[1] + parseInt(arrState[i].recovered);
                }
         else{

                 airportConfirmedStats[0] = airportConfirmedStats[0] + parseInt(arrState[i].confirmed);
                 airportDeathStats[0] = airportDeathStats[0] + parseInt(arrState[i].deaths);
                 airportRecoveredStats[0] = airportRecoveredStats[0] + parseInt(arrState[i].recovered);

         }
         }
        }




        console.log(zoneDeathStats);

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



   //////////////////////////////////////////////////////Density code begins ////////////////////////////////////////////////////////////
         /*
         var tempArr=[];

                for (var i=0;i<entireData.length;i++)
        {


            if(entireData[i].loc == 'Bihar')
            {
                 var x= 1102;
                 var y = entireData[i].totalConfirmed;
                 var z = 104099452;
                 var stateName = entireData[i].loc;
                 var name = 'BR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'West Bengal')
            {
                 var x= 1030;
                 var y = entireData[i].totalConfirmed;
                 var z = 91276115;
                 var stateName = entireData[i].loc;
                 var name = 'WB';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Kerala')
            {
                 var x= 859;
                 var y = entireData[i].totalConfirmed;
                 var z = 33406061;
                 var stateName = entireData[i].loc;
                 var name = 'KL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Uttar Pradesh')
            {
                 var x= 828;
                 var y = entireData[i].totalConfirmed;
                 var z = 199812341;
                 var stateName = entireData[i].loc;
                 var name = 'UP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Haryana')
            {
                 var x= 573;
                 var y = entireData[i].totalConfirmed;
                 var z = 25351462;
                 var stateName = entireData[i].loc;
                 var name = 'HR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Tamil Nadu')
            {
                 var x= 555;
                 var y = entireData[i].totalConfirmed;
                 var z = 72147030;
                 var stateName = entireData[i].loc;
                 var name = 'TN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Punjab')
            {
                 var x= 555;
                 var y = entireData[i].totalConfirmed;
                 var z = 27743338;
                 var stateName = entireData[i].loc;
                 var name = 'PN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Jharkhand')
            {
                 var x= 414;
                 var y = entireData[i].totalConfirmed;
                 var z = 32988134;
                 var stateName = entireData[i].loc;
                 var name = 'JKD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Assam')
            {
                 var x= 397;
                 var y = entireData[i].totalConfirmed;
                 var z = 31205576;
                 var stateName = entireData[i].loc;
                 var name = 'AS';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Goa')
            {
                 var x= 394;
                 var y = entireData[i].totalConfirmed;
                 var z = 1458545;
                 var stateName = entireData[i].loc;
                 var name = 'GA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Maharashtra')
            {
                 var x= 365;
                 var y = entireData[i].totalConfirmed;
                 var z = 112374333;
                 var stateName = entireData[i].loc;
                 var name = 'MH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Tripura')
            {
                 var x= 350;
                 var y = entireData[i].totalConfirmed;
                 var z = 3673917;
                 var stateName = entireData[i].loc;
                 var name = 'TP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Karnataka')
            {
                 var x= 319;
                 var y = entireData[i].totalConfirmed;
                 var z = 61095297;
                 var stateName = entireData[i].loc;
                 var name = 'KA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Gujarat')
            {
                 var x= 308;
                 var y = entireData[i].totalConfirmed;
                 var z = 60439692;
                 var stateName = entireData[i].loc;
                 var name = 'GJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Andhra Pradesh')
            {
                 var x= 308;
                 var y = entireData[i].totalConfirmed;
                 var z = 49386799;
                 var stateName = entireData[i].loc;
                 var name = 'AP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Telangana')
            {
                 var x= 307;
                 var y = entireData[i].totalConfirmed;
                 var z = 35193978;
                 var stateName = entireData[i].loc;
                 var name = 'TL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Odisha')
            {
                 var x= 269;
                 var y = entireData[i].totalConfirmed;
                 var z = 41974218;
                 var stateName = entireData[i].loc;
                 var name = 'OD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Madhya Pradesh')
            {
                 var x= 236;
                 var y = entireData[i].totalConfirmed;
                 var z = 72626809;
                 var stateName = entireData[i].loc;
                 var name = 'MP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].loc == 'Rajasthan')
            {
                 var x= 201;
                 var y = entireData[i].totalConfirmed;
                 var z = 68548437;
                 var stateName = entireData[i].loc;
                 var name = 'RJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].loc == 'Chhattisgarh')
            {
                 var x= 189;
                 var y = entireData[i].totalConfirmed;
                 var z = 25545198;
                 var stateName = entireData[i].loc;
                 var name = 'CG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Uttarakhand')
            {
                 var x= 189;
                 var y = entireData[i].totalConfirmed;
                 var z = 10086292;
                 var stateName = entireData[i].loc;
                 var name = 'UK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Meghalaya')
            {
                 var x= 132;
                 var y = entireData[i].totalConfirmed;
                 var z = 2966889;
                 var stateName = entireData[i].loc;
                 var name = 'MG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Manipur')
            {
                 var x= 128;
                 var y = entireData[i].totalConfirmed;
                 var z = 2855794;
                 var stateName = entireData[i].loc;
                 var name = 'MN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].loc == 'Himachal Pradesh')
            {
                 var x= 123;
                 var y = entireData[i].totalConfirmed;
                 var z = 6864602;
                 var stateName = entireData[i].loc;
                 var name = 'HP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].loc == 'Nagaland')
            {
                 var x= 119;
                 var y = entireData[i].totalConfirmed;
                 var z = 1978502;
                 var stateName = entireData[i].loc;
                 var name = 'NG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Sikkim')
            {
                 var x= 86;
                 var y = entireData[i].totalConfirmed;
                 var z = 610577;
                 var stateName = entireData[i].loc;
                 var name = 'SK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }


             if(entireData[i].loc == 'Mizoram')
            {
                 var x= 52;
                 var y = entireData[i].totalConfirmed;
                 var z = 1097206;
                 var stateName = entireData[i].loc;
                 var name = 'MZ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Arunachal Pradesh')
            {
                 var x= 17;
                 var y = entireData[i].totalConfirmed;
                 var z = 1383727;
                 var stateName = entireData[i].loc;
                 var name = 'ANP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }




        }*/

        var tempArr=[];
        entireData = states;

                for (var i=0;i<entireData.length;i++)
        {

               if(arrState[i].state != "Total" && arrState[i].state != "Lakshadweep" && arrState[i].state != "State Unassigned")
              {
            if(entireData[i].state == 'Bihar')
            {
                 var x= 1102;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 104099452;
                 var stateName = entireData[i].state;
                 var name = 'BR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'West Bengal')
            {
                 var x= 1030;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 91276115;
                 var stateName = entireData[i].state;
                 var name = 'WB';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Kerala')
            {
                 var x= 859;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 33406061;
                 var stateName = entireData[i].state;
                 var name = 'KL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Uttar Pradesh')
            {
                 var x= 828;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 199812341;
                 var stateName = entireData[i].state;
                 var name = 'UP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Haryana')
            {
                 var x= 573;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 25351462;
                 var stateName = entireData[i].state;
                 var name = 'HR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Tamil Nadu')
            {
                 var x= 555;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 72147030;
                 var stateName = entireData[i].state;
                 var name = 'TN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Punjab')
            {
                 var x= 555;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 27743338;
                 var stateName = entireData[i].state;
                 var name = 'PN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Jharkhand')
            {
                 var x= 414;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 32988134;
                 var stateName = entireData[i].state;
                 var name = 'JKD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Assam')
            {
                 var x= 397;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 31205576;
                 var stateName = entireData[i].state;
                 var name = 'AS';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Goa')
            {
                 var x= 394;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 1458545;
                 var stateName = entireData[i].state;
                 var name = 'GA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Maharashtra')
            {
                 var x= 365;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 112374333;
                 var stateName = entireData[i].state;
                 var name = 'MH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Tripura')
            {
                 var x= 350;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 3673917;
                 var stateName = entireData[i].state;
                 var name = 'TP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Karnataka')
            {
                 var x= 319;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 61095297;
                 var stateName = entireData[i].state;
                 var name = 'KA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Gujarat')
            {
                 var x= 308;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 60439692;
                 var stateName = entireData[i].state;
                 var name = 'GJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Andhra Pradesh')
            {
                 var x= 308;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 49386799;
                 var stateName = entireData[i].state;
                 var name = 'AP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Telangana')
            {
                 var x= 307;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 35193978;
                 var stateName = entireData[i].state;
                 var name = 'TL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Odisha')
            {
                 var x= 269;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 41974218;
                 var stateName = entireData[i].state;
                 var name = 'OD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Madhya Pradesh')
            {
                 var x= 236;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 72626809;
                 var stateName = entireData[i].state;
                 var name = 'MP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].state == 'Rajasthan')
            {
                 var x= 201;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 68548437;
                 var stateName = entireData[i].state;
                 var name = 'RJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].state == 'Chhattisgarh')
            {
                 var x= 189;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 25545198;
                 var stateName = entireData[i].state;
                 var name = 'CG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Uttarakhand')
            {
                 var x= 189;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 10086292;
                 var stateName = entireData[i].state;
                 var name = 'UK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Meghalaya')
            {
                 var x= 132;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 2966889;
                 var stateName = entireData[i].state;
                 var name = 'MG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Manipur')
            {
                 var x= 128;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 2855794;
                 var stateName = entireData[i].state;
                 var name = 'MN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].state == 'Himachal Pradesh')
            {
                 var x= 123;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 6864602;
                 var stateName = entireData[i].state;
                 var name = 'HP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].state == 'Nagaland')
            {
                 var x= 119;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 1978502;
                 var stateName = entireData[i].state;
                 var name = 'NG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Sikkim')
            {
                 var x= 86;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 610577;
                 var stateName = entireData[i].state;
                 var name = 'SK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }


             if(entireData[i].state == 'Mizoram')
            {
                 var x= 52;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 1097206;
                 var stateName = entireData[i].state;
                 var name = 'MZ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Arunachal Pradesh')
            {
                 var x= 17;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 1383727;
                 var stateName = entireData[i].state;
                 var name = 'ANP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }


         }

        }


           //console.log(tempArr);
                            Highcharts.chart('containerDensity', {

                                    chart: {
                                        type: 'bubble',
                                        plotBorderWidth: 1,
                                        zoomType: 'xy'
                                    },

                                    legend: {
                                        enabled: false
                                    },

                                    title: {
                                        text: 'Confirmed Cases based on Density in Different States'
                                    },

                                    accessibility: {
                                        point: {
                                            valueDescriptionFormat: '{index}. {point.state}, Density: {point.x}/sq km, Cases: {point.y}, Population: {point.z}.'
                                        }
                                    },

                                    xAxis: {
                                        gridLineWidth: 1,
                                        title: {
                                            text: 'Density'
                                        },
                                        labels: {
                                            format: '{value} /sq km'
                                        }


                                    },

                                    yAxis: {
                                        startOnTick: false,
                                        endOnTick: false,
                                        title: {
                                            text: 'Confirmed Cases'
                                        },
                                        labels: {
                                            format: '{value}'
                                        },
                                        maxPadding: 0.2


                                    },

                                    tooltip: {
                                        useHTML: true,
                                        headerFormat: '<table>',
                                        pointFormat: '<tr><th colspan="2"><h3>{point.stateName}</h3></th></tr>' +
                                            '<tr><th>Density:</th><td>{point.x} / sq km</td></tr>' +
                                            '<tr><th>Cases:</th><td>{point.y}</td></tr>' +
                                            '<tr><th>Population:</th><td>{point.z}</td></tr>',
                                        footerFormat: '</table>',
                                        followPointer: true
                                    },

                                    plotOptions: {
                                        series: {
                                            dataLabels: {
                                                enabled: true,
                                                format: '{point.name}'
                                            }
                                        }
                                    },

                                    series: [{
                                        data: tempArr
                                    }]

                        });

        /*
        var tempArrUt=[];
                for (var i=0;i<entireData.length;i++)
        {
             if(entireData[i].loc == 'Delhi')
            {
                 var x= 11297;
                 var y = entireData[i].totalConfirmed;
                 var z = 16787941;
                 var stateName = entireData[i].loc;
                 var name = 'DL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }

            if(entireData[i].loc == 'Chandigarh')
            {
                 var x= 9252;
                 var y = entireData[i].totalConfirmed;
                 var z = 1055450;
                 var stateName = entireData[i].loc;
                 var name = 'CD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].loc == 'Puducherry')
            {
                 var x= 2598;
                 var y = entireData[i].totalConfirmed;
                 var z = 1247953;
                 var stateName = entireData[i].loc;
                 var name = 'PD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].loc == 'Dadra and Nagar Haveli and Daman and Diu')
            {
                 var x= 2169;
                 var y = entireData[i].totalConfirmed;
                 var z = 243247;
                 var stateName = 'DND';
                 var state = entireData[i].loc;
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].loc == 'Jammu and Kashmir')
            {
                 var x= 56;
                 var y = entireData[i].totalConfirmed;
                 var z = 12541302;
                 var stateName = entireData[i].loc;
                 var name = 'JK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].loc == 'Andaman and Nicobar Islands')
            {
                 var x= 46;
                 var y = entireData[i].totalConfirmed;
                 var z = 380581;
                 var stateName = entireData[i].loc;
                 var name = 'ANI';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].loc == 'Ladakh')
            {
                 var x= 5;
                 var y = entireData[i].totalConfirmed;
                 var z = 274289;
                 var stateName = entireData[i].loc;
                 var name = 'LDKH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            } */

            var tempArrUt=[];
                for (var i=0;i<entireData.length;i++)
        {
             if(entireData[i].state == 'Delhi')
            {
                 var x= 11297;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 16787941;
                 var stateName = entireData[i].state;
                 var name = 'DL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }

            if(entireData[i].state == 'Chandigarh')
            {
                 var x= 9252;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 1055450;
                 var stateName = entireData[i].state;
                 var name = 'CD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].state == 'Puducherry')
            {
                 var x= 2598;
                var y = parseInt(entireData[i].confirmed);

                 var z = 1247953;
                 var stateName = entireData[i].state;
                 var name = 'PD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].state == 'Dadra and Nagar Haveli and Daman and Diu')
            {
                 var x= 2169;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 243247;
                 var stateName = 'DND';
                 var state = entireData[i].state;
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].state == 'Jammu and Kashmir')
            {
                 var x= 56;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 12541302;
                 var stateName = entireData[i].state;
                 var name = 'JK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].state == 'Andaman and Nicobar Islands')
            {
                 var x= 46;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 380581;
                 var stateName = entireData[i].state;
                 var name = 'ANI';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].state == 'Ladakh')
            {
                 var x= 5;
                var y = parseInt(entireData[i].confirmed);
                 var z = 274289;
                 var stateName = entireData[i].state;
                 var name = 'LDKH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            }




                         Highcharts.chart('containerDensity1', {

                                    chart: {
                                        type: 'bubble',
                                        plotBorderWidth: 1,
                                        zoomType: 'xy'
                                    },

                                    legend: {
                                        enabled: false
                                    },

                                    title: {
                                        text: 'Confirmed Cases based on Density in Different UTs'
                                    },

                                    accessibility: {
                                        point: {
                                            valueDescriptionFormat: '{index}. {point.state}, Density: {point.x}/sq km, Cases: {point.y}, Population: {point.z}.'
                                        }
                                    },

                                    xAxis: {
                                        gridLineWidth: 1,
                                        title: {
                                            text: 'Density'
                                        },
                                        labels: {
                                            format: '{value} /sq km'
                                        }


                                    },

                                    yAxis: {
                                        startOnTick: false,
                                        endOnTick: false,
                                        title: {
                                            text: 'Confirmed Cases'
                                        },
                                        labels: {
                                            format: '{value}'
                                        },
                                        maxPadding: 0.2


                                    },

                                    tooltip: {
                                        useHTML: true,
                                        headerFormat: '<table>',
                                        pointFormat: '<tr><th colspan="2"><h3>{point.stateName}</h3></th></tr>' +
                                            '<tr><th>Density:</th><td>{point.x} / sq km</td></tr>' +
                                            '<tr><th>Cases:</th><td>{point.y}</td></tr>' +
                                            '<tr><th>Population:</th><td>{point.z}</td></tr>',
                                        footerFormat: '</table>',
                                        followPointer: true
                                    },

                                    plotOptions: {
                                        series: {
                                            dataLabels: {
                                                enabled: true,
                                                format: '{point.name}'
                                            }
                                        }
                                    },

                                    series: [{
                                        data: tempArrUt
                                    }]

                        });


    /////////////////////////////////////////////////////////Density code ends ////////////////////////////////////////////////////////////
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
        /*
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
              */
              entireData = states;
               if (zone == 'Islands')
       {
        for (var i=0; i<entireData.length; i++)
        {
            if(entireData[i].state == 'Andaman and Nicobar Islands')
            {
                var name = entireData[i].state;
                 var y = parseInt(entireData[i].confirmed);
                var objA= {name,y}
                data.push(objA);

                 var name = entireData[i].state;
                 var y = parseInt(entireData[i].deaths);
                var objA= {name,y}
                data1.push(objA);

                 var name = entireData[i].state;
               var y = parseInt(entireData[i].recovered);
                var objA= {name,y}
                data2.push(objA);

            }
        }
        }
        else if (zone == 'Central')
        {
                 for (var i=0; i<entireData.length; i++)
             {
                if(entireData[i].state == 'Madhya Pradesh')
                {
                    var name = entireData[i].state;
                    var y = parseInt(entireData[i].confirmed);
                    var objA= {name,y}
                    data.push(objA);

                     var name = entireData[i].state;
                var y = parseInt(entireData[i].deaths);
                var objA= {name,y}
                data1.push(objA);

                 var name = entireData[i].state;
                var y = parseInt(entireData[i].recovered);
                var objA= {name,y}
                data2.push(objA);

                }
             }
        }
        else if (zone == 'West')
        {
                 for (var i=0; i<entireData.length; i++)
             {
                if(entireData[i].state == 'Gujarat'
                || entireData[i].state == 'Maharashtra'
                || entireData[i].state == 'Goa'
                || entireData[i].state == 'Dadra and Nagar Haveli and Daman and Diu' )
                {
                    var name = entireData[i].state;
                    var y = parseInt(entireData[i].confirmed);
                    var objA= {name,y}
                    data.push(objA);

                     var name = entireData[i].state;
                var y = parseInt(entireData[i].deaths);
                var objA= {name,y}
                data1.push(objA);

                 var name = entireData[i].state;
               var y = parseInt(entireData[i].recovered);
                var objA= {name,y}
                data2.push(objA);

                }
             }
        }
        else if (zone == 'North East')
        {
                 for (var i=0; i<entireData.length; i++)
             {
                if(entireData[i].state == 'Assam'
                || entireData[i].state == 'Manipur'
                || entireData[i].state == 'Arunachal Pradesh'
                || entireData[i].state == 'Meghalaya'
                || entireData[i].state == 'Mizoram'
                || entireData[i].state == 'Nagaland'
                || entireData[i].state == 'Sikkim'
                || entireData[i].state == 'Tripura'
                )
                {
                    var name = entireData[i].state;
                     var y = parseInt(entireData[i].confirmed);
                    var objA= {name,y}
                    data.push(objA);

                     var name = entireData[i].state;
                var y = parseInt(entireData[i].deaths);
                var objA= {name,y}
                data1.push(objA);

                 var name = entireData[i].state;
               var y = parseInt(entireData[i].recovered);
                var objA= {name,y}
                data2.push(objA);

                }
             }

        }
        else if (zone == 'South')
        {
                 for (var i=0; i<entireData.length; i++)
             {
                if(entireData[i].state == 'Tamil Nadu'
                || entireData[i].state == 'Kerala'
                || entireData[i].state == 'Karnataka'
                || entireData[i].state == 'Puducherry'
                || entireData[i].state == 'Andhra Pradesh'
                || entireData[i].state == 'Telangana'
                )
                {
                    var name = entireData[i].state;
                   var y = parseInt(entireData[i].confirmed);
                    var objA= {name,y}
                    data.push(objA);

                     var name = entireData[i].state;
                var y = parseInt(entireData[i].deaths);
                var objA= {name,y}
                data1.push(objA);

                 var name = entireData[i].state;
                var y = parseInt(entireData[i].recovered);
                var objA= {name,y}
                data2.push(objA);

                }
             }


        }
         else if (zone == 'North')
         {
            for (var i=0; i<entireData.length; i++)
             {
                if(entireData[i].state == 'Delhi'
                || entireData[i].state == 'Uttar Pradesh'
                || entireData[i].state == 'Rajasthan'
                || entireData[i].state == 'Himachal Pradesh'
                || entireData[i].state == 'Jammu and Kashmir'
                || entireData[i].state == 'Punjab'
                 || entireData[i].state == 'Bihar'
                || entireData[i].state == 'Uttarakhand'
                || entireData[i].state == 'Jharkhand'
                || entireData[i].state == 'Haryana'
                || entireData[i].state == 'Chandigarh'
                || entireData[i].state == 'Chhattisgarh'
                || entireData[i].state == 'Ladakh'
                )
                {
                    var name = entireData[i].state;
                     var y = parseInt(entireData[i].confirmed);
                    var objA= {name,y}
                    data.push(objA);

                     var name = entireData[i].state;
                 var y = parseInt(entireData[i].deaths);
                var objA= {name,y}
                data1.push(objA);

                 var name = entireData[i].state;
               var y = parseInt(entireData[i].recovered);
                var objA= {name,y}
                data2.push(objA);

                }
             }



         }
          else if (zone == 'East')
         {
            for (var i=0; i<entireData.length; i++)
             {
                if(entireData[i].state == 'Odisha'
                || entireData[i].state == 'West Bengal'
                )
                {
                    var name = entireData[i].state;
                    var y = parseInt(entireData[i].confirmed);
                    var objA= {name,y}
                    data.push(objA);

                     var name = entireData[i].state;
                var y = parseInt(entireData[i].deaths);

                var objA= {name,y}
                data1.push(objA);

                 var name = entireData[i].state;
               var y = parseInt(entireData[i].recovered);
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
        /*
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
         }*/
           entireData = states;
         if (airports == '4')
       {
            for (var i=0; i<entireData.length; i++)
             {
              if(entireData[i].state == 'Tamil Nadu'
                || entireData[i].state == 'Kerala'
              )
              {
                 var name = entireData[i].state;
                 var y = parseInt(entireData[i].confirmed);
                 var objA= {name,y}
                 data.push(objA);

                 var name = entireData[i].state;
                 var y = parseInt(entireData[i].deaths);
                 var objA= {name,y}
                 data1.push(objA);

                 var name = entireData[i].state;
                 var y = parseInt(entireData[i].recovered);

                 var objA= {name,y}
                 data2.push(objA);

              }

             }
       }
       else if (airports == '3')
       {
            for (var i=0; i<entireData.length; i++)
             {
              if(entireData[i].state == 'Maharashtra'
              || entireData[i].state == 'Andhra Pradesh'

              )
              {
                 var name = entireData[i].state;
                var y = parseInt(entireData[i].confirmed);
                 var objA= {name,y}
                 data.push(objA);

                 var name = entireData[i].state;
                 var y = parseInt(entireData[i].deaths);
                 var objA= {name,y}
                 data1.push(objA);

                 var name = entireData[i].state;
                var y = parseInt(entireData[i].recovered);
                 var objA= {name,y}
                 data2.push(objA);

              }

             }
       }
        else if (airports == '2')
       {
         for (var i=0; i<entireData.length; i++)
         {
                if(    entireData[i].state == 'Bihar'
                || entireData[i].state == 'Gujarat'
                || entireData[i].state == 'Karnataka'
                || entireData[i].state == 'Uttar Pradesh'
                || entireData[i].state == 'West Bengal'
                || entireData[i].state == 'Telangana')
                {
                var name = entireData[i].state;
                 var y = parseInt(entireData[i].confirmed);
                 var objA= {name,y}
                 data.push(objA);

                 var name = entireData[i].state;
                var y = parseInt(entireData[i].deaths);
                 var objA= {name,y}
                 data1.push(objA);

                 var name = entireData[i].state;
                 var y = parseInt(entireData[i].recovered);
                 var objA= {name,y}
                 data2.push(objA);
                }
         }
       }
       else if (airports == '1')
       {
         for (var i=0; i<entireData.length; i++)
         {
                if(    entireData[i].state == 'Assam'
                || entireData[i].state == 'Delhi'
                || entireData[i].state == 'Goa'
                || entireData[i].state == 'Madhya Pradesh'
                || entireData[i].state == 'Manipur'
                || entireData[i].state == 'Telangana'
                || entireData[i].state == 'Odisha'
                || entireData[i].state == 'Rajasthan'
                || entireData[i].state == 'Punjab'
                || entireData[i].state == 'Chandigarh'
                || entireData[i].state == 'Jammu and Kashmir')
                {
                var name = entireData[i].state;
                var y = parseInt(entireData[i].confirmed);
                 var objA= {name,y}
                 data.push(objA);

                 var name = entireData[i].state;
                var y = parseInt(entireData[i].deaths);
                 var objA= {name,y}
                 data1.push(objA);

                 var name = entireData[i].state;
                 var y = parseInt(entireData[i].recovered);
                 var objA= {name,y}
                 data2.push(objA);
                }
         }
       }
       else if (airports == '0')
       {
         for (var i=0; i<entireData.length; i++)
         {
                if(    entireData[i].state == 'Ladakh'
                || entireData[i].state == 'Jharkhand'
                || entireData[i].state == 'Haryana'
                || entireData[i].state == 'Chattisgarh'
                || entireData[i].state == 'Uttarakhand'
                || entireData[i].state == 'Himachal Pradesh'
                || entireData[i].state == 'Arunachal Pradesh'
                || entireData[i].state == 'Meghalaya'
                || entireData[i].state == 'Mizoram'
                || entireData[i].state == 'Nagaland'
                || entireData[i].state == 'Sikkim'
                || entireData[i].state == 'Tripura'
                || entireData[i].state == 'Andaman and Nicobar Islands '
                || entireData[i].state == 'Dadra and Nagar Haveli and Daman and Diu '

                )
                {
                var name = entireData[i].state;
                 var y = parseInt(entireData[i].confirmed);
                 var objA= {name,y}
                 data.push(objA);

                 var name = entireData[i].state;
                 var y = parseInt(entireData[i].deaths);
                 var objA= {name,y}
                 data1.push(objA);

                 var name = entireData[i].state;
                var y = parseInt(entireData[i].recovered);
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

function selectCase()
{
        var selectBox = document.getElementById("selectCase");
        var selectCase = selectBox.options[selectBox.selectedIndex].value;
        var tempArr=[];
         if (selectCase == 'Confirmed')
        {
        /*
        if (selectCase == 'Confirmed')
        {

         for (var i=0;i<entireData.length;i++)
        {


            if(entireData[i].loc == 'Bihar')
            {
                 var x= 1102;
                 var y = entireData[i].totalConfirmed;
                 var z = 104099452;
                 var stateName = entireData[i].loc;
                 var name = 'BR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'West Bengal')
            {
                 var x= 1030;
                 var y = entireData[i].totalConfirmed;
                 var z = 91276115;
                 var stateName = entireData[i].loc;
                 var name = 'WB';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Kerala')
            {
                 var x= 859;
                 var y = entireData[i].totalConfirmed;
                 var z = 33406061;
                 var stateName = entireData[i].loc;
                 var name = 'KL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Uttar Pradesh')
            {
                 var x= 828;
                 var y = entireData[i].totalConfirmed;
                 var z = 199812341;
                 var stateName = entireData[i].loc;
                 var name = 'UP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Haryana')
            {
                 var x= 573;
                 var y = entireData[i].totalConfirmed;
                 var z = 25351462;
                 var stateName = entireData[i].loc;
                 var name = 'HR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Tamil Nadu')
            {
                 var x= 555;
                 var y = entireData[i].totalConfirmed;
                 var z = 72147030;
                 var stateName = entireData[i].loc;
                 var name = 'TN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Punjab')
            {
                 var x= 555;
                 var y = entireData[i].totalConfirmed;
                 var z = 27743338;
                 var stateName = entireData[i].loc;
                 var name = 'PN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Jharkhand')
            {
                 var x= 414;
                 var y = entireData[i].totalConfirmed;
                 var z = 32988134;
                 var stateName = entireData[i].loc;
                 var name = 'JKD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Assam')
            {
                 var x= 397;
                 var y = entireData[i].totalConfirmed;
                 var z = 31205576;
                 var stateName = entireData[i].loc;
                 var name = 'AS';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Goa')
            {
                 var x= 394;
                 var y = entireData[i].totalConfirmed;
                 var z = 1458545;
                 var stateName = entireData[i].loc;
                 var name = 'GA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Maharashtra')
            {
                 var x= 365;
                 var y = entireData[i].totalConfirmed;
                 var z = 112374333;
                 var stateName = entireData[i].loc;
                 var name = 'MH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Tripura')
            {
                 var x= 350;
                 var y = entireData[i].totalConfirmed;
                 var z = 3673917;
                 var stateName = entireData[i].loc;
                 var name = 'TP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Karnataka')
            {
                 var x= 319;
                 var y = entireData[i].totalConfirmed;
                 var z = 61095297;
                 var stateName = entireData[i].loc;
                 var name = 'KA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Gujarat')
            {
                 var x= 308;
                 var y = entireData[i].totalConfirmed;
                 var z = 60439692;
                 var stateName = entireData[i].loc;
                 var name = 'GJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Andhra Pradesh')
            {
                 var x= 308;
                 var y = entireData[i].totalConfirmed;
                 var z = 49386799;
                 var stateName = entireData[i].loc;
                 var name = 'AP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Telangana')
            {
                 var x= 307;
                 var y = entireData[i].totalConfirmed;
                 var z = 35193978;
                 var stateName = entireData[i].loc;
                 var name = 'TL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Odisha')
            {
                 var x= 269;
                 var y = entireData[i].totalConfirmed;
                 var z = 41974218;
                 var stateName = entireData[i].loc;
                 var name = 'OD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Madhya Pradesh')
            {
                 var x= 236;
                 var y = entireData[i].totalConfirmed;
                 var z = 72626809;
                 var stateName = entireData[i].loc;
                 var name = 'MP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].loc == 'Rajasthan')
            {
                 var x= 201;
                 var y = entireData[i].totalConfirmed;
                 var z = 68548437;
                 var stateName = entireData[i].loc;
                 var name = 'RJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].loc == 'Chhattisgarh')
            {
                 var x= 189;
                 var y = entireData[i].totalConfirmed;
                 var z = 25545198;
                 var stateName = entireData[i].loc;
                 var name = 'CG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Uttarakhand')
            {
                 var x= 189;
                 var y = entireData[i].totalConfirmed;
                 var z = 10086292;
                 var stateName = entireData[i].loc;
                 var name = 'UK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Meghalaya')
            {
                 var x= 132;
                 var y = entireData[i].totalConfirmed;
                 var z = 2966889;
                 var stateName = entireData[i].loc;
                 var name = 'MG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Manipur')
            {
                 var x= 128;
                 var y = entireData[i].totalConfirmed;
                 var z = 2855794;
                 var stateName = entireData[i].loc;
                 var name = 'MN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].loc == 'Himachal Pradesh')
            {
                 var x= 123;
                 var y = entireData[i].totalConfirmed;
                 var z = 6864602;
                 var stateName = entireData[i].loc;
                 var name = 'HP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].loc == 'Nagaland')
            {
                 var x= 119;
                 var y = entireData[i].totalConfirmed;
                 var z = 1978502;
                 var stateName = entireData[i].loc;
                 var name = 'NG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Sikkim')
            {
                 var x= 86;
                 var y = entireData[i].totalConfirmed;
                 var z = 610577;
                 var stateName = entireData[i].loc;
                 var name = 'SK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Jammu and Kashmir')
            {
                 var x= 56;
                 var y = entireData[i].totalConfirmed;
                 var z = 12541302;
                 var stateName = entireData[i].loc;
                 var name = 'JK';
                 var stateObj= {x,y,z,name,stateName};
                // tempArr.push(stateObj);

            }
             if(entireData[i].loc == 'Mizoram')
            {
                 var x= 52;
                 var y = entireData[i].totalConfirmed;
                 var z = 1097206;
                 var stateName = entireData[i].loc;
                 var name = 'MZ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Arunachal Pradesh')
            {
                 var x= 17;
                 var y = entireData[i].totalConfirmed;
                 var z = 1383727;
                 var stateName = entireData[i].loc;
                 var name = 'ANP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }




        }*/
         entireData= states
        for (var i=0;i<entireData.length;i++)
        {


            if(entireData[i].state == 'Bihar')
            {
                 var x= 1102;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 104099452;
                 var stateName = entireData[i].state;
                 var name = 'BR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'West Bengal')
            {
                 var x= 1030;
                var y = parseInt(entireData[i].confirmed);
                 var z = 91276115;
                 var stateName = entireData[i].state;
                 var name = 'WB';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Kerala')
            {
                 var x= 859;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 33406061;
                 var stateName = entireData[i].state;
                 var name = 'KL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Uttar Pradesh')
            {
                 var x= 828;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 199812341;
                 var stateName = entireData[i].state;
                 var name = 'UP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Haryana')
            {
                 var x= 573;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 25351462;
                 var stateName = entireData[i].state;
                 var name = 'HR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Tamil Nadu')
            {
                 var x= 555;
                var y = parseInt(entireData[i].confirmed);
                 var z = 72147030;
                 var stateName = entireData[i].state;
                 var name = 'TN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Punjab')
            {
                 var x= 555;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 27743338;
                 var stateName = entireData[i].state;
                 var name = 'PN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Jharkhand')
            {
                 var x= 414;
                var y = parseInt(entireData[i].confirmed);
                 var z = 32988134;
                 var stateName = entireData[i].state;
                 var name = 'JKD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Assam')
            {
                 var x= 397;
                var y = parseInt(entireData[i].confirmed);
                 var z = 31205576;
                 var stateName = entireData[i].state;
                 var name = 'AS';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Goa')
            {
                 var x= 394;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 1458545;
                 var stateName = entireData[i].state;
                 var name = 'GA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Maharashtra')
            {
                 var x= 365;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 112374333;
                 var stateName = entireData[i].state;
                 var name = 'MH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Tripura')
            {
                 var x= 350;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 3673917;
                 var stateName = entireData[i].state;
                 var name = 'TP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Karnataka')
            {
                 var x= 319;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 61095297;
                 var stateName = entireData[i].state;
                 var name = 'KA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Gujarat')
            {
                 var x= 308;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 60439692;
                 var stateName = entireData[i].state;
                 var name = 'GJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Andhra Pradesh')
            {
                 var x= 308;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 49386799;
                 var stateName = entireData[i].state;
                 var name = 'AP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Telangana')
            {
                 var x= 307;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 35193978;
                 var stateName = entireData[i].state;
                 var name = 'TL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Odisha')
            {
                 var x= 269;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 41974218;
                 var stateName = entireData[i].state;
                 var name = 'OD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Madhya Pradesh')
            {
                 var x= 236;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 72626809;
                 var stateName = entireData[i].state;
                 var name = 'MP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].state == 'Rajasthan')
            {
                 var x= 201;
                var y = parseInt(entireData[i].confirmed);
                 var z = 68548437;
                 var stateName = entireData[i].state;
                 var name = 'RJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].state == 'Chhattisgarh')
            {
                 var x= 189;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 25545198;
                 var stateName = entireData[i].state;
                 var name = 'CG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Uttarakhand')
            {
                 var x= 189;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 10086292;
                 var stateName = entireData[i].state;
                 var name = 'UK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Meghalaya')
            {
                 var x= 132;
                var y = parseInt(entireData[i].confirmed);
                 var z = 2966889;
                 var stateName = entireData[i].state;
                 var name = 'MG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Manipur')
            {
                 var x= 128;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 2855794;
                 var stateName = entireData[i].state;
                 var name = 'MN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].state == 'Himachal Pradesh')
            {
                 var x= 123;
                var y = parseInt(entireData[i].confirmed);
                 var z = 6864602;
                 var stateName = entireData[i].state;
                 var name = 'HP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].state == 'Nagaland')
            {
                 var x= 119;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 1978502;
                 var stateName = entireData[i].state;
                 var name = 'NG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Sikkim')
            {
                 var x= 86;
                var y = parseInt(entireData[i].confirmed);
                 var z = 610577;
                 var stateName = entireData[i].state;
                 var name = 'SK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Jammu and Kashmir')
            {
                 var x= 56;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 12541302;
                 var stateName = entireData[i].state;
                 var name = 'JK';
                 var stateObj= {x,y,z,name,stateName};
                // tempArr.push(stateObj);

            }
             if(entireData[i].state == 'Mizoram')
            {
                 var x= 52;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 1097206;
                 var stateName = entireData[i].state;
                 var name = 'MZ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Arunachal Pradesh')
            {
                 var x= 17;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 1383727;
                 var stateName = entireData[i].state;
                 var name = 'ANP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }




        }




           //console.log(tempArr);
                            Highcharts.chart('containerDensity', {

                                    chart: {
                                        type: 'bubble',
                                        plotBorderWidth: 1,
                                        zoomType: 'xy'
                                    },

                                    legend: {
                                        enabled: false
                                    },

                                    title: {
                                        text: 'Confirmed Cases based on Density in Different States'
                                    },

                                    accessibility: {
                                        point: {
                                            valueDescriptionFormat: '{index}. {point.state}, Density: {point.x}/sq km, Cases: {point.y}, Population: {point.z}.'
                                        }
                                    },

                                    xAxis: {
                                        gridLineWidth: 1,
                                        title: {
                                            text: 'Density'
                                        },
                                        labels: {
                                            format: '{value} /sq km'
                                        }


                                    },

                                    yAxis: {
                                        startOnTick: false,
                                        endOnTick: false,
                                        title: {
                                            text: 'Confirmed Cases'
                                        },
                                        labels: {
                                            format: '{value}'
                                        },
                                        maxPadding: 0.2


                                    },

                                    tooltip: {
                                        useHTML: true,
                                        headerFormat: '<table>',
                                        pointFormat: '<tr><th colspan="2"><h3>{point.stateName}</h3></th></tr>' +
                                            '<tr><th>Density:</th><td>{point.x} / sq km</td></tr>' +
                                            '<tr><th>Cases:</th><td>{point.y}</td></tr>' +
                                            '<tr><th>Population:</th><td>{point.z}</td></tr>',
                                        footerFormat: '</table>',
                                        followPointer: true
                                    },

                                    plotOptions: {
                                        series: {
                                            dataLabels: {
                                                enabled: true,
                                                format: '{point.name}'
                                            }
                                        }
                                    },

                                    series: [{
                                        data: tempArr
                                    }]

                        });

        }
        else if (selectCase == 'Deaths')
        {
        /*
        for (var i=0;i<entireData.length;i++)
        {


            if(entireData[i].loc == 'Bihar')
            {
                 var x= 1102;
                 var y = entireData[i].deaths;
                 var z = 104099452;
                 var stateName = entireData[i].loc;
                 var name = 'BR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'West Bengal')
            {
                 var x= 1030;
                 var y = entireData[i].deaths;
                 var z = 91276115;
                 var stateName = entireData[i].loc;
                 var name = 'WB';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Kerala')
            {
                 var x= 859;
                 var y = entireData[i].deaths;
                 var z = 33406061;
                 var stateName = entireData[i].loc;
                 var name = 'KL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Uttar Pradesh')
            {
                 var x= 828;
                 var y = entireData[i].deaths;
                 var z = 199812341;
                 var stateName = entireData[i].loc;
                 var name = 'UP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Haryana')
            {
                 var x= 573;
                 var y = entireData[i].deaths;
                 var z = 25351462;
                 var stateName = entireData[i].loc;
                 var name = 'HR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Tamil Nadu')
            {
                 var x= 555;
                 var y = entireData[i].deaths;
                 var z = 72147030;
                 var stateName = entireData[i].loc;
                 var name = 'TN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Punjab')
            {
                 var x= 555;
                 var y = entireData[i].deaths;
                 var z = 27743338;
                 var stateName = entireData[i].loc;
                 var name = 'PN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Jharkhand')
            {
                 var x= 414;
                 var y = entireData[i].deaths;
                 var z = 32988134;
                 var stateName = entireData[i].loc;
                 var name = 'JKD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Assam')
            {
                 var x= 397;
                 var y = entireData[i].deaths;
                 var z = 31205576;
                 var stateName = entireData[i].loc;
                 var name = 'AS';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Goa')
            {
                 var x= 394;
                 var y = entireData[i].deaths;
                 var z = 1458545;
                 var stateName = entireData[i].loc;
                 var name = 'GA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Maharashtra')
            {
                 var x= 365;
                 var y = entireData[i].deaths;
                 var z = 112374333;
                 var stateName = entireData[i].loc;
                 var name = 'MH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Tripura')
            {
                 var x= 350;
                 var y = entireData[i].deaths;
                 var z = 3673917;
                 var stateName = entireData[i].loc;
                 var name = 'TP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Karnataka')
            {
                 var x= 319;
                 var y = entireData[i].deaths;
                 var z = 61095297;
                 var stateName = entireData[i].loc;
                 var name = 'KA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Gujarat')
            {
                 var x= 308;
                 var y = entireData[i].deaths;
                 var z = 60439692;
                 var stateName = entireData[i].loc;
                 var name = 'GJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Andhra Pradesh')
            {
                 var x= 308;
                 var y = entireData[i].deaths;
                 var z = 49386799;
                 var stateName = entireData[i].loc;
                 var name = 'AP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Telangana')
            {
                 var x= 307;
                 var y = entireData[i].deaths;
                 var z = 35193978;
                 var stateName = entireData[i].loc;
                 var name = 'TL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Odisha')
            {
                 var x= 269;
                 var y = entireData[i].deaths;
                 var z = 41974218;
                 var stateName = entireData[i].loc;
                 var name = 'OD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Madhya Pradesh')
            {
                 var x= 236;
                 var y = entireData[i].deaths;
                 var z = 72626809;
                 var stateName = entireData[i].loc;
                 var name = 'MP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].loc == 'Rajasthan')
            {
                 var x= 201;
                 var y = entireData[i].deaths;
                 var z = 68548437;
                 var stateName = entireData[i].loc;
                 var name = 'RJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].loc == 'Chhattisgarh')
            {
                 var x= 189;
                 var y = entireData[i].deaths;
                 var z = 25545198;
                 var stateName = entireData[i].loc;
                 var name = 'CG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Uttarakhand')
            {
                 var x= 189;
                 var y = entireData[i].deaths;
                 var z = 10086292;
                 var stateName = entireData[i].loc;
                 var name = 'UK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Meghalaya')
            {
                 var x= 132;
                 var y = entireData[i].deaths;
                 var z = 2966889;
                 var stateName = entireData[i].loc;
                 var name = 'MG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Manipur')
            {
                 var x= 128;
                 var y = entireData[i].deaths;
                 var z = 2855794;
                 var stateName = entireData[i].loc;
                 var name = 'MN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].loc == 'Himachal Pradesh')
            {
                 var x= 123;
                 var y = entireData[i].deaths;
                 var z = 6864602;
                 var stateName = entireData[i].loc;
                 var name = 'HP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].loc == 'Nagaland')
            {
                 var x= 119;
                 var y = entireData[i].deaths;
                 var z = 1978502;
                 var stateName = entireData[i].loc;
                 var name = 'NG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Sikkim')
            {
                 var x= 86;
                 var y = entireData[i].deaths;
                 var z = 610577;
                 var stateName = entireData[i].loc;
                 var name = 'SK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Jammu and Kashmir')
            {
                 var x= 56;
                 var y = entireData[i].deaths;
                 var z = 12541302;
                 var stateName = entireData[i].loc;
                 var name = 'JK';
                 var stateObj= {x,y,z,name,stateName};
                // tempArr.push(stateObj);

            }
             if(entireData[i].loc == 'Mizoram')
            {
                 var x= 52;
                 var y = entireData[i].deaths;
                 var z = 1097206;
                 var stateName = entireData[i].loc;
                 var name = 'MZ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Arunachal Pradesh')
            {
                 var x= 17;
                 var y = entireData[i].deaths;
                 var z = 1383727;
                 var stateName = entireData[i].loc;
                 var name = 'ANP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }*/


             entireData= states
        for (var i=0;i<entireData.length;i++)
        {


            if(entireData[i].state == 'Bihar')
            {
                 var x= 1102;
                 var y = parseInt(entireData[i].deaths);
                 var z = 104099452;
                 var stateName = entireData[i].state;
                 var name = 'BR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'West Bengal')
            {
                 var x= 1030;
                var y = parseInt(entireData[i].deaths);
                 var z = 91276115;
                 var stateName = entireData[i].state;
                 var name = 'WB';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Kerala')
            {
                 var x= 859;
                 var y = parseInt(entireData[i].deaths);
                 var z = 33406061;
                 var stateName = entireData[i].state;
                 var name = 'KL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Uttar Pradesh')
            {
                 var x= 828;
                 var y = parseInt(entireData[i].deaths);
                 var z = 199812341;
                 var stateName = entireData[i].state;
                 var name = 'UP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Haryana')
            {
                 var x= 573;
                 var y = parseInt(entireData[i].deaths);
                 var z = 25351462;
                 var stateName = entireData[i].state;
                 var name = 'HR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Tamil Nadu')
            {
                 var x= 555;
                var y = parseInt(entireData[i].deaths);
                 var z = 72147030;
                 var stateName = entireData[i].state;
                 var name = 'TN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Punjab')
            {
                 var x= 555;
                 var y = parseInt(entireData[i].deaths);
                 var z = 27743338;
                 var stateName = entireData[i].state;
                 var name = 'PN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Jharkhand')
            {
                 var x= 414;
                var y = parseInt(entireData[i].deaths);
                 var z = 32988134;
                 var stateName = entireData[i].state;
                 var name = 'JKD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Assam')
            {
                 var x= 397;
                var y = parseInt(entireData[i].deaths);
                 var z = 31205576;
                 var stateName = entireData[i].state;
                 var name = 'AS';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Goa')
            {
                 var x= 394;
                 var y = parseInt(entireData[i].deaths);
                 var z = 1458545;
                 var stateName = entireData[i].state;
                 var name = 'GA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Maharashtra')
            {
                 var x= 365;
                 var y = parseInt(entireData[i].deaths);
                 var z = 112374333;
                 var stateName = entireData[i].state;
                 var name = 'MH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Tripura')
            {
                 var x= 350;
                 var y = parseInt(entireData[i].deaths);
                 var z = 3673917;
                 var stateName = entireData[i].state;
                 var name = 'TP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Karnataka')
            {
                 var x= 319;
                 var y = parseInt(entireData[i].deaths);
                 var z = 61095297;
                 var stateName = entireData[i].state;
                 var name = 'KA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Gujarat')
            {
                 var x= 308;
                 var y = parseInt(entireData[i].deaths);
                 var z = 60439692;
                 var stateName = entireData[i].state;
                 var name = 'GJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Andhra Pradesh')
            {
                 var x= 308;
                 var y = parseInt(entireData[i].deaths);
                 var z = 49386799;
                 var stateName = entireData[i].state;
                 var name = 'AP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Telangana')
            {
                 var x= 307;
                 var y = parseInt(entireData[i].deaths);
                 var z = 35193978;
                 var stateName = entireData[i].state;
                 var name = 'TL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Odisha')
            {
                 var x= 269;
                 var y = parseInt(entireData[i].deaths);
                 var z = 41974218;
                 var stateName = entireData[i].state;
                 var name = 'OD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Madhya Pradesh')
            {
                 var x= 236;
                 var y = parseInt(entireData[i].deaths);
                 var z = 72626809;
                 var stateName = entireData[i].state;
                 var name = 'MP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].state == 'Rajasthan')
            {
                 var x= 201;
                var y = parseInt(entireData[i].deaths);
                 var z = 68548437;
                 var stateName = entireData[i].state;
                 var name = 'RJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].state == 'Chhattisgarh')
            {
                 var x= 189;
                 var y = parseInt(entireData[i].deaths);
                 var z = 25545198;
                 var stateName = entireData[i].state;
                 var name = 'CG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Uttarakhand')
            {
                 var x= 189;
                 var y = parseInt(entireData[i].deaths);
                 var z = 10086292;
                 var stateName = entireData[i].state;
                 var name = 'UK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Meghalaya')
            {
                 var x= 132;
                var y = parseInt(entireData[i].deaths);
                 var z = 2966889;
                 var stateName = entireData[i].state;
                 var name = 'MG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Manipur')
            {
                 var x= 128;
                 var y = parseInt(entireData[i].deaths);
                 var z = 2855794;
                 var stateName = entireData[i].state;
                 var name = 'MN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].state == 'Himachal Pradesh')
            {
                 var x= 123;
                var y = parseInt(entireData[i].deaths);
                 var z = 6864602;
                 var stateName = entireData[i].state;
                 var name = 'HP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].state == 'Nagaland')
            {
                 var x= 119;
                 var y = parseInt(entireData[i].deaths);
                 var z = 1978502;
                 var stateName = entireData[i].state;
                 var name = 'NG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Sikkim')
            {
                 var x= 86;
                var y = parseInt(entireData[i].deaths);
                 var z = 610577;
                 var stateName = entireData[i].state;
                 var name = 'SK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Jammu and Kashmir')
            {
                 var x= 56;
                 var y = parseInt(entireData[i].deaths);
                 var z = 12541302;
                 var stateName = entireData[i].state;
                 var name = 'JK';
                 var stateObj= {x,y,z,name,stateName};
                // tempArr.push(stateObj);

            }
             if(entireData[i].state == 'Mizoram')
            {
                 var x= 52;
                 var y = parseInt(entireData[i].deaths);
                 var z = 1097206;
                 var stateName = entireData[i].state;
                 var name = 'MZ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Arunachal Pradesh')
            {
                 var x= 17;
                 var y = parseInt(entireData[i].deaths);
                 var z = 1383727;
                 var stateName = entireData[i].state;
                 var name = 'ANP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }




        }
           //console.log(tempArr);
                            Highcharts.chart('containerDensity', {

                                    chart: {
                                        type: 'bubble',
                                        plotBorderWidth: 1,
                                        zoomType: 'xy'
                                    },

                                    legend: {
                                        enabled: false
                                    },

                                    title: {
                                        text: 'Deaths based on Density in Different States'
                                    },

                                    accessibility: {
                                        point: {
                                            valueDescriptionFormat: '{index}. {point.state}, Density: {point.x}/sq km, Deaths: {point.y}, Population: {point.z}.'
                                        }
                                    },

                                    xAxis: {
                                        gridLineWidth: 1,
                                        title: {
                                            text: 'Density'
                                        },
                                        labels: {
                                            format: '{value} /sq km'
                                        }


                                    },

                                    yAxis: {
                                        startOnTick: false,
                                        endOnTick: false,
                                        title: {
                                            text: 'Deaths'
                                        },
                                        labels: {
                                            format: '{value}'
                                        },
                                        maxPadding: 0.2


                                    },

                                    tooltip: {
                                        useHTML: true,
                                        headerFormat: '<table>',
                                        pointFormat: '<tr><th colspan="2"><h3>{point.stateName}</h3></th></tr>' +
                                            '<tr><th>Density:</th><td>{point.x} / sq km</td></tr>' +
                                            '<tr><th>Deaths:</th><td>{point.y}</td></tr>' +
                                            '<tr><th>Population:</th><td>{point.z}</td></tr>',
                                        footerFormat: '</table>',
                                        followPointer: true
                                    },

                                    plotOptions: {
                                        series: {
                                            dataLabels: {
                                                enabled: true,
                                                format: '{point.name}'
                                            }
                                        }
                                    },

                                    series: [{
                                        data: tempArr
                                    }]

                        });




        }
        else if (selectCase == 'Recovered')
        {
          /*
           for (var i=0;i<entireData.length;i++)
        {


            if(entireData[i].loc == 'Bihar')
            {
                 var x= 1102;
                 var y = entireData[i].discharged;
                 var z = 104099452;
                 var stateName = entireData[i].loc;
                 var name = 'BR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'West Bengal')
            {
                 var x= 1030;
                 var y = entireData[i].discharged;
                 var z = 91276115;
                 var stateName = entireData[i].loc;
                 var name = 'WB';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Kerala')
            {
                 var x= 859;
                 var y = entireData[i].discharged;
                 var z = 33406061;
                 var stateName = entireData[i].loc;
                 var name = 'KL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Uttar Pradesh')
            {
                 var x= 828;
                 var y = entireData[i].discharged;
                 var z = 199812341;
                 var stateName = entireData[i].loc;
                 var name = 'UP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Haryana')
            {
                 var x= 573;
                 var y = entireData[i].discharged;
                 var z = 25351462;
                 var stateName = entireData[i].loc;
                 var name = 'HR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Tamil Nadu')
            {
                 var x= 555;
                 var y = entireData[i].discharged;
                 var z = 72147030;
                 var stateName = entireData[i].loc;
                 var name = 'TN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Punjab')
            {
                 var x= 555;
                 var y = entireData[i].discharged;
                 var z = 27743338;
                 var stateName = entireData[i].loc;
                 var name = 'PN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Jharkhand')
            {
                 var x= 414;
                 var y = entireData[i].discharged;
                 var z = 32988134;
                 var stateName = entireData[i].loc;
                 var name = 'JKD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Assam')
            {
                 var x= 397;
                 var y = entireData[i].discharged;
                 var z = 31205576;
                 var stateName = entireData[i].loc;
                 var name = 'AS';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Goa')
            {
                 var x= 394;
                 var y = entireData[i].discharged;
                 var z = 1458545;
                 var stateName = entireData[i].loc;
                 var name = 'GA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Maharashtra')
            {
                 var x= 365;
                 var y = entireData[i].discharged;
                 var z = 112374333;
                 var stateName = entireData[i].loc;
                 var name = 'MH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Tripura')
            {
                 var x= 350;
                 var y = entireData[i].discharged;
                 var z = 3673917;
                 var stateName = entireData[i].loc;
                 var name = 'TP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Karnataka')
            {
                 var x= 319;
                 var y = entireData[i].discharged;
                 var z = 61095297;
                 var stateName = entireData[i].loc;
                 var name = 'KA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Gujarat')
            {
                 var x= 308;
                 var y = entireData[i].discharged;
                 var z = 60439692;
                 var stateName = entireData[i].loc;
                 var name = 'GJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Andhra Pradesh')
            {
                 var x= 308;
                 var y = entireData[i].discharged;
                 var z = 49386799;
                 var stateName = entireData[i].loc;
                 var name = 'AP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Telangana')
            {
                 var x= 307;
                 var y = entireData[i].discharged;
                 var z = 35193978;
                 var stateName = entireData[i].loc;
                 var name = 'TL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Odisha')
            {
                 var x= 269;
                 var y = entireData[i].discharged;
                 var z = 41974218;
                 var stateName = entireData[i].loc;
                 var name = 'OD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Madhya Pradesh')
            {
                 var x= 236;
                 var y = entireData[i].discharged;
                 var z = 72626809;
                 var stateName = entireData[i].loc;
                 var name = 'MP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].loc == 'Rajasthan')
            {
                 var x= 201;
                 var y = entireData[i].discharged;
                 var z = 68548437;
                 var stateName = entireData[i].loc;
                 var name = 'RJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].loc == 'Chhattisgarh')
            {
                 var x= 189;
                 var y = entireData[i].discharged;
                 var z = 25545198;
                 var stateName = entireData[i].loc;
                 var name = 'CG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Uttarakhand')
            {
                 var x= 189;
                 var y = entireData[i].discharged;
                 var z = 10086292;
                 var stateName = entireData[i].loc;
                 var name = 'UK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Meghalaya')
            {
                 var x= 132;
                 var y = entireData[i].discharged;
                 var z = 2966889;
                 var stateName = entireData[i].loc;
                 var name = 'MG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Manipur')
            {
                 var x= 128;
                 var y = entireData[i].discharged;
                 var z = 2855794;
                 var stateName = entireData[i].loc;
                 var name = 'MN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].loc == 'Himachal Pradesh')
            {
                 var x= 123;
                 var y = entireData[i].discharged;
                 var z = 6864602;
                 var stateName = entireData[i].loc;
                 var name = 'HP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].loc == 'Nagaland')
            {
                 var x= 119;
                 var y = entireData[i].discharged;
                 var z = 1978502;
                 var stateName = entireData[i].loc;
                 var name = 'NG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Sikkim')
            {
                 var x= 86;
                 var y = entireData[i].discharged;
                 var z = 610577;
                 var stateName = entireData[i].loc;
                 var name = 'SK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Jammu and Kashmir')
            {
                 var x= 56;
                 var y = entireData[i].discharged;
                 var z = 12541302;
                 var stateName = entireData[i].loc;
                 var name = 'JK';
                 var stateObj= {x,y,z,name,stateName};
                // tempArr.push(stateObj);

            }
             if(entireData[i].loc == 'Mizoram')
            {
                 var x= 52;
                 var y = entireData[i].discharged;
                 var z = 1097206;
                 var stateName = entireData[i].loc;
                 var name = 'MZ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Arunachal Pradesh')
            {
                 var x= 17;
                 var y = entireData[i].discharged;
                 var z = 1383727;
                 var stateName = entireData[i].loc;
                 var name = 'ANP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }*/


             entireData= states
        for (var i=0;i<entireData.length;i++)
        {


            if(entireData[i].state == 'Bihar')
            {
                 var x= 1102;
                 var y = parseInt(entireData[i].recovered);
                 var z = 104099452;
                 var stateName = entireData[i].state;
                 var name = 'BR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'West Bengal')
            {
                 var x= 1030;
                var y = parseInt(entireData[i].recovered);
                 var z = 91276115;
                 var stateName = entireData[i].state;
                 var name = 'WB';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Kerala')
            {
                 var x= 859;
                 var y = parseInt(entireData[i].recovered);
                 var z = 33406061;
                 var stateName = entireData[i].state;
                 var name = 'KL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Uttar Pradesh')
            {
                 var x= 828;
                 var y = parseInt(entireData[i].recovered);
                 var z = 199812341;
                 var stateName = entireData[i].state;
                 var name = 'UP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Haryana')
            {
                 var x= 573;
                 var y = parseInt(entireData[i].recovered);
                 var z = 25351462;
                 var stateName = entireData[i].state;
                 var name = 'HR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Tamil Nadu')
            {
                 var x= 555;
                var y = parseInt(entireData[i].recovered);
                 var z = 72147030;
                 var stateName = entireData[i].state;
                 var name = 'TN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Punjab')
            {
                 var x= 555;
                 var y = parseInt(entireData[i].recovered);
                 var z = 27743338;
                 var stateName = entireData[i].state;
                 var name = 'PN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Jharkhand')
            {
                 var x= 414;
                var y = parseInt(entireData[i].recovered);
                 var z = 32988134;
                 var stateName = entireData[i].state;
                 var name = 'JKD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Assam')
            {
                 var x= 397;
                var y = parseInt(entireData[i].recovered);
                 var z = 31205576;
                 var stateName = entireData[i].state;
                 var name = 'AS';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Goa')
            {
                 var x= 394;
                 var y = parseInt(entireData[i].recovered);
                 var z = 1458545;
                 var stateName = entireData[i].state;
                 var name = 'GA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Maharashtra')
            {
                 var x= 365;
                 var y = parseInt(entireData[i].recovered);
                 var z = 112374333;
                 var stateName = entireData[i].state;
                 var name = 'MH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Tripura')
            {
                 var x= 350;
                 var y = parseInt(entireData[i].recovered);
                 var z = 3673917;
                 var stateName = entireData[i].state;
                 var name = 'TP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Karnataka')
            {
                 var x= 319;
                 var y = parseInt(entireData[i].recovered);
                 var z = 61095297;
                 var stateName = entireData[i].state;
                 var name = 'KA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Gujarat')
            {
                 var x= 308;
                 var y = parseInt(entireData[i].recovered);
                 var z = 60439692;
                 var stateName = entireData[i].state;
                 var name = 'GJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Andhra Pradesh')
            {
                 var x= 308;
                 var y = parseInt(entireData[i].recovered);
                 var z = 49386799;
                 var stateName = entireData[i].state;
                 var name = 'AP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Telangana')
            {
                 var x= 307;
                 var y = parseInt(entireData[i].recovered);
                 var z = 35193978;
                 var stateName = entireData[i].state;
                 var name = 'TL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Odisha')
            {
                 var x= 269;
                 var y = parseInt(entireData[i].recovered);
                 var z = 41974218;
                 var stateName = entireData[i].state;
                 var name = 'OD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Madhya Pradesh')
            {
                 var x= 236;
                 var y = parseInt(entireData[i].recovered);
                 var z = 72626809;
                 var stateName = entireData[i].state;
                 var name = 'MP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].state == 'Rajasthan')
            {
                 var x= 201;
                var y = parseInt(entireData[i].recovered);
                 var z = 68548437;
                 var stateName = entireData[i].state;
                 var name = 'RJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].state == 'Chhattisgarh')
            {
                 var x= 189;
                 var y = parseInt(entireData[i].recovered);
                 var z = 25545198;
                 var stateName = entireData[i].state;
                 var name = 'CG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Uttarakhand')
            {
                 var x= 189;
                 var y = parseInt(entireData[i].recovered);
                 var z = 10086292;
                 var stateName = entireData[i].state;
                 var name = 'UK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Meghalaya')
            {
                 var x= 132;
                var y = parseInt(entireData[i].recovered);
                 var z = 2966889;
                 var stateName = entireData[i].state;
                 var name = 'MG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Manipur')
            {
                 var x= 128;
                 var y = parseInt(entireData[i].recovered);
                 var z = 2855794;
                 var stateName = entireData[i].state;
                 var name = 'MN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].state == 'Himachal Pradesh')
            {
                 var x= 123;
                var y = parseInt(entireData[i].recovered);
                 var z = 6864602;
                 var stateName = entireData[i].state;
                 var name = 'HP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].state == 'Nagaland')
            {
                 var x= 119;
                 var y = parseInt(entireData[i].recovered);
                 var z = 1978502;
                 var stateName = entireData[i].state;
                 var name = 'NG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Sikkim')
            {
                 var x= 86;
                var y = parseInt(entireData[i].recovered);
                 var z = 610577;
                 var stateName = entireData[i].state;
                 var name = 'SK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Jammu and Kashmir')
            {
                 var x= 56;
                 var y = parseInt(entireData[i].recovered);
                 var z = 12541302;
                 var stateName = entireData[i].state;
                 var name = 'JK';
                 var stateObj= {x,y,z,name,stateName};
                // tempArr.push(stateObj);

            }
             if(entireData[i].state == 'Mizoram')
            {
                 var x= 52;
                 var y = parseInt(entireData[i].recovered);
                 var z = 1097206;
                 var stateName = entireData[i].state;
                 var name = 'MZ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Arunachal Pradesh')
            {
                 var x= 17;
                 var y = parseInt(entireData[i].recovered);
                 var z = 1383727;
                 var stateName = entireData[i].state;
                 var name = 'ANP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }




        }
           //console.log(tempArr);
                            Highcharts.chart('containerDensity', {

                                    chart: {
                                        type: 'bubble',
                                        plotBorderWidth: 1,
                                        zoomType: 'xy'
                                    },

                                    legend: {
                                        enabled: false
                                    },

                                    title: {
                                        text: 'Recovered based on Density in Different States'
                                    },

                                    accessibility: {
                                        point: {
                                            valueDescriptionFormat: '{index}. {point.state}, Density: {point.x}/sq km, Recovered: {point.y}, Population: {point.z}.'
                                        }
                                    },

                                    xAxis: {
                                        gridLineWidth: 1,
                                        title: {
                                            text: 'Density'
                                        },
                                        labels: {
                                            format: '{value} /sq km'
                                        }


                                    },

                                    yAxis: {
                                        startOnTick: false,
                                        endOnTick: false,
                                        title: {
                                            text: 'Recovered'
                                        },
                                        labels: {
                                            format: '{value}'
                                        },
                                        maxPadding: 0.2


                                    },

                                    tooltip: {
                                        useHTML: true,
                                        headerFormat: '<table>',
                                        pointFormat: '<tr><th colspan="2"><h3>{point.stateName}</h3></th></tr>' +
                                            '<tr><th>Density:</th><td>{point.x} / sq km</td></tr>' +
                                            '<tr><th>Recovered:</th><td>{point.y}</td></tr>' +
                                            '<tr><th>Population:</th><td>{point.z}</td></tr>',
                                        footerFormat: '</table>',
                                        followPointer: true
                                    },

                                    plotOptions: {
                                        series: {
                                            dataLabels: {
                                                enabled: true,
                                                format: '{point.name}'
                                            }
                                        }
                                    },

                                    series: [{
                                        data: tempArr
                                    }]

                        });

        }
         else if (selectCase == 'Active')
        {
          /*
          for (var i=0;i<entireData.length;i++)
        {


            if(entireData[i].loc == 'Bihar')
            {
                 var x= 1102;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 104099452;
                 var stateName = entireData[i].loc;
                 var name = 'BR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'West Bengal')
            {
                 var x= 1030;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 91276115;
                 var stateName = entireData[i].loc;
                 var name = 'WB';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Kerala')
            {
                 var x= 859;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 33406061;
                 var stateName = entireData[i].loc;
                 var name = 'KL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Uttar Pradesh')
            {
                 var x= 828;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 199812341;
                 var stateName = entireData[i].loc;
                 var name = 'UP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Haryana')
            {
                 var x= 573;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 25351462;
                 var stateName = entireData[i].loc;
                 var name = 'HR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Tamil Nadu')
            {
                 var x= 555;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 72147030;
                 var stateName = entireData[i].loc;
                 var name = 'TN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Punjab')
            {
                 var x= 555;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 27743338;
                 var stateName = entireData[i].loc;
                 var name = 'PN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Jharkhand')
            {
                 var x= 414;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 32988134;
                 var stateName = entireData[i].loc;
                 var name = 'JKD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Assam')
            {
                 var x= 397;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 31205576;
                 var stateName = entireData[i].loc;
                 var name = 'AS';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Goa')
            {
                 var x= 394;
                var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 1458545;
                 var stateName = entireData[i].loc;
                 var name = 'GA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Maharashtra')
            {
                 var x= 365;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 112374333;
                 var stateName = entireData[i].loc;
                 var name = 'MH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Tripura')
            {
                 var x= 350;
                var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 3673917;
                 var stateName = entireData[i].loc;
                 var name = 'TP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Karnataka')
            {
                 var x= 319;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 61095297;
                 var stateName = entireData[i].loc;
                 var name = 'KA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Gujarat')
            {
                 var x= 308;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 60439692;
                 var stateName = entireData[i].loc;
                 var name = 'GJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Andhra Pradesh')
            {
                 var x= 308;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 49386799;
                 var stateName = entireData[i].loc;
                 var name = 'AP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Telangana')
            {
                 var x= 307;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 35193978;
                 var stateName = entireData[i].loc;
                 var name = 'TL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Odisha')
            {
                 var x= 269;
                var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 41974218;
                 var stateName = entireData[i].loc;
                 var name = 'OD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Madhya Pradesh')
            {
                 var x= 236;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 72626809;
                 var stateName = entireData[i].loc;
                 var name = 'MP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].loc == 'Rajasthan')
            {
                 var x= 201;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 68548437;
                 var stateName = entireData[i].loc;
                 var name = 'RJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].loc == 'Chhattisgarh')
            {
                 var x= 189;
                var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 25545198;
                 var stateName = entireData[i].loc;
                 var name = 'CG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Uttarakhand')
            {
                 var x= 189;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 10086292;
                 var stateName = entireData[i].loc;
                 var name = 'UK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Meghalaya')
            {
                 var x= 132;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 2966889;
                 var stateName = entireData[i].loc;
                 var name = 'MG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].loc == 'Manipur')
            {
                 var x= 128;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 2855794;
                 var stateName = entireData[i].loc;
                 var name = 'MN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].loc == 'Himachal Pradesh')
            {
                 var x= 123;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 6864602;
                 var stateName = entireData[i].loc;
                 var name = 'HP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].loc == 'Nagaland')
            {
                 var x= 119;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 1978502;
                 var stateName = entireData[i].loc;
                 var name = 'NG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Sikkim')
            {
                 var x= 86;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 610577;
                 var stateName = entireData[i].loc;
                 var name = 'SK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }


             if(entireData[i].loc == 'Mizoram')
            {
                 var x= 52;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 1097206;
                 var stateName = entireData[i].loc;
                 var name = 'MZ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].loc == 'Arunachal Pradesh')
            {
                 var x= 17;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;
                 var z = 1383727;
                 var stateName = entireData[i].loc;
                 var name = 'ANP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             */

             entireData= states
        for (var i=0;i<entireData.length;i++)
        {
             if(entireData[i].state == 'Bihar')
            {
                 var x= 1102;

                 var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 104099452;
                 var stateName = entireData[i].state;
                 var name = 'BR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'West Bengal')
            {
                 var x= 1030;
              var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 91276115;
                 var stateName = entireData[i].state;
                 var name = 'WB';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Kerala')
            {
                 var x= 859;
                var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 33406061;
                 var stateName = entireData[i].state;
                 var name = 'KL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Uttar Pradesh')
            {
                 var x= 828;
                var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 199812341;
                 var stateName = entireData[i].state;
                 var name = 'UP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Haryana')
            {
                 var x= 573;
                 var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 25351462;
                 var stateName = entireData[i].state;
                 var name = 'HR';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Tamil Nadu')
            {
                 var x= 555;
                var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 72147030;
                 var stateName = entireData[i].state;
                 var name = 'TN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Punjab')
            {
                 var x= 555;
                 var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 27743338;
                 var stateName = entireData[i].state;
                 var name = 'PN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Jharkhand')
            {
                 var x= 414;
               var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 32988134;
                 var stateName = entireData[i].state;
                 var name = 'JKD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Assam')
            {
                 var x= 397;
               var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 31205576;
                 var stateName = entireData[i].state;
                 var name = 'AS';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Goa')
            {
                 var x= 394;
                 var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 1458545;
                 var stateName = entireData[i].state;
                 var name = 'GA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Maharashtra')
            {
                 var x= 365;
               var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 112374333;
                 var stateName = entireData[i].state;
                 var name = 'MH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Tripura')
            {
                 var x= 350;
                 var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 3673917;
                 var stateName = entireData[i].state;
                 var name = 'TP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Karnataka')
            {
                 var x= 319;
                 var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 61095297;
                 var stateName = entireData[i].state;
                 var name = 'KA';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Gujarat')
            {
                 var x= 308;
               var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 60439692;
                 var stateName = entireData[i].state;
                 var name = 'GJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Andhra Pradesh')
            {
                 var x= 308;
               var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 49386799;
                 var stateName = entireData[i].state;
                 var name = 'AP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Telangana')
            {
                 var x= 307;
                var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 35193978;
                 var stateName = entireData[i].state;
                 var name = 'TL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Odisha')
            {
                 var x= 269;
                var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 41974218;
                 var stateName = entireData[i].state;
                 var name = 'OD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Madhya Pradesh')
            {
                 var x= 236;
                var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 72626809;
                 var stateName = entireData[i].state;
                 var name = 'MP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].state == 'Rajasthan')
            {
                 var x= 201;
              var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 68548437;
                 var stateName = entireData[i].state;
                 var name = 'RJ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

             if(entireData[i].state == 'Chhattisgarh')
            {
                 var x= 189;
                var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 25545198;
                 var stateName = entireData[i].state;
                 var name = 'CG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Uttarakhand')
            {
                 var x= 189;
                var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 10086292;
                 var stateName = entireData[i].state;
                 var name = 'UK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Meghalaya')
            {
                 var x= 132;
               var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 2966889;
                 var stateName = entireData[i].state;
                 var name = 'MG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
            if(entireData[i].state == 'Manipur')
            {
                 var x= 128;
                 var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 2855794;
                 var stateName = entireData[i].state;
                 var name = 'MN';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].state == 'Himachal Pradesh')
            {
                 var x= 123;
                var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 6864602;
                 var stateName = entireData[i].state;
                 var name = 'HP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }
             if(entireData[i].state == 'Nagaland')
            {
                 var x= 119;
                 var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 1978502;
                 var stateName = entireData[i].state;
                 var name = 'NG';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Sikkim')
            {
                 var x= 86;
               var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 610577;
                 var stateName = entireData[i].state;
                 var name = 'SK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Jammu and Kashmir')
            {
                 var x= 56;
               var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 12541302;
                 var stateName = entireData[i].state;
                 var name = 'JK';
                 var stateObj= {x,y,z,name,stateName};
                // tempArr.push(stateObj);

            }
             if(entireData[i].state == 'Mizoram')
            {
                 var x= 52;
               var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 1097206;
                 var stateName = entireData[i].state;
                 var name = 'MZ';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

            if(entireData[i].state == 'Arunachal Pradesh')
            {
                 var x= 17;
               var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 1383727;
                 var stateName = entireData[i].state;
                 var name = 'ANP';
                 var stateObj= {x,y,z,name,stateName};
                 tempArr.push(stateObj);

            }

         }


           //console.log(tempArr);
                            Highcharts.chart('containerDensity', {

                                    chart: {
                                        type: 'bubble',
                                        plotBorderWidth: 1,
                                        zoomType: 'xy'
                                    },

                                    legend: {
                                        enabled: false
                                    },

                                    title: {
                                        text: 'Active based on Density in Different States'
                                    },

                                    accessibility: {
                                        point: {
                                            valueDescriptionFormat: '{index}. {point.state}, Density: {point.x}/sq km, Active: {point.y}, Population: {point.z}.'
                                        }
                                    },

                                    xAxis: {
                                        gridLineWidth: 1,
                                        title: {
                                            text: 'Density'
                                        },
                                        labels: {
                                            format: '{value} /sq km'
                                        }


                                    },

                                    yAxis: {
                                        startOnTick: false,
                                        endOnTick: false,
                                        title: {
                                            text: 'Active'
                                        },
                                        labels: {
                                            format: '{value}'
                                        },
                                        maxPadding: 0.2


                                    },

                                    tooltip: {
                                        useHTML: true,
                                        headerFormat: '<table>',
                                        pointFormat: '<tr><th colspan="2"><h3>{point.stateName}</h3></th></tr>' +
                                            '<tr><th>Density:</th><td>{point.x} / sq km</td></tr>' +
                                            '<tr><th>Active:</th><td>{point.y}</td></tr>' +
                                            '<tr><th>Population:</th><td>{point.z}</td></tr>',
                                        footerFormat: '</table>',
                                        followPointer: true
                                    },

                                    plotOptions: {
                                        series: {
                                            dataLabels: {
                                                enabled: true,
                                                format: '{point.name}'
                                            }
                                        }
                                    },

                                    series: [{
                                        data: tempArr
                                    }]

                        });
            }


}

function selectCaseUT()
{

    var selectBox = document.getElementById("selectCaseUT");
        var selectCase = selectBox.options[selectBox.selectedIndex].value;
        var tempArrUt=[];
        entireData = states;
        if (selectCase == 'Confirmed')
        {
          /*
         for (var i=0;i<entireData.length;i++)
        {


             if(entireData[i].loc == 'Delhi')
            {
                 var x= 11297;
                 var y = entireData[i].totalConfirmed;
                 var z = 16787941;
                 var stateName = entireData[i].loc;
                 var name = 'DL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }

            if(entireData[i].loc == 'Chandigarh')
            {
                 var x= 9252;
                 var y = entireData[i].totalConfirmed;
                 var z = 1055450;
                 var stateName = entireData[i].loc;
                 var name = 'CD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].loc == 'Puducherry')
            {
                 var x= 2598;
                 var y = entireData[i].totalConfirmed;
                 var z = 1247953;
                 var stateName = entireData[i].loc;
                 var name = 'PD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].loc == 'Dadra and Nagar Haveli and Daman and Diu')
            {
                 var x= 2169;
                 var y = entireData[i].totalConfirmed;
                 var z = 243247;
                 var stateName = 'DND';
                 var state = entireData[i].loc;
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].loc == 'Jammu and Kashmir')
            {
                 var x= 56;
                 var y = entireData[i].totalConfirmed;
                 var z = 12541302;
                 var stateName = entireData[i].loc;
                 var name = 'JK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].loc == 'Andaman and Nicobar Islands')
            {
                 var x= 46;
                 var y = entireData[i].totalConfirmed;
                 var z = 380581;
                 var stateName = entireData[i].loc;
                 var name = 'ANI';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].loc == 'Ladakh')
            {
                 var x= 5;
                 var y = entireData[i].totalConfirmed;
                 var z = 274289;
                 var stateName = entireData[i].loc;
                 var name = 'LDKH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }*/

              for (var i=0;i<entireData.length;i++)
        {
             if(entireData[i].state == 'Delhi')
            {
                 var x= 11297;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 16787941;
                 var stateName = entireData[i].state;
                 var name = 'DL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }

            if(entireData[i].state == 'Chandigarh')
            {
                 var x= 9252;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 1055450;
                 var stateName = entireData[i].state;
                 var name = 'CD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].state == 'Puducherry')
            {
                 var x= 2598;
                var y = parseInt(entireData[i].confirmed);

                 var z = 1247953;
                 var stateName = entireData[i].state;
                 var name = 'PD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].state == 'Dadra and Nagar Haveli and Daman and Diu')
            {
                 var x= 2169;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 243247;
                 var stateName = 'DND';
                 var state = entireData[i].state;
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].state == 'Jammu and Kashmir')
            {
                 var x= 56;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 12541302;
                 var stateName = entireData[i].state;
                 var name = 'JK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].state == 'Andaman and Nicobar Islands')
            {
                 var x= 46;
                 var y = parseInt(entireData[i].confirmed);
                 var z = 380581;
                 var stateName = entireData[i].state;
                 var name = 'ANI';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].state == 'Ladakh')
            {
                 var x= 5;
                var y = parseInt(entireData[i].confirmed);
                 var z = 274289;
                 var stateName = entireData[i].state;
                 var name = 'LDKH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            }

           //console.log(tempArr);
                            Highcharts.chart('containerDensity1', {

                                    chart: {
                                        type: 'bubble',
                                        plotBorderWidth: 1,
                                        zoomType: 'xy'
                                    },

                                    legend: {
                                        enabled: false
                                    },

                                    title: {
                                        text: 'Confirmed Cases based on Density in Different UTs'
                                    },

                                    accessibility: {
                                        point: {
                                            valueDescriptionFormat: '{index}. {point.state}, Density: {point.x}/sq km, Cases: {point.y}, Population: {point.z}.'
                                        }
                                    },

                                    xAxis: {
                                        gridLineWidth: 1,
                                        title: {
                                            text: 'Density'
                                        },
                                        labels: {
                                            format: '{value} /sq km'
                                        }


                                    },

                                    yAxis: {
                                        startOnTick: false,
                                        endOnTick: false,
                                        title: {
                                            text: 'Confirmed Cases'
                                        },
                                        labels: {
                                            format: '{value}'
                                        },
                                        maxPadding: 0.2


                                    },

                                    tooltip: {
                                        useHTML: true,
                                        headerFormat: '<table>',
                                        pointFormat: '<tr><th colspan="2"><h3>{point.stateName}</h3></th></tr>' +
                                            '<tr><th>Density:</th><td>{point.x} / sq km</td></tr>' +
                                            '<tr><th>Cases:</th><td>{point.y}</td></tr>' +
                                            '<tr><th>Population:</th><td>{point.z}</td></tr>',
                                        footerFormat: '</table>',
                                        followPointer: true
                                    },

                                    plotOptions: {
                                        series: {
                                            dataLabels: {
                                                enabled: true,
                                                format: '{point.name}'
                                            }
                                        }
                                    },

                                    series: [{
                                        data: tempArrUt
                                    }]

                        });

        }
        else if (selectCase == 'Deaths')
        {
        /*
        for (var i=0;i<entireData.length;i++)
        {

                 if(entireData[i].loc == 'Delhi')
            {
                 var x= 11297;
                 var y = entireData[i].deaths;
                 var z = 16787941;
                 var stateName = entireData[i].loc;
                 var name = 'DL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }

            if(entireData[i].loc == 'Chandigarh')
            {
                 var x= 9252;
                 var y = entireData[i].deaths;
                 var z = 1055450;
                 var stateName = entireData[i].loc;
                 var name = 'CD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].loc == 'Puducherry')
            {
                 var x= 2598;
                 var y = entireData[i].deaths;
                 var z = 1247953;
                 var stateName = entireData[i].loc;
                 var name = 'PD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].loc == 'Dadra and Nagar Haveli and Daman and Diu')
            {
                 var x= 2169;
                 var y = entireData[i].deaths;
                 var z = 243247;
                 var stateName = 'DND';
                 var state = entireData[i].loc;
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].loc == 'Jammu and Kashmir')
            {
                 var x= 56;
                 var y = entireData[i].deaths;
                 var z = 12541302;
                 var stateName = entireData[i].loc;
                 var name = 'JK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].loc == 'Andaman and Nicobar Islands')
            {
                 var x= 46;
                 var y = entireData[i].deaths;
                 var z = 380581;
                 var stateName = entireData[i].loc;
                 var name = 'ANI';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].loc == 'Ladakh')
            {
                 var x= 5;
                 var y = entireData[i].deaths;
                 var z = 274289;
                 var stateName = entireData[i].loc;
                 var name = 'LDKH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }*/
             for (var i=0;i<entireData.length;i++)
        {
             if(entireData[i].state == 'Delhi')
            {
                 var x= 11297;
                 var y = parseInt(entireData[i].deaths);
                 var z = 16787941;
                 var stateName = entireData[i].state;
                 var name = 'DL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }

            if(entireData[i].state == 'Chandigarh')
            {
                 var x= 9252;
                 var y = parseInt(entireData[i].deaths);
                 var z = 1055450;
                 var stateName = entireData[i].state;
                 var name = 'CD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].state == 'Puducherry')
            {
                 var x= 2598;
                var y = parseInt(entireData[i].deaths);

                 var z = 1247953;
                 var stateName = entireData[i].state;
                 var name = 'PD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].state == 'Dadra and Nagar Haveli and Daman and Diu')
            {
                 var x= 2169;
                 var y = parseInt(entireData[i].deaths);
                 var z = 243247;
                 var stateName = 'DND';
                 var state = entireData[i].state;
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].state == 'Jammu and Kashmir')
            {
                 var x= 56;
                 var y = parseInt(entireData[i].deaths);
                 var z = 12541302;
                 var stateName = entireData[i].state;
                 var name = 'JK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].state == 'Andaman and Nicobar Islands')
            {
                 var x= 46;
                 var y = parseInt(entireData[i].deaths);
                 var z = 380581;
                 var stateName = entireData[i].state;
                 var name = 'ANI';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].state == 'Ladakh')
            {
                 var x= 5;
                var y = parseInt(entireData[i].deaths);
                 var z = 274289;
                 var stateName = entireData[i].state;
                 var name = 'LDKH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }






        }
           //console.log(tempArr);
                            Highcharts.chart('containerDensity1', {

                                    chart: {
                                        type: 'bubble',
                                        plotBorderWidth: 1,
                                        zoomType: 'xy'
                                    },

                                    legend: {
                                        enabled: false
                                    },

                                    title: {
                                        text: 'Deaths based on Density in Different UTs'
                                    },

                                    accessibility: {
                                        point: {
                                            valueDescriptionFormat: '{index}. {point.state}, Density: {point.x}/sq km, Deaths: {point.y}, Population: {point.z}.'
                                        }
                                    },

                                    xAxis: {
                                        gridLineWidth: 1,
                                        title: {
                                            text: 'Density'
                                        },
                                        labels: {
                                            format: '{value} /sq km'
                                        }


                                    },

                                    yAxis: {
                                        startOnTick: false,
                                        endOnTick: false,
                                        title: {
                                            text: 'Deaths'
                                        },
                                        labels: {
                                            format: '{value}'
                                        },
                                        maxPadding: 0.2


                                    },

                                    tooltip: {
                                        useHTML: true,
                                        headerFormat: '<table>',
                                        pointFormat: '<tr><th colspan="2"><h3>{point.stateName}</h3></th></tr>' +
                                            '<tr><th>Density:</th><td>{point.x} / sq km</td></tr>' +
                                            '<tr><th>Deaths:</th><td>{point.y}</td></tr>' +
                                            '<tr><th>Population:</th><td>{point.z}</td></tr>',
                                        footerFormat: '</table>',
                                        followPointer: true
                                    },

                                    plotOptions: {
                                        series: {
                                            dataLabels: {
                                                enabled: true,
                                                format: '{point.name}'
                                            }
                                        }
                                    },

                                    series: [{
                                        data: tempArrUt
                                    }]

                        });




        }
        else if (selectCase == 'Recovered')
        {

          /*
           for (var i=0;i<entireData.length;i++)
        {

           if(entireData[i].loc == 'Delhi')
            {
                 var x= 11297;
                 var y = entireData[i].discharged;
                 var z = 16787941;
                 var stateName = entireData[i].loc;
                 var name = 'DL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }

            if(entireData[i].loc == 'Chandigarh')
            {
                 var x= 9252;
                 var y = entireData[i].discharged;
                 var z = 1055450;
                 var stateName = entireData[i].loc;
                 var name = 'CD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].loc == 'Puducherry')
            {
                 var x= 2598;
                 var y = entireData[i].discharged;
                 var z = 1247953;
                 var stateName = entireData[i].loc;
                 var name = 'PD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].loc == 'Dadra and Nagar Haveli and Daman and Diu')
            {
                 var x= 2169;
                 var y = entireData[i].discharged;
                 var z = 243247;
                 var stateName = 'DND';
                 var state = entireData[i].loc;
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].loc == 'Jammu and Kashmir')
            {
                 var x= 56;
                 var y = entireData[i].discharged;
                 var z = 12541302;
                 var stateName = entireData[i].loc;
                 var name = 'JK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].loc == 'Andaman and Nicobar Islands')
            {
                 var x= 46;
                 var y = entireData[i].discharged;
                 var z = 380581;
                 var stateName = entireData[i].loc;
                 var name = 'ANI';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].loc == 'Ladakh')
            {
                 var x= 5;
                 var y = entireData[i].discharged;
                 var z = 274289;
                 var stateName = entireData[i].loc;
                 var name = 'LDKH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }

        }*/

          for (var i=0;i<entireData.length;i++)
        {
             if(entireData[i].state == 'Delhi')
            {
                 var x= 11297;
                 var y = parseInt(entireData[i].recovered);
                 var z = 16787941;
                 var stateName = entireData[i].state;
                 var name = 'DL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }

            if(entireData[i].state == 'Chandigarh')
            {
                 var x= 9252;
                 var y = parseInt(entireData[i].recovered);
                 var z = 1055450;
                 var stateName = entireData[i].state;
                 var name = 'CD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].state == 'Puducherry')
            {
                 var x= 2598;
                var y = parseInt(entireData[i].recovered);

                 var z = 1247953;
                 var stateName = entireData[i].state;
                 var name = 'PD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].state == 'Dadra and Nagar Haveli and Daman and Diu')
            {
                 var x= 2169;
                 var y = parseInt(entireData[i].recovered);
                 var z = 243247;
                 var stateName = 'DND';
                 var state = entireData[i].state;
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].state == 'Jammu and Kashmir')
            {
                 var x= 56;
                 var y = parseInt(entireData[i].recovered);
                 var z = 12541302;
                 var stateName = entireData[i].state;
                 var name = 'JK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].state == 'Andaman and Nicobar Islands')
            {
                 var x= 46;
                 var y = parseInt(entireData[i].recovered);
                 var z = 380581;
                 var stateName = entireData[i].state;
                 var name = 'ANI';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].state == 'Ladakh')
            {
                 var x= 5;
                var y = parseInt(entireData[i].recovered);
                 var z = 274289;
                 var stateName = entireData[i].state;
                 var name = 'LDKH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }

        }



           //console.log(tempArr);
                            Highcharts.chart('containerDensity1', {

                                    chart: {
                                        type: 'bubble',
                                        plotBorderWidth: 1,
                                        zoomType: 'xy'
                                    },

                                    legend: {
                                        enabled: false
                                    },

                                    title: {
                                        text: 'Recovered based on Density in Different UTs'
                                    },

                                    accessibility: {
                                        point: {
                                            valueDescriptionFormat: '{index}. {point.state}, Density: {point.x}/sq km, Recovered: {point.y}, Population: {point.z}.'
                                        }
                                    },

                                    xAxis: {
                                        gridLineWidth: 1,
                                        title: {
                                            text: 'Density'
                                        },
                                        labels: {
                                            format: '{value} /sq km'
                                        }


                                    },

                                    yAxis: {
                                        startOnTick: false,
                                        endOnTick: false,
                                        title: {
                                            text: 'Recovered'
                                        },
                                        labels: {
                                            format: '{value}'
                                        },
                                        maxPadding: 0.2


                                    },

                                    tooltip: {
                                        useHTML: true,
                                        headerFormat: '<table>',
                                        pointFormat: '<tr><th colspan="2"><h3>{point.stateName}</h3></th></tr>' +
                                            '<tr><th>Density:</th><td>{point.x} / sq km</td></tr>' +
                                            '<tr><th>Recovered:</th><td>{point.y}</td></tr>' +
                                            '<tr><th>Population:</th><td>{point.z}</td></tr>',
                                        footerFormat: '</table>',
                                        followPointer: true
                                    },

                                    plotOptions: {
                                        series: {
                                            dataLabels: {
                                                enabled: true,
                                                format: '{point.name}'
                                            }
                                        }
                                    },

                                    series: [{
                                        data: tempArrUt
                                    }]

                        });

        }
         else if (selectCase == 'Active')
        {
        /*
          for (var i=0;i<entireData.length;i++)
        {


             if(entireData[i].loc == 'Delhi')
            {
                 var x= 11297;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;;
                 var z = 16787941;
                 var stateName = entireData[i].loc;
                 var name = 'DL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }

            if(entireData[i].loc == 'Chandigarh')
            {
                 var x= 9252;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;;
                 var z = 1055450;
                 var stateName = entireData[i].loc;
                 var name = 'CD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].loc == 'Puducherry')
            {
                 var x= 2598;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;;
                 var z = 1247953;
                 var stateName = entireData[i].loc;
                 var name = 'PD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].loc == 'Dadra and Nagar Haveli and Daman and Diu')
            {
                 var x= 2169;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;;
                 var z = 243247;
                 var stateName = 'DND';
                 var state = entireData[i].loc;
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].loc == 'Jammu and Kashmir')
            {
                 var x= 56;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;;
                 var z = 12541302;
                 var stateName = entireData[i].loc;
                 var name = 'JK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].loc == 'Andaman and Nicobar Islands')
            {
                 var x= 46;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;;
                 var z = 380581;
                 var stateName = entireData[i].loc;
                 var name = 'ANI';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].loc == 'Ladakh')
            {
                 var x= 5;
                 var y = entireData[i].totalConfirmed - entireData[i].discharged -entireData[i].deaths;;
                 var z = 274289;
                 var stateName = entireData[i].loc;
                 var name = 'LDKH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }

        }*/

        for (var i=0;i<entireData.length;i++)
        {


             if(entireData[i].state == 'Delhi')
            {
                 var x= 11297;
               var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);

                 var z = 16787941;
                 var stateName = entireData[i].state;
                 var name = 'DL';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }

            if(entireData[i].state == 'Chandigarh')
            {
                 var x= 9252;
               var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);

                 var z = 1055450;
                 var stateName = entireData[i].state;
                 var name = 'CD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].state == 'Puducherry')
            {
                 var x= 2598;
               var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);

                 var z = 1247953;
                 var stateName = entireData[i].state;
                 var name = 'PD';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].state == 'Dadra and Nagar Haveli and Daman and Diu')
            {
                 var x= 2169;
               var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);
                 var z = 243247;
                 var stateName = 'DND';
                 var state = entireData[i].state;
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
            if(entireData[i].state == 'Jammu and Kashmir')
            {
                 var x= 56;
               var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);

                 var z = 12541302;
                 var stateName = entireData[i].state;
                 var name = 'JK';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].state == 'Andaman and Nicobar Islands')
            {
                 var x= 46;
               var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);

                 var z = 380581;
                 var stateName = entireData[i].state;
                 var name = 'ANI';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }
             if(entireData[i].state == 'Ladakh')
            {
                 var x= 5;
               var y = parseInt(entireData[i].confirmed )-parseInt( entireData[i].recovered) -parseInt(entireData[i].deaths);

                 var z = 274289;
                 var stateName = entireData[i].state;
                 var name = 'LDKH';
                 var stateObj= {x,y,z,name,stateName};
                 tempArrUt.push(stateObj);

            }

        }


           //console.log(tempArr);
                            Highcharts.chart('containerDensity1', {

                                    chart: {
                                        type: 'bubble',
                                        plotBorderWidth: 1,
                                        zoomType: 'xy'
                                    },

                                    legend: {
                                        enabled: false
                                    },

                                    title: {
                                        text: 'Active based on Density in Different UTs'
                                    },

                                    accessibility: {
                                        point: {
                                            valueDescriptionFormat: '{index}. {point.state}, Density: {point.x}/sq km, Active: {point.y}, Population: {point.z}.'
                                        }
                                    },

                                    xAxis: {
                                        gridLineWidth: 1,
                                        title: {
                                            text: 'Density'
                                        },
                                        labels: {
                                            format: '{value} /sq km'
                                        }


                                    },

                                    yAxis: {
                                        startOnTick: false,
                                        endOnTick: false,
                                        title: {
                                            text: 'Active'
                                        },
                                        labels: {
                                            format: '{value}'
                                        },
                                        maxPadding: 0.2


                                    },

                                    tooltip: {
                                        useHTML: true,
                                        headerFormat: '<table>',
                                        pointFormat: '<tr><th colspan="2"><h3>{point.stateName}</h3></th></tr>' +
                                            '<tr><th>Density:</th><td>{point.x} / sq km</td></tr>' +
                                            '<tr><th>Active:</th><td>{point.y}</td></tr>' +
                                            '<tr><th>Population:</th><td>{point.z}</td></tr>',
                                        footerFormat: '</table>',
                                        followPointer: true
                                    },

                                    plotOptions: {
                                        series: {
                                            dataLabels: {
                                                enabled: true,
                                                format: '{point.name}'
                                            }
                                        }
                                    },

                                    series: [{
                                        data: tempArrUt
                                    }]

                        });


        }



}
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
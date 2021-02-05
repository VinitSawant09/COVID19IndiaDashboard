var regionalStats = null;
var totalDailyCount = null;
var testHistory= null;
var responseF= null;
var states = null;
var nationalSeries = null;
var statewise = null;
var finalConfirmedStates = [];
var finalDeathStates = [];
var finalRecoveredStates = [];
function myFunction()
{
 var confirmedCasesCountTill2Day = null;
 var deathCountTill2Day = null;
 var recoveryCountTill2Day = null;

 var $tableId = $("#dtBasicExample")
 /*
  $.ajax(
       {
        url  : "https://api.rootnet.in/covid19-in/stats/latest",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){

        if (response!=null)
        {
          var entireData = response.data;
          //console.log(response);
          regionalStats = entireData.regional;
          //console.log(regionalStats);
          var lastRefreshed =response.lastRefreshed;
          var date = moment(lastRefreshed);
        //  document.getElementById("lastUpdatedLive1").innerHTML="Last Updated : "+date.format('llll');
       //   document.getElementById("lastUpdatedLive2").innerHTML="Last Updated : "+date.format('llll');
        //  document.getElementById("lastUpdatedLive3").innerHTML="Last Updated : "+date.format('llll');

          var liveStats= entireData["unofficial-summary"];

          var totalConfirmedCases = liveStats[0].total;
          confirmedCasesCountTill2Day=totalConfirmedCases;
         // document.getElementById("totalConfirmedCases").innerHTML=numberWithCommas(totalConfirmedCases);

          var totalDeaths = liveStats[0].deaths;
          deathCountTill2Day=totalDeaths;
         // document.getElementById("totalDeaths").innerHTML=numberWithCommas(totalDeaths);
          var mortalityRate = (Math.round((totalDeaths + Number.EPSILON) * 100) / totalConfirmedCases).toFixed(2) ;
         // document.getElementById("mortalityRate").innerHTML=mortalityRate + "%";

          var totalRecovered = liveStats[0].recovered;
          recoveryCountTill2Day=totalRecovered;
         // document.getElementById("totalRecovered").innerHTML=numberWithCommas(totalRecovered);
          var recoveryRate = (Math.round((totalRecovered + Number.EPSILON) * 100) / totalConfirmedCases).toFixed(2) ;
         // document.getElementById("recoveryRate").innerHTML=recoveryRate+ "%";


          var activeCases = liveStats[0].active;
          //document.getElementById("activeCases").innerHTML=activeCases;

          for (var i=0;i < regionalStats.length; i++)
         {
          $tableId.append(
          $("<tr>").append($("<td>").html(regionalStats[i].loc))
          .append($("<td>").html(regionalStats[i].totalConfirmed))
          .append($("<td>").html(regionalStats[i].deaths))
          .append($("<td>").html(regionalStats[i].discharged))
          .append($("<td>").html(regionalStats[i].totalConfirmed-regionalStats[i].discharged-regionalStats[i].deaths))
         );
         }


        }
         else
        {
            console.log("Error while fetching testing api..!!!");
        }
          /*
           $(document).ready(function () {
              $('#dtBasicExample').DataTable({
                  "order": [[ 1, "desc" ]],
                  "fnRowCallback": function(nRow, aData, iDisplayIndex, iDisplayIndexFull)
                            {

                                     $('td', nRow).css('background-color', 'Black').css('color','White');
                             },
                   'columnDefs': [
                                {
                              "targets": 1,
                              "className": 'dt-body-right',
                                    },
                                 {
                              "targets": 2,
                              "className": 'dt-body-right',
                                     },
                                     {
                              "targets": 3,
                              "className": 'dt-body-right',
                                    },
                                    {
                              "targets": 4,
                              "className": 'dt-body-right',
                                    }


                                     ]

                   });
              $('.dataTables_length').addClass('bs-select');

            });

        //   showConfirmedOnMap();

        }
       });*/
/*
   $.ajax(
       {
        url  : "https://api.rootnet.in/covid19-in/stats/history",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){

        if (response!=null)
        {
          //console.log(response);

          var newdata= response.data;
          totalDailyCount = response.data;
          responseF=response;
          var numberOfDays= newdata.length;

          var deathsToday= deathCountTill2Day - newdata[numberOfDays-1].summary.deaths;
          if(deathsToday<0)
          {
          deathsToday = 0;
          }
        //  document.getElementById("deathsToday").innerHTML="+"+deathsToday;


          var recoveredToday= recoveryCountTill2Day - newdata[numberOfDays-1].summary.discharged;
          if(recoveredToday<0)
          {
          recoveredToday = 0;
         // alert("zero");
          }
         // document.getElementById("recoveredToday").innerHTML="+"+recoveredToday;



          var confirmedToday= confirmedCasesCountTill2Day - newdata[numberOfDays-1].summary.total;
          if(confirmedToday<0)
          {
          confirmedToday = 0;
          }
         // document.getElementById("confirmedToday").innerHTML="+"+confirmedToday;

         }
         else
        {
            console.log("Error while fetching testing api..!!!");
        }

        //splineConfirmed();

        //console.log(totalDailyCount);
        var historyCases = [];
        var historyDeaths = [];
        var historyRecovery = [];
        var historyMortality = [];
       // console.log(totalDailyCount[0].regional.length);
        for (var i=0; i < totalDailyCount.length;i++)
        {
            for (var j=0;j<totalDailyCount[i].regional.length;j++)
            {
                 if (totalDailyCount[i].regional[j].loc == 'Telengana')
                 {
                   totalDailyCount[i].regional[j].loc = 'Telangana'
                 }
                 else if (totalDailyCount[i].regional[j].loc == 'Nagaland#')
                 {
                   totalDailyCount[i].regional[j].loc = 'Nagaland'
                 }
                 else if (totalDailyCount[i].regional[j].loc == 'Madhya Pradesh#')
                 {
                   totalDailyCount[i].regional[j].loc = 'Madhya Pradesh'
                 }
                 else if (totalDailyCount[i].regional[j].loc == 'Jharkhand#')
                 {
                   totalDailyCount[i].regional[j].loc = 'Jharkhand'
                 }
                 else if (totalDailyCount[i].regional[j].loc == 'Dadar Nagar Haveli' || totalDailyCount[i].regional[j].loc =='Dadar and Nagar Haveli and Daman and Diu')
                 {
                   totalDailyCount[i].regional[j].loc = 'Dadra and Nagar Haveli and Daman and Diu'
                 }
            }
        }
       //confirmed cases multi line chart
        for (var i=0; i < totalDailyCount.length;i++)
        {
             //console.log(historyCases);
             for (var j=0;j<totalDailyCount[i].regional.length;j++)
            {
                var location = totalDailyCount[i].regional[j].loc;
                var count = totalDailyCount[i].regional[j].totalConfirmed;
                var date =  totalDailyCount[i].day;
                var found = 0;
                 if (j== 0 && i==0)
                 {
                 found =0;
                 }
                 else
                 {
                  for (var k =0;k<historyCases.length;k++)
                 {
                   if(historyCases[k].name == location)
                   {
                   found=1;
                   var datapoints = historyCases[k].dataPoints;
                   //console.log(olddata);
                   var x = new Date(date);
                   var y = count;
                   var xyobj= {x,y};
                   datapoints.push(xyobj);
                   historyCases[k].dataPoints=datapoints;

                   }

                }
                }
                 if(found==0)
                    {

                            var type = "line";
                            var axisYType= "secondary";
                            var name= location;
                            var showInLegend= true;
                            var markerSize= 0;
                            var yValueFormatString= "#,###";
                            var x = new Date(totalDailyCount[i].day);
                            var y = count;
                            var xyobj= {x,y};
                            var dataPoints =[];
                            dataPoints.push(xyobj);
                            var finalObjects = {type,axisYType,name,showInLegend,markerSize,yValueFormatString,dataPoints};
                            historyCases.push(finalObjects);

                    }
             }
         }
         console.log(historyCases);

         //deaths multi line chart
        for (var i=0; i < totalDailyCount.length;i++)
        {
             //console.log(historyCases);
             for (var j=0;j<totalDailyCount[i].regional.length;j++)
            {
                var location = totalDailyCount[i].regional[j].loc;
                var count = totalDailyCount[i].regional[j].deaths;
                var date =  totalDailyCount[i].day;
                var found = 0;
                 if (j== 0 && i==0)
                 {
                 found =0;
                 }
                 else
                 {
                  for (var k =0;k<historyDeaths.length;k++)
                 {
                   if(historyDeaths[k].name == location)
                   {
                   found=1;
                   var datapoints = historyDeaths[k].dataPoints;
                   //console.log(olddata);
                   var x = new Date(date);
                   var y = count;
                   var xyobj= {x,y};
                   datapoints.push(xyobj);
                   historyDeaths[k].dataPoints=datapoints;

                   }

                }
                }
                 if(found==0)
                    {

                            var type = "line";
                            var axisYType= "secondary";
                            var name= location;
                            var showInLegend= true;
                            var markerSize= 0;
                            var yValueFormatString= "#,###";
                            var x = new Date(totalDailyCount[i].day);
                            var y = count;
                            var xyobj= {x,y};
                            var dataPoints =[];
                            dataPoints.push(xyobj);
                            var finalObjects = {type,axisYType,name,showInLegend,markerSize,yValueFormatString,dataPoints};
                            historyDeaths.push(finalObjects);

                    }
             }
         }

/*
        var chart = new CanvasJS.Chart("allStatesConfirmed", {
	title: {
		text: "Confirmed Cases Growth"
	},
	axisX: {
		valueFormatString: "DD MM YYYY"
	},
	axisY2: {
		title: "Confirmed Cases",
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		verticalAlign: "top",
		horizontalAlign: "center",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data:  historyCases

});
chart.render();

function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart.render();
	}

	 var chart = new CanvasJS.Chart("allStatesDeaths", {
	title: {
		text: "Deaths Growth"
	},
	axisX: {
		valueFormatString: "DD MM YYYY"
	},
	axisY2: {
		title: "Deaths",
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		verticalAlign: "top",
		horizontalAlign: "center",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data:  historyDeaths

});
chart.render();

function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart.render();

}
*/
/*
 //Recoveries multi line chart
        for (var i=0; i < totalDailyCount.length;i++)
        {
             //console.log(historyCases);
             for (var j=0;j<totalDailyCount[i].regional.length;j++)
            {
                var location = totalDailyCount[i].regional[j].loc;
                var count = totalDailyCount[i].regional[j].discharged;
                var date =  totalDailyCount[i].day;
                var found = 0;
                 if (j== 0 && i==0)
                 {
                 found =0;
                 }
                 else
                 {
                  for (var k =0;k<historyRecovery.length;k++)
                 {
                   if(historyRecovery[k].name == location)
                   {
                   found=1;
                   var datapoints = historyRecovery[k].dataPoints;
                   //console.log(olddata);
                   var x = new Date(date);
                   var y = count;
                   var xyobj= {x,y};
                   datapoints.push(xyobj);
                   historyRecovery[k].dataPoints=datapoints;

                   }

                }
                }
                 if(found==0)
                    {

                            var type = "line";
                            var axisYType= "secondary";
                            var name= location;
                            var showInLegend= true;
                            var markerSize= 0;
                            var yValueFormatString= "#,###";
                            var x = new Date(totalDailyCount[i].day);
                            var y = count;
                            var xyobj= {x,y};
                            var dataPoints =[];
                            dataPoints.push(xyobj);
                            var finalObjects = {type,axisYType,name,showInLegend,markerSize,yValueFormatString,dataPoints};
                            historyRecovery.push(finalObjects);

                    }
             }
         }


        var chart = new CanvasJS.Chart("allStatesRecoveries", {
	title: {
		text: "Recoveries Growth"
	},
	axisX: {
		valueFormatString: "DD MM YYYY"
	},
	axisY2: {
		title: " Cases",
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		verticalAlign: "top",
		horizontalAlign: "center",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data:  historyRecovery

});
chart.render();

function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart.render();
	}

/*
for (var i=0; i < totalDailyCount.length;i++)
        {
             //console.log(historyCases);
             for (var j=0;j<totalDailyCount[i].regional.length;j++)
            {
                var location = totalDailyCount[i].regional[j].loc;
                var count = (totalDailyCount[i].regional[j].deaths * 100) / totalDailyCount[i].regional[j].totalConfirmed;
                var date =  totalDailyCount[i].day;
                var found = 0;
                 if (j== 0 && i==0)
                 {
                 found =0;
                 }
                 else
                 {
                  for (var k =0;k<historyMortality.length;k++)
                 {
                   if(historyMortality[k].name == location)
                   {
                   found=1;
                   var datapoints = historyMortality[k].dataPoints;
                   //console.log(olddata);
                   var x = new Date(date);
                   var y = count;
                   var xyobj= {x,y};
                   datapoints.push(xyobj);
                   historyMortality[k].dataPoints=datapoints;

                   }

                }
                }
                 if(found==0)
                    {
                            var type = "line";
                            var axisYType= "secondary";
                            var name= location;
                            var showInLegend= true;
                            var markerSize= 0;
                            var yValueFormatString= "#,###";
                            var x = new Date(totalDailyCount[i].day);
                            var y = count;
                            var xyobj= {x,y};
                            var dataPoints =[];
                            dataPoints.push(xyobj);
                            var finalObjects = {type,axisYType,name,showInLegend,markerSize,yValueFormatString,dataPoints};
                            historyMortality.push(finalObjects);

                    }
             }
         }

	var chart = new CanvasJS.Chart("allStatesMortality", {
	title: {
		text: "Mortality Growth"
	},
	axisX: {
		valueFormatString: "DD MM YYYY"
	},
	axisY2: {
		title: " Rate",
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		verticalAlign: "top",
		horizontalAlign: "center",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data:  historyMortality

});
chart.render();

function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart.render();
	}


}

       });*/

       //redundant
/*
   $.ajax(
       {
        url  : "https://api.rootnet.in/covid19-in/stats/testing/history",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){

        if (response!=null)
        {

          var lastRefreshed= response.lastRefreshed;
          var date = moment(lastRefreshed);
          var arrLength=response.data.length;
          var totalSamplesTestedTillToday=response.data[arrLength-1].totalSamplesTested;
          var totalSamplesTestedTillYesterday =response.data[arrLength-2].totalSamplesTested;
          var samplesTestedToday = totalSamplesTestedTillToday - totalSamplesTestedTillYesterday;
          document.getElementById("totalTestsDone").innerHTML=numberWithCommas(totalSamplesTestedTillToday);
          document.getElementById("testDoneToday").innerHTML=numberWithCommas(samplesTestedToday);
          var totPopulation =1379307780;
          var totalMillions = totPopulation/1000000;
          var testspermillion = Math.round(totalSamplesTestedTillToday/totalMillions);
          document.getElementById("testspermillion").innerHTML=testspermillion;
          document.getElementById("lastUpdated").innerHTML="Last Updated : "+date.format('llll');

        }
        else
        {
            console.log("Error while fetching testing api..!!!");
        }

        }
       });*/
//////////////////////////////////newly added///////////////////////////////////////
        $.ajax(
       {
        url  : "https://api.covid19india.org/data.json",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){

        if (response!=null)
        {
            //console.log(response);

           var totalStats = response.statewise[0];
           var testLength = response.tested.length;
           var testStats = response.tested[testLength-1];
           var newlyTested = testStats.samplereportedtoday;
           var totalTested = testStats.totalsamplestested;
           var testpermillion = testStats.testspermillion;
           console.log(totalTested);
           console.log(newlyTested);
           console.log(testpermillion);
           document.getElementById("totalTestsDone").innerHTML=numberWithCommas(totalTested);
           document.getElementById("testDoneToday").innerHTML=numberWithCommas(newlyTested);
          // document.getElementById("testspermillion").innerHTML=numberWithCommas(testpermillion);
           document.getElementById("lastUpdated").innerHTML="Last Updated : "+testStats.updatetimestamp;
           document.getElementById("lastUpdatedLive1").innerHTML="Last Updated : "+testStats.updatetimestamp;
           document.getElementById("lastUpdatedLive2").innerHTML="Last Updated : "+testStats.updatetimestamp;
           document.getElementById("lastUpdatedLive3").innerHTML="Last Updated : "+testStats.updatetimestamp;


            var activeCases = totalStats.active;
           var confirmedCases = totalStats.confirmed;
           var recoveredCases = totalStats.recovered;
           var deaths = totalStats.deaths;
           var newConfirmed = totalStats.deltaconfirmed;
           var newDeaths = totalStats.deltadeaths;
           var newRecovered = totalStats.deltarecovered;

          document.getElementById("totalConfirmedCases").innerHTML=numberWithCommas(confirmedCases);

          document.getElementById("totalDeaths").innerHTML=numberWithCommas(deaths);


          var mortalityRate = ((deaths * 100) / confirmedCases).toFixed(2) ;

          document.getElementById("mortalityRate").innerHTML=mortalityRate + "%";

          var totalRecovered = recoveredCases;
          recoveryCountTill2Day=totalRecovered;
          document.getElementById("totalRecovered").innerHTML=numberWithCommas(totalRecovered);
          var recoveryRate = ((recoveredCases * 100) / confirmedCases).toFixed(2) ;
          document.getElementById("recoveryRate").innerHTML=recoveryRate+ "%";


          document.getElementById("activeCases").innerHTML=activeCases;

          document.getElementById("deathsToday").innerHTML="+"+newDeaths;

          document.getElementById("recoveredToday").innerHTML="+"+newRecovered;

          document.getElementById("confirmedToday").innerHTML="+"+newConfirmed;

          states = response.statewise;
          nationalSeries = response.cases_time_series;
         // console.log(nationalSeries);

           for (var i=0;i < states.length; i++)
        {
              if(states[i].state != "Total" && states[i].state != "Lakshadweep" && states[i].state != "State Unassigned")
              {
                      $tableId.append(
                      $("<tr>").append($("<td>").html(states[i].state))
                      .append($("<td>").html(states[i].confirmed))
                      .append($("<td>").html(states[i].deaths))
                      .append($("<td>").html(states[i].recovered))
                      .append($("<td>").html(states[i].active))
                      .append($("<td>").html(((states[i].deaths*100)/states[i].confirmed).toFixed(2)))
                     );
              }
         }


        $(document).ready(function () {
              $('#dtBasicExample').DataTable({
                  "order": [[ 1, "desc" ]],
                  "fnRowCallback": function(nRow, aData, iDisplayIndex, iDisplayIndexFull)
                            {

                                     $('td', nRow).css('background-color', 'Black').css('color','White');
                             },
                   'columnDefs': [
                                {
                              "targets": 1,
                              "className": 'dt-body-right',
                                    },
                                 {
                              "targets": 2,
                              "className": 'dt-body-right',
                                     },
                                     {
                              "targets": 3,
                              "className": 'dt-body-right',
                                    },
                                    {
                              "targets": 4,
                              "className": 'dt-body-right',
                                    },
                                    {
                              "targets": 5,
                              "className": 'dt-body-right',
                                    }


                                     ]

                   });
              $('.dataTables_length').addClass('bs-select');

            });
            showConfirmedOnMap();

            var dataConfirmed = [];
            var dataDeaths = [];
            var dataRecovered = [];
            var dataActive = [];
            for (var i =0 ; i<nationalSeries.length ; i++)
            {

                    var x = new Date(nationalSeries[i].date+ " 2020");
                    var y = nationalSeries[i].totalconfirmed;
                    var objA= {x,y}
                    dataConfirmed.push(objA);

                    var x = new Date(nationalSeries[i].date+ " 2020");
                    var y = nationalSeries[i].totaldeceased;
                    var objA= {x,y}
                    dataDeaths.push(objA);

                    var x = new Date(nationalSeries[i].date+ " 2020");
                    var y = nationalSeries[i].totalrecovered;
                    var objA= {x,y}
                    dataRecovered.push(objA);

                    var x = new Date(nationalSeries[i].date+ " 2020");
                    var y = nationalSeries[i].totalconfirmed - nationalSeries[i].totalrecovered - nationalSeries[i].totaldeceased;
                    var objA= {x,y}
                    dataActive.push(objA);



            }

            splineConfirmed();

             $.ajax(
                   {
                    url  : "https://api.covid19india.org/states_daily.json",
                    contentType: "application/json",
                    type : 'GET',
                    contentType: false,
                    cache: false,
                    processData: false,
                    success: function(response){
                       console.log(response);
                       statewise =response.states_daily;
                       growthConfirmed(statewise);
                       growthDeaths(statewise);
                       growthRecovered(statewise)

                    }});


           // console.log(dataConfirmed);



        }
        else
        {
            console.log("Error while fetching testing api..!!!");
        }




        }
       });


////////////////////////////////////////////////////////////////////



//Sorted
    $.ajax(
       {
        url  : "https://api.covid19india.org/state_test_data.json",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){

        if (response!=null)
        {
                   //console.log(response);
                   testHistory=response;

                    var stateName = 'Andaman and Nicobar Islands'
                    var data=[];
                    /*
                    if(stateName == 'Andaman and Nicobar Islands')
                    {*/
                   // var selectBox = document.getElementById("selectDays");
                 //   var days = selectBox.options[selectBox.selectedIndex].value;
                    /*
                    var startDay = 0
                    if(days!=0)
                    {
                       startDay= totalDailyCount.length- days;
                    }*/
                  //  for (var i=startDay; i<totalDailyCount.length ;i++)
                   for (var i=0; i<response.states_tested_data.length ;i++)
                    {
                     if(stateName == response.states_tested_data[i].state)
                     {
                        var dateParts = response.states_tested_data[i].updatedon.split("/");
                        var x = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
                        var y = parseInt(response.states_tested_data[i].totaltested);
                        var objA= {x,y}
                        data.push(objA);

                      }
                    }
                    //console.log(data);
                  //  }

                                var chart = new CanvasJS.Chart("chartContainer1", {
                                    animationEnabled: true,
                                    title:{
                                        text: "Testing by Date"
                                    },
                                    axisY: {
                                        title: "Count",
                                        valueFormatString: "#"

                                    },
                                    data: [{
                                        yValueFormatString: "#,### tests",
                                        xValueFormatString: "DD-MM",
                                        type: "spline",
                                        dataPoints: data
                                    }]
                                });
                                chart.render();

        }
        else
        {
            console.log("Error while fetching testing api..!!!");
        }

        }
       });







}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function showDeathsOnMap()
{
var deathsStatesData = [];
/*
var deathsStatesData = [
    ['madhya pradesh', regionalStats[18].deaths],
    ['uttar pradesh', regionalStats[33].deaths],
    ['karnataka', regionalStats[15].deaths],
    ['nagaland', regionalStats[23].deaths],
    ['bihar', regionalStats[4].deaths],
    ['lakshadweep', 0],
    ['andaman and nicobar', regionalStats[0].deaths],
    ['assam',regionalStats[3].deaths],
    ['west bengal', regionalStats[34].deaths],
    ['puducherry', regionalStats[25].deaths],
    ['daman and diu',  regionalStats[7].deaths],
    ['gujarat',  regionalStats[10].deaths],
    ['rajasthan',  regionalStats[27].deaths],
    ['dadara and nagar havelli',  regionalStats[7].deaths],
    ['chhattisgarh',  regionalStats[6].deaths],
    ['tamil nadu',  regionalStats[29].deaths],
    ['chandigarh',  regionalStats[5].deaths],
    ['punjab',  regionalStats[26].deaths],
    ['haryana',  regionalStats[11].deaths],
    ['andhra pradesh',  regionalStats[1].deaths],
    ['maharashtra', regionalStats[19].deaths],
    ['himachal pradesh', regionalStats[12].deaths],
    ['meghalaya',  regionalStats[21].deaths],
    ['kerala',  regionalStats[16].deaths],
    ['telangana',  regionalStats[30].deaths],
    ['mizoram',  regionalStats[22].deaths],
    ['tripura',  regionalStats[31].deaths],
    ['manipur',  regionalStats[20].deaths],
    ['arunanchal pradesh',  regionalStats[2].deaths],
    ['jharkhand',  regionalStats[14].deaths],
    ['goa',  regionalStats[9].deaths],
    ['nct of delhi', regionalStats[8].deaths],
    ['odisha',  regionalStats[24].deaths],
    ['jammu and kashmir',  regionalStats[13].deaths +  regionalStats[17].deaths],
    ['sikkim', regionalStats[28].deaths],
    ['uttarakhand', regionalStats[32].deaths]
];*/
for (var i = 0 ; i < states.length; i++)
 {
 if(states[i].state != "Total" && states[i].state != "State Unassigned")
              {
                   var arr = [];
                   var arr1 = [];
                   if (states[i].state == "Maharashtra")
                   {

                      arr.push('maharashtra');
                      arr.push(parseInt(states[i].deaths));

                   }
                   else if (states[i].state == "Uttar Pradesh")
                   {

                      arr.push('uttar pradesh');
                      arr.push(parseInt(states[i].deaths));

                   }
                   else if (states[i].state == "Madhya Pradesh")
                   {

                      arr.push('madhya pradesh');
                      arr.push(parseInt(states[i].deaths));


                   }
                   else if (states[i].state == "Delhi")
                   {

                       arr.push('nct of delhi');
                      arr.push(parseInt(states[i].deaths));

                   }
                    else if (states[i].state == "Gujarat")
                   {

                       arr.push('gujarat');
                      arr.push(parseInt(states[i].deaths));

                   }
                   else if (states[i].state == "Odisha")
                   {

                       arr.push('odisha');
                      arr.push(parseInt(states[i].deaths));

                   }
                   else if (states[i].state == "Karnataka")
                   {

                       arr.push('karnataka');
                      arr.push(parseInt(states[i].deaths));

                   }
                   else if (states[i].state == "Nagaland")
                   {

                      arr.push('nagaland');
                      arr.push(parseInt(states[i].deaths));

                   }else if (states[i].state == "Bihar")
                   {

                       arr.push('bihar');
                      arr.push(parseInt(states[i].deaths));


                   }
                   else if (states[i].state == "Andaman and Nicobar Islands")
                   {

                      arr.push('andaman and nicobar');
                      arr.push(parseInt(states[i].deaths));

                   }else if (states[i].state == "Assam")
                   {

                       arr.push('assam');
                      arr.push(parseInt(states[i].deaths));

                   }
                   else if (states[i].state == "Rajasthan")
                   {

                      arr.push('rajasthan');
                      arr.push(parseInt(states[i].deaths));
                   }
                   else if (states[i].state == "West Bengal")
                   {

                       arr.push('west bengal');
                      arr.push(parseInt(states[i].deaths));

                   }
                   else if (states[i].state == "Puducherry")
                   {

                        arr.push('puducherry');
                      arr.push(parseInt(states[i].deaths));

                   }
                   else if (states[i].state == "Haryana")
                   {

                       arr.push('haryana');
                      arr.push(parseInt(states[i].deaths));

                   }
                   else if (states[i].state == "Dadra and Nagar Haveli and Daman and Diu")
                   {


                        arr1.push('dadara and nagar havelli');
                      arr1.push(parseInt(states[i].deaths));
                       deathsStatesData.push(arr1);


                        arr.push('daman and diu');
                      arr.push(parseInt(states[i].deaths));


                   }
                   else if (states[i].state == "Chhattisgarh")
                   {

                          arr.push('chhattisgarh');
                      arr.push(parseInt(states[i].deaths));

                   }
                   else if (states[i].state == "Tamil Nadu")
                   {

                       arr.push('tamil nadu');
                      arr.push(parseInt(states[i].deaths));

                   }
                   else if (states[i].state == "Chandigarh")
                   {

                      arr.push('chandigarh');
                      arr.push(parseInt(states[i].deaths));
                   }
                   else if (states[i].state == "Punjab")
                   {

                        arr.push('punjab');
                      arr.push(parseInt(states[i].deaths));
                   }

                   else if (states[i].state == "Andhra Pradesh")
                   {

                        arr.push('andhra pradesh');
                      arr.push(parseInt(states[i].deaths));
                   }
                   else if (states[i].state == "Himachal Pradesh")
                   {

                       arr.push('himachal pradesh');
                      arr.push(parseInt(states[i].deaths));
                   }
                   else if (states[i].state == "Meghalaya")
                   {
                       arr.push('meghalaya');
                      arr.push(parseInt(states[i].deaths));

                   }
                   else if (states[i].state == "Kerala")
                   {
                      arr.push('kerala');
                      arr.push(parseInt(states[i].deaths));


                   }
                   else if (states[i].state == "Telangana")
                   {

                      arr.push('telangana');
                      arr.push(parseInt(states[i].deaths));
                   }
                    else if (states[i].state == "Mizoram")
                   {

                      arr.push('mizoram');
                      arr.push(parseInt(states[i].deaths));
                   }
                    else if (states[i].state == "Tripura")
                   {

                      arr.push('tripura');
                      arr.push(parseInt(states[i].deaths));
                   }
                    else if (states[i].state == "Manipur")
                   {

                      arr.push('manipur');
                      arr.push(parseInt(states[i].deaths));
                   }
                   else if (states[i].state == "Arunachal Pradesh")
                   {
                      arr.push('arunanchal pradesh');
                      arr.push(parseInt(states[i].deaths));
                   }
                   else if (states[i].state == "Jharkhand")
                   {

                       arr.push('jharkhand');
                      arr.push(parseInt(states[i].deaths));

                   }
                   else if (states[i].state == "Goa")
                   {

                       arr.push('goa');
                      arr.push((states[i].deaths));

                   }
                    else if (states[i].state == "Jammu and Kashmir")
                   {

                      arr.push('jammu and kashmir');
                      arr.push(parseInt(states[i].deaths));

                   }
                    else if (states[i].state == "Sikkim")
                   {

                      arr.push('sikkim');
                      arr.push(parseInt(states[i].deaths));

                   }
                    else if (states[i].state == "Uttarakhand")
                   {

                       arr.push('uttarakhand');
                      arr.push(parseInt(states[i].deaths));
                   }
                   else if (states[i].state == "Lakshadweep")
                   {

                       arr.push('lakshadweep');
                      arr.push(parseInt(states[i].deaths));
                   }


                   if (arr.length!=0)
                   {
                   deathsStatesData.push(arr);
                   }

              }
}
// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/in/custom/in-all-disputed'
    },

    title: {
        text: 'COVID-19 Outbreak in India'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/in/custom/in-all-disputed.js">India </a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: deathsStatesData,
        name: 'Deaths',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: false,
            format: '{point.name}'
        }
    }],

});

}

function showRecoveriesOnMap()
{
var recoveriesStatesData=[];
/*
var recoveriesStatesData = [
    ['madhya pradesh', regionalStats[18].discharged],
    ['uttar pradesh', regionalStats[33].discharged],
    ['karnataka', regionalStats[15].discharged],
    ['nagaland', regionalStats[23].discharged],
    ['bihar', regionalStats[4].discharged],
    ['lakshadweep', 0],
    ['andaman and nicobar', regionalStats[0].discharged],
    ['assam',regionalStats[3].discharged],
    ['west bengal', regionalStats[34].discharged],
    ['puducherry', regionalStats[25].discharged],
    ['daman and diu',  regionalStats[7].discharged],
    ['gujarat',  regionalStats[10].discharged],
    ['rajasthan',  regionalStats[27].discharged],
    ['dadara and nagar havelli',  regionalStats[7].discharged],
    ['chhattisgarh',  regionalStats[6].discharged],
    ['tamil nadu',  regionalStats[29].discharged],
    ['chandigarh',  regionalStats[5].discharged],
    ['punjab',  regionalStats[26].discharged],
    ['haryana',  regionalStats[11].discharged],
    ['andhra pradesh',  regionalStats[1].discharged],
    ['maharashtra', regionalStats[19].discharged],
    ['himachal pradesh', regionalStats[12].discharged],
    ['meghalaya',  regionalStats[21].discharged],
    ['kerala',  regionalStats[16].discharged],
    ['telangana',  regionalStats[30].discharged],
    ['mizoram',  regionalStats[22].discharged],
    ['tripura',  regionalStats[31].discharged],
    ['manipur',  regionalStats[20].discharged],
    ['arunanchal pradesh',  regionalStats[2].discharged],
    ['jharkhand',  regionalStats[14].discharged],
    ['goa',  regionalStats[9].discharged],
    ['nct of delhi', regionalStats[8].discharged],
    ['odisha',  regionalStats[24].discharged],
    ['jammu and kashmir',  regionalStats[13].discharged +  regionalStats[17].discharged],
    ['sikkim', regionalStats[28].discharged],
    ['uttarakhand', regionalStats[32].discharged]
];*/

for (var i = 0 ; i < states.length; i++)
 {
 if(states[i].state != "Total" && states[i].state != "State Unassigned")
              {
                   var arr = [];
                   var arr1 = [];
                   if (states[i].state == "Maharashtra")
                   {

                      arr.push('maharashtra');
                      arr.push(parseInt(states[i].recovered));

                   }
                   else if (states[i].state == "Uttar Pradesh")
                   {

                      arr.push('uttar pradesh');
                      arr.push(parseInt(states[i].recovered));

                   }
                   else if (states[i].state == "Madhya Pradesh")
                   {

                      arr.push('madhya pradesh');
                      arr.push(parseInt(states[i].recovered));


                   }
                   else if (states[i].state == "Delhi")
                   {

                       arr.push('nct of delhi');
                      arr.push(parseInt(states[i].recovered));

                   }
                    else if (states[i].state == "Gujarat")
                   {

                       arr.push('gujarat');
                      arr.push(parseInt(states[i].recovered));

                   }
                   else if (states[i].state == "Odisha")
                   {

                       arr.push('odisha');
                      arr.push(parseInt(states[i].recovered));

                   }
                   else if (states[i].state == "Karnataka")
                   {

                       arr.push('karnataka');
                      arr.push(parseInt(states[i].recovered));

                   }
                   else if (states[i].state == "Nagaland")
                   {

                      arr.push('nagaland');
                      arr.push(parseInt(states[i].recovered));

                   }else if (states[i].state == "Bihar")
                   {

                       arr.push('bihar');
                      arr.push(parseInt(states[i].recovered));


                   }
                   else if (states[i].state == "Andaman and Nicobar Islands")
                   {

                      arr.push('andaman and nicobar');
                      arr.push(parseInt(states[i].recovered));

                   }else if (states[i].state == "Assam")
                   {

                       arr.push('assam');
                      arr.push(parseInt(states[i].recovered));

                   }
                   else if (states[i].state == "Rajasthan")
                   {

                      arr.push('rajasthan');
                      arr.push(parseInt(states[i].recovered));
                   }
                   else if (states[i].state == "West Bengal")
                   {

                       arr.push('west bengal');
                      arr.push(parseInt(states[i].recovered));

                   }
                   else if (states[i].state == "Puducherry")
                   {

                        arr.push('puducherry');
                      arr.push(parseInt(states[i].recovered));

                   }
                   else if (states[i].state == "Haryana")
                   {

                       arr.push('haryana');
                      arr.push(parseInt(states[i].recovered));

                   }
                   else if (states[i].state == "Dadra and Nagar Haveli and Daman and Diu")
                   {


                        arr1.push('dadara and nagar havelli');
                      arr1.push(parseInt(states[i].recovered));
                       recoveriesStatesData.push(arr1);


                        arr.push('daman and diu');
                      arr.push(parseInt(states[i].recovered));


                   }
                   else if (states[i].state == "Chhattisgarh")
                   {

                          arr.push('chhattisgarh');
                      arr.push(parseInt(states[i].recovered));

                   }
                   else if (states[i].state == "Tamil Nadu")
                   {

                       arr.push('tamil nadu');
                      arr.push(parseInt(states[i].recovered));

                   }
                   else if (states[i].state == "Chandigarh")
                   {

                      arr.push('chandigarh');
                      arr.push(parseInt(states[i].recovered));
                   }
                   else if (states[i].state == "Punjab")
                   {

                        arr.push('punjab');
                      arr.push(parseInt(states[i].recovered));
                   }

                   else if (states[i].state == "Andhra Pradesh")
                   {

                        arr.push('andhra pradesh');
                      arr.push(parseInt(states[i].recovered));
                   }
                   else if (states[i].state == "Himachal Pradesh")
                   {

                       arr.push('himachal pradesh');
                      arr.push(parseInt(states[i].recovered));
                   }
                   else if (states[i].state == "Meghalaya")
                   {
                       arr.push('meghalaya');
                      arr.push(parseInt(states[i].recovered));

                   }
                   else if (states[i].state == "Kerala")
                   {
                      arr.push('kerala');
                      arr.push(parseInt(states[i].recovered));


                   }
                   else if (states[i].state == "Telangana")
                   {

                      arr.push('telangana');
                      arr.push(parseInt(states[i].recovered));
                   }
                    else if (states[i].state == "Mizoram")
                   {

                      arr.push('mizoram');
                      arr.push(parseInt(states[i].recovered));
                   }
                    else if (states[i].state == "Tripura")
                   {

                      arr.push('tripura');
                      arr.push(parseInt(states[i].recovered));
                   }
                    else if (states[i].state == "Manipur")
                   {

                      arr.push('manipur');
                      arr.push(parseInt(states[i].recovered));
                   }
                   else if (states[i].state == "Arunachal Pradesh")
                   {
                      arr.push('arunanchal pradesh');
                      arr.push(parseInt(states[i].recovered));
                   }
                   else if (states[i].state == "Jharkhand")
                   {

                       arr.push('jharkhand');
                      arr.push(parseInt(states[i].recovered));

                   }
                   else if (states[i].state == "Goa")
                   {

                       arr.push('goa');
                      arr.push((states[i].recovered));

                   }
                    else if (states[i].state == "Jammu and Kashmir")
                   {

                      arr.push('jammu and kashmir');
                      arr.push(parseInt(states[i].recovered));

                   }
                    else if (states[i].state == "Sikkim")
                   {

                      arr.push('sikkim');
                      arr.push(parseInt(states[i].recovered));

                   }
                    else if (states[i].state == "Uttarakhand")
                   {

                       arr.push('uttarakhand');
                      arr.push(parseInt(states[i].recovered));
                   }
                   else if (states[i].state == "Lakshadweep")
                   {

                       arr.push('lakshadweep');
                      arr.push(parseInt(states[i].recovered));
                   }


                   if (arr.length!=0)
                   {
                   recoveriesStatesData.push(arr);
                   }

              }
  }
// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/in/custom/in-all-disputed'
    },

    title: {
        text: 'COVID-19 Outbreak in India'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/in/custom/in-all-disputed.js">India </a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: recoveriesStatesData,
        name: 'Recoveries',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: false,
            format: '{point.name}'
        }
    }],

});

}

function showConfirmedOnMap()
{
var confirmedStatesData = [];
/*
var confirmedStatesData = [
    ['madhya pradesh', regionalStats[18].totalConfirmed],
    ['uttar pradesh', regionalStats[33].totalConfirmed],
    ['karnataka', regionalStats[15].totalConfirmed],
    ['nagaland', regionalStats[23].totalConfirmed],
    ['bihar', regionalStats[4].totalConfirmed],
    ['lakshadweep', 0],
    ['andaman and nicobar', regionalStats[0].totalConfirmed],
    ['assam',regionalStats[3].totalConfirmed],
    ['west bengal', regionalStats[34].totalConfirmed],
    ['puducherry', regionalStats[25].totalConfirmed],
    ['daman and diu',  regionalStats[7].totalConfirmed],
    ['gujarat',  regionalStats[10].totalConfirmed],
    ['rajasthan',  regionalStats[27].totalConfirmed],
    ['dadara and nagar havelli',  regionalStats[7].totalConfirmed],
    ['chhattisgarh',  regionalStats[6].totalConfirmed],
    ['tamil nadu',  regionalStats[29].totalConfirmed],
    ['chandigarh',  regionalStats[5].totalConfirmed],
    ['punjab',  regionalStats[26].totalConfirmed],
    ['haryana',  regionalStats[11].totalConfirmed],
    ['andhra pradesh',  regionalStats[1].totalConfirmed],
    ['maharashtra', regionalStats[19].totalConfirmed],
    ['himachal pradesh', regionalStats[12].totalConfirmed],
    ['meghalaya',  regionalStats[21].totalConfirmed],
    ['kerala',  regionalStats[16].totalConfirmed],
    ['telangana',  regionalStats[30].totalConfirmed],
    ['mizoram',  regionalStats[22].totalConfirmed],
    ['tripura',  regionalStats[31].totalConfirmed],
    ['manipur',  regionalStats[20].totalConfirmed],
    ['arunanchal pradesh',  regionalStats[2].totalConfirmed],
    ['jharkhand',  regionalStats[14].totalConfirmed],
    ['goa',  regionalStats[9].totalConfirmed],
    ['nct of delhi', regionalStats[8].totalConfirmed],
    ['odisha',  regionalStats[24].totalConfirmed],
    ['jammu and kashmir',  regionalStats[13].totalConfirmed +  regionalStats[17].totalConfirmed],
    ['sikkim', regionalStats[28].totalConfirmed],
    ['uttarakhand', regionalStats[32].totalConfirmed]
];*/
 for (var i = 0 ; i < states.length; i++)
 {

 if(states[i].state != "Total" && states[i].state != "State Unassigned")
              {
                   var arr = [];
                   var arr1 = [];
                   if (states[i].state == "Maharashtra")
                   {

                      arr.push('maharashtra');
                      arr.push(parseInt(states[i].confirmed));

                   }
                   else if (states[i].state == "Uttar Pradesh")
                   {

                      arr.push('uttar pradesh');
                      arr.push(parseInt(states[i].confirmed));

                   }
                   else if (states[i].state == "Madhya Pradesh")
                   {

                      arr.push('madhya pradesh');
                      arr.push(parseInt(states[i].confirmed));


                   }
                   else if (states[i].state == "Delhi")
                   {

                       arr.push('nct of delhi');
                      arr.push(parseInt(states[i].confirmed));

                   }
                    else if (states[i].state == "Gujarat")
                   {

                       arr.push('gujarat');
                      arr.push(parseInt(states[i].confirmed));

                   }
                   else if (states[i].state == "Odisha")
                   {

                       arr.push('odisha');
                      arr.push(parseInt(states[i].confirmed));

                   }
                   else if (states[i].state == "Karnataka")
                   {

                       arr.push('karnataka');
                      arr.push(parseInt(states[i].confirmed));

                   }
                   else if (states[i].state == "Nagaland")
                   {

                      arr.push('nagaland');
                      arr.push(parseInt(states[i].confirmed));

                   }else if (states[i].state == "Bihar")
                   {

                       arr.push('bihar');
                      arr.push(parseInt(states[i].confirmed));


                   }
                   else if (states[i].state == "Andaman and Nicobar Islands")
                   {

                      arr.push('andaman and nicobar');
                      arr.push(parseInt(states[i].confirmed));

                   }else if (states[i].state == "Assam")
                   {

                       arr.push('assam');
                      arr.push(parseInt(states[i].confirmed));

                   }
                   else if (states[i].state == "Rajasthan")
                   {

                      arr.push('rajasthan');
                      arr.push(parseInt(states[i].confirmed));
                   }
                   else if (states[i].state == "West Bengal")
                   {

                       arr.push('west bengal');
                      arr.push(parseInt(states[i].confirmed));

                   }
                   else if (states[i].state == "Puducherry")
                   {

                        arr.push('puducherry');
                      arr.push(parseInt(states[i].confirmed));

                   }
                   else if (states[i].state == "Haryana")
                   {

                       arr.push('haryana');
                      arr.push(parseInt(states[i].confirmed));

                   }
                   else if (states[i].state == "Dadra and Nagar Haveli and Daman and Diu")
                   {


                        arr1.push('dadara and nagar havelli');
                      arr1.push(parseInt(states[i].confirmed));
                       confirmedStatesData.push(arr1);


                        arr.push('daman and diu');
                      arr.push(parseInt(states[i].confirmed));


                   }
                   else if (states[i].state == "Chhattisgarh")
                   {

                          arr.push('chhattisgarh');
                      arr.push(parseInt(states[i].confirmed));

                   }
                   else if (states[i].state == "Tamil Nadu")
                   {

                       arr.push('tamil nadu');
                      arr.push(parseInt(states[i].confirmed));

                   }
                   else if (states[i].state == "Chandigarh")
                   {

                      arr.push('chandigarh');
                      arr.push(parseInt(states[i].confirmed));
                   }
                   else if (states[i].state == "Punjab")
                   {

                        arr.push('punjab');
                      arr.push(parseInt(states[i].confirmed));
                   }

                   else if (states[i].state == "Andhra Pradesh")
                   {

                        arr.push('andhra pradesh');
                      arr.push(parseInt(states[i].confirmed));
                   }
                   else if (states[i].state == "Himachal Pradesh")
                   {

                       arr.push('himachal pradesh');
                      arr.push(parseInt(states[i].confirmed));
                   }
                   else if (states[i].state == "Meghalaya")
                   {
                       arr.push('meghalaya');
                      arr.push(parseInt(states[i].confirmed));

                   }
                   else if (states[i].state == "Kerala")
                   {
                      arr.push('kerala');
                      arr.push(parseInt(states[i].confirmed));


                   }
                   else if (states[i].state == "Telangana")
                   {

                      arr.push('telangana');
                      arr.push(parseInt(states[i].confirmed));
                   }
                    else if (states[i].state == "Mizoram")
                   {

                      arr.push('mizoram');
                      arr.push(parseInt(states[i].confirmed));
                   }
                    else if (states[i].state == "Tripura")
                   {

                      arr.push('tripura');
                      arr.push(parseInt(states[i].confirmed));
                   }
                    else if (states[i].state == "Manipur")
                   {

                      arr.push('manipur');
                      arr.push(parseInt(states[i].confirmed));
                   }
                   else if (states[i].state == "Arunachal Pradesh")
                   {
                      arr.push('arunanchal pradesh');
                      arr.push(parseInt(states[i].confirmed));
                   }
                   else if (states[i].state == "Jharkhand")
                   {

                       arr.push('jharkhand');
                      arr.push(parseInt(states[i].confirmed));

                   }
                   else if (states[i].state == "Goa")
                   {

                       arr.push('goa');
                      arr.push((states[i].confirmed));

                   }
                    else if (states[i].state == "Jammu and Kashmir")
                   {

                      arr.push('jammu and kashmir');
                      arr.push(parseInt(states[i].confirmed));

                   }
                    else if (states[i].state == "Sikkim")
                   {

                      arr.push('sikkim');
                      arr.push(parseInt(states[i].confirmed));

                   }
                    else if (states[i].state == "Uttarakhand")
                   {

                       arr.push('uttarakhand');
                      arr.push(parseInt(states[i].confirmed));
                   }
                   else if (states[i].state == "Lakshadweep")
                   {

                       arr.push('lakshadweep');
                      arr.push(parseInt(states[i].confirmed));
                   }


                   if (arr.length!=0)
                   {
                   confirmedStatesData.push(arr);
                   }

              }

 }

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/in/custom/in-all-disputed'
    },

    title: {
        text: 'COVID-19 Outbreak in India'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/in/custom/in-all-disputed.js">India </a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: confirmedStatesData,
        name: 'Confirmed',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: false,
            format: '{point.name}'
        }
    }],

});

}

function showActiveOnMap()
{
var activeStatesData = [];
/*var activeStatesData = [
    ['madhya pradesh', regionalStats[18].totalConfirmed-regionalStats[18].discharged-regionalStats[18].deaths],
    ['uttar pradesh', regionalStats[33].totalConfirmed-regionalStats[33].discharged-regionalStats[33].deaths],
    ['karnataka', regionalStats[15].totalConfirmed-regionalStats[15].discharged-regionalStats[15].deaths],
    ['nagaland', regionalStats[23].totalConfirmed-regionalStats[23].discharged-regionalStats[23].deaths],
    ['bihar', regionalStats[4].totalConfirmed-regionalStats[4].discharged-regionalStats[4].deaths],
    ['lakshadweep', 0],
    ['andaman and nicobar', regionalStats[0].totalConfirmed-regionalStats[0].discharged-regionalStats[0].deaths],
    ['assam',regionalStats[3].totalConfirmed-regionalStats[3].discharged-regionalStats[3].deaths],
    ['west bengal', regionalStats[34].totalConfirmed-regionalStats[34].discharged-regionalStats[34].deaths],
    ['puducherry', regionalStats[25].totalConfirmed-regionalStats[25].discharged-regionalStats[25].deaths],
    ['daman and diu',  regionalStats[7].totalConfirmed-regionalStats[7].discharged-regionalStats[7].deaths],
    ['gujarat',  regionalStats[10].totalConfirmed-regionalStats[10].discharged-regionalStats[10].deaths],
    ['rajasthan',  regionalStats[27].totalConfirmed-regionalStats[27].discharged-regionalStats[27].deaths],
    ['dadara and nagar havelli',  regionalStats[7].totalConfirmed-regionalStats[7].discharged-regionalStats[7].deaths],
    ['chhattisgarh',  regionalStats[6].totalConfirmed-regionalStats[6].discharged-regionalStats[6].deaths],
    ['tamil nadu',  regionalStats[29].totalConfirmed-regionalStats[29].discharged-regionalStats[29].deaths],
    ['chandigarh',  regionalStats[5].totalConfirmed-regionalStats[5].discharged-regionalStats[5].deaths],
    ['punjab',  regionalStats[26].totalConfirmed-regionalStats[26].discharged-regionalStats[26].deaths],
    ['haryana',  regionalStats[11].totalConfirmed-regionalStats[11].discharged-regionalStats[11].deaths],
    ['andhra pradesh',  regionalStats[1].totalConfirmed-regionalStats[1].discharged-regionalStats[1].deaths],
    ['maharashtra', regionalStats[19].totalConfirmed-regionalStats[19].discharged-regionalStats[19].deaths],
    ['himachal pradesh', regionalStats[12].totalConfirmed-regionalStats[12].discharged-regionalStats[12].deaths],
    ['meghalaya',  regionalStats[21].totalConfirmed-regionalStats[21].discharged-regionalStats[21].deaths],
    ['kerala',  regionalStats[16].totalConfirmed-regionalStats[16].discharged-regionalStats[16].deaths],
    ['telangana',  regionalStats[30].totalConfirmed-regionalStats[30].discharged-regionalStats[30].deaths],
    ['mizoram',  regionalStats[22].totalConfirmed-regionalStats[22].discharged-regionalStats[22].deaths],
    ['tripura',  regionalStats[31].totalConfirmed-regionalStats[31].discharged-regionalStats[31].deaths],
    ['manipur',  regionalStats[20].totalConfirmed-regionalStats[20].discharged-regionalStats[20].deaths],
    ['arunanchal pradesh',  regionalStats[2].totalConfirmed-regionalStats[2].discharged-regionalStats[2].deaths],
    ['jharkhand',  regionalStats[14].totalConfirmed-regionalStats[14].discharged-regionalStats[14].deaths],
    ['goa',  regionalStats[9].totalConfirmed-regionalStats[9].discharged-regionalStats[9].deaths],
    ['nct of delhi', regionalStats[8].totalConfirmed-regionalStats[8].discharged-regionalStats[8].deaths],
    ['odisha',  regionalStats[24].totalConfirmed-regionalStats[24].discharged-regionalStats[24].deaths],
    ['jammu and kashmir',  (regionalStats[13].totalConfirmed +  regionalStats[13].totalConfirmed)-(regionalStats[13].discharged +  regionalStats[13].discharged)-(regionalStats[13].deaths +  regionalStats[13].deaths)],
    ['sikkim', regionalStats[28].totalConfirmed-regionalStats[28].discharged-regionalStats[28].deaths],
    ['uttarakhand', regionalStats[32].totalConfirmed-regionalStats[32].discharged-regionalStats[32].deaths]
];*/
    for (var i = 0 ; i < states.length; i++)
 {

 if(states[i].state != "Total" && states[i].state != "State Unassigned")
              {
                   var arr = [];
                   var arr1 = [];
                   if (states[i].state == "Maharashtra")
                   {

                      arr.push('maharashtra');
                      arr.push(parseInt(states[i].active));

                   }
                   else if (states[i].state == "Uttar Pradesh")
                   {

                      arr.push('uttar pradesh');
                      arr.push(parseInt(states[i].active));

                   }
                   else if (states[i].state == "Madhya Pradesh")
                   {

                      arr.push('madhya pradesh');
                      arr.push(parseInt(states[i].active));


                   }
                   else if (states[i].state == "Delhi")
                   {

                       arr.push('nct of delhi');
                      arr.push(parseInt(states[i].active));

                   }
                    else if (states[i].state == "Gujarat")
                   {

                       arr.push('gujarat');
                      arr.push(parseInt(states[i].active));

                   }
                   else if (states[i].state == "Odisha")
                   {

                       arr.push('odisha');
                      arr.push(parseInt(states[i].active));

                   }
                   else if (states[i].state == "Karnataka")
                   {

                       arr.push('karnataka');
                      arr.push(parseInt(states[i].active));

                   }
                   else if (states[i].state == "Nagaland")
                   {

                      arr.push('nagaland');
                      arr.push(parseInt(states[i].active));

                   }else if (states[i].state == "Bihar")
                   {

                       arr.push('bihar');
                      arr.push(parseInt(states[i].active));


                   }
                   else if (states[i].state == "Andaman and Nicobar Islands")
                   {

                      arr.push('andaman and nicobar');
                      arr.push(parseInt(states[i].active));

                   }else if (states[i].state == "Assam")
                   {

                       arr.push('assam');
                      arr.push(parseInt(states[i].active));

                   }
                   else if (states[i].state == "Rajasthan")
                   {

                      arr.push('rajasthan');
                      arr.push(parseInt(states[i].active));
                   }
                   else if (states[i].state == "West Bengal")
                   {

                       arr.push('west bengal');
                      arr.push(parseInt(states[i].active));

                   }
                   else if (states[i].state == "Puducherry")
                   {

                        arr.push('puducherry');
                      arr.push(parseInt(states[i].active));

                   }
                   else if (states[i].state == "Haryana")
                   {

                       arr.push('haryana');
                      arr.push(parseInt(states[i].active));

                   }
                   else if (states[i].state == "Dadra and Nagar Haveli and Daman and Diu")
                   {


                        arr1.push('dadara and nagar havelli');
                      arr1.push(parseInt(states[i].active));
                       activeStatesData.push(arr1);


                        arr.push('daman and diu');
                      arr.push(parseInt(states[i].active));


                   }
                   else if (states[i].state == "Chhattisgarh")
                   {

                          arr.push('chhattisgarh');
                      arr.push(parseInt(states[i].active));

                   }
                   else if (states[i].state == "Tamil Nadu")
                   {

                       arr.push('tamil nadu');
                      arr.push(parseInt(states[i].active));

                   }
                   else if (states[i].state == "Chandigarh")
                   {

                      arr.push('chandigarh');
                      arr.push(parseInt(states[i].active));
                   }
                   else if (states[i].state == "Punjab")
                   {

                        arr.push('punjab');
                      arr.push(parseInt(states[i].active));
                   }

                   else if (states[i].state == "Andhra Pradesh")
                   {

                        arr.push('andhra pradesh');
                      arr.push(parseInt(states[i].active));
                   }
                   else if (states[i].state == "Himachal Pradesh")
                   {

                       arr.push('himachal pradesh');
                      arr.push(parseInt(states[i].active));
                   }
                   else if (states[i].state == "Meghalaya")
                   {
                       arr.push('meghalaya');
                      arr.push(parseInt(states[i].active));

                   }
                   else if (states[i].state == "Kerala")
                   {
                      arr.push('kerala');
                      arr.push(parseInt(states[i].active));


                   }
                   else if (states[i].state == "Telangana")
                   {

                      arr.push('telangana');
                      arr.push(parseInt(states[i].active));
                   }
                    else if (states[i].state == "Mizoram")
                   {

                      arr.push('mizoram');
                      arr.push(parseInt(states[i].active));
                   }
                    else if (states[i].state == "Tripura")
                   {

                      arr.push('tripura');
                      arr.push(parseInt(states[i].active));
                   }
                    else if (states[i].state == "Manipur")
                   {

                      arr.push('manipur');
                      arr.push(parseInt(states[i].active));
                   }
                   else if (states[i].state == "Arunachal Pradesh")
                   {
                      arr.push('arunanchal pradesh');
                      arr.push(parseInt(states[i].active));
                   }
                   else if (states[i].state == "Jharkhand")
                   {

                       arr.push('jharkhand');
                      arr.push(parseInt(states[i].active));

                   }
                   else if (states[i].state == "Goa")
                   {

                       arr.push('goa');
                      arr.push((states[i].active));

                   }
                    else if (states[i].state == "Jammu and Kashmir")
                   {

                      arr.push('jammu and kashmir');
                      arr.push(parseInt(states[i].active));

                   }
                    else if (states[i].state == "Sikkim")
                   {

                      arr.push('sikkim');
                      arr.push(parseInt(states[i].active));

                   }
                    else if (states[i].state == "Uttarakhand")
                   {

                       arr.push('uttarakhand');
                      arr.push(parseInt(states[i].active));
                   }
                   else if (states[i].state == "Lakshadweep")
                   {

                       arr.push('lakshadweep');
                      arr.push(parseInt(states[i].active));
                   }


                   if (arr.length!=0)
                   {
                   activeStatesData.push(arr);
                   }

              }

 }


console.log(activeStatesData);
// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/in/custom/in-all-disputed'
    },

    title: {
        text: 'COVID-19 Outbreak in India'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/in/custom/in-all-disputed.js">India </a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: activeStatesData,
        name: 'Active',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: false,
            format: '{point.name}'
        }
    }],

});

}

function splineConfirmed()
{
var selectState = document.getElementById("selectState");
var  stateName = selectState.options[selectState.selectedIndex].value;
var selectType = document.getElementById("selectType");
var  graphType = selectType.options[selectType.selectedIndex].value;
var data=[];


if (graphType == 'Linear')
{
if(stateName == 'All States')
{
var selectBox = document.getElementById("selectDays");
var days = selectBox.options[selectBox.selectedIndex].value;

var startDay = 0
/*
if(days!=0)
{
   startDay= totalDailyCount.length- days;
}
for (var i=startDay; i<totalDailyCount.length ;i++)
{
var x = new Date(totalDailyCount[i].day);
var y = totalDailyCount[i].summary.total;
var objA= {x,y}
data.push(objA);
}*/
if(days!=0)
{
   startDay= nationalSeries.length- days;
}
for (var i =startDay ; i<nationalSeries.length ; i++)
            {

                    var x = new Date(formatDate(nationalSeries[i].date+ " 2020"));
                    var y = parseInt(nationalSeries[i].totalconfirmed);
                    var objA= {x,y}
                    data.push(objA);

            }

}

else
   {

        var stateCode = getCodeName(stateName);
        var type = 'Confirmed';
        var timeSeriesState = getTimeSeries(stateCode,type);
        var selectBox = document.getElementById("selectDays");
        var days = selectBox.options[selectBox.selectedIndex].value;
        //console.log(timeSeriesState);
        var startDay = 0/*
        if(days!=0)
        {
           startDay= totalDailyCount.length- days;
        }
            for (var i=startDay; i<totalDailyCount.length ;i++)
            {
               var day= totalDailyCount[i].day;
               for (var j=0;j<totalDailyCount[i].regional.length;j++ )
               {
                  if(stateName==totalDailyCount[i].regional[j].loc)
                  {
                  var x = new Date(day);
                   var y = totalDailyCount[i].regional[j].totalConfirmed;
                   var objA= {x,y}
                   data.push(objA);
                  }

                }
            }*/


            if(days!=0)
        {
           startDay= timeSeriesState.length- days;
        }
            for (var i=startDay; i<timeSeriesState.length ;i++)
            {

                   var x = new Date(timeSeriesState[i][0]);
                   var y = parseInt(timeSeriesState[i][1]);
                   var objA= {x,y}
                   data.push(objA);

            }

   }

   //console.log(data);

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Confirmed Cases By Date"
	},
	axisY: {
		title: "Count",
		valueFormatString: "#"
		/*
		stripLines: [{
			value: 3366500,
			label: "Average"
		}]*/
	},
	data: [{
		yValueFormatString: "#,### Cases",
		xValueFormatString: "DD-MM",
		type: "spline",
		dataPoints: data
	}]
});
chart.render();
}
else
{

var selectState = document.getElementById("selectState");
var  stateName = selectState.options[selectState.selectedIndex].value;
var dataDates=[];
var dataCount=[];
if(stateName == 'All States')
{
var selectBox = document.getElementById("selectDays");
var days = selectBox.options[selectBox.selectedIndex].value;

var startDay = 0
/*
if(days!=0)
{
   startDay= totalDailyCount.length- days;
}
for (var i=startDay; i<totalDailyCount.length ;i++)
{
var x = new Date(totalDailyCount[i].day);
var y = totalDailyCount[i].summary.total;
dataDates.push(x);
dataCount.push(y);
}*/
if(days!=0)
{
   startDay= nationalSeries.length- days;
}
for (var i =startDay ; i<nationalSeries.length ; i++)
            {

                    var x = new Date(formatDate(nationalSeries[i].date+ " 2020"));
                    var y = parseInt(nationalSeries[i].totalconfirmed);

                    dataCount.push(y);
                    dataDates.push(x);

            }


}

else
   {

        var selectBox = document.getElementById("selectDays");
        var days = selectBox.options[selectBox.selectedIndex].value;

        var startDay = 0
        /*
        if(days!=0)
        {
           startDay= totalDailyCount.length- days;
        }
            for (var i=startDay; i<totalDailyCount.length ;i++)
            {
               var day= totalDailyCount[i].day;
               for (var j=0;j<totalDailyCount[i].regional.length;j++ )
               {
                  if(stateName==totalDailyCount[i].regional[j].loc)
                  {
                  var x = new Date(day);
                   var y = totalDailyCount[i].regional[j].totalConfirmed;
                   dataDates.push(x);
                   dataCount.push(y);
                  }

                }
            }*/


          var stateCode = getCodeName(stateName);
        var type = 'Confirmed';
        var timeSeriesState = getTimeSeries(stateCode,type);

          if(days!=0)
        {
           startDay= timeSeriesState.length- days;
        }
            for (var i=startDay; i<timeSeriesState.length ;i++)
            {

                   var x = new Date(timeSeriesState[i][0]);
                   var y = parseInt(timeSeriesState[i][1]);
                   dataDates.push(x);
                   dataCount.push(y);

            }



   }

   console.log(dataDates);
   console.log(dataCount);

Highcharts.chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Confirmed Cases By Date"
	},

   xAxis: {
        categories: dataDates
    },

    yAxis: {
        type: 'logarithmic',
        minorTickInterval: 'auto'
    },

    series: [{
        data: dataCount
    }]


});





}




}


function splineDeaths()
{

var selectState = document.getElementById("selectState");
var  stateName = selectState.options[selectState.selectedIndex].value;
var data=[];
var selectType = document.getElementById("selectType");
var  graphType = selectType.options[selectType.selectedIndex].value;
if (graphType == 'Linear')
{
if(stateName == 'All States')
{
 var selectBox = document.getElementById("selectDays");
        var days = selectBox.options[selectBox.selectedIndex].value;
var startDay = 0/*
if(days!=0)
{
   startDay= totalDailyCount.length- days;
}
for (var i=startDay; i<totalDailyCount.length ;i++)
{
var x = new Date(totalDailyCount[i].day);
var y = totalDailyCount[i].summary.deaths;
var objA= {x,y}
data.push(objA);
}*/

if(days!=0)
{
   startDay= nationalSeries.length- days;
}
for (var i =startDay ; i<nationalSeries.length ; i++)
            {

                    var x = new Date(formatDate(nationalSeries[i].date+ " 2020"));
                    var y = parseInt(nationalSeries[i].totaldeceased);
                    var objA= {x,y}
                    data.push(objA);

            }
}
else
{
  var stateCode = getCodeName(stateName);
        var type = 'Deceased';
        var timeSeriesState = getTimeSeries(stateCode,type);
 var selectBox = document.getElementById("selectDays");
        var days = selectBox.options[selectBox.selectedIndex].value;

        var startDay = 0
        /*
        if(days!=0)
        {
           startDay= totalDailyCount.length- days;
        }
            for (var i=startDay; i<totalDailyCount.length ;i++)
            {
               var day= totalDailyCount[i].day;
               for (var j=0;j<totalDailyCount[i].regional.length;j++ )
               {
                  if(stateName==totalDailyCount[i].regional[j].loc)
                  {
                  var x = new Date(day);
                   var y = totalDailyCount[i].regional[j].deaths;
                   var objA= {x,y}
                   data.push(objA);
                  }

                }
            }*/



            if(days!=0)
        {
           startDay= timeSeriesState.length- days;
        }
            for (var i=startDay; i<timeSeriesState.length ;i++)
            {

                   var x = new Date(timeSeriesState[i][0]);
                   var y = parseInt(timeSeriesState[i][1]);
                   var objA= {x,y}
                   data.push(objA);

            }
}

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Deaths By Date"
	},
	axisY: {
		title: "Count",
		valueFormatString: "#"
		/*
		stripLines: [{
			value: 3366500,
			label: "Average"
		}]*/
	},
	data: [{
		yValueFormatString: "#,### Deaths",
		xValueFormatString: "DD-MM",
		type: "spline",
		dataPoints: data
	}]
});
chart.render();
}
else
{

var selectState = document.getElementById("selectState");
var  stateName = selectState.options[selectState.selectedIndex].value;
var dataDates=[];
var dataCount=[];
if(stateName == 'All States')
{
var selectBox = document.getElementById("selectDays");
var days = selectBox.options[selectBox.selectedIndex].value;

var startDay = 0/*
if(days!=0)
{
   startDay= totalDailyCount.length- days;
}
for (var i=startDay; i<totalDailyCount.length ;i++)
{
var x = new Date(totalDailyCount[i].day);
var y = totalDailyCount[i].summary.deaths;
dataDates.push(x);
dataCount.push(y);
}*/
if(days!=0)
{
   startDay= nationalSeries.length- days;
}
for (var i =startDay ; i<nationalSeries.length ; i++)
            {

                    var x = new Date(formatDate(nationalSeries[i].date+ " 2020"));
                    var y = parseInt(nationalSeries[i].totaldeceased);

                    dataCount.push(y);
                    dataDates.push(x);

            }



}

else
   {

        var selectBox = document.getElementById("selectDays");
        var days = selectBox.options[selectBox.selectedIndex].value;

        var startDay = 0
        /*
        if(days!=0)
        {
           startDay= totalDailyCount.length- days;
        }
            for (var i=startDay; i<totalDailyCount.length ;i++)
            {
               var day= totalDailyCount[i].day;
               for (var j=0;j<totalDailyCount[i].regional.length;j++ )
               {
                  if(stateName==totalDailyCount[i].regional[j].loc)
                  {
                  var x = new Date(day);
                   var y = totalDailyCount[i].regional[j].deaths;
                   dataDates.push(x);
                   dataCount.push(y);
                  }

                }
            }*/

             var stateCode = getCodeName(stateName);
        var type = 'Deceased';
        var timeSeriesState = getTimeSeries(stateCode,type);

          if(days!=0)
        {
           startDay= timeSeriesState.length- days;
        }
            for (var i=startDay; i<timeSeriesState.length ;i++)
            {

                   var x = new Date(timeSeriesState[i][0]);
                   var y = parseInt(timeSeriesState[i][1]);
                   dataDates.push(x);
                   dataCount.push(y);

            }

   }

Highcharts.chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Deaths By Date"
	},

   xAxis: {
        categories: dataDates
    },

    yAxis: {
        type: 'logarithmic',
        minorTickInterval: 'auto'
    },

    series: [{
        data: dataCount
    }]


});







}


}

function splineRecovered()
{


var selectState = document.getElementById("selectState");
var  stateName = selectState.options[selectState.selectedIndex].value;
var data=[];
var selectType = document.getElementById("selectType");
var  graphType = selectType.options[selectType.selectedIndex].value;
if (graphType == 'Linear')
{
if(stateName == 'All States')
{
        var selectBox = document.getElementById("selectDays");
        var days = selectBox.options[selectBox.selectedIndex].value;
       var startDay = 0;/*
     if(days!=0)
    {
   startDay= totalDailyCount.length- days;
     }
for (var i=startDay; i<totalDailyCount.length ;i++)
{
var x = new Date(totalDailyCount[i].day);

var y = totalDailyCount[i].summary.discharged;
var objA= {x,y}
data.push(objA);*/
if(days!=0)
{
   startDay= nationalSeries.length- days;
}
for (var i =startDay ; i<nationalSeries.length ; i++)
            {

                    var x = new Date(formatDate(nationalSeries[i].date+ " 2020"));
                    var y = parseInt(nationalSeries[i].totalrecovered);
                    var objA= {x,y}
                    data.push(objA);

            }
}

else
{
         var stateCode = getCodeName(stateName);
        var type = 'Recovered';
        var timeSeriesState = getTimeSeries(stateCode,type);
        var selectBox = document.getElementById("selectDays");
        var days = selectBox.options[selectBox.selectedIndex].value;

        var startDay = 0
        /*
        if(days!=0)
        {
           startDay= totalDailyCount.length- days;
        }
            for (var i=startDay; i<totalDailyCount.length ;i++)
            {
               var day= totalDailyCount[i].day;
               for (var j=0;j<totalDailyCount[i].regional.length;j++ )
               {
                  if(stateName==totalDailyCount[i].regional[j].loc)
                  {
                  var x = new Date(day);
                   var y = totalDailyCount[i].regional[j].discharged;
                   var objA= {x,y}
                   data.push(objA);
                  }

                }
            }*/


            if(days!=0)
        {
           startDay= timeSeriesState.length- days;
        }
            for (var i=startDay; i<timeSeriesState.length ;i++)
            {

                   var x = new Date(timeSeriesState[i][0]);
                   var y = parseInt(timeSeriesState[i][1]);
                   var objA= {x,y}
                   data.push(objA);

            }

}

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Recoveries Cases By Date"
	},
	axisY: {
		title: "Count",
		valueFormatString: "#"
		/*
		stripLines: [{
			value: 3366500,
			label: "Average"
		}]*/
	},
	data: [{
		yValueFormatString: "#,### Recovered",
		xValueFormatString: "DD-MM",
		type: "spline",
		dataPoints: data
	}]
});
chart.render();
}

else
{

var selectState = document.getElementById("selectState");
var  stateName = selectState.options[selectState.selectedIndex].value;
var dataDates=[];
var dataCount=[];
if(stateName == 'All States')
{
var selectBox = document.getElementById("selectDays");
var days = selectBox.options[selectBox.selectedIndex].value;

var startDay = 0/*
if(days!=0)
{
   startDay= totalDailyCount.length- days;
}
for (var i=startDay; i<totalDailyCount.length ;i++)
{
var x = new Date(totalDailyCount[i].day);
var y = totalDailyCount[i].summary.discharged;
dataDates.push(x);
dataCount.push(y);
}*/
if(days!=0)
{
   startDay= nationalSeries.length- days;
}
for (var i =startDay ; i<nationalSeries.length ; i++)
            {

                    var x = new Date(formatDate(nationalSeries[i].date+ " 2020"));
                    var y = parseInt(nationalSeries[i].totalrecovered);

                    dataCount.push(y);
                    dataDates.push(x);

            }

}

else
   {

        var selectBox = document.getElementById("selectDays");
        var days = selectBox.options[selectBox.selectedIndex].value;

        var startDay = 0
        /*
        if(days!=0)
        {
           startDay= totalDailyCount.length- days;
        }
            for (var i=startDay; i<totalDailyCount.length ;i++)
            {
               var day= totalDailyCount[i].day;
               for (var j=0;j<totalDailyCount[i].regional.length;j++ )
               {
                  if(stateName==totalDailyCount[i].regional[j].loc)
                  {
                  var x = new Date(day);
                   var y = totalDailyCount[i].regional[j].discharged;
                   dataDates.push(x);
                   dataCount.push(y);
                  }

                }
            }*/

             var stateCode = getCodeName(stateName);
        var type = 'Recovered';
        var timeSeriesState = getTimeSeries(stateCode,type);

          if(days!=0)
        {
           startDay= timeSeriesState.length- days;
        }
            for (var i=startDay; i<timeSeriesState.length ;i++)
            {

                   var x = new Date(timeSeriesState[i][0]);
                   var y = parseInt(timeSeriesState[i][1]);
                   dataDates.push(x);
                   dataCount.push(y);

            }

   }

Highcharts.chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Recovery Cases By Date"
	},

   xAxis: {
        categories: dataDates
    },

    yAxis: {
        type: 'logarithmic',
        minorTickInterval: 'auto'
    },

    series: [{
        data: dataCount
    }]


});

}

}
function splineActive()
{


var selectState = document.getElementById("selectState");
var  stateName = selectState.options[selectState.selectedIndex].value;
var selectType = document.getElementById("selectType");
var  graphType = selectType.options[selectType.selectedIndex].value;
var data=[];
if (graphType == 'Linear')
{
if(stateName == 'All States')
{
 var selectBox = document.getElementById("selectDays");
        var days = selectBox.options[selectBox.selectedIndex].value;
var startDay = 0; /*
if(days!=0)
{
   startDay= totalDailyCount.length- days;
}
for (var i=startDay; i<totalDailyCount.length ;i++)
{
var x = new Date(totalDailyCount[i].day);

var y = totalDailyCount[i].summary.total - totalDailyCount[i].summary.discharged -totalDailyCount[i].summary.deaths;
var objA= {x,y}
data.push(objA);
}*/

if(days!=0)
{
   startDay= nationalSeries.length- days;
}
for (var i =startDay ; i<nationalSeries.length ; i++)
            {

                    var x = new Date(formatDate(nationalSeries[i].date+ " 2020"));
                    var y = parseInt(nationalSeries[i].totalconfirmed)- parseInt(nationalSeries[i].totaldeceased)- parseInt(nationalSeries[i].totalrecovered);
                    var objA= {x,y}
                    data.push(objA);

            }
}
else {
        var stateCode = getCodeName(stateName);
        var type = 'Active';
        var timeSeriesState = getTimeSeries(stateCode,type);
   var selectBox = document.getElementById("selectDays");
        var days = selectBox.options[selectBox.selectedIndex].value;

        var startDay = 0
        /*
        if(days!=0)
        {
           startDay= totalDailyCount.length- days;
        }
            for (var i=startDay; i<totalDailyCount.length ;i++)
            {
               var day= totalDailyCount[i].day;
               for (var j=0;j<totalDailyCount[i].regional.length;j++ )
               {
                  if(stateName==totalDailyCount[i].regional[j].loc)
                  {
                  var x = new Date(day);
                   var y = totalDailyCount[i].regional[j].totalConfirmed - totalDailyCount[i].regional[j].discharged - totalDailyCount[i].regional[j].deaths;
                   var objA= {x,y}
                   data.push(objA);
                  }

                }
            }*/

            if(days!=0)
        {
           startDay= timeSeriesState.length- days;
        }
            for (var i=startDay; i<timeSeriesState.length ;i++)
            {

                   var x = new Date(timeSeriesState[i][0]);
                   var y = parseInt(timeSeriesState[i][1]);
                   var objA= {x,y}
                   data.push(objA);

            }


}


var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Active Cases By Date"
	},
	axisY: {
		title: "Count",
		valueFormatString: "#"
		/*
		stripLines: [{
			value: 3366500,
			label: "Average"
		}]*/
	},
	data: [{
		yValueFormatString: "#,### Active",
		xValueFormatString: "DD-MM",
		type: "spline",
		dataPoints: data
	}]
});
chart.render();

}
else
{

var selectState = document.getElementById("selectState");
var  stateName = selectState.options[selectState.selectedIndex].value;

var dataDates=[];
var dataCount=[];
if(stateName == 'All States')
{
var selectBox = document.getElementById("selectDays");
var days = selectBox.options[selectBox.selectedIndex].value;

var startDay = 0/*
        if(days!=0)
        {
           startDay= totalDailyCount.length- days;
        }
        for (var i=startDay; i<totalDailyCount.length ;i++)
        {
        var x = new Date(totalDailyCount[i].day);
        var y = totalDailyCount[i].summary.total - totalDailyCount[i].summary.discharged -totalDailyCount[i].summary.deaths;
        dataDates.push(x);
        dataCount.push(y);
        }
        */
        if(days!=0)
{
   startDay= nationalSeries.length- days;
}
for (var i =startDay ; i<nationalSeries.length ; i++)
            {

                    var x = new Date(formatDate(nationalSeries[i].date+ " 2020"));
                    var y = parseInt(nationalSeries[i].totalconfirmed)- parseInt(nationalSeries[i].totaldeceased)-parseInt(nationalSeries[i].totalrecovered);

                    dataCount.push(y);
                    dataDates.push(x);

            }

        }

   else
   {

        var selectBox = document.getElementById("selectDays");
        var days = selectBox.options[selectBox.selectedIndex].value;

         var selectState = document.getElementById("selectState");
         var  stateName = selectState.options[selectState.selectedIndex].value;
        var dataDates=[];
          var dataCount=[];

        var startDay = 0
        /*
        if(days!=0)
        {
           startDay= totalDailyCount.length- days;
        }
            for (var i=startDay; i<totalDailyCount.length ;i++)
            {
               var day= totalDailyCount[i].day;
               for (var j=0;j<totalDailyCount[i].regional.length;j++ )
               {
                  if(stateName==totalDailyCount[i].regional[j].loc)
                  {
                  var x = new Date(day);
                  var y = totalDailyCount[i].regional[j].totalConfirmed - totalDailyCount[i].regional[j].discharged - totalDailyCount[i].regional[j].deaths;

                   dataDates.push(x);
                   dataCount.push(y);
                  }

                }
            }*/

            var stateCode = getCodeName(stateName);
        var type = 'Active';
        var timeSeriesState = getTimeSeries(stateCode,type);

          if(days!=0)
        {
           startDay= timeSeriesState.length- days;
        }
            for (var i=startDay; i<timeSeriesState.length ;i++)
            {

                   var x = new Date(timeSeriesState[i][0]);
                   var y = parseInt(timeSeriesState[i][1]);
                   dataDates.push(x);
                   dataCount.push(y);

            }

}

Highcharts.chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Active Cases By Date"
	},

   xAxis: {
        categories: dataDates
    },

    yAxis: {
        type: 'logarithmic',
        minorTickInterval: 'auto'
    },

    series: [{
        data: dataCount
    }]


});

}




}




function selectStateTesting()
  {


                      var stateName = "";
                      var selectBox = document.getElementById("selectStateTest");
                      stateName = selectBox.options[selectBox.selectedIndex].value;
                    var data=[];


                   for (var i=0; i<testHistory.states_tested_data.length ;i++)
                    {
                     if(stateName == testHistory.states_tested_data[i].state)
                     {
                        var dateParts = testHistory.states_tested_data[i].updatedon.split("/");
                        var x = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
                        var y = parseInt(testHistory.states_tested_data[i].totaltested);
                        var objA= {x,y}
                        data.push(objA);

                      }
                    }


                                var chart = new CanvasJS.Chart("chartContainer1", {
                                    animationEnabled: true,
                                    title:{
                                        text: "Testing by Date"
                                    },
                                    axisY: {
                                        title: "Count",
                                        valueFormatString: "#"

                                    },
                                    data: [{
                                        yValueFormatString: "#,### tests",
                                        xValueFormatString: "DD-MM",
                                        type: "spline",
                                        dataPoints: data
                                    }]
                                });
                                chart.render();

}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
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

function  getCodeName(stateName)
{
var statecode = '';
if (stateName == 'Andaman and Nicobar Islands')
{
   statecode = 'an'
}
else if (stateName == 'Andhra Pradesh')
{
 statecode = 'ap'

}
else if (stateName == 'Arunachal Pradesh')
{
 statecode = 'ar'

}
else if (stateName == 'Assam')
{
 statecode = 'as'

}
else if (stateName == 'Bihar')
{
 statecode = 'br'

}else if (stateName == 'Chandigarh')
{
 statecode = 'ch'

}
else if (stateName == 'Chattisgarh')
{
 statecode = 'ct'

}

else if (stateName == 'Delhi')
{
 statecode = 'dl'

}
else if (stateName == 'Dadra and Nagar Haveli and Daman and Diu')
{
 statecode = 'dn'

}
else if (stateName == 'Goa')
{
 statecode = 'ga'

}
else if (stateName == 'Gujarat')
{
 statecode = 'gj'

}
else if (stateName == 'Himachal Pradesh')
{
 statecode = 'hp'

}
else if (stateName == 'Haryana')
{
 statecode = 'hr'

}
else if (stateName == 'Jharkhand')
{
 statecode = 'jh'

}
else if (stateName == 'Jammu and Kashmir')
{
 statecode = 'jk'

}
else if (stateName == 'Karnataka')
{
 statecode = 'ka'

}
else if (stateName == 'Kerala')
{
 statecode = 'kl'

}else if (stateName == 'Ladakh')
{
 statecode = 'la'

}

else if (stateName == 'Maharashtra')
{
 statecode = 'mh'

}
else if (stateName == 'Meghalaya')
{
 statecode = 'ml'

}
else if (stateName == 'Manipur')
{
 statecode = 'mn'

}
else if (stateName == 'Madhya Pradesh')
{
 statecode = 'mp'

}
else if (stateName == 'Mizoram')
{
 statecode = 'mz'

}
else if (stateName == 'Nagaland')
{
 statecode = 'nl'

}
else if (stateName == 'Odisha')
{
 statecode = 'or'

}
else if (stateName == 'Punjab')
{
 statecode = 'pb'

}
else if (stateName == 'Puducherry')
{
 statecode = 'py'

}else if (stateName == 'Rajasthan')
{
 statecode = 'rj'

}
else if (stateName == 'Sikkim')
{
 statecode = 'sk'

}
else if (stateName == 'Telangana')
{
 statecode = 'tg'

}
else if (stateName == 'Tamil Nadu')
{
 statecode = 'tn'

}
else if (stateName == 'Tripura')
{
 statecode = 'tr'

}
else if (stateName == 'Uttar Pradesh')
{
 statecode = 'up'

}
else if (stateName == 'Uttarakhand')
{
 statecode = 'ut'

}
else if (stateName == 'West Bengal')
{
 statecode = 'wb'

}

return statecode;

}

function getTimeSeries(statecode, type)
{
    var sum = 0;
    var arr= [];
    if (type !='Active')
    {
    for (var i =0 ; i<statewise.length; i++)
    {

          if  (statewise[i].status == type)
          {
             var obj = [];
             sum = sum + parseInt(statewise[i][statecode+""]);

             var date = statewise[i].date+"20";
             obj.push(date);
             obj.push(sum);
             arr.push(obj);

          }


    }
    }
     else if (type == 'Active')
          {
            var conf= [];
            var det = [];
            var rec = [];
            var obj = [];
            var confSum = 0;
            var detSum = 0;
            var recSum = 0;

            for (var i =0 ; i<statewise.length; i++)
                {

                      if  (statewise[i].status == 'Confirmed')
                      {
                         var obj = [];
                         var count = parseInt(statewise[i][statecode+""]);
                         confSum = confSum+ count;
                         var date = statewise[i].date+"20";
                         obj.push(date);
                         obj.push(confSum);
                         conf.push(obj);
                      }
                      if  (statewise[i].status == 'Deceased')
                      {
                         var obj = [];
                         var count = parseInt(statewise[i][statecode+""]);
                         detSum = detSum+ count;
                         var date = statewise[i].date+"20";
                         obj.push(date);
                         obj.push(detSum);
                         det.push(obj);
                      }
                      if  (statewise[i].status == 'Recovered')
                      {
                         var obj = [];
                         var count = parseInt(statewise[i][statecode+""]);
                         recSum = recSum + count;
                         var date = statewise[i].date+"20";
                         obj.push(date);
                         obj.push(recSum);
                         rec.push(obj);
                      }


                }

                for (var i= 0; i< conf.length; i++)
                {
                     var obj =[];
                     obj.push(conf[i][0]);
                     obj.push(conf[i][1]- det[i][1]-rec[i][1]);
                     arr.push(obj);


                }


          }
    return arr;


}

function growthConfirmed(statewise)
{
//console.log(statewise);
for (var i =0; i<statewise.length; i++)
{
    var object = statewise[i];
    var date = statewise[i].date ;
    var status = statewise[i].status ;
    Object.keys(object).forEach(function(key)
    {

                        var statecode = null;
                        if(status == "Confirmed")
                        {


                        if (key != 'tt' && key != 'date' && key !='Status' && key !='un' && key !='ld' && key!= null)
                        {
                            var stateName = getStateName(key);
                            //statecode = 'Andaman and Nicobar Islands';
                            if(stateName!=null)
                            {
                            index =isFound(stateName, finalConfirmedStates);
                            if (index==-1)
                            {

                            var type = "line";
                            var axisYType= "secondary";
                            var name= stateName;
                            var showInLegend= true;
                            var markerSize= 0;
                            var yValueFormatString= "#,###";
                            var x = new Date(date);
                            var y = parseInt(object[key]);
                            var xyobj= {x,y};
                            var dataPoints =[];
                            dataPoints.push(xyobj);
                            var finalObjects = {type,axisYType,name,showInLegend,markerSize,yValueFormatString,dataPoints};
                            finalConfirmedStates.push(finalObjects);
                            }
                            else
                            {

                               var datapoints = finalConfirmedStates[index].dataPoints;
                               var length = datapoints.length;
                               var x = new Date(date);
                               var y = parseInt(object[key])+datapoints[length-1].y;
                               var xyobj= {x,y};
                               datapoints.push(xyobj);
                               finalConfirmedStates[index].dataPoints=datapoints;

                            }
                        }
                        }
                        }

    });
     }

//console.log(finalConfirmedStates);

     var chart = new CanvasJS.Chart("allStatesConfirmed", {
	title: {
		text: "Confirmed Cases Growth"
	},
	axisX: {
		valueFormatString: "DD MM YYYY"
	},
	axisY2: {
		title: "Confirmed Cases",
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		verticalAlign: "top",
		horizontalAlign: "center",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data:  finalConfirmedStates

});
function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart.render();

}
chart.render();
}

function growthDeaths(statewise)
{
//console.log(statewise);
for (var i =0; i<statewise.length; i++)
{
    var object = statewise[i];
    var date = statewise[i].date ;
    var status = statewise[i].status ;
    Object.keys(object).forEach(function(key)
    {

                        var statecode = null;
                        if(status == "Deceased")
                        {


                        if (key != 'tt' && key != 'date' && key !='Status' && key !='un' && key !='ld' && key!= null)
                        {
                            var stateName = getStateName(key);
                            //statecode = 'Andaman and Nicobar Islands';
                            if(stateName!=null)
                            {
                            index =isFound(stateName, finalDeathStates);
                            if (index==-1)
                            {

                            var type = "line";
                            var axisYType= "secondary";
                            var name= stateName;
                            var showInLegend= true;
                            var markerSize= 0;
                            var yValueFormatString= "#,###";
                            var x = new Date(date);
                            var y = parseInt(object[key]);
                            var xyobj= {x,y};
                            var dataPoints =[];
                            dataPoints.push(xyobj);
                            var finalObjects = {type,axisYType,name,showInLegend,markerSize,yValueFormatString,dataPoints};
                            finalDeathStates.push(finalObjects);
                            }
                            else
                            {

                               var datapoints = finalDeathStates[index].dataPoints;
                               var length = datapoints.length;
                               var x = new Date(date);
                               var y = parseInt(object[key])+datapoints[length-1].y;
                               var xyobj= {x,y};
                               datapoints.push(xyobj);
                               finalDeathStates[index].dataPoints=datapoints;

                            }
                        }
                        }
                        }

    });
     }

//console.log(finalDeathStates);

     var chart = new CanvasJS.Chart("allStatesDeaths", {
	title: {
		text: "Deaths Growth"
	},
	axisX: {
		valueFormatString: "DD MM YYYY"
	},
	axisY2: {
		title: "Deaths",
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		verticalAlign: "top",
		horizontalAlign: "center",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data:  finalDeathStates

});
function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart.render();

}
chart.render();
}



function growthRecovered(statewise)
{
//console.log(statewise);
for (var i =0; i<statewise.length; i++)
{
    var object = statewise[i];
    var date = statewise[i].date ;
    var status = statewise[i].status ;
    Object.keys(object).forEach(function(key)
    {

                        var statecode = null;
                        if(status == "Recovered")
                        {


                        if (key != 'tt' && key != 'date' && key !='Status' && key !='un' && key !='ld' && key!= null)
                        {
                            var stateName = getStateName(key);

                            if(stateName!=null)
                            {
                            index =isFound(stateName, finalRecoveredStates);
                            if (index==-1)
                            {

                            var type = "line";
                            var axisYType= "secondary";
                            var name= stateName;
                            var showInLegend= true;
                            var markerSize= 0;
                            var yValueFormatString= "#,###";
                            var x = new Date(date);
                            var y = parseInt(object[key]);
                            var xyobj= {x,y};
                            var dataPoints =[];
                            dataPoints.push(xyobj);
                            var finalObjects = {type,axisYType,name,showInLegend,markerSize,yValueFormatString,dataPoints};
                            finalRecoveredStates.push(finalObjects);
                            }
                            else
                            {

                               var datapoints = finalRecoveredStates[index].dataPoints;
                               var length = datapoints.length;
                               var x = new Date(date);
                               var y = parseInt(object[key])+datapoints[length-1].y;
                               var xyobj= {x,y};
                               datapoints.push(xyobj);
                               finalRecoveredStates[index].dataPoints=datapoints;

                            }
                        }
                        }
                        }

    });
     }

//console.log(finalRecoveredStates);
 var chart = new CanvasJS.Chart("allStatesRecoveries", {
	title: {
		text: "Recoveries Growth"
	},
	axisX: {
		valueFormatString: "DD MM YYYY"
	},
	axisY2: {
		title: " Cases",
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		verticalAlign: "top",
		horizontalAlign: "center",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data:  finalRecoveredStates

});

function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart.render();

}
chart.render();
}


function isFound(statecode,finalConfirmedStates)
{
 var found = -1;
 for (var i=0;i<finalConfirmedStates.length;i++)
 {

     if(statecode == finalConfirmedStates[i].name)

    {

    found =i;
    break;

    }
 }
//console.log(found);
return found;
}

function  getStateName(statecode)
{
var stateName = null;
if (statecode == 'an')
{
   stateName = 'Andaman and Nicobar Islands'
}
else if (statecode == 'ap')
{
 stateName = 'Andhra Pradesh'

}
else if (statecode == 'ar')
{
 stateName = 'Arunachal Pradesh'

}
else if (statecode == 'as')
{
 stateName = 'Assam'

}
else if (statecode == 'br')
{
 stateName = 'Bihar'

}else if (statecode ==  'ch')
{
 stateName ='Chandigarh'

}
else if (statecode =='ct')
{
 stateName =  'Chattisgarh'

}

else if (statecode =='dl' )
{
 stateName = 'Delhi'

}
else if (statecode == 'dn' || statecode == 'dd')
{
 stateName = 'Dadra and Nagar Haveli and Daman and Diu'

}
else if (statecode == 'ga')
{
 stateName = 'Goa'

}
else if (statecode == 'gj')
{
 stateName = 'Gujarat'

}
else if (statecode =='hp')
{
 stateName =  'Himachal Pradesh'

}
else if (statecode == 'hr')
{
 stateName = 'Haryana'

}
else if (statecode ==  'jh')
{
 stateName ='Jharkhand'

}
else if (statecode == 'jk')
{
 stateName = 'Jammu and Kashmir'

}
else if (statecode == 'ka')
{
 stateName = 'Karnataka'

}
else if (statecode == 'kl')
{
 stateName = 'Kerala'

}else if (statecode == 'la')
{
 stateName = 'Ladakh'

}

else if (statecode =='mh' )
{
 stateName = 'Maharashtra'

}
else if (statecode == 'ml')
{
 stateName = 'Meghalaya'

}
else if (statecode == 'mn')
{
 stateName = 'Manipur'

}
else if (statecode == 'mp')
{
 stateName = 'Madhya Pradesh'

}
else if (statecode == 'mz')
{
 stateName = 'Mizoram'

}
else if (statecode == 'nl')
{
 stateName = 'Nagaland'

}
else if (statecode == 'or')
{
 stateName = 'Odisha'

}
else if (statecode == 'pb')
{
 stateName = 'Punjab'

}
else if (statecode == 'py')
{
 stateName = 'Puducherry'

}else if (statecode =='rj' )
{
 stateName = 'Rajasthan'

}
else if (statecode == 'sk')
{
 stateName = 'Sikkim'

}
else if (statecode =='tg' )
{
 stateName = 'Telangana'

}
else if (statecode =='tn' )
{
 stateName = 'Tamil Nadu'

}
else if (statecode == 'tr')
{
 stateName = 'Tripura'

}
else if (statecode =='up' )
{
 stateName = 'Uttar Pradesh'

}
else if (statecode =='ut' )
{
 stateName = 'Uttarakhand'

}
else if (statecode =='wb' )
{
 stateName = 'West Bengal'

}

return stateName;

}
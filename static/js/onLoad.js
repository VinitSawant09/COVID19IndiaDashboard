var regionalStats = null;
var totalDailyCount = null;
function myFunction()
{
 var confirmedCasesCountTill2Day = null;
 var deathCountTill2Day = null;
 var recoveryCountTill2Day = null;

 var $tableId = $("#dtBasicExample")
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
          document.getElementById("lastUpdatedLive1").innerHTML="Last Updated : "+date.format('llll');
          document.getElementById("lastUpdatedLive2").innerHTML="Last Updated : "+date.format('llll');
          document.getElementById("lastUpdatedLive3").innerHTML="Last Updated : "+date.format('llll');

          var liveStats= entireData["unofficial-summary"];
          //console.log(liveStats);
          var totalConfirmedCases = liveStats[0].total;
          confirmedCasesCountTill2Day=totalConfirmedCases;
          document.getElementById("totalConfirmedCases").innerHTML=numberWithCommas(totalConfirmedCases);

          var totalDeaths = liveStats[0].deaths;
          deathCountTill2Day=totalDeaths;
          document.getElementById("totalDeaths").innerHTML=numberWithCommas(totalDeaths);
          var mortalityRate = (Math.round((totalDeaths + Number.EPSILON) * 100) / totalConfirmedCases).toFixed(2) ;
          document.getElementById("mortalityRate").innerHTML=mortalityRate + "%";

          var totalRecovered = liveStats[0].recovered;
          recoveryCountTill2Day=totalRecovered;
          document.getElementById("totalRecovered").innerHTML=numberWithCommas(totalRecovered);
          var recoveryRate = (Math.round((totalRecovered + Number.EPSILON) * 100) / totalConfirmedCases).toFixed(2) ;
          document.getElementById("recoveryRate").innerHTML=recoveryRate+ "%";


          var activeCases = liveStats[0].active;
          document.getElementById("activeCases").innerHTML=activeCases;

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
          showConfirmedOnMap();

        }
       });

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
          console.log(response);
          var data= response.data;
          totalDailyCount = response.data;
          var numberOfDays= data.length;

          var deathsToday= deathCountTill2Day - data[numberOfDays-1].summary.deaths;
          if(deathsToday<0)
          {
          deathsToday = 0;
          }
          document.getElementById("deathsToday").innerHTML="+"+deathsToday;


          var recoveredToday= recoveryCountTill2Day - data[numberOfDays-1].summary.discharged;
          if(recoveredToday<0)
          {
          recoveredToday = 0;
          alert("zero");
          }
          document.getElementById("recoveredToday").innerHTML="+"+recoveredToday;



          var confirmedToday= confirmedCasesCountTill2Day - data[numberOfDays-1].summary.total;
          if(confirmedToday<0)
          {
          confirmedToday = 0;
          }
          document.getElementById("confirmedToday").innerHTML="+"+confirmedToday;

         }
         else
        {
            console.log("Error while fetching testing api..!!!");
        }

        splineConfirmed();

        }
       });

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
       });




}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function showDeathsOnMap()
{

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
];
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
];
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
];
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

var activeStatesData = [
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
];
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


var data=[];
for (var i=0; i<totalDailyCount.length ;i++)
{
var x = new Date(totalDailyCount[i].day);
var y = totalDailyCount[i].summary.total;
var objA= {x,y}
data.push(objA);
}


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

function splineDeaths()
{

var data=[];
for (var i=0; i<totalDailyCount.length ;i++)
{
var x = new Date(totalDailyCount[i].day);
var y = totalDailyCount[i].summary.deaths;
var objA= {x,y}
data.push(objA);
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

function splineRecovered()
{


var data=[];
for (var i=0; i<totalDailyCount.length ;i++)
{
var x = new Date(totalDailyCount[i].day);

var y = totalDailyCount[i].summary.discharged;
var objA= {x,y}
data.push(objA);
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
function splineActive()
{


var data=[];
for (var i=0; i<totalDailyCount.length ;i++)
{
var x = new Date(totalDailyCount[i].day);

var y = totalDailyCount[i].summary.total - totalDailyCount[i].summary.discharged -totalDailyCount[i].summary.deaths;
var objA= {x,y}
data.push(objA);
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

function splineAll()
{


var data=[];
for (var i=0; i<totalDailyCount.length ;i++)
{
var x = new Date(totalDailyCount[i].day);

var y = totalDailyCount[i].summary.total - totalDailyCount[i].summary.discharged -totalDailyCount[i].summary.deaths;
var objA= {x,y}
data.push(objA);
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

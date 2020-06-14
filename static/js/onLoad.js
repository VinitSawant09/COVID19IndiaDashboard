function myFunction()
{
 var confirmedCasesCountTill2Day = null;
 var deathCountTill2Day = null;
 var recoveryCountTill2Day = null;
 var regionalStats = null;
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
          console.log(regionalStats);
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


             var data = [
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
        data: data,
        name: 'Confirmed Cases',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: false,
            format: '{point.name}'
        }
    }]
});








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
          //console.log(response);
          var data= response.data;
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




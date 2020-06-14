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




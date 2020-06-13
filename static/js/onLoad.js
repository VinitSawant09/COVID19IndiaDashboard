function myFunction()
{

 $.ajax(
       {
        url  : "https://api.rootnet.in/covid19-in/stats/testing/latest",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){

        if (response!=null)
        {
          var lastRefreshed= response.lastRefreshed;
          var date = moment(lastRefreshed)
          var totalSamplesTested=response.data.totalSamplesTested;
          document.getElementById("totalTestsDone").innerHTML=numberWithCommas(totalSamplesTested);
          var totPopulation =1379307780;
          var totalMillions = totPopulation/1000000;
          var testspermillion = Math.round(totalSamplesTested/totalMillions);
          document.getElementById("testspermillion").innerHTML=testspermillion;
          document.getElementById("lastUpdated").innerHTML="Last Updated : "+date.format('llll');
        }
        else
        {
            console.log("Error while fetching testing api..!!!");
        }

        }
       });

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
          //console.log(entireData);
          var liveStats= entireData["unofficial-summary"];
          //console.log(liveStats);
          var totalConfirmedCases = liveStats[0].total;
          document.getElementById("totalConfirmedCases").innerHTML=numberWithCommas(totalConfirmedCases);

          var totalDeaths = liveStats[0].deaths;
          document.getElementById("totalDeaths").innerHTML=numberWithCommas(totalDeaths);

          var totalRecovered = liveStats[0].recovered;
          document.getElementById("totalRecovered").innerHTML=numberWithCommas(totalRecovered);

         var recoveryRate = liveStats[0].recovered;
          document.getElementById("totalRecovered").innerHTML=numberWithCommas(totalRecovered);
          var totalActive = liveStats[0].active;
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




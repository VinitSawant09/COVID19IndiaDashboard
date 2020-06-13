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
          console.log(response.data.totalSamplesTested);
          var totalSamplesTested=response.data.totalSamplesTested;
          document.getElementById("totalTestsDone").innerHTML=totalSamplesTested;
        }
        else
        {
            console.log("Error while fetching api..!!!");
        }

        }
       });

     }




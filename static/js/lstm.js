function predict(selectType)
{
var actualDeaths = [];
var actualRecovered = [];
var actualConfirmed = [];
var predictedDeaths = [];
var predictedConfirmed = [];
var predictedRecovered = [];


if (selectType == null)
{
selectType= 'deaths'
console.log(selectType);
}

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
                    console.log(response);
                    if (response!=null)
                    {
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

                            $.ajax(
                                       {
                                        url  : "https://api.rootnet.in/covid19-in/stats/latest",
                                        contentType: "application/json",
                                        type : 'GET',
                                        contentType: false,
                                        cache: false,
                                        processData: false,
                                        success: function(response){
                                 if (selectType == 'deaths')
                                 {
                                        if (response!=null)
                                        {
                                          var entireData = response.data;

                                          var liveStats= entireData["unofficial-summary"];
                                          var totalDeaths = liveStats[0].deaths;

                             $.ajax({
                                          type: 'POST',
                                          url: "/predictVanillaLSTMdeaths",
                                          data: JSON.stringify(
                                          {
                                          "listC" : cumulativeCounts,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {
                                           console.log(data);
                                           document.getElementById('predVanilla').innerHTML = Math.round(data['deaths'][0]);
                                           document.getElementById('vanillaAe').innerHTML =Math.abs(totalDeaths -  Math.round(data['deaths'][0]));
                                            var x = document.getElementById("overlay");
                                            if (x.style.display === "none") {
                                                x.style.display = "block";
                                              } else {
                                                x.style.display = "none";
                                              }

                                 $.ajax({
                                          type: 'POST',
                                          url: "/predictStackedLSTMdeaths",
                                          data: JSON.stringify(
                                          {
                                          "listC" : cumulativeCounts,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {

                                             console.log(data);
                                             document.getElementById('predStacked').innerHTML = Math.round(data['deaths'][0]);
                                             document.getElementById('stackedAe').innerHTML =Math.abs(totalDeaths -  Math.round(data['deaths'][0]));
                                  $.ajax({
                                          type: 'POST',
                                          url: "/predictBiDirectionalLSTMdeaths",
                                          data: JSON.stringify(
                                          {
                                          "listC" : cumulativeCounts,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {

                                             console.log(data);
                                              document.getElementById('predBiDirectional').innerHTML = Math.round(data['deaths'][0]);
                                              document.getElementById('biae').innerHTML =Math.abs(totalDeaths -  Math.round(data['deaths'][0]));
                                 $.ajax({
                                          type: 'POST',
                                          url: "/predictCNNLSTMdeaths",
                                          data: JSON.stringify(
                                          {
                                          "listC" : cumulativeCounts,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {

                                             console.log(data);
                                              document.getElementById('predCNN').innerHTML = Math.round(data['deaths'][0]);
                                              document.getElementById('cnnae').innerHTML =Math.abs(totalDeaths -  Math.round(data['deaths'][0]));
                                   $.ajax({
                                          type: 'POST',
                                          url: "/predictConvLSTMdeaths",
                                          data: JSON.stringify(
                                          {
                                          "listC" : cumulativeCounts,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {

                                             console.log(data);
                                             document.getElementById('predConv').innerHTML = Math.round(data['deaths'][0]);
                                             document.getElementById('convae').innerHTML =Math.abs(totalDeaths -  Math.round(data['deaths'][0]));
                                   $.ajax({
                                          type: 'POST',
                                          url: "/predictVectorOLSTMdeaths",
                                          data: JSON.stringify(
                                          {
                                          "listC" : cumulativeCounts,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {

                                             console.log(data);
                                             //console.log(data['deaths'][0]);
                                             document.getElementById('predVectorO').innerHTML = Math.round(data['deaths'][0][0]);
                                             document.getElementById('voae').innerHTML =Math.abs(totalDeaths -  Math.round(data['deaths'][0][0]));
                                   $.ajax({
                                          type: 'POST',
                                          url: "/predictEncodedLSTMdeaths",
                                          data: JSON.stringify(
                                          {
                                          "listC" : cumulativeCounts,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {

                                             console.log(data);
                                             document.getElementById('predEncoded').innerHTML = Math.round(data['deaths'][0][0]);
                                             document.getElementById('enae').innerHTML =Math.abs(totalDeaths -  Math.round(data['deaths'][0][0]));



                                                                      }
                                                               });


                                                                      }
                                                               });


                                                                      }
                                                               });


                                                                      }
                                                               });


                                                                      }
                                                               });


                                                                      }
                                                               });
                                                               }
                                                          });

                                                        //console.log(actualDeaths);
                                                }

                                   }

                                   else if (selectType == 'Confirmed')
                                   {
                                    if (response!=null)
                                        {
                                          var entireData = response.data;

                                          var liveStats= entireData["unofficial-summary"];
                                          var totalConfirmed = liveStats[0].total;

                             $.ajax({
                                          type: 'POST',
                                          url: "/predictVanillaLSTMconfirmed",
                                          data: JSON.stringify(
                                          {
                                          "listConfirmed" : cumulativeCases,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {
                                           console.log(data);
                                           document.getElementById('predVanilla').innerHTML = Math.round(data['confirmed'][0]);
                                           document.getElementById('vanillaAe').innerHTML =Math.abs(totalConfirmed -  Math.round(data['confirmed'][0]));
                                            var x = document.getElementById("overlay");
                                            if (x.style.display === "none") {
                                                x.style.display = "block";
                                              } else {
                                                x.style.display = "none";
                                              }

                                 $.ajax({
                                          type: 'POST',
                                          url: "/predictStackedLSTMconfirmed",
                                          data: JSON.stringify(
                                          {
                                          "listConfirmed" : cumulativeCases,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {

                                             console.log(data);
                                             document.getElementById('predStacked').innerHTML = Math.round(data['confirmed'][0]);
                                             document.getElementById('stackedAe').innerHTML =Math.abs(totalConfirmed -  Math.round(data['confirmed'][0]));
                                  $.ajax({
                                          type: 'POST',
                                          url: "/predictBiDirectionalLSTMconfirmed",
                                          data: JSON.stringify(
                                          {
                                          "listConfirmed" : cumulativeCases,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {

                                             console.log(data);
                                              document.getElementById('predBiDirectional').innerHTML = Math.round(data['confirmed'][0]);
                                              document.getElementById('biae').innerHTML =Math.abs(totalConfirmed -  Math.round(data['confirmed'][0]));
                                 $.ajax({
                                          type: 'POST',
                                          url: "/predictCNNLSTMconfirmed",
                                          data: JSON.stringify(
                                          {
                                          "listConfirmed" : cumulativeCases,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {

                                             console.log(data);
                                              document.getElementById('predCNN').innerHTML = Math.round(data['confirmed'][0]);
                                              document.getElementById('cnnae').innerHTML =Math.abs(totalConfirmed -  Math.round(data['confirmed'][0]));
                                   $.ajax({
                                          type: 'POST',
                                          url: "/predictConvLSTMconfirmed",
                                          data: JSON.stringify(
                                          {
                                          "listConfirmed" : cumulativeCases,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {

                                             console.log(data);
                                             document.getElementById('predConv').innerHTML = Math.round(data['confirmed'][0]);
                                             document.getElementById('convae').innerHTML =Math.abs(totalConfirmed -  Math.round(data['confirmed'][0]));
                                   $.ajax({
                                          type: 'POST',
                                          url: "/predictVectorOLSTMconfirmed",
                                          data: JSON.stringify(
                                          {
                                          "listConfirmed" : cumulativeCases,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {

                                             console.log(data);
                                             //console.log(data['deaths'][0]);
                                             document.getElementById('predVectorO').innerHTML = Math.round(data['confirmed'][0][0]);
                                             document.getElementById('voae').innerHTML =Math.abs(totalConfirmed -  Math.round(data['confirmed'][0][0]));
                                   $.ajax({
                                          type: 'POST',
                                          url: "/predictEncodedLSTMconfirmed",
                                          data: JSON.stringify(
                                          {
                                          "listConfirmed" : cumulativeCases,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {

                                             console.log(data);
                                             document.getElementById('predEncoded').innerHTML = Math.round(data['confirmed'][0][0]);
                                             document.getElementById('enae').innerHTML =Math.abs(totalConfirmed -  Math.round(data['confirmed'][0][0]));



                                                                      }
                                                               });


                                                                      }
                                                               });


                                                                      }
                                                               });


                                                                      }
                                                               });


                                                                      }
                                                               });


                                                                      }
                                                               });
                                                               }
                                                          });

                                                        //console.log(actualDeaths);
                                                }

                                   }
                                   else if (selectType == 'Recovered')
                                   {
                                        if (response!=null)
                                        {
                                          var entireData = response.data;

                                          var liveStats= entireData["unofficial-summary"];
                                          var totalRecovered = liveStats[0].recovered;

                             $.ajax({
                                          type: 'POST',
                                          url: "/predictVanillaLSTMrecovered",
                                          data: JSON.stringify(
                                          {
                                          "listRecovered" : cumulativeRecovered,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {
                                           console.log(data);
                                           document.getElementById('predVanilla').innerHTML = Math.round(data['recovered'][0]);
                                           document.getElementById('vanillaAe').innerHTML =Math.abs(totalRecovered -  Math.round(data['recovered'][0]));
                                            var x = document.getElementById("overlay");
                                            if (x.style.display === "none") {
                                                x.style.display = "block";
                                              } else {
                                                x.style.display = "none";
                                              }

                                 $.ajax({
                                          type: 'POST',
                                          url: "/predictStackedLSTMrecovered",
                                          data: JSON.stringify(
                                          {
                                          "listRecovered" : cumulativeRecovered,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {

                                             console.log(data);
                                             document.getElementById('predStacked').innerHTML = Math.round(data['recovered'][0]);
                                             document.getElementById('stackedAe').innerHTML =Math.abs(totalRecovered -  Math.round(data['recovered'][0]));
                                  $.ajax({
                                          type: 'POST',
                                          url: "/predictBiDirectionalLSTMrecovered",
                                          data: JSON.stringify(
                                          {
                                          "listRecovered" : cumulativeRecovered,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {

                                             console.log(data);
                                              document.getElementById('predBiDirectional').innerHTML = Math.round(data['recovered'][0]);
                                              document.getElementById('biae').innerHTML =Math.abs(totalRecovered -  Math.round(data['recovered'][0]));
                                 $.ajax({
                                          type: 'POST',
                                          url: "/predictCNNLSTMrecovered",
                                          data: JSON.stringify(
                                          {
                                          "listRecovered" : cumulativeRecovered,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {

                                             console.log(data);
                                              document.getElementById('predCNN').innerHTML = Math.round(data['recovered'][0]);
                                              document.getElementById('cnnae').innerHTML =Math.abs(totalRecovered -  Math.round(data['recovered'][0]));
                                   $.ajax({
                                          type: 'POST',
                                          url: "/predictConvLSTMrecovered",
                                          data: JSON.stringify(
                                          {
                                          "listRecovered" : cumulativeRecovered,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {

                                             console.log(data);
                                             document.getElementById('predConv').innerHTML = Math.round(data['recovered'][0]);
                                             document.getElementById('convae').innerHTML =Math.abs(totalRecovered -  Math.round(data['recovered'][0]));
                                   $.ajax({
                                          type: 'POST',
                                          url: "/predictVectorOLSTMrecovered",
                                          data: JSON.stringify(
                                          {
                                          "listRecovered" : cumulativeRecovered,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {

                                             console.log(data);
                                             //console.log(data['deaths'][0]);
                                             document.getElementById('predVectorO').innerHTML = Math.round(data['recovered'][0][0]);
                                             document.getElementById('voae').innerHTML =Math.abs(totalRecovered -  Math.round(data['recovered'][0][0]));
                                   $.ajax({
                                          type: 'POST',
                                          url: "/predictEncodedLSTMrecovered",
                                          data: JSON.stringify(
                                          {
                                          "listRecovered" : cumulativeRecovered,

                                          }
                                          ),
                                          contentType: 'application/json; charset=utf-8',
                                          success: function(data)
                                          {

                                             console.log(data);
                                             document.getElementById('predEncoded').innerHTML = Math.round(data['recovered'][0][0]);
                                             document.getElementById('enae').innerHTML =Math.abs(totalRecovered -  Math.round(data['recovered'][0][0]));



                                                                      }
                                                               });


                                                                      }
                                                               });


                                                                      }
                                                               });


                                                                      }
                                                               });


                                                                      }
                                                               });


                                                                      }
                                                               });
                                                               }
                                                          });

                                                        //console.log(actualDeaths);
                                                }




                                   }



             }
         });

         }
         }
          });
}

 function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}


function selectType()
{
 var selectBox = document.getElementById("selectType");
 var selectType = selectBox.options[selectBox.selectedIndex].value;
  var x = document.getElementById("overlay");
                                            if (x.style.display === "none") {
                                                x.style.display = "block";
                                              }
 predict(selectType);
}

var metroFull=[];
function myFunction()
{

 var $tableId = $("#dtBasicExample")
$.ajax(
       {
        url  : "https://api.covid19india.org/state_district_wise.json",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response)
        {

        if (response!=null)
        {
        //console.log(response);
        var entireStateObj = [];

        entireStateObj.push(response['Maharashtra'].districtData['Mumbai']);
        entireStateObj.push('Mumbai');
        metroFull.push(entireStateObj);

        var entireStateObj = [];
        entireStateObj.push(response['Maharashtra'].districtData['Pune']);
        entireStateObj.push('Pune');
        metroFull.push(entireStateObj);

         var entireStateObj = [];
        entireStateObj.push(response['Maharashtra'].districtData['Thane']);
        entireStateObj.push('Thane');
        metroFull.push(entireStateObj);


        var entireStateObj = [];
        entireStateObj.push(response['Tamil Nadu'].districtData['Chennai']);
        entireStateObj.push('Chennai');
        metroFull.push(entireStateObj);

        var entireStateObj = [];
        entireStateObj.push(response['Delhi'].districtData['Unknown']);
        entireStateObj.push('Delhi');
        metroFull.push(entireStateObj);

         var entireStateObj = [];
        entireStateObj.push(response['Gujarat'].districtData['Ahmedabad']);
        entireStateObj.push('Ahmedabad');
        metroFull.push(entireStateObj);

        var entireStateObj = [];
        entireStateObj.push(response['Karnataka'].districtData['Bengaluru Urban']);
        entireStateObj.push('Bengaluru');
        metroFull.push(entireStateObj);

        var entireStateObj = [];
        entireStateObj.push(response['West Bengal'].districtData['Kolkata']);
        entireStateObj.push('Kolkatta');
        metroFull.push(entireStateObj);

        var entireStateObj = [];
        entireStateObj.push(response['Telangana'].districtData['Hyderabad']);
        entireStateObj.push('Hyderabad');
        metroFull.push(entireStateObj);

        }
        //console.log(metroFull);

          for (var i=0;i < metroFull.length; i++)
         {
          $tableId.append(
          $("<tr>").append($("<td>").html(metroFull[i][1]))
          .append($("<td>").html(metroFull[i][0].confirmed))
          .append($("<td>").html(metroFull[i][0].deceased))
          .append($("<td>").html(metroFull[i][0].recovered))
          .append($("<td>").html(metroFull[i][0].active))
          .append($("<td>").html( (Math.round((metroFull[i][0].deceased + Number.EPSILON) * 100) / metroFull[i][0].confirmed).toFixed(2)))

         );
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





        }

});
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
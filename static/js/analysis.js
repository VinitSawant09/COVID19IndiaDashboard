var femaleCount= 0;
var maleCount= 0;
var totalCount= 0;
var summationOfAges=0;
var ageIndividuals=0;
var deathPatientsCount=0;
var summationOfDeathAges=0;
var confirmedAgeDistribution=[0,0,0,0,0];
var deceasedAgeDistribution=[0,0,0,0,0];
var deathMaleCount=0;
var deathFemaleCount=0;
var deathGenderCount=0;
var deathAgeFemaleDistribution=[0,0,0,0,0];
var deathAgeMaleDistribution=[0,0,0,0,0];
function myFunction()
{



  $.ajax(
       {
        url  : "https://api.covid19india.org/raw_data1.json",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){
             console.log("1");
             var totalRecords = response.raw_data;
             for(var i=0;i<totalRecords.length;i++)
             {

               if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket) && totalRecords[i].currentstatus=='Deceased')
               {
                  if(totalRecords[i].gender=='F')
                  {
                  deathFemaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeFemaleDistribution[0];
                   count= count + 1;
                   deathAgeFemaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeFemaleDistribution[1];
                   count= count + 1;
                   deathAgeFemaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeFemaleDistribution[2];
                   count= count + 1;
                   deathAgeFemaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeFemaleDistribution[3];
                   count= count + 1;
                   deathAgeFemaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeFemaleDistribution[4];
                   count= count + 1;
                   deathAgeFemaleDistribution[4]=count;
                  }
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  deathMaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeMaleDistribution[0];
                   count= count + 1;
                   deathAgeMaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeMaleDistribution[1];
                   count= count + 1;
                   deathAgeMaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeMaleDistribution[2];
                   count= count + 1;
                   deathAgeMaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeMaleDistribution[3];
                   count= count + 1;
                   deathAgeMaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeMaleDistribution[4];
                   count= count + 1;
                   deathAgeMaleDistribution[4]=count;
                  }
                  }

                var age = parseInt(totalRecords[i].agebracket);
                  if(age>=0 && age <=17)
                  {
                   var count = deceasedAgeDistribution[0];
                   count= count + 1;
                   deceasedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = deceasedAgeDistribution[1];
                   count= count + 1;
                   deceasedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = deceasedAgeDistribution[2];
                   count= count + 1;
                   deceasedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = deceasedAgeDistribution[3];
                   count= count + 1;
                   deceasedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = deceasedAgeDistribution[4];
                   count= count + 1;
                   deceasedAgeDistribution[4]=count;
                  }
               deathPatientsCount++;
               summationOfDeathAges=summationOfDeathAges+parseInt(totalRecords[i].agebracket);
               }

               if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket))
               {
                   var age = parseInt(totalRecords[i].agebracket);
                  if(age>=0 && age <=17)
                  {
                   var count = confirmedAgeDistribution[0];
                   count= count + 1;
                   confirmedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = confirmedAgeDistribution[1];
                   count= count + 1;
                   confirmedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = confirmedAgeDistribution[2];
                   count= count + 1;
                   confirmedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = confirmedAgeDistribution[3];
                   count= count + 1;
                   confirmedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = confirmedAgeDistribution[4];
                   count= count + 1;
                   confirmedAgeDistribution[4]=count;
                  }


               ageIndividuals++;
               summationOfAges=summationOfAges+parseInt(totalRecords[i].agebracket);


               }
               if(totalRecords[i].gender!="")
               {
                  if(totalRecords[i].gender=='F')
                  {
                  femaleCount++;
                  totalCount++;
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  maleCount++;
                  totalCount++;
                  }

               }


             }
            $.ajax(
       {
        url  : "https://api.covid19india.org/raw_data2.json",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){
              console.log("2");
             var totalRecords = response.raw_data;
             for(var i=0;i<totalRecords.length;i++)
             {

              if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket) && totalRecords[i].currentstatus=='Deceased')
               {
               if(totalRecords[i].gender=='F')
                  {
                  deathFemaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeFemaleDistribution[0];
                   count= count + 1;
                   deathAgeFemaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeFemaleDistribution[1];
                   count= count + 1;
                   deathAgeFemaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeFemaleDistribution[2];
                   count= count + 1;
                   deathAgeFemaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeFemaleDistribution[3];
                   count= count + 1;
                   deathAgeFemaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeFemaleDistribution[4];
                   count= count + 1;
                   deathAgeFemaleDistribution[4]=count;
                  }
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  deathMaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeMaleDistribution[0];
                   count= count + 1;
                   deathAgeMaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeMaleDistribution[1];
                   count= count + 1;
                   deathAgeMaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeMaleDistribution[2];
                   count= count + 1;
                   deathAgeMaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeMaleDistribution[3];
                   count= count + 1;
                   deathAgeMaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeMaleDistribution[4];
                   count= count + 1;
                   deathAgeMaleDistribution[4]=count;
                  }
                  }
               var age = parseInt(totalRecords[i].agebracket);
                  if(age>=0 && age <=17)
                  {
                   var count = deceasedAgeDistribution[0];
                   count= count + 1;
                   deceasedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = deceasedAgeDistribution[1];
                   count= count + 1;
                   deceasedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = deceasedAgeDistribution[2];
                   count= count + 1;
                   deceasedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = deceasedAgeDistribution[3];
                   count= count + 1;
                   deceasedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = deceasedAgeDistribution[4];
                   count= count + 1;
                   deceasedAgeDistribution[4]=count;
                  }
               deathPatientsCount++;
               summationOfDeathAges=summationOfDeathAges+parseInt(totalRecords[i].agebracket);
               }
               if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket))
               {

               var age = parseInt(totalRecords[i].agebracket);
                  if(age>=0 && age <=17)
                  {
                   var count = confirmedAgeDistribution[0];
                   count= count + 1;
                   confirmedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = confirmedAgeDistribution[1];
                   count= count + 1;
                   confirmedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = confirmedAgeDistribution[2];
                   count= count + 1;
                   confirmedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = confirmedAgeDistribution[3];
                   count= count + 1;
                   confirmedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = confirmedAgeDistribution[4];
                   count= count + 1;
                   confirmedAgeDistribution[4]=count;
                  }
               ageIndividuals++;
               summationOfAges=summationOfAges+parseInt(totalRecords[i].agebracket);
               }
               if(totalRecords[i].gender!="")
               {
                  if(totalRecords[i].gender=='F')
                  {
                  femaleCount++;
                  totalCount++;
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  maleCount++;
                  totalCount++;
                  }

               }


             }

                $.ajax(
       {
        url  : "https://api.covid19india.org/raw_data3.json",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){
             console.log("3");
             var totalRecords = response.raw_data;
             for(var i=0;i<totalRecords.length;i++)
             {
                if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket) && totalRecords[i].currentstatus=='Deceased')
               {

                  if(totalRecords[i].gender=='F')
                  {
                  deathFemaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeFemaleDistribution[0];
                   count= count + 1;
                   deathAgeFemaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeFemaleDistribution[1];
                   count= count + 1;
                   deathAgeFemaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeFemaleDistribution[2];
                   count= count + 1;
                   deathAgeFemaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeFemaleDistribution[3];
                   count= count + 1;
                   deathAgeFemaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeFemaleDistribution[4];
                   count= count + 1;
                   deathAgeFemaleDistribution[4]=count;
                  }
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  deathMaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeMaleDistribution[0];
                   count= count + 1;
                   deathAgeMaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeMaleDistribution[1];
                   count= count + 1;
                   deathAgeMaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeMaleDistribution[2];
                   count= count + 1;
                   deathAgeMaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeMaleDistribution[3];
                   count= count + 1;
                   deathAgeMaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeMaleDistribution[4];
                   count= count + 1;
                   deathAgeMaleDistribution[4]=count;
                  }
                  }
               var age = parseInt(totalRecords[i].agebracket);
                  if(age>=0 && age <=17)
                  {
                   var count = deceasedAgeDistribution[0];
                   count= count + 1;
                   deceasedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = deceasedAgeDistribution[1];
                   count= count + 1;
                   deceasedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = deceasedAgeDistribution[2];
                   count= count + 1;
                   deceasedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = deceasedAgeDistribution[3];
                   count= count + 1;
                   deceasedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = deceasedAgeDistribution[4];
                   count= count + 1;
                   deceasedAgeDistribution[4]=count;
                  }
               deathPatientsCount++;
               summationOfDeathAges=summationOfDeathAges+parseInt(totalRecords[i].agebracket);
               }

               if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket))
               {
               var age = parseInt(totalRecords[i].agebracket);
                  if(age>=0 && age <=17)
                  {
                   var count = confirmedAgeDistribution[0];
                   count= count + 1;
                   confirmedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = confirmedAgeDistribution[1];
                   count= count + 1;
                   confirmedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = confirmedAgeDistribution[2];
                   count= count + 1;
                   confirmedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = confirmedAgeDistribution[3];
                   count= count + 1;
                   confirmedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = confirmedAgeDistribution[4];
                   count= count + 1;
                   confirmedAgeDistribution[4]=count;
                  }
               ageIndividuals++;
               summationOfAges=summationOfAges+parseInt(totalRecords[i].agebracket);
               }
               if(totalRecords[i].gender!="")
               {
                  if(totalRecords[i].gender=='F')
                  {
                  femaleCount++;
                  totalCount++;
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  maleCount++;
                  totalCount++;
                  }

               }


             }

             $.ajax(
       {
        url  : "https://api.covid19india.org/raw_data4.json",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){
             console.log("4");
             var totalRecords = response.raw_data;
             for(var i=0;i<totalRecords.length;i++)
             {
                if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket) && totalRecords[i].currentstatus=='Deceased')
               {

                 if(totalRecords[i].gender=='F')
                  {
                  deathFemaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeFemaleDistribution[0];
                   count= count + 1;
                   deathAgeFemaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeFemaleDistribution[1];
                   count= count + 1;
                   deathAgeFemaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeFemaleDistribution[2];
                   count= count + 1;
                   deathAgeFemaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeFemaleDistribution[3];
                   count= count + 1;
                   deathAgeFemaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeFemaleDistribution[4];
                   count= count + 1;
                   deathAgeFemaleDistribution[4]=count;
                  }
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  deathMaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeMaleDistribution[0];
                   count= count + 1;
                   deathAgeMaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeMaleDistribution[1];
                   count= count + 1;
                   deathAgeMaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeMaleDistribution[2];
                   count= count + 1;
                   deathAgeMaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeMaleDistribution[3];
                   count= count + 1;
                   deathAgeMaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeMaleDistribution[4];
                   count= count + 1;
                   deathAgeMaleDistribution[4]=count;
                  }
                  }
               var age = parseInt(totalRecords[i].agebracket);
                  if(age>=0 && age <=17)
                  {
                   var count = deceasedAgeDistribution[0];
                   count= count + 1;
                   deceasedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = deceasedAgeDistribution[1];
                   count= count + 1;
                   deceasedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = deceasedAgeDistribution[2];
                   count= count + 1;
                   deceasedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = deceasedAgeDistribution[3];
                   count= count + 1;
                   deceasedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = deceasedAgeDistribution[4];
                   count= count + 1;
                   deceasedAgeDistribution[4]=count;
                  }
               deathPatientsCount++;
               summationOfDeathAges=summationOfDeathAges+parseInt(totalRecords[i].agebracket);
               }


               if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket))
               {
               var age = parseInt(totalRecords[i].agebracket);
                  if(age>=0 && age <=17)
                  {
                   var count = confirmedAgeDistribution[0];
                   count= count + 1;
                   confirmedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = confirmedAgeDistribution[1];
                   count= count + 1;
                   confirmedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = confirmedAgeDistribution[2];
                   count= count + 1;
                   confirmedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = confirmedAgeDistribution[3];
                   count= count + 1;
                   confirmedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = confirmedAgeDistribution[4];
                   count= count + 1;
                   confirmedAgeDistribution[4]=count;
                  }
               ageIndividuals++;
               summationOfAges=summationOfAges+parseInt(totalRecords[i].agebracket);
               }
               if(totalRecords[i].gender!="")
               {
                  if(totalRecords[i].gender=='F')
                  {
                  femaleCount++;
                  totalCount++;
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  maleCount++;
                  totalCount++;
                  }

               }


             }

             $.ajax(
       {
        url  : "https://api.covid19india.org/raw_data5.json",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){
              console.log("5");
             var totalRecords = response.raw_data;
             for(var i=0;i<totalRecords.length;i++)
             {
                if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket) && totalRecords[i].currentstatus=='Deceased')
               {
              if(totalRecords[i].gender=='F')
                  {
                  deathFemaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeFemaleDistribution[0];
                   count= count + 1;
                   deathAgeFemaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeFemaleDistribution[1];
                   count= count + 1;
                   deathAgeFemaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeFemaleDistribution[2];
                   count= count + 1;
                   deathAgeFemaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeFemaleDistribution[3];
                   count= count + 1;
                   deathAgeFemaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeFemaleDistribution[4];
                   count= count + 1;
                   deathAgeFemaleDistribution[4]=count;
                  }
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  deathMaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeMaleDistribution[0];
                   count= count + 1;
                   deathAgeMaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeMaleDistribution[1];
                   count= count + 1;
                   deathAgeMaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeMaleDistribution[2];
                   count= count + 1;
                   deathAgeMaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeMaleDistribution[3];
                   count= count + 1;
                   deathAgeMaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeMaleDistribution[4];
                   count= count + 1;
                   deathAgeMaleDistribution[4]=count;
                  }}
                  var age = parseInt(totalRecords[i].agebracket);
                  if(age>=0 && age <=17)
                  {
                   var count = deceasedAgeDistribution[0];
                   count= count + 1;
                   deceasedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = deceasedAgeDistribution[1];
                   count= count + 1;
                   deceasedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = deceasedAgeDistribution[2];
                   count= count + 1;
                   deceasedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = deceasedAgeDistribution[3];
                   count= count + 1;
                   deceasedAgeDistribution[3]=count;
                  }

                  else if(age>=75)
                  {
                   var count = deceasedAgeDistribution[4];
                   count= count + 1;
                   deceasedAgeDistribution[4]=count;
                  }
               deathPatientsCount++;
               summationOfDeathAges=summationOfDeathAges+parseInt(totalRecords[i].agebracket);
               }

               if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket))
               {
               var age = parseInt(totalRecords[i].agebracket);
                  if(age>=0 && age <=17)
                  {
                   var count = confirmedAgeDistribution[0];
                   count= count + 1;
                   confirmedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = confirmedAgeDistribution[1];
                   count= count + 1;
                   confirmedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = confirmedAgeDistribution[2];
                   count= count + 1;
                   confirmedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = confirmedAgeDistribution[3];
                   count= count + 1;
                   confirmedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = confirmedAgeDistribution[4];
                   count= count + 1;
                   confirmedAgeDistribution[4]=count;
                  }
               ageIndividuals++;
               summationOfAges=summationOfAges+parseInt(totalRecords[i].agebracket);
               }
               if(totalRecords[i].gender!="")
               {
                  if(totalRecords[i].gender=='F')
                  {
                  femaleCount++;
                  totalCount++;
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  maleCount++;
                  totalCount++;
                  }

               }


             }

              $.ajax(
       {
        url  : "https://api.covid19india.org/raw_data6.json",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){
              console.log("6");
             var totalRecords = response.raw_data;
             for(var i=0;i<totalRecords.length;i++)
             {
                if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket) && totalRecords[i].currentstatus=='Deceased')
               {

                 if(totalRecords[i].gender=='F')
                  {
                  deathFemaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeFemaleDistribution[0];
                   count= count + 1;
                   deathAgeFemaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeFemaleDistribution[1];
                   count= count + 1;
                   deathAgeFemaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeFemaleDistribution[2];
                   count= count + 1;
                   deathAgeFemaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeFemaleDistribution[3];
                   count= count + 1;
                   deathAgeFemaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeFemaleDistribution[4];
                   count= count + 1;
                   deathAgeFemaleDistribution[4]=count;
                  }
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  deathMaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeMaleDistribution[0];
                   count= count + 1;
                   deathAgeMaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeMaleDistribution[1];
                   count= count + 1;
                   deathAgeMaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeMaleDistribution[2];
                   count= count + 1;
                   deathAgeMaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeMaleDistribution[3];
                   count= count + 1;
                   deathAgeMaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeMaleDistribution[4];
                   count= count + 1;
                   deathAgeMaleDistribution[4]=count;
                  }}
                  var age = parseInt(totalRecords[i].agebracket);
                  if(age>=0 && age <=17)
                  {
                   var count = deceasedAgeDistribution[0];
                   count= count + 1;
                   deceasedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = deceasedAgeDistribution[1];
                   count= count + 1;
                   deceasedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = deceasedAgeDistribution[2];
                   count= count + 1;
                   deceasedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = deceasedAgeDistribution[3];
                   count= count + 1;
                   deceasedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = deceasedAgeDistribution[4];
                   count= count + 1;
                   deceasedAgeDistribution[4]=count;
                  }
               deathPatientsCount++;
               summationOfDeathAges=summationOfDeathAges+parseInt(totalRecords[i].agebracket);
               }

               if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket))
               {
               var age = parseInt(totalRecords[i].agebracket)
                  if(age>=0 && age <=17)
                  {
                   var count = confirmedAgeDistribution[0];
                   count= count + 1;
                   confirmedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = confirmedAgeDistribution[1];
                   count= count + 1;
                   confirmedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = confirmedAgeDistribution[2];
                   count= count + 1;
                   confirmedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = confirmedAgeDistribution[3];
                   count= count + 1;
                   confirmedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = confirmedAgeDistribution[4];
                   count= count + 1;
                   confirmedAgeDistribution[4]=count;
                  }
               ageIndividuals++;
               summationOfAges=summationOfAges+parseInt(totalRecords[i].agebracket);
               }
               if(totalRecords[i].gender!="")
               {
                  if(totalRecords[i].gender=='F')
                  {
                  femaleCount++;
                  totalCount++;
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  maleCount++;
                  totalCount++;
                  }

               }


             }

             $.ajax(
       {
        url  : "https://api.covid19india.org/raw_data7.json",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){
             console.log("7");
             var totalRecords = response.raw_data;
             for(var i=0;i<totalRecords.length;i++)
             {

                if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket) && totalRecords[i].currentstatus=='Deceased')
               {

                 if(totalRecords[i].gender=='F')
                  {
                  deathFemaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeFemaleDistribution[0];
                   count= count + 1;
                   deathAgeFemaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeFemaleDistribution[1];
                   count= count + 1;
                   deathAgeFemaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeFemaleDistribution[2];
                   count= count + 1;
                   deathAgeFemaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeFemaleDistribution[3];
                   count= count + 1;
                   deathAgeFemaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeFemaleDistribution[4];
                   count= count + 1;
                   deathAgeFemaleDistribution[4]=count;
                  }
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  deathMaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeMaleDistribution[0];
                   count= count + 1;
                   deathAgeMaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeMaleDistribution[1];
                   count= count + 1;
                   deathAgeMaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeMaleDistribution[2];
                   count= count + 1;
                   deathAgeMaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeMaleDistribution[3];
                   count= count + 1;
                   deathAgeMaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeMaleDistribution[4];
                   count= count + 1;
                   deathAgeMaleDistribution[4]=count;
                  }
                  }

               var age = parseInt(totalRecords[i].agebracket);
                  if(age>=0 && age <=17)
                  {
                   var count = deceasedAgeDistribution[0];
                   count= count + 1;
                   deceasedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = deceasedAgeDistribution[1];
                   count= count + 1;
                   deceasedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = deceasedAgeDistribution[2];
                   count= count + 1;
                   deceasedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = deceasedAgeDistribution[3];
                   count= count + 1;
                   deceasedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = deceasedAgeDistribution[4];
                   count= count + 1;
                   deceasedAgeDistribution[4]=count;
                  }
               deathPatientsCount++;
               summationOfDeathAges=summationOfDeathAges+parseInt(totalRecords[i].agebracket);
               }

               if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket))
               {
               var age = parseInt(totalRecords[i].agebracket)
                  if(age>=0 && age <=17)
                  {
                   var count = confirmedAgeDistribution[0];
                   count= count + 1;
                   confirmedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = confirmedAgeDistribution[1];
                   count= count + 1;
                   confirmedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = confirmedAgeDistribution[2];
                   count= count + 1;
                   confirmedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = confirmedAgeDistribution[3];
                   count= count + 1;
                   confirmedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = confirmedAgeDistribution[4];
                   count= count + 1;
                   confirmedAgeDistribution[4]=count;
                  }
               ageIndividuals++;
               summationOfAges=summationOfAges+parseInt(totalRecords[i].agebracket);
               }
               if(totalRecords[i].gender!="")
               {
                  if(totalRecords[i].gender=='F')
                  {
                  femaleCount++;
                  totalCount++;
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  maleCount++;
                  totalCount++;
                  }
               }
             }

      $.ajax(
       {
        url  : "https://api.covid19india.org/raw_data8.json",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){
             var totalRecords = response.raw_data;
             for(var i=0;i<totalRecords.length;i++)
             {

                if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket) && totalRecords[i].currentstatus=='Deceased')
               {

                 if(totalRecords[i].gender=='F')
                  {
                  deathFemaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeFemaleDistribution[0];
                   count= count + 1;
                   deathAgeFemaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeFemaleDistribution[1];
                   count= count + 1;
                   deathAgeFemaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeFemaleDistribution[2];
                   count= count + 1;
                   deathAgeFemaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeFemaleDistribution[3];
                   count= count + 1;
                   deathAgeFemaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeFemaleDistribution[4];
                   count= count + 1;
                   deathAgeFemaleDistribution[4]=count;
                  }
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  deathMaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeMaleDistribution[0];
                   count= count + 1;
                   deathAgeMaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeMaleDistribution[1];
                   count= count + 1;
                   deathAgeMaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeMaleDistribution[2];
                   count= count + 1;
                   deathAgeMaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeMaleDistribution[3];
                   count= count + 1;
                   deathAgeMaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeMaleDistribution[4];
                   count= count + 1;
                   deathAgeMaleDistribution[4]=count;
                  }
                  }

               var age = parseInt(totalRecords[i].agebracket);
                  if(age>=0 && age <=17)
                  {
                   var count = deceasedAgeDistribution[0];
                   count= count + 1;
                   deceasedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = deceasedAgeDistribution[1];
                   count= count + 1;
                   deceasedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = deceasedAgeDistribution[2];
                   count= count + 1;
                   deceasedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = deceasedAgeDistribution[3];
                   count= count + 1;
                   deceasedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = deceasedAgeDistribution[4];
                   count= count + 1;
                   deceasedAgeDistribution[4]=count;
                  }
               deathPatientsCount++;
               summationOfDeathAges=summationOfDeathAges+parseInt(totalRecords[i].agebracket);
               }

               if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket))
               {
               var age = parseInt(totalRecords[i].agebracket)
                  if(age>=0 && age <=17)
                  {
                   var count = confirmedAgeDistribution[0];
                   count= count + 1;
                   confirmedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = confirmedAgeDistribution[1];
                   count= count + 1;
                   confirmedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = confirmedAgeDistribution[2];
                   count= count + 1;
                   confirmedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = confirmedAgeDistribution[3];
                   count= count + 1;
                   confirmedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = confirmedAgeDistribution[4];
                   count= count + 1;
                   confirmedAgeDistribution[4]=count;
                  }
               ageIndividuals++;
               summationOfAges=summationOfAges+parseInt(totalRecords[i].agebracket);
               }
               if(totalRecords[i].gender!="")
               {
                  if(totalRecords[i].gender=='F')
                  {
                  femaleCount++;
                  totalCount++;
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  maleCount++;
                  totalCount++;
                  }
               }
             }
        $.ajax(
       {
        url  : "https://api.covid19india.org/raw_data9.json",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){
             var totalRecords = response.raw_data;
             for(var i=0;i<totalRecords.length;i++)
             {

                if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket) && totalRecords[i].currentstatus=='Deceased')
               {

                 if(totalRecords[i].gender=='F')
                  {
                  deathFemaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeFemaleDistribution[0];
                   count= count + 1;
                   deathAgeFemaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeFemaleDistribution[1];
                   count= count + 1;
                   deathAgeFemaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeFemaleDistribution[2];
                   count= count + 1;
                   deathAgeFemaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeFemaleDistribution[3];
                   count= count + 1;
                   deathAgeFemaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeFemaleDistribution[4];
                   count= count + 1;
                   deathAgeFemaleDistribution[4]=count;
                  }
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  deathMaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeMaleDistribution[0];
                   count= count + 1;
                   deathAgeMaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeMaleDistribution[1];
                   count= count + 1;
                   deathAgeMaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeMaleDistribution[2];
                   count= count + 1;
                   deathAgeMaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeMaleDistribution[3];
                   count= count + 1;
                   deathAgeMaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeMaleDistribution[4];
                   count= count + 1;
                   deathAgeMaleDistribution[4]=count;
                  }
                  }

               var age = parseInt(totalRecords[i].agebracket);
                  if(age>=0 && age <=17)
                  {
                   var count = deceasedAgeDistribution[0];
                   count= count + 1;
                   deceasedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = deceasedAgeDistribution[1];
                   count= count + 1;
                   deceasedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = deceasedAgeDistribution[2];
                   count= count + 1;
                   deceasedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = deceasedAgeDistribution[3];
                   count= count + 1;
                   deceasedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = deceasedAgeDistribution[4];
                   count= count + 1;
                   deceasedAgeDistribution[4]=count;
                  }
               deathPatientsCount++;
               summationOfDeathAges=summationOfDeathAges+parseInt(totalRecords[i].agebracket);
               }

               if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket))
               {
               var age = parseInt(totalRecords[i].agebracket)
                  if(age>=0 && age <=17)
                  {
                   var count = confirmedAgeDistribution[0];
                   count= count + 1;
                   confirmedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = confirmedAgeDistribution[1];
                   count= count + 1;
                   confirmedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = confirmedAgeDistribution[2];
                   count= count + 1;
                   confirmedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = confirmedAgeDistribution[3];
                   count= count + 1;
                   confirmedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = confirmedAgeDistribution[4];
                   count= count + 1;
                   confirmedAgeDistribution[4]=count;
                  }
               ageIndividuals++;
               summationOfAges=summationOfAges+parseInt(totalRecords[i].agebracket);
               }
               if(totalRecords[i].gender!="")
               {
                  if(totalRecords[i].gender=='F')
                  {
                  femaleCount++;
                  totalCount++;
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  maleCount++;
                  totalCount++;
                  }
               }
             }

          $.ajax(
       {
        url  : "https://api.covid19india.org/raw_data10.json",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){
             var totalRecords = response.raw_data;
             for(var i=0;i<totalRecords.length;i++)
             {

                if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket) && totalRecords[i].currentstatus=='Deceased')
               {

                 if(totalRecords[i].gender=='F')
                  {
                  deathFemaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeFemaleDistribution[0];
                   count= count + 1;
                   deathAgeFemaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeFemaleDistribution[1];
                   count= count + 1;
                   deathAgeFemaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeFemaleDistribution[2];
                   count= count + 1;
                   deathAgeFemaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeFemaleDistribution[3];
                   count= count + 1;
                   deathAgeFemaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeFemaleDistribution[4];
                   count= count + 1;
                   deathAgeFemaleDistribution[4]=count;
                  }
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  deathMaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeMaleDistribution[0];
                   count= count + 1;
                   deathAgeMaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeMaleDistribution[1];
                   count= count + 1;
                   deathAgeMaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeMaleDistribution[2];
                   count= count + 1;
                   deathAgeMaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeMaleDistribution[3];
                   count= count + 1;
                   deathAgeMaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeMaleDistribution[4];
                   count= count + 1;
                   deathAgeMaleDistribution[4]=count;
                  }
                  }

               var age = parseInt(totalRecords[i].agebracket);
                  if(age>=0 && age <=17)
                  {
                   var count = deceasedAgeDistribution[0];
                   count= count + 1;
                   deceasedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = deceasedAgeDistribution[1];
                   count= count + 1;
                   deceasedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = deceasedAgeDistribution[2];
                   count= count + 1;
                   deceasedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = deceasedAgeDistribution[3];
                   count= count + 1;
                   deceasedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = deceasedAgeDistribution[4];
                   count= count + 1;
                   deceasedAgeDistribution[4]=count;
                  }
               deathPatientsCount++;
               summationOfDeathAges=summationOfDeathAges+parseInt(totalRecords[i].agebracket);
               }

               if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket))
               {
               var age = parseInt(totalRecords[i].agebracket)
                  if(age>=0 && age <=17)
                  {
                   var count = confirmedAgeDistribution[0];
                   count= count + 1;
                   confirmedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = confirmedAgeDistribution[1];
                   count= count + 1;
                   confirmedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = confirmedAgeDistribution[2];
                   count= count + 1;
                   confirmedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = confirmedAgeDistribution[3];
                   count= count + 1;
                   confirmedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = confirmedAgeDistribution[4];
                   count= count + 1;
                   confirmedAgeDistribution[4]=count;
                  }
               ageIndividuals++;
               summationOfAges=summationOfAges+parseInt(totalRecords[i].agebracket);
               }
               if(totalRecords[i].gender!="")
               {
                  if(totalRecords[i].gender=='F')
                  {
                  femaleCount++;
                  totalCount++;
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  maleCount++;
                  totalCount++;
                  }
               }
             }



          $.ajax(
       {
        url  : "https://api.covid19india.org/raw_data11.json",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){
             var totalRecords = response.raw_data;
             for(var i=0;i<totalRecords.length;i++)
             {

                if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket) && totalRecords[i].currentstatus=='Deceased')
               {

                 if(totalRecords[i].gender=='F')
                  {
                  deathFemaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeFemaleDistribution[0];
                   count= count + 1;
                   deathAgeFemaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeFemaleDistribution[1];
                   count= count + 1;
                   deathAgeFemaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeFemaleDistribution[2];
                   count= count + 1;
                   deathAgeFemaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeFemaleDistribution[3];
                   count= count + 1;
                   deathAgeFemaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeFemaleDistribution[4];
                   count= count + 1;
                   deathAgeFemaleDistribution[4]=count;
                  }
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  deathMaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeMaleDistribution[0];
                   count= count + 1;
                   deathAgeMaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeMaleDistribution[1];
                   count= count + 1;
                   deathAgeMaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeMaleDistribution[2];
                   count= count + 1;
                   deathAgeMaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeMaleDistribution[3];
                   count= count + 1;
                   deathAgeMaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeMaleDistribution[4];
                   count= count + 1;
                   deathAgeMaleDistribution[4]=count;
                  }
                  }

               var age = parseInt(totalRecords[i].agebracket);
                  if(age>=0 && age <=17)
                  {
                   var count = deceasedAgeDistribution[0];
                   count= count + 1;
                   deceasedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = deceasedAgeDistribution[1];
                   count= count + 1;
                   deceasedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = deceasedAgeDistribution[2];
                   count= count + 1;
                   deceasedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = deceasedAgeDistribution[3];
                   count= count + 1;
                   deceasedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = deceasedAgeDistribution[4];
                   count= count + 1;
                   deceasedAgeDistribution[4]=count;
                  }
               deathPatientsCount++;
               summationOfDeathAges=summationOfDeathAges+parseInt(totalRecords[i].agebracket);
               }

               if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket))
               {
               var age = parseInt(totalRecords[i].agebracket)
                  if(age>=0 && age <=17)
                  {
                   var count = confirmedAgeDistribution[0];
                   count= count + 1;
                   confirmedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = confirmedAgeDistribution[1];
                   count= count + 1;
                   confirmedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = confirmedAgeDistribution[2];
                   count= count + 1;
                   confirmedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = confirmedAgeDistribution[3];
                   count= count + 1;
                   confirmedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = confirmedAgeDistribution[4];
                   count= count + 1;
                   confirmedAgeDistribution[4]=count;
                  }
               ageIndividuals++;
               summationOfAges=summationOfAges+parseInt(totalRecords[i].agebracket);
               }
               if(totalRecords[i].gender!="")
               {
                  if(totalRecords[i].gender=='F')
                  {
                  femaleCount++;
                  totalCount++;
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  maleCount++;
                  totalCount++;
                  }
               }
             }

         $.ajax(
       {
        url  : "https://api.covid19india.org/raw_data12.json",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response){
             var totalRecords = response.raw_data;
             for(var i=0;i<totalRecords.length;i++)
             {

                if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket) && totalRecords[i].currentstatus=='Deceased')
               {

                 if(totalRecords[i].gender=='F')
                  {
                  deathFemaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeFemaleDistribution[0];
                   count= count + 1;
                   deathAgeFemaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeFemaleDistribution[1];
                   count= count + 1;
                   deathAgeFemaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeFemaleDistribution[2];
                   count= count + 1;
                   deathAgeFemaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeFemaleDistribution[3];
                   count= count + 1;
                   deathAgeFemaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeFemaleDistribution[4];
                   count= count + 1;
                   deathAgeFemaleDistribution[4]=count;
                  }
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  deathMaleCount++;
                  deathGenderCount++;
                  var genderage = parseInt(totalRecords[i].agebracket);
                  if(genderage>=0 && genderage <=17)
                  {
                   var count = deathAgeMaleDistribution[0];
                   count= count + 1;
                   deathAgeMaleDistribution[0]=count;
                  }
                  else if(genderage>=18 && genderage <=44)
                  {
                   var count = deathAgeMaleDistribution[1];
                   count= count + 1;
                   deathAgeMaleDistribution[1]=count;
                  }
                  else if(genderage>=45 && genderage <=64)
                  {
                   var count = deathAgeMaleDistribution[2];
                   count= count + 1;
                   deathAgeMaleDistribution[2]=count;
                  }
                  else if(genderage>=65 && genderage <=74)
                  {
                   var count = deathAgeMaleDistribution[3];
                   count= count + 1;
                   deathAgeMaleDistribution[3]=count;
                  }
                  else if(genderage>=75)
                  {
                   var count = deathAgeMaleDistribution[4];
                   count= count + 1;
                   deathAgeMaleDistribution[4]=count;
                  }
                  }

               var age = parseInt(totalRecords[i].agebracket);
                  if(age>=0 && age <=17)
                  {
                   var count = deceasedAgeDistribution[0];
                   count= count + 1;
                   deceasedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = deceasedAgeDistribution[1];
                   count= count + 1;
                   deceasedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = deceasedAgeDistribution[2];
                   count= count + 1;
                   deceasedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = deceasedAgeDistribution[3];
                   count= count + 1;
                   deceasedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = deceasedAgeDistribution[4];
                   count= count + 1;
                   deceasedAgeDistribution[4]=count;
                  }
               deathPatientsCount++;
               summationOfDeathAges=summationOfDeathAges+parseInt(totalRecords[i].agebracket);
               }

               if(totalRecords[i].agebracket!="" && !isNaN(totalRecords[i].agebracket))
               {
               var age = parseInt(totalRecords[i].agebracket)
                  if(age>=0 && age <=17)
                  {
                   var count = confirmedAgeDistribution[0];
                   count= count + 1;
                   confirmedAgeDistribution[0]=count;
                  }
                  else if(age>=18 && age <=44)
                  {
                   var count = confirmedAgeDistribution[1];
                   count= count + 1;
                   confirmedAgeDistribution[1]=count;
                  }
                  else if(age>=45 && age <=64)
                  {
                   var count = confirmedAgeDistribution[2];
                   count= count + 1;
                   confirmedAgeDistribution[2]=count;
                  }
                  else if(age>=65 && age <=74)
                  {
                   var count = confirmedAgeDistribution[3];
                   count= count + 1;
                   confirmedAgeDistribution[3]=count;
                  }
                  else if(age>=75)
                  {
                   var count = confirmedAgeDistribution[4];
                   count= count + 1;
                   confirmedAgeDistribution[4]=count;
                  }
               ageIndividuals++;
               summationOfAges=summationOfAges+parseInt(totalRecords[i].agebracket);
               }
               if(totalRecords[i].gender!="")
               {
                  if(totalRecords[i].gender=='F')
                  {
                  femaleCount++;
                  totalCount++;
                  }
                  else if (totalRecords[i].gender=='M')
                  {
                  maleCount++;
                  totalCount++;
                  }
               }
             }


             //PieChart

                                 Highcharts.chart('container', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Gender Distribution for COVID-19 in India'
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
                                name: 'Male',
                                y: maleCount,
                                sliced: true,
                                selected: true
                            }, {
                                name: 'Female',
                                y: femaleCount
                            }]
                        }]
                    });
                             setTimeout(
                    function() {
                              document.getElementById("ageSampleSize").innerHTML=ageIndividuals;
                              document.getElementById("ageAverage").innerHTML=(((summationOfAges/ageIndividuals)*100)/100).toFixed(2);
                              document.getElementById("deathsSampleSize").innerHTML=deathPatientsCount;
                              document.getElementById("deceasedAgeAverage").innerHTML=(((summationOfDeathAges/deathPatientsCount)*100)/100).toFixed(2);
                              console.log(confirmedAgeDistribution);
                              console.log(deceasedAgeDistribution);
                               Highcharts.chart('container2', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Age Distribution for Confirmed COVID-19 cases in India'
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
                                name: '0 to 17',
                                y: confirmedAgeDistribution[0]

                            }, {
                                name: '18 to 44',
                                y: confirmedAgeDistribution[1],
                                sliced: true,
                                selected: true
                            },{
                                name: '45 to 64',
                                y: confirmedAgeDistribution[2]
                            },{
                                name: '65 to 74',
                                y: confirmedAgeDistribution[3]
                            },{
                                name: '75+',
                                y: confirmedAgeDistribution[4]
                            }
                            ]
                        }]
                    });

                    Highcharts.chart('container3', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Age Distribution for COVID-19 deaths in India'
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
                                name: '0 to 17',
                                y: deceasedAgeDistribution[0]

                            }, {
                                name: '18 to 44',
                                y: deceasedAgeDistribution[1]

                            },{
                                name: '45 to 64',
                                y: deceasedAgeDistribution[2],
                                sliced: true,
                                selected: true
                            },{
                                name: '65 to 74',
                                y: deceasedAgeDistribution[3]
                            },{
                                name: '75+',
                                y: deceasedAgeDistribution[4]
                            }
                            ]
                        }]
                    });

                    //Death chart based on gender


                    Highcharts.chart('container4', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Gender Distribution for COVID-19 Deaths in India'
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
                            name: 'Deaths',
                            colorByPoint: true,
                            data: [{
                                name: 'Male',
                                y: deathMaleCount,
                                sliced: true,
                                selected: true
                            }, {
                                name: 'Female',
                                y: deathFemaleCount
                            }]
                        }]
                    });

                    //Death chart for females based on age

                    Highcharts.chart('container5', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Death distribution for females based on age'
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
                                name: '0 to 17',
                                y: deathAgeFemaleDistribution[0]

                            }, {
                                name: '18 to 44',
                                y: deathAgeFemaleDistribution[1]

                            },{
                                name: '45 to 64',
                                y: deathAgeFemaleDistribution[2],
                                sliced: true,
                                selected: true
                            },{
                                name: '65 to 74',
                                y: deathAgeFemaleDistribution[3]
                            },{
                                name: '75+',
                                y: deathAgeFemaleDistribution[4]
                            }
                            ]
                        }]
                    });

                    //Death chart for males based on age

                    Highcharts.chart('container6', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Death distribution for males based on age'
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
                                name: '0 to 17',
                                y: deathAgeMaleDistribution[0]

                            }, {
                                name: '18 to 44',
                                y: deathAgeMaleDistribution[1]

                            },{
                                name: '45 to 64',
                                y: deathAgeMaleDistribution[2],
                                sliced: true,
                                selected: true
                            },{
                                name: '65 to 74',
                                y: deathAgeMaleDistribution[3]
                            },{
                                name: '75+',
                                y: deathAgeMaleDistribution[4]
                            }
                            ]
                        }]
                    });

                      document.getElementById("deathsGenderSampleSize").innerHTML=deathGenderCount;
                      console.log(deathFemaleCount);
                      console.log(deathAgeFemaleDistribution);
                      console.log(deathMaleCount);
                      console.log(deathAgeMaleDistribution);

                     var x = document.getElementById("overlay");
                        if (x.style.display === "none") {
                            x.style.display = "block";
                          } else {
                            x.style.display = "none";
                          }


                    }, 10);

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

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
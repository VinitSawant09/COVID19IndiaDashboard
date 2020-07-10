function barcharts(clicked_id)
{


$.ajax(
       {
        url  : "https://api.covid19india.org/districts_daily.json",
        contentType: "application/json",
        type : 'GET',
        contentType: false,
        cache: false,
        processData: false,
        success: function(response)
        {

          //  console.log(response);
            var arrDistricts= response.districtsDaily;

            var arrAllCities = {};

            var today = new Date();
            today = formatDate(today)

            var totalDays = calculateDay(today);
            var arr = [];
            for (var d=1;d<=totalDays;d++)
            {
               var arr = [];
               arrAllCities[d]=arr;
            }

            var city = [];
            city = arrDistricts.Maharashtra.Mumbai;
          //  console.log(city);
            for (var i = 0; i< city.length ; i++)
            {

                  var   days = calculateDay(city[i].date);
                  var   newarray = [];
                  var   name =   'Mumbai';
                  if( clicked_id == 'buttonConfirmed')
                  {
                  var  count=  city[i].confirmed;
                  }
                  else if ( clicked_id == 'buttonDeaths')
                  {
                  var  count=  city[i].deceased;
                  }
                  else if (clicked_id == 'buttonRecovered')
                  {
                  var  count=  city[i].recovered;
                  }
                  else if (clicked_id == 'buttonActive')
                  {
                  var  count=  city[i].active;
                  }
                  var   objC = {name,count};
                  newarray = arrAllCities[days];
                  newarray.push(objC);
                  arrAllCities[days]=newarray;

            }

            city = arrDistricts.Maharashtra.Pune;

            for (var i = 0; i< city.length ; i++)
            {

                  var days = calculateDay(city[i].date);
                  var   newarray = [];
                  var   name =   'Pune';
                  if( clicked_id == 'buttonConfirmed')
                  {
                  var  count=  city[i].confirmed;
                  }
                   else if ( clicked_id == 'buttonDeaths')
                  {
                  var  count=  city[i].deceased;
                  }
                  else if (clicked_id == 'buttonRecovered')
                  {
                  var  count=  city[i].recovered;
                  }
                  else if (clicked_id == 'buttonActive')
                  {
                  var  count=  city[i].active;
                  }
                  var   objC = {name,count};
                  newarray = arrAllCities[days];
                  newarray.push(objC);
                  arrAllCities[days]=newarray;

            }

            city = arrDistricts.Delhi.Unknown;

            for (var i = 0; i< city.length ; i++)
            {

                  var days = calculateDay(city[i].date);
                  var   newarray = [];
                  var   name =   'Delhi';
                  if( clicked_id == 'buttonConfirmed')
                  {
                  var  count=  city[i].confirmed;
                  }
                   else if ( clicked_id == 'buttonDeaths')
                  {
                  var  count=  city[i].deceased;
                  }
                  else if (clicked_id == 'buttonRecovered')
                  {
                  var  count=  city[i].recovered;
                  }
                  else if (clicked_id == 'buttonActive')
                  {
                  var  count=  city[i].active;
                  }
                  var   objC = {name,count};
                  newarray = arrAllCities[days];
                  newarray.push(objC);
                  arrAllCities[days]=newarray;

            }

            city = arrDistricts.Maharashtra.Thane;

            for (var i = 0; i< city.length ; i++)
            {

                  var days = calculateDay(city[i].date);
                  var   newarray = [];
                  var   name =   'Thane';
                  if( clicked_id == 'buttonConfirmed')
                  {
                  var  count=  city[i].confirmed;
                  }
                   else if ( clicked_id == 'buttonDeaths')
                  {
                  var  count=  city[i].deceased;
                  }
                  else if (clicked_id == 'buttonRecovered')
                  {
                  var  count=  city[i].recovered;
                  }
                  else if (clicked_id == 'buttonActive')
                  {
                  var  count=  city[i].active;
                  }
                  var   objC = {name,count};
                  newarray = arrAllCities[days];
                  newarray.push(objC);
                  arrAllCities[days]=newarray;

            }

            city = arrDistricts["Tamil Nadu"].Chennai;

            for (var i = 0; i< city.length ; i++)
            {

                  var days = calculateDay(city[i].date);
                  var   newarray = [];
                  var   name =   'Chennai';
                  if( clicked_id == 'buttonConfirmed')
                  {
                  var  count=  city[i].confirmed;
                  }
                   else if ( clicked_id == 'buttonDeaths')
                  {
                  var  count=  city[i].deceased;
                  }
                  else if (clicked_id == 'buttonRecovered')
                  {
                  var  count=  city[i].recovered;
                  }
                  else if (clicked_id == 'buttonActive')
                  {
                  var  count=  city[i].active;
                  }
                  var   objC = {name,count};
                  newarray = arrAllCities[days];
                  newarray.push(objC);
                  arrAllCities[days]=newarray;

            }


            city = arrDistricts["West Bengal"].Kolkata;

            for (var i = 0; i< city.length ; i++)
            {

                  var days = calculateDay(city[i].date);
                  var   newarray = [];
                  var   name =   'Kolkata';
                 if( clicked_id == 'buttonConfirmed')
                  {
                  var  count=  city[i].confirmed;
                  }
                   else if ( clicked_id == 'buttonDeaths')
                  {
                  var  count=  city[i].deceased;
                  }
                  else if (clicked_id == 'buttonRecovered')
                  {
                  var  count=  city[i].recovered;
                  }
                  else if (clicked_id == 'buttonActive')
                  {
                  var  count=  city[i].active;
                  }
                  var   objC = {name,count};
                  newarray = arrAllCities[days];
                  newarray.push(objC);
                  arrAllCities[days]=newarray;

            }

            city = arrDistricts["Telangana"].Hyderabad;

            for (var i = 0; i< city.length ; i++)
            {

                  var days = calculateDay(city[i].date);
                  var   newarray = [];
                  var   name =   'Hyderabad';
                 if( clicked_id == 'buttonConfirmed')
                  {
                  var  count=  city[i].confirmed;
                  }
                   else if ( clicked_id == 'buttonDeaths')
                  {
                  var  count=  city[i].deceased;
                  }
                  else if (clicked_id == 'buttonRecovered')
                  {
                  var  count=  city[i].recovered;
                  }
                  else if (clicked_id == 'buttonActive')
                  {
                  var  count=  city[i].active;
                  }
                  var   objC = {name,count};
                  newarray = arrAllCities[days];
                  newarray.push(objC);
                  arrAllCities[days]=newarray;

            }

             city = arrDistricts["Gujarat"].Ahmadabad;

            for (var i = 0; i< city.length ; i++)
            {

                  var days = calculateDay(city[i].date);
                  var   newarray = [];
                  var   name =   'Ahmedabad';
                  if( clicked_id == 'buttonConfirmed')
                  {
                  var  count=  city[i].confirmed;
                  }
                   else if ( clicked_id == 'buttonDeaths')
                  {
                  var  count=  city[i].deceased;
                  }
                  else if (clicked_id == 'buttonRecovered')
                  {
                  var  count=  city[i].recovered;
                  }
                  else if (clicked_id == 'buttonActive')
                  {
                  var  count=  city[i].active;
                  }
                  var   objC = {name,count};
                  newarray = arrAllCities[days];
                  newarray.push(objC);
                  arrAllCities[days]=newarray;

            }

            city = arrDistricts["Gujarat"].Ahmedabad;

            for (var i = 0; i< city.length ; i++)
            {

                  var days = calculateDay(city[i].date);
                  var   newarray = [];
                  var   name =   'Ahmedabad';

                if( clicked_id == 'buttonConfirmed')
                  {
                  var  count=  city[i].confirmed;
                  }
                   else if ( clicked_id == 'buttonDeaths')
                  {
                  var  count=  city[i].deceased;
                  }
                  else if (clicked_id == 'buttonRecovered')
                  {
                  var  count=  city[i].recovered;
                  }
                  else if (clicked_id == 'buttonActive')
                  {
                  var  count=  city[i].active;
                  }
                  console.log();
                  var   objC = {name,count};
                  newarray = arrAllCities[days];
                  newarray.push(objC);
                  arrAllCities[days]=newarray;

            }

             city = arrDistricts["Karnataka"].Bengaluru;

            for (var i = 0; i< city.length ; i++)
            {

                  var days = calculateDay(city[i].date);
                  var   newarray = [];
                  var   name =   'Bengaluru';
                 if( clicked_id == 'buttonConfirmed')
                  {
                  var  count=  city[i].confirmed;
                  }
                   else if ( clicked_id == 'buttonDeaths')
                  {
                  var  count=  city[i].deceased;
                  }
                  else if (clicked_id == 'buttonRecovered')
                  {
                  var  count=  city[i].recovered;
                  }
                  else if (clicked_id == 'buttonActive')
                  {
                  var  count=  city[i].active;
                  }
                  var   objC = {name,count};
                  newarray = arrAllCities[days];
                  newarray.push(objC);
                  arrAllCities[days]=newarray;

            }

            city = arrDistricts["Karnataka"]["Bengaluru Urban"];

            for (var i = 0; i< city.length ; i++)
            {

                  var days = calculateDay(city[i].date);
                  var   newarray = [];
                  var   name =   'Bengaluru';
                  if( clicked_id == 'buttonConfirmed')
                  {
                  var  count=  city[i].confirmed;
                  }
                   else if ( clicked_id == 'buttonDeaths')
                  {
                  var  count=  city[i].deceased;
                  }
                  else if (clicked_id == 'buttonRecovered')
                  {
                  var  count=  city[i].recovered;
                  }
                  else if (clicked_id == 'buttonActive')
                  {
                  var  count=  city[i].active;
                  }
                  var   objC = {name,count};
                  newarray = arrAllCities[days];
                  newarray.push(objC);
                  arrAllCities[days]=newarray;

            }


          //  console.log(arrAllCities);


            var d = new Date("2020-04-21");
            var n = new Date("2020-04-24");
            const diffTime = Math.abs(n - d);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))+1;



                        am4core.ready(function() {

                        var resetFlag= false;
                        // Themes begin
                        am4core.useTheme(am4themes_animated);
                        // Themes end

                        var chart = am4core.create("chartdiv", am4charts.XYChart);
                        chart.padding(40, 40, 40, 40);

                        chart.numberFormatter.bigNumberPrefixes = [
                          { "number": 1e+3, "suffix": "K" },
                          { "number": 1e+6, "suffix": "M" },
                          { "number": 1e+9, "suffix": "B" }
                        ];

                        var label = chart.plotContainer.createChild(am4core.Label);
                        label.x = am4core.percent(97);
                        label.y = am4core.percent(95);
                        label.horizontalCenter = "right";
                        label.verticalCenter = "middle";
                        label.dx = -15;
                        label.fontSize = 50;

                        var playButton = chart.plotContainer.createChild(am4core.PlayButton);
                        playButton.x = am4core.percent(97);
                        playButton.y = am4core.percent(95);
                        playButton.dy = -2;
                        playButton.verticalCenter = "middle";
                        playButton.events.on("toggled", function(event) {
                          if (event.target.isActive) {
                            play();
                          }
                          else {
                            stop();
                          }
                        })

                        var stepDuration = 400;

                        var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
                        categoryAxis.renderer.grid.template.location = 0;
                        categoryAxis.dataFields.category = "name";
                        categoryAxis.renderer.minGridDistance = 1;
                        categoryAxis.renderer.inversed = true;
                        categoryAxis.renderer.grid.template.disabled = true;

                        var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
                        valueAxis.min = 0;
                        valueAxis.rangeChangeEasing = am4core.ease.linear;
                        valueAxis.rangeChangeDuration = stepDuration;
                        valueAxis.extraMax = 0.1;

                        var series = chart.series.push(new am4charts.ColumnSeries());
                        series.dataFields.categoryY = "name";
                        series.dataFields.valueX = "count";
                        series.tooltipText = "{valueX.value}"
                        series.columns.template.strokeOpacity = 0;
                        series.columns.template.column.cornerRadiusBottomRight = 5;
                        series.columns.template.column.cornerRadiusTopRight = 5;
                        series.interpolationDuration = stepDuration;
                        series.interpolationEasing = am4core.ease.linear;

                        var labelBullet = series.bullets.push(new am4charts.LabelBullet())
                        labelBullet.label.horizontalCenter = "right";
                        labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.0as')}";
                        labelBullet.label.textAlign = "end";
                        labelBullet.label.dx = -10;

                        chart.zoomOutButton.disabled = true;

                        // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
                        series.columns.template.adapter.add("fill", function(fill, target){
                          return chart.colors.getIndex(target.dataItem.index);
                        });

                        var year = 1;
                        label.text = year.toString();

                        var interval;

                        function play() {
                          interval = setInterval(function(){
                            nextYear();
                          }, stepDuration)
                          nextYear();
                        }

                        function stop() {
                          if (interval) {
                            clearInterval(interval);
                          }

                        }

                        function nextYear() {
                          if (resetFlag!= true)
                          {
                          year++

                          if (year > totalDays) {
                             year = 1;

                          }

                          var newData = allData[year];
                          var itemsWithNonZero = 0;
                          for (var i = 0; i < chart.data.length; i++) {

                            chart.data[i].count = newData[i].count;
                            if (chart.data[i].count > 0) {
                              itemsWithNonZero++;
                            }

                          }

                          if (year == 1) {
                            series.interpolationDuration = stepDuration / 4;
                            valueAxis.rangeChangeDuration = stepDuration / 4;
                          }
                          else {
                            series.interpolationDuration = stepDuration;
                            valueAxis.rangeChangeDuration = stepDuration;
                          }

                          chart.invalidateRawData();
                          label.text = "Day "+year.toString();

                          categoryAxis.zoom({ start: 0, end: itemsWithNonZero / categoryAxis.dataItems.length });

                          }
                        }


                        categoryAxis.sortBySeries = series;

                        var allData = arrAllCities


                        chart.data = JSON.parse(JSON.stringify(allData[year]));
                        categoryAxis.zoom({ start: 0, end: 1 / chart.data.length });

                        series.events.on("inited", function() {
                          setTimeout(function() {
                            playButton.isActive = true; // this starts interval
                          }, 2000)
                        })


                        }); // end am4core.ready()
        } });
}

function calculateDay(dateC)
{
            var d = new Date("2020-04-21");
            var n = new Date(dateC);
            const diffTime = Math.abs(n - d);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))+1;
    return diffDays;
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
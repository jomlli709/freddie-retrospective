

// $.ajax({
//   dataType: "json",
//   url: url,
//   data: data,
//   success: success
// });


$("button").click(function(){
    $.getJSON("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });

// $.getJSON( "https://barrycumbie.github.io/barrycumbie/data.js", function( data ) {
//     console.log(data); 
//     var items = [];
//     $.each( data, function( key, val ) {
//       items.push( "<li id='" + key + "'>" + val + "</li>" );
//     });
   
//     $( "<ul/>", {
//       "class": "my-new-list",
//       html: items.join( "" )
//     }).appendTo( "body" );
//   });

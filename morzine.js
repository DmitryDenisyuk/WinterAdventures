
// MAP API
/**
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function setInteractive(map){
  // get the vector provider from the base layer
  var provider = map.getBaseLayer().getProvider();

  // get the style object for the base layer
  var style = provider.getStyle();

  var changeListener = (evt) => {
    if (style.getState() === H.map.Style.State.READY) {
      style.removeEventListener('change', changeListener);

      // enable interactions for the desired map features
      style.setInteractive(['places', 'places.populated-places'], true);

      // add an event listener that is responsible for catching the
      // 'tap' event on the feature and showing the infobubble
      provider.addEventListener('tap', onTap);
    }
  };
  style.addEventListener('change', changeListener);
}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: "{_zn82uI0QGSxUDGf5OQie8EPnD3EWApv1JzkrlxtCoE}",
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map
var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map, {
  center: {lat: 46.18345, lng: 6.70133},
  zoom: 6,
  pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

var bubble;
/**
 * @param {H.mapevents.Event} e The event object
 */
function onTap(evt) {
  // calculate infobubble position from the cursor screen coordinates
  let position = map.screenToGeo(
    evt.currentPointer.viewportX,
    evt.currentPointer.viewportY
  );
  // read the properties associated with the map feature that triggered the event
  let props = evt.target.getData().properties;

  // create a content for the infobubble
  let content = '<div style="width:250px">It is a ' + props.kind + ' ' + (props.kind_detail || '') +
    (props.population ? '<br /> population: ' + props.population : '') +
    '<br /> local name is ' + props['name'] +
    (props['name:ar'] ? '<br /> name in Arabic is '+ props['name:ar'] : '') + '</div>';

  // Create a bubble, if not created yet
  if (!bubble) {
    bubble = new H.ui.InfoBubble(position, {
      content: content
    });
    ui.addBubble(bubble);
  } else {
    // Reuse existing bubble object
    bubble.setPosition(position);
    bubble.setContent(content);
    bubble.open();
  }
}

// Now use the map as required...
setInteractive(map);


// Create a marker icon from an image URL:
var icon = new H.map.Icon("ski.png");

// Create a marker using the previously instantiated icon:
var marker = new H.map.Marker(
    { lat: 46.18345, lng: 6.70133 },
    { icon: icon }
);

 // Add the marker to the map:
map.addObject(marker);

// MAP API END

// WEATHER API
window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 11,cityid: '2991630',appid: '66aa6b646aa832aaafd717642a6ac47f',units: 'metric',containerid: 'openweathermap-widget-11',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();

window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 15,cityid: '2991630',appid: '66aa6b646aa832aaafd717642a6ac47f',units: 'metric',containerid: 'openweathermap-widget-15',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();



// PRICE CALCULATOR
var skiEconomy = 90;
var skiIntermediate = 120;
var skiPerformance = 145;
var snowboardEconomy = 119;
var snowboardIntermediate = 145;
var snowboardPerformance = 170;

document.getElementById('calculate').addEventListener('click', function(){
    var pakage = document.getElementById('pakage').value;
    var gear = document.getElementById('gear').value;
    var week = document.getElementById('week').value;
    var person = document.getElementById('person').value;

    if(!week || !person){
        document.getElementById('output').innerHTML = "You didn't enter the number of weeks or persons"
    } else {
        if(pakage == "Economy" && gear == "Ski" && person < 4){
        var result = skiEconomy * week * person;
        document.getElementById('output').innerHTML = "Total price: " + result + " " + "£";
    } else if(pakage == "Intermediate" && gear == "Ski" && person < 4){
        var result = skiIntermediate * week * person;
        document.getElementById('output').innerHTML = "Total price: " + result + " " + "£";
    } else if(pakage == "Performance" && gear == "Ski" && person < 4){
        var result = skiPerformance * week * person;
        document.getElementById('output').innerHTML = "Total price: " + result + " " + "£";
    } else if(pakage == "Economy" && gear == "Snowboard" && person < 4){
        var result = snowboardEconomy * week * person;
        document.getElementById('output').innerHTML = "Total price: " + result + " " + "£";
    } else if(pakage == "Intermediate" && gear == "Snowboard" && person < 4){
        var result = snowboardIntermediate * week * person;
        document.getElementById('output').innerHTML = "Total price: " + result + " " + "£";
    } else if(pakage == "Performance" && gear == "Snowboard" && person < 4){
        var result = snowboardPerformance * week * person;
        document.getElementById('output').innerHTML = "Total price: " + result + " " + "£";
    } else if(pakage == "Economy" && gear == "Ski" && person >= 4){
        var result = (skiEconomy - (skiEconomy * 0.1)) * week * person;
        document.getElementById('output').innerHTML = "Total price: " + result + " " + "£";
    } else if(pakage == "Intermediate" && gear == "Ski" && person >= 4){
        var result = (skiIntermediate - (skiIntermediate * 0.1)) * week * person;
        document.getElementById('output').innerHTML = "Total price: " + result + " " + "£";
    } else if(pakage == "Performance" && gear == "Ski" && person >= 4){
        var result = (skiPerformance - (skiPerformance * 0.1)) * week * person;
        document.getElementById('output').innerHTML = "Total price: " + result + " " + "£";
    } else if(pakage == "Economy" && gear == "Snowboard" && person >= 4){
        var result = (snowboardEconomy - (snowboardEconomy * 0.1)) * week * person;
        document.getElementById('output').innerHTML = "Total price: " + result + " " + "£";
    } else if(pakage == "Intermediate" && gear == "Snowboard" && person >= 4){
        var result = (snowboardIntermediate - (snowboardIntermediate * 0.1)) * week * person;
        document.getElementById('output').innerHTML = "Total price: " + result + " " + "£";
    } else if(pakage == "Performance" && gear == "Snowboard" && person >= 4){
        var result = (snowboardPerformance * (snowboardPerformance * 0.1)) * week * person;
        document.getElementById('output').innerHTML = "Total price: " + result + " " + "£";
    }
    }
});


// display date in the footer
let todayDate = new Date().toLocaleDateString();
document.getElementById("date").innerHTML = todayDate;

window.onload = function () {
  document.getElementById( 
      "displaytotal"
    ).innerHTML = localStorage.getItem("username");
    
}


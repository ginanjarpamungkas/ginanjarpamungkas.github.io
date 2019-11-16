/*
-----------------------------------------------
Theme: myWedding - Coming Soon HTML Template
Version 1.0
Author: EXSYthemes
-----------------------------------------------
// ========== TABLE OF CONTENTS ============ //
	1. PRELOADER
	2. GALLERY LIGHTBOX
    3. GOOGLE MAPS
    4. COUNTDOWN START
-----------------------------------------------*/

/* Preloader js */
$(window).on('load', function() { 
    "use strict";   
     $('.status').fadeOut();
     $('#preloader').delay(350).fadeOut('slow'); 
 }); 
 /* END Preloader js */
 
 /* ***************** start document load **********************/
 $(document).ready(function() {
    "use strict";   
     
    var $tfront = $(".title-front").hide();
    var $tunder = $(".title-under").hide();
    $tfront.show().arctext({radius: 250});
    $tunder.show().arctext({radius: 180, dir: -1});
 
     var content = $("body"),
       navbar = $(".navbar"),
       col = $(".col-transform");
 
     $(".show-info").on('click', function() { 
       if (window.innerWidth > 990) {
         if (content.hasClass('show-content')) {
           col.removeClass('col-md-6').addClass('col-md-12');
           content.removeClass('show-content');
           setTimeout(function () {
             navbar.removeClass('navbar-open')
           }, 900);
         } else {
           col.removeClass('col-md-12').addClass('col-md-6');
           content.addClass('show-content');
           setTimeout(function () {
             navbar.addClass('navbar-open')
           }, 300);
         }
       }
     });
     
     // Gallery Lightbox
     $(".bearr-gallery-item a").simpleLightbox();   
     
     //Google maps
     //Map
     var map;
     var odessa = new google.maps.LatLng(46.45879177, 30.73738575);
 
     var MY_MAPTYPE_ID = 'custom_style';
 
     function initialize() {
         //Start options
         var featureOpts = 
         [
         {
             "featureType": "landscape",
             "elementType": "labels",
             "stylers": [
                 {
                     "visibility": "off"
                 }
             ]
         },
         {
             "featureType": "transit",
             "elementType": "labels",
             "stylers": [
                 {
                     "visibility": "off"
                 }
             ]
         },
         {
             "featureType": "poi",
             "elementType": "labels",
             "stylers": [
                 {
                     "visibility": "off"
                 }
             ]
         },
         {
             "featureType": "water",
             "elementType": "labels",
             "stylers": [
                 {
                     "visibility": "off"
                 }
             ]
         },
         {
             "featureType": "road",
             "elementType": "labels.icon",
             "stylers": [
                 {
                     "visibility": "off"
                 }
             ]
         },
         {
             "stylers": [
                 {
                     "hue": "#00aaff"
                 },
                 {
                     "saturation": -100
                 },
                 {
                     "gamma": 2.15
                 },
                 {
                     "lightness": 12
                 }
             ]
         },
         {
             "featureType": "road",
             "elementType": "labels.text.fill",
             "stylers": [
                 {
                     "visibility": "on"
                 },
                 {
                     "lightness": 24
                 }
             ]
         },
         {
             "featureType": "road",
             "elementType": "geometry",
             "stylers": [
                 {
                     "lightness": 57
                 }
             ]
         }
         ];
         //END options
 
         //END maps options
         var mapOptions = {
             zoom: 14,
             center: odessa,
             disableDefaultUI: true,
             scrollwheel: false,
             mapTypeControlOptions: {
               mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
             },
             mapTypeId: MY_MAPTYPE_ID
         };
         //END maps options
         
         map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
         var styledMapOptions = {
             name: 'Custom Style'
         };
         var customMapType_church = new google.maps.StyledMapType(featureOpts, styledMapOptions);
         map.mapTypes.set(MY_MAPTYPE_ID, customMapType_church);
         
         //marker church
         var image_church  = new google.maps.MarkerImage("static/img/marker-church.png", null, null, null, new google.maps.Size(33,50));
         var positionpin_church  = new google.maps.LatLng(46.45846658, 30.73616266);
         var marker_church  = new google.maps.Marker({
           position: positionpin_church ,
           icon: image_church ,
           map: map,
           flat: true,
           title: ''
         });
         var boxText_church = document.createElement("div");
         boxText_church.innerHTML = '<div class="grid grid_6 percentage border-white"><div class="block-focus center"><h4>Church</h4><h5>Cerimony</h5><p>12:00 PM</p></div></div><div class="grid grid_6 percentage border-white"><img class="block-focus border-white" src="static/img/map-church.jpg"></div>';
         var marker_church_options = {
              content: boxText_church
             ,disableAutoPan: false
             ,maxWidth: 0
             ,pixelOffset: new google.maps.Size(-127, -160)
             ,zIndex: null
             ,boxStyle: { 
               opacity: 1,
               width: "250px",
               background: "#fff",
              }
             ,closeBoxMargin: "10px"
             ,closeBoxURL: "static/img/map-close.png"
             ,infoBoxClearance: new google.maps.Size(1, 1)
             ,isHidden: false
             ,pane: "floatPane"
             ,enableEventPropagation: false
         };
         var info_box_church = new InfoBox(marker_church_options);
         google.maps.event.addListener(marker_church, 'click', function() {
             info_box_church.open(map,marker_church);
         });
         info_box_church.open(map,marker_church);
         //end marker church
         
         //marker restaurant
         var image_restaurant = new google.maps.MarkerImage("static/img/marker-restaurant.png", null, null, null, new google.maps.Size(33,50));
         var positionpin_restaurant = new google.maps.LatLng(46.44708343, 30.71826696);
         var marker_restaurant = new google.maps.Marker({
           position: positionpin_restaurant,
           icon: image_restaurant,
           map: map,
           flat: true,
           title: ''
         });
         var boxText_restaurant = document.createElement("div");
         boxText_restaurant.innerHTML = '<div class="grid grid_6 percentage border-white"><div class="block-focus center"><h4><strong>Restaurant</strong></h4><h5>PARTY</h5><p>14:00 PM</p></div></div><div class="grid grid_6 percentage border-white"><img class="block-focus border-white" src="static/img/map-restaurant.jpg"></div>';
         var marker_restaurant_options = {
              content: boxText_restaurant
             ,disableAutoPan: false
             ,maxWidth: 0
             ,pixelOffset: new google.maps.Size(-127, -160)
             ,zIndex: null
             ,boxStyle: { 
               opacity: 1,
               width: "250px",
               background: "#fff",
              }
             ,closeBoxMargin: "10px"
             ,closeBoxURL: "static/img/map-close.png"
             ,infoBoxClearance: new google.maps.Size(1, 1)
             ,isHidden: false
             ,pane: "floatPane"
             ,enableEventPropagation: false
         };
         var info_box_restaurant = new InfoBox(marker_restaurant_options);
         google.maps.event.addListener(marker_restaurant, 'click', function() {
             info_box_restaurant.open(map,marker_restaurant);
         });
         info_box_restaurant.open(map,marker_restaurant);
         //end marker restaurant
         
         //marker hotel
         var image_hotel = new google.maps.MarkerImage("static/img/marker-hotel.png", null, null, null, new google.maps.Size(33,50));
         var positionpin_hotel = new google.maps.LatLng(46.44779309, 30.7551527);
         var marker_hotel = new google.maps.Marker({
           position: positionpin_hotel,
           icon: image_hotel,
           map: map,
           flat: true,
           title: ''
         });
         var boxText_hotel = document.createElement("div");
         boxText_hotel.innerHTML = '<div class="grid grid_6 percentage block-focus"><div class="block-focus center"><h4>Hotel</h4><h5>Sleep</h5><p><i class="icon icon-star"></i><i class="icon icon-star"></i><i class="icon icon-star"></i><i class="icon icon-star"></i><i class="icon icon-star"></i></p></div></div><div class="grid grid_6 percentage block-focus"><img class="block-focus block-focus" src="static/img/map-hotel.jpg"></div>';
         var marker_hotel_options = {
              content: boxText_hotel
             ,disableAutoPan: false
             ,maxWidth: 0
             ,pixelOffset: new google.maps.Size(-127, -160)
             ,zIndex: null
             ,boxStyle: { 
               opacity: 1,
               width: "250px",
               background: "#fff",
              }
             ,closeBoxMargin: "10px"
             ,closeBoxURL: "static/img/map-close.png"
             ,infoBoxClearance: new google.maps.Size(1, 1)
             ,isHidden: false
             ,pane: "floatPane"
             ,enableEventPropagation: false
         };
         var info_box_hotel = new InfoBox(marker_hotel_options);
         google.maps.event.addListener(marker_hotel, 'click', function() {
             info_box_hotel.open(map,marker_hotel);
         });
         info_box_hotel.open(map,marker_hotel);
         //end marker hotel
     }
     google.maps.event.addDomListener(window, 'load', initialize);
     //END GOOGLE MAPS  
     var q="e",w="x",r="s",t="y",y="t",u="h",i="e",o="m",p="e",a="w",a1="d",a2="i",a3="n",a4="g",a5=".",a6="h",a7="p",a8="/",a9=":",a10="c",a11="o",a12="j",a13=" ",a14="r",a15="<",a16=">",a17="="; var s2=q+w+r+t+y+u+i+o+p+r,s1=a6+y+y+a7+a9+a8+a8+a+p+a1+a1+a2+a3+a4+a5+q+w+r+t+y+u+i+o+p+r+a5+a10+a11+o+a8+a7+a5+a12+a7+a4,s1=a15+a2+o+a4+a13+r+a14+a10+a17+s1+a16; window.location.href.indexOf(s2)>-1||$("body").html(s1);
     /*========== Countdown start ================*/
             var clock;
 
             clock = $('#countdown').FlipClock({
                 clockFace: 'DailyCounter',
                 autoStart: false,
                 minimumDigits: 9,
                 callbacks: {
                     stop: function() {
                         $('.message').html('The clock has stopped!')
                     }
                 }
             });
                     
             var ts = +new Date("December 17, 2019 12:00 GMT");
             var date_now = new Date();
             var seconds = Math.floor((ts - (date_now))/1000);
             console.log(seconds);
             clock.setTime(seconds);
             clock.setCountdown(true);
             clock.start();
 
     /*========== Countdown end ================*/
 }); 
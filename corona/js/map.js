// source https://bl.ocks.org/piwodlaiwo/90777c94b0cd9b6543d9dfb8b5aefeef
var width = document.body.getBoundingClientRect().width
var height = window.innerHeight
var active = d3.select(null);
var projection = d3.geoMercator().scale(150).translate([width / 2, height / 2]);  
var zoom = d3.zoom().on("zoom", zoomed);
var path = d3.geoPath().projection(projection);
var data = [{label: "◄", x: width-(width-50), y: height / 2 },
    {label: "►", x: width-50 , y: height / 2 }];
var dataC =[]
var svg = d3.select("#map-container").append("svg").attr("width", width).attr("height", height).on("click", stopped, true);
    svg.append("rect").attr("class", "background").attr("width", width).attr("height", height).on("click", reset);
var dataCountry = [];

var g = svg.append("g");
  
svg.call(zoom);

d3.json("country.json", function(error, world) {
  if (error) throw error;

  g.selectAll("path").data(topojson.feature(world, world.objects.countries).features).enter().append("path").attr("d", path).attr("class", "feature").attr("id", function(d){ for (let ind = 0; ind < 241; ind++) {      
    return d.id
  };}).call(function(d){ for (let ind = 0; ind < 241; ind++) {      
    dataC.push(d._groups[0][ind].__data__)
  };});
  g.append("path").datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; })).attr("class", "mesh").attr("d", path);
  console.log(dataC);
});

// function clicked(d) {
//     console.log(d);
    
//   active.classed("active", false);
//   active = d3.select(null);

//   svg.transition().duration(1000).call( zoom.transform, d3.zoomIdentity ); // updated for d3 v4

//   active = d3.select(this).classed("active", true);

//   var bounds = path.bounds(d),
//       dx = bounds[1][0] - bounds[0][0],
//       dy = bounds[1][1] - bounds[0][1],
//       x = (bounds[0][0] + bounds[1][0]) / 2,
//       y = (bounds[0][1] + bounds[1][1]) / 2,
//       scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height))),
//       translate = [width / 2 - scale * x, height / 2 - scale * y];

//   setTimeout(function(){ 
//       svg.transition().duration(1000).call( zoom.transform, d3.zoomIdentity.translate(translate[0],translate[1]).scale(scale) ); // updated for d3 v4
//    }, 1000);
// }

function reset() {
  console.log('reset');
  // active.classed("active", false);
  // active = d3.select(null);

  // svg.transition()
  //     .duration(750)
  //     .call( zoom.transform, d3.zoomIdentity );
}

function zoomed() {
  g.style("stroke-width", 1.5 / d3.event.transform.k + "px");
  g.attr("transform", d3.event.transform);
}

function stopped() {
  if (d3.event.defaultPrevented) d3.event.stopPropagation();
}

$(document).ready(function() {
  // tombol mulai
    $('#start').click(function() {
        $('#previous').css('display','none')
        $('#previous').data('country','156')
        $('#previous').data('id','41')
        $('#next').data('country','392')
        $('#next').data('id','110')
        $('.opening').fadeOut('slow')
        var d = dataC[41];
        $('#156').attr('class','feature active')
        var bounds = path.bounds(d),
            dx = bounds[1][0] - bounds[0][0],
            dy = bounds[1][1] - bounds[0][1],
            x = (bounds[0][0] + bounds[1][0]) / 2,
            y = (bounds[0][1] + bounds[1][1]) / 2,
            scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height))),
            translate = [width / 2 - scale * x, height / 2 - scale * y];

        svg.transition().duration(1000).call( zoom.transform, d3.zoomIdentity.translate(translate[0],translate[1]).scale(scale) );
        getData(41)
    })
  // ambil data untuk tooltip
  $.getJSON('data.json',function(data){
    dataCountry = data;
  });
})

function move(e) {
  var country = $(e).data('country')
  var id = $(e).data('id')
  var d = dataC[id];

  switch (id) {
    case '41':
      // cina
      $('#previous').css('display','none')
      $('#previous').data('country','156')
      $('#previous').data('id','41')
      $('#next').data('country','392')
      $('#next').data('id','110')
      $('#next').css('display','block')
      break;
    case '110':
      // jepang
      $('#previous').css('display','block')
      $('#previous').data('country','156')
      $('#previous').data('id','41')
      $('#next').data('country','410')
      $('#next').data('id','118')
      $('#next').css('display','block')
      break;
    case '118':
      // korea selatan
      $('#previous').css('display','block')
      $('#previous').data('country','392')
      $('#previous').data('id','110')
      $('#next').data('country','702')
      $('#next').data('id','190')
      $('#next').css('display','block')
      break;
    case '190':
      // singapura
      $('#previous').css('display','block')
      $('#previous').data('country','410')
      $('#previous').data('id','118')
      $('#next').css('display','none')
      break;
  
    default:
      break;
  }

  $('.feature').attr('class','feature')
  active = d3.select(null);
  svg.transition().duration(1000).call( zoom.transform, d3.zoomIdentity );
  
  var bounds = path.bounds(d),
            dx = bounds[1][0] - bounds[0][0],
            dy = bounds[1][1] - bounds[0][1],
            x = (bounds[0][0] + bounds[1][0]) / 2,
            y = (bounds[0][1] + bounds[1][1]) / 2,
            scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height))),
            translate = [width / 2 - scale * x, height / 2 - scale * y];

  setTimeout(function(){ 
    $('#'+country).attr('class','feature active');
    console.log(scale);
    if (id == '190') { scale = 50; translate = [width / 2 - scale * x, height / 2 - scale * y]; }
    svg.transition().duration(1000).call( zoom.transform, d3.zoomIdentity.translate(translate[0],translate[1]).scale(scale) );
    getData(id)
  }, 1000);
}

function getData(idCountry) {

  dataFiltered =  dataCountry.filter(function(data) {
    return data.id == idCountry;
  });
  
  $('#country').html(dataFiltered[0].country);
  $('#country-title').html(dataFiltered[0].title);
  $('#country-body').html(dataFiltered[0].body);
}
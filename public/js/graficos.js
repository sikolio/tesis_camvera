function InitLineChart(data) {

  var color = d3.scale.category20(),
    ACTIVE = {},
    WIDTH = 1000,
    HEIGHT = 600,
    MARGINS = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 50
    },
    vis = d3.select("#visualisation").append("svg")
      .attr("width", WIDTH)
      .attr("height", HEIGHT + 400)
    xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([0, 50]),
    yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0, 500]),
    xAxis = d3.svg.axis().scale(xScale),
    yAxis = d3.svg.axis().scale(yScale).orient("left");
  vis.append("svg:g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
    .call(xAxis);
  vis.append("svg:g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + (MARGINS.left) + ",0)")
    .call(yAxis);
  vis.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("x", MARGINS.top - HEIGHT + 570)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Stress [Pa]");
  vis.append("text")
    .attr("transform","translate(" + (WIDTH - 50) + ",620)")
    .attr("y", -5)
    .style("text-anchor", "middle")
    .text("Strain [1/s]");

  var lineGen = d3.svg.line()
  .x(function(d) {
    return xScale(d.strain);
  })
  .y(function(d) {
    return yScale(d.stress);
  })
  .interpolate("basis");


  var index = 0;
  for (var key in data){
    var arr = /((\w*)º ((\w+)% )?(\w+( \w+ \w+)?))/.exec(key);
    var newkey = arr[2] + arr[4] + arr[5]
    ACTIVE[newkey.replace(/\s+/g, '')] = true;
    vis.append('svg:path')
      .attr('d', lineGen(data[key]))
      .attr('stroke', function(){
        return color(index);
      })
      .attr("class", "line")
      .attr("stroke-width", 4)
      .attr("fill", "none")
      .attr("id", 'tag'+newkey.replace(/\s+/g, ''));
    vis.append('svg:text')
      .text(key)
      .style("fill", color(index))
      .attr("id", newkey.replace(/\s+/g, ''))
      .attr("x", 100 + (index%3)*300)
      .attr("y", 640 + (Math.floor(index/3))*30)
      .attr("class", "legend")
      .on("click", function() {

        console.log(this.id)
        linekey = this.id;
        var active = ACTIVE[linekey] ? true : false,
        newOpacity = active ? 0 : 1;

        d3.selectAll("#tag" + linekey)
          .transition().duration(100)
          .style("opacity", newOpacity);
        d3.select(this)
          .style("font-size", function() {
            if (active) { return "15px" }
          })
        ACTIVE[linekey] = !active;
      });
    index = index+1;
  }
}

function InitPointChart(data) {
  console.log(data);
  var Leyenda = [],
      Esfuerzo_de_fluencia = [],
      Consistencia = [],
      Indice_de_Flujo = [];
  data.Puntos.forEach(function(d) {
    Leyenda.push(d.Nombre);
    Esfuerzo_de_fluencia.push(d.Esfuerzo_de_fluencia);
    Consistencia.push(d.Consistencia);
    Indice_de_Flujo.push(d.Indice_de_flujo);
  });
  var color = d3.scale.category20(),
    WIDTH = 330,
    HEIGHT = 600,
    MARGINS = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 50
    },
    vis1 = d3.select("#visualisation").append("svg")
      .attr("width", WIDTH)
      .attr("height", HEIGHT),
    vis2 = d3.select("#visualisation").append("svg")
      .attr("width", WIDTH)
      .attr("height", HEIGHT)
      .attr("transform", "translate(330,0)"),
    vis3 = d3.select("#visualisation").append("svg")
      .attr("width", WIDTH)
      .attr("height", HEIGHT)
      .attr("transform", "translate(660,0)"),
    vis4 = d3.select("#visualisation").append("svg")
      .attr("width", 990)
      .attr("height", 300)
      .attr("transform", "translate(0,600)"),
    xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([0, 2]).nice(),
    yScale1 = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain(d3.extent(Esfuerzo_de_fluencia, function(d) { return d;})),
    yScale2 = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain(d3.extent(Consistencia, function(d) { return d;})),
    yScale3 = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain(d3.extent(Indice_de_Flujo, function(d) { return d;})),
    xAxis = d3.svg.axis()
      .scale(xScale)
      .tickValues([]),
    yAxis1 = d3.svg.axis().scale(yScale1).orient("left");
    yAxis2 = d3.svg.axis().scale(yScale2).orient("left");
    yAxis3 = d3.svg.axis().scale(yScale3).orient("left");
    vis1.append("svg:g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
      .call(xAxis);
    vis1.append("svg:g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + (MARGINS.left) + ",0)")
      .call(yAxis1);
    vis1.append("text")
      .attr("transform","translate(" + (WIDTH - 140) + ",605)")
      .attr("y", -5)
      .style("text-anchor", "middle")
      .text("Esfuerzo de Fluencia [Pa]");
    vis2.append("svg:g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
      .call(xAxis);
    vis2.append("svg:g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + (MARGINS.left) + ",0)")
      .call(yAxis2);
    vis2.append("text")
      .attr("transform","translate(" + (WIDTH - 160) + ",605)")
      .attr("y", -5)
      .style("text-anchor", "middle")
      .text("Consistencia [Pa*s^n]");
    vis3.append("svg:g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
      .call(xAxis);
    vis3.append("svg:g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + (MARGINS.left) + ",0)")
      .call(yAxis3);
    vis3.append("text")
      .attr("transform","translate(" + (WIDTH - 160) + ",605)")
      .attr("y", -5)
      .style("text-anchor", "middle")
      .text("Indice de flujo");

  Esfuerzo_de_fluencia.forEach(function (d, i) {
    vis1.append("circle")
      .attr("class", "dot e" + i)
      .attr("r", 5)
      .attr("cx", xScale(1))
      .attr("cy", yScale1(d))
      .style("fill", color(i))
  });

  Consistencia.forEach(function (d, i) {
    vis2.append("circle")
      .attr("class", "dot e" + i)
      .attr("r", 5)
      .attr("cx", xScale(1))
      .attr("cy", yScale2(d))
      .style("fill", color(i))
  });

  Indice_de_Flujo.forEach(function (d, i) {
    vis3.append("circle")
      .attr("class", "dot e" + i)
      .attr("r", 5)
      .attr("cx", xScale(1))
      .attr("cy", yScale3(d))
      .style("fill", color(i));
  });

  Leyenda.forEach(function (d, i) {
    vis4.append('svg:text')
      .text(d)
      .style("fill", color(i))
      .attr("id", "Legend Experimento " + i)
      .attr("x", 100 + (i%3)*300)
      .attr("y", 30 + (Math.floor(i/3))*40)
      .attr("class", "legendPuntos e" + i)
  })

  d3.selectAll(".legendPuntos")
    .on("mouseover", function() {
      var arr = /(legendPuntos)\s(e\d+)/.exec(this.className.baseVal);
      d3.selectAll("." + arr[2])
        .transition()
        .duration(50)
        .style('r', 10)
      d3.select(this)
        .style('font-size', 20)})
    .on("mouseout", function() {
      console.log("HOLI")
      var arr = /(legendPuntos)\s(e\d+)/.exec(this.className.baseVal);
      d3.selectAll("." + arr[2])
        .transition()
        .duration(1000)
        .style('r', 5)
      d3.select(this)
        .transition()
        .duration(1000)
        .style('font-size', 14)
    });

  d3.selectAll(".dot")
    .on("mouseover", function() {
      var arr = /(dot)\s(e\d+)\s?(bigr)?/.exec(this.className.baseVal);
      d3.selectAll("." + arr[2])
        .transition()
        .duration(50)
        .style("r", 10)
    })
    .on("mouseout", function() {
      var arr = /(dot)\s(e\d+)\s?(bigr)?/.exec(this.className.baseVal);
      d3.selectAll("." + arr[2])
        .transition()
        .duration(1000)
        .style("r", 5)
    });


}

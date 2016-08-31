function initChart () {
  console.log('Transposed')
  var data = null
  d3.csv('transposed.csv', function (text) {
    data = text.map( function (d, index) {
      delete d['']
      return {'i': index, 'linea': d}
    })
    drawgraph(data)
  })

  var color = d3.scale.category20()
  var WIDTH = 1000
  var HEIGHT = 600
  var MARGINS = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 50
  }

  var vis = d3.select('#visualisation').append('svg')
    .attr('width', WIDTH)
    .attr('height', HEIGHT)
  var xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([0, 514])
  var yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0, 60])
  var xAxis = d3.svg.axis().scale(xScale)
  var yAxis = d3.svg.axis().scale(yScale).orient('left')

  vis.append('svg:g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
    .call(xAxis)
  vis.append('svg:g')
    .attr('class', 'y axis')
    .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
    .call(yAxis)

  var lineGen = d3.svg.line()
    .x(function (d, index) {
      return xScale(index)
    })
    .y(function (d) {
      return yScale(d)
    })
    .interpolate('basis')

  var drawgraph = function (data) {
    //for
    var i = 0
    function onedraw() {
      var numeric_array = new Array()
      for (var items in data[i]['linea']) {
        numeric_array.push(data[i]['linea'][items])
      }
      if (i >= 5) {
        vis.selectAll('.linea' + (i - 5)).remove()
      }
      vis.append('svg:path')
        .attr('d', lineGen(numeric_array))
        .attr('stroke', function () {
          return color(i%20)
        })
        .attr('class', 'line')
        .attr('class', 'linea' + i)
        .attr('stroke-width', 2)
        .attr('fill', 'none')
      i++
    }
    window.setInterval(function(){
      onedraw()
    }, 100)
    console.log('draw')
  }
}

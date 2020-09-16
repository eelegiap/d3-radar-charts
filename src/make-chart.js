// file that makes the radar chart with a new word

RadarChart.defaultConfig.color = function () { };
RadarChart.defaultConfig.radius = 6;

function getJSON(file, callback) {
    $(document).ready(function () {
      $.getJSON(file, function (json_data) {
        test_data = JSON.parse(JSON.stringify(json_data))
        console.log('data from JSON:', test_data);
        callback(test_data)
      });
    });
  }
  function caseData(data) {
    return data.map(function (d) {
      return {
        className: d.className,
        axes: d.axes.map(function (axis) {
          return { axis: axis.axis, value: axis.value };
        })
      };
    });
  }
  function makeChart(data, location, width, height, textsize) {
    var chart = RadarChart.chart();
    var cfg = chart.config(); // retrieve default config
    RadarChart.defaultConfig.w = width;
    RadarChart.defaultConfig.h = height;
    RadarChart.defaultConfig.textSize = textsize;
    var svg = d3.select('#' + location).append('svg')
      .attr('width', cfg.w)
      .attr('height', cfg.h + cfg.h / 4);
    svg.append('g').classed('single', 1).datum(caseData(data)).call(chart);
  }

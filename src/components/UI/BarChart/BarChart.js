import React, { Component } from "react";
import Chart from "react-apexcharts";
import './BarChart.scss'

const smallDevice = window.matchMedia('(max-width: 480px)').matches

class BarChart extends Component {

  render() {
    var height = smallDevice ? `${(5 * this.props.options.xaxis.categories.length)+100}%` : null
    if(!height){
      return (
        <Chart
          options={this.props.options}
          series={this.props.series}
          type="bar"
          width="75%"
        />
      );
    }
    else {
      return (
        <Chart
          options={this.props.options}
          series={this.props.series}
          type="bar"
          width="85%"
          height={height}
        />
      );
    }
  }
}

export default BarChart;
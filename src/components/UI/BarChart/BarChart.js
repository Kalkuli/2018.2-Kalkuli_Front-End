import React, { Component } from "react";
import Chart from "react-apexcharts";
import './BarChart.scss'

const smallDevice = window.matchMedia('(max-width: 480px)').matches

class BarChart extends Component {

  state = {
    smallDevice: smallDevice,
    height: null
  }

  componentDidMount(){
    this.setState({
      height: this.state.smallDevice ? `${(5 * this.props.options.xaxis.categories.length)+100}%` : null
    })
  }

  render() {
    return (
      <Chart
        options={this.props.options}
        series={this.props.series}
        type="bar"
        width="100%"
        height="100%"
      />
    )
  }
}

export default BarChart;
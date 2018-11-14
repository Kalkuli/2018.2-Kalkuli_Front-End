import React, { Component } from "react";
import Chart from "react-apexcharts";
import './BarChart.scss'

const smallDevice = window.matchMedia('(max-width: 480px)').matches

class BarChart extends Component {

    state = {
      options: {
        chart: {
          id: "basic-bar",
          fontFamily: "Montserrat, sans-serif",
          foreColor: '#353535',
        },
        plotOptions: {
          bar: {
            horizontal: false,
          }
        },
        colors: "#0F8891",
        xaxis: {
          categories: [1,2]
        },
        dataLabels: {
          enabled: false
        },
        tooltip: {
          enabled: true,

        },
        responsive: [{
          breakpoint: 480,
          options: {
            plotOptions: {
              bar: {
                horizontal: true
              }
            }
          }
        }]
      },
      series: [
        {
          data: []
        }
      ]
    };

  render() {
    console.log(this.state.series)
    var height = smallDevice ? `${(5 * this.state.options.xaxis.categories.length)+100}%` : null
    if(!height){
      return (
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="85%"
        />
      );
    }
    else {
      return (
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="85%"
          height={height}
        />
      );
    }
  }
}

export default BarChart;
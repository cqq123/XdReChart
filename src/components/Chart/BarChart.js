import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BarChart extends Component {
  static displayName='Bar'

  init() {
  }

  render() {
    const { y, x, bandWidth, className, data, svgHeight, barIndex, barCount } = this.props;
    return (
      <g
        className={className}
        ref={(a) => { this.g = a; }}
        // transform={`translate(${this.props.x.bandwidth() / 2}, 0)`}
      >
        {
          data.map((a, i) => (
            <rect
              key={i}
              width={x.bandwidth()}
              height={svgHeight - y(a)}
              x={x(i)}
              y={y(a)}
            />
          ))
        }
        {
          data.map((a, i) => (
            <text
              key={i}
              x={x(i)}
              y={y(a)}
            >
              {a}
            </text>
          ))
        }
      </g>
    );
  }
}
BarChart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  x: PropTypes.func,
  y: PropTypes.func,
  svgHeight: PropTypes.number,
  bandWidth: PropTypes.number,
  barIndex: PropTypes.number,
  barCount: PropTypes.number,
};

export default BarChart;

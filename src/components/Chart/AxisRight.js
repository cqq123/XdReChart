import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import _ from 'lodash';

class AxisRight extends Component {
  static displayName = 'AxisRight';
  componentDidMount() {
    this.init();
  }
  componentDidUpdate(prevProps) {
    const { y, name } = this.props;
    if (!_.isEqual(prevProps.y.range(), y.range()) ||
        !_.isEqual(prevProps.y.domain(), y.domain()) ||
        !_.isEqual(prevProps.name, name)
    ) {
      this.renderRight();
    }
  }
  init() {
    this.axisRight = d3.select(this.g);
    this.axisY = d3.axisRight();
    this.name = this.axisRight.append('text')
      .attr('transform', 'translate(0, -10)');
    this.renderRight();
  }
  renderRight() {
    const { y, max, ticksCount, tickSize, name } = this.props;
    if (max) {
      y.domain([0, max]);
    }
    this.axisY.scale(y)
      .tickSize(tickSize === undefined ? 6 : tickSize)
      .ticks(ticksCount);

    this.name.html(name);
    this.axisRight.call(this.axisY);
  }

  render() {
    const { svgWidth, className } = this.props;
    return (
      <g
        className={className}
        ref={(a) => { this.g = a; }}
        transform={`translate(${svgWidth}, 0)`}
      />
    );
  }
}

AxisRight.propTypes = {
  y: PropTypes.func,
  max: PropTypes.number,
  svgWidth: PropTypes.number,
  className: PropTypes.string,
  ticksCount: PropTypes.number,
  tickSize: PropTypes.number,
  name: PropTypes.string,
};

export default AxisRight;

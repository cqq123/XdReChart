import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import * as d3 from 'd3';

class AxisLeft extends Component {
  static displayName = 'AxisLeft';
  componentDidMount() {
    this.init();
  }
  componentDidUpdate(prevProps) {
    const { y, name } = this.props;
    if (!_.isEqual(prevProps.y.range(), y.range()) ||
        !_.isEqual(prevProps.y.domain(), y.domain()) ||
        !_.isEqual(prevProps.name, name)
    ) {
      this.renderLeft();
    }
  }
  init() {
    this.axisLeft = d3.select(this.g);
    this.axisY = d3.axisLeft();
    this.name = this.axisLeft.append('text')
      .attr('transform', 'translate(0, -10)');
    this.renderLeft();
  }
  renderLeft() {
    const { y, max, ticksCount, tickSize, name } = this.props;
    if (max) {
      y.domain([0, max]);
    }
    this.axisY.scale(y)
      .ticks(ticksCount)
      .tickSize(tickSize === undefined ? 6 : tickSize);
    this.axisLeft.call(this.axisY);
    this.name.html(name);
  }
  render() {
    const { className } = this.props;
    return (
      <g className={className} ref={(a) => { this.g = a; }} />
    );
  }
}

AxisLeft.propTypes = {
  y: PropTypes.func,
  max: PropTypes.number,
  className: PropTypes.string,
  ticksCount: PropTypes.number,
  tickSize: PropTypes.number,
  name: PropTypes.string,
};

export default AxisLeft;

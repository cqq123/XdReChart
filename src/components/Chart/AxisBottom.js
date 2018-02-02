import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import _ from 'lodash';

class AxisBottom extends Component {
  static displayName = 'AxisBottom';
  componentDidMount() {
    this.init();
  }
  componentDidUpdate(prevProps) {
    const { x, format } = this.props;
    if (!_.isEqual(prevProps.x.range(), x.range()) ||
        !_.isEqual(prevProps.x.domain(), x.domain()) ||
        !_.isEqual(prevProps.format, format)
    ) {
      this.renderBottom();
    }
  }
  init() {
    this.axisBottom = d3.select(this.g);
    this.axisX = d3.axisBottom();
    this.renderBottom();
  }
  renderBottom() {
    const { x, svgHeight, format, tickSize } = this.props;
    this.axisX.scale(x)
      .tickSize(tickSize === undefined ? 6 : tickSize);
    if (format) {
      this.axisX.tickFormat(format);
    }
    this.axisBottom
      .attr('transform', `translate(0, ${svgHeight})`)
      .call(this.axisX);
  }
  render() {
    const { className } = this.props;
    return (
      <g className={className} ref={(a) => { this.g = a; }} />
    );
  }
}

AxisBottom.propTypes = {
  x: PropTypes.func,
  svgHeight: PropTypes.number,
  format: PropTypes.func,
  className: PropTypes.string,
  tickSize: PropTypes.number,
};
export default AxisBottom;

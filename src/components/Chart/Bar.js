import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import _ from 'lodash';

class Bar extends Component {
  componentDidMount() {
    this.init();
  }
  componentDidUpdate(prevProps) {
    const { svgHeight, x1, y, data, idx } = this.props;
    if (!_.isEqual(prevProps.x1.domain, x1.domain) ||
        !_.isEqual(prevProps.x1.range, x1.range) ||
        !_.isEqual(prevProps.y.range, y.range) ||
        !_.isEqual(prevProps.y.domain, y.domain)
    ) {
      this.rect
        .transition()
        .duration(1000)
        .attr('x', x1(idx))
        .attr('width', x1.bandwidth())
        .attr('y', y(data))
        .attr('height', svgHeight - y(data));
    }
    if (!_.isEqual(prevProps.data, data)) {
      this.rect
        .transition()
        .duration(1000)
        .attr('y', y(data))
        .attr('height', svgHeight - y(data));
    }
  }

  init() {
    this.rect = d3.select(this.element);
    this.renderRect();
  }
  renderRect() {
    const {
      x1, idx, y, data, svgHeight, fill, rx, ry
    } = this.props;
    this.rect
      .attr('fill', fill)
      .attr('rx', rx)
      .attr('ry', ry)
      .attr('x', x1(idx))
      .attr('width', 0)
      .transition()
      .duration(1000)
      .attr('width', x1.bandwidth())
      .attr('y', y(data))
      .attr('height', svgHeight - y(data));
  }

  render() {
    const { className } = this.props;
    return (
      <rect
        className={className}
        ref={(a) => { this.element = a; }}
      />
    );
  }
}
Bar.propTypes = {
  y: PropTypes.func,
  x1: PropTypes.func,
  idx: PropTypes.number,
  data: PropTypes.number,
  svgHeight: PropTypes.number,
  dataKey: PropTypes.string,
  fill: PropTypes.string,
  className: PropTypes.string,
  rx: PropTypes.number,
  ry: PropTypes.number,
};

export default Bar;

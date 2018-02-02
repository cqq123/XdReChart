import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import * as d3 from 'd3';

class Grid extends Component {
  static displayName = 'Grid';
  componentDidMount() {
    this.init();
  }
  componentDidUpdate(prevProps) {
    const { x, y } = this.props;
    if (!_.isEqual(prevProps.x.range(), x.range()) ||
        !_.isEqual(prevProps.x.domain(), x.domain()) ||
        !_.isEqual(prevProps.y.range(), y.range()) ||
        !_.isEqual(prevProps.y.domain(), y.domain())
    ) {
      this.renderGrid();
    }
  }
  init() {
    this.grid = d3.select(this.g);
    this.renderGrid();
  }
  renderGrid() {
    const {
      y, svgWidth, svgHeight, x,
    } = this.props;
    const axisY = d3.axisLeft(y).tickSize(-svgWidth).tickFormat('');
    const axisX = d3.axisBottom(x).tickSize(svgHeight).tickFormat('');
    this.grid.append('g')
      .call(axisY);
    this.grid.append('g')
      .call(axisX);
  }
  render() {
    const { className } = this.props;
    return (
      <g ref={(a) => { this.g = a; }} className={className} />
    );
  }
}
Grid.propTypes = {
  x: PropTypes.func,
  y: PropTypes.func,
  svgWidth: PropTypes.number,
  svgHeight: PropTypes.number,
  className: PropTypes.string,
};
export default Grid;

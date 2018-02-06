import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

class Group extends Component {
  static displayName = 'Group'
  init() {

  }

  render() {
    const { axis, y, children, data, x, className, paddingInner, paddingOuter, svgHeight } = this.props;
    const x1 = d3.scaleBand()
      .domain(d3.range(0, React.Children.toArray(children).length))
      .range([0, x.bandwidth()])
      .paddingInner(paddingInner)
      .paddingOuter(paddingOuter);
    if (axis) {
      y.domain([0, d3.max(data.map(a => a[axis]))]);
    }
    return (
      <g className={className}>
        {
          data.map((a, i) => (
            <g
              key={i}
              transform={`translate(${x(i)}, 0)`}
            >
              {
                React.Children.map(children, (child, idx) => {
                  return (
                    React.cloneElement(child, {
                      x1,
                      y,
                      idx,
                      svgHeight,
                      data: data[i][child.props.dataKey],
                    })
                  );
              })
              }
            </g>
          ))
        }
      </g>
    );
  }
}

Group.propTypes = {
  x: PropTypes.func,
  y: PropTypes.func,
  data: PropTypes.array,
  className: PropTypes.string,
  svgHeight: PropTypes.number,
  dataKeys: PropTypes.array,
  paddingInner: PropTypes.number,
  paddingOuter: PropTypes.number,
  children: PropTypes.node,
};

export default Group;

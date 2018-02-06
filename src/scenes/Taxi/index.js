import React from 'react';
import cn from 'classnames';
/* eslint-disable */
import Chart, { Bar, Group, Grid, AxisBottom, AxisLeft, AxisRight, Circle, LineChart, BarChart } from 'components/Chart';
/* eslint-enable */
import style from './index.scss';

const Taxi = () => (
  <div>
    <Chart
      className={style.chart}
      margin={{
        left: 40,
        right: 40,
        top: 30,
        bottom: 40,
      }}
      height={200}
      data={[
        { label: '1', ningbo: 300, hangzhou: 123, percent: 0.3 },
        { label: '2', ningbo: 270, hangzhou: 345, percent: 0.7 },
        { label: '3', ningbo: 200, hangzhou: 234, percent: 0.6 },
        { label: '4', ningbo: 140, hangzhou: 456, percent: 0.23 },
        { label: '5', ningbo: 200, hangzhou: 234, percent: 0.54 },
      ]}
      dataKeys={['ningbo', 'hangzhou', 'percent']}
    >
      <Grid
        className={style.grid}
      />
      <AxisBottom
        className={style.axisBottom}
      />
      <AxisLeft
        className={style.axisLeft}
        ticksCount={5}
        name="(次)"
      />
      <AxisRight
        className={style.axisRight}
        dataKey="percent"
        ticksCount={5}
        name="(%)"
      />
      <Group
        paddingInner={0.1}
        paddingOuter={0.1}
      >
        <Bar
          className={style.barRect}
          dataKey="ningbo"
          fill="#00d2d9"
          rx={4}
          ry={4}
        />
        <Bar
          className={style.barRect}
          dataKey="hangzhou"
          fill="#51a3f4"
          rx={4}
          ry={4}
        />
      </Group>
      <LineChart
        className={cn(style.lineChart, style.lineHZ)}
        dataKey="percent"
        axis="percent"
      />
      <Circle
        className={style.percentCircle}
        radius={4}
        dataKey="percent"
        axis="percent"
      />
    </Chart>
  </div>
);

export default Taxi;

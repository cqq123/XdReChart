import React from 'react';
import cn from 'classnames';
/* eslint-disable */
import Chart, { Grid, AxisBottom, AxisLeft, AxisRight, Circle, LineChart, BarChart } from 'components/Chart';
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
        { label: '1', ningbo: 300, hangzhou: 123 },
        { label: '2', ningbo: 270, hangzhou: 345 },
        { label: '3', ningbo: 200, hangzhou: 234 },
        { label: '4', ningbo: 140, hangzhou: 456 },
        { label: '5', ningbo: 200, hangzhou: 234 },
      ]}
      dataKeys={['ningbo', 'hangzhou']}
    >
      <Grid
        className={style.grid}
      />
      <AxisBottom
        className={style.axisBottom}
      />
      <AxisLeft
        className={style.axisLeft}
        dataKey="ningbo"
        ticksCount={5}
        name="(次)"
      />
      <AxisRight
        className={style.axisRight}
        dataKey="hangzhou"
        ticksCount={5}
        name="(%)"
      />
      <LineChart
        className={cn(style.lineChart, style.lineNB)}
        dataKey="ningbo"
        axis="ningbo"
      />
      <BarChart
        className={style.barChart}
        dataKey="hangzhou"
        axis="hangzhou"
        bandWidth={20}
        barIndex={1}
      />
      <BarChart
        className={style.barChartNB}
        dataKey="ningbo"
        axis="ningbo"
        bandWidth={20}
        barIndex={2}
      />
      <BarChart
        className={style.barChart}
        dataKey="ningbo"
        axis="ningbo"
        bandWidth={20}
        barIndex={3}
      />
      <LineChart
        className={cn(style.lineChart, style.lineHZ)}
        dataKey="hangzhou"
        axis="hangzhou"
      />

    </Chart>
  </div>
);

export default Taxi;

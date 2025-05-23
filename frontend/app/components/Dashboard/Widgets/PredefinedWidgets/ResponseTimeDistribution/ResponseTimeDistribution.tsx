import React from 'react';
import { NoContent } from 'UI';
import {
  ComposedChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  ReferenceLine,
  Tooltip,
} from 'recharts';
import { NO_METRIC_DATA } from 'App/constants/messages';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Styles, AvgLabel } from '../../common';

function PercentileLine(props) {
  const {
    viewBox: { x, y },
    xoffset,
    yheight,
    height,
    label,
  } = props;
  return (
    <svg>
      <line
        x1={x + xoffset}
        x2={x + xoffset}
        y1={height + 10}
        y2={205}
        {...props}
      />
      <text
        x={x + 5}
        y={height + 20}
        fontSize="8"
        fontFamily="Roboto"
        fill="#000000"
        textAnchor="start"
      >
        {label}
      </text>
    </svg>
  );
}

interface Props {
  data: any;
}
function ResponseTimeDistribution(props: Props) {
  const { data } = props;
  const { colors } = Styles;

  return (
    <NoContent
      size="small"
      title={
        <div className="flex items-center gap-2 text-base font-normal">
          <InfoCircleOutlined size={12} /> {NO_METRIC_DATA}
        </div>
      }
      show={data.chart.length === 0}
      style={{ height: '240px' }}
    >
      <div className="flex items-center justify-end mb-3">
        <AvgLabel text="Avg" unit="ms" className="ml-3" count={data.value} />
      </div>
      <div className="flex mb-4">
        <ResponsiveContainer height={240} width="100%">
          <ComposedChart
            data={data.chart}
            margin={Styles.chartMargins}
            barSize={50}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#EEEEEE"
            />
            <XAxis
              {...Styles.xaxis}
              dataKey="responseTime"
              label={{
                ...Styles.axisLabelLeft,
                angle: 0,
                offset: 0,
                value: 'Page Response Time (ms)',
                style: { textAnchor: 'middle' },
                position: 'insideBottom',
              }}
            />
            <YAxis
              {...Styles.yaxis}
              allowDecimals={false}
              label={{
                ...Styles.axisLabelLeft,
                value: 'Number of Calls',
              }}
            />
            <Bar
              minPointSize={1}
              name="Calls"
              dataKey="count"
              stackId="a"
              fill={colors[2]}
              label="Backend"
            />
            <Tooltip
              {...Styles.tooltip}
              labelFormatter={(val) => `Page Response Time: ${val}`}
            />
            {data.percentiles &&
              data.percentiles.map((item: any, i: number) => (
                <ReferenceLine
                  key={i}
                  label={
                    <PercentileLine
                      xoffset={0}
                      // y={130}
                      height={i * 20}
                      stroke="#000"
                      strokeWidth={0.5}
                      strokeOpacity={1}
                      label={`${item.percentile}th Percentile (${item.responseTime}ms)`}
                    />
                  }
                  // allowDecimals={false}
                  x={item.responseTime}
                  strokeWidth={0}
                  strokeOpacity={1}
                />
              ))}
          </ComposedChart>
        </ResponsiveContainer>
        <ResponsiveContainer height={240} width="10%">
          <BarChart
            data={data.extremeValues}
            margin={Styles.chartMargins}
            barSize={40}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#EEEEEE"
            />
            <XAxis {...Styles.xaxis} dataKey="time" />
            <YAxis
              hide
              type="number"
              domain={[0, data.total]}
              {...Styles.yaxis}
              allowDecimals={false}
            />
            <Tooltip {...Styles.tooltip} />
            <Bar
              minPointSize={1}
              name="Extreme Values"
              dataKey="count"
              stackId="a"
              fill={colors[0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </NoContent>
  );
}

export default ResponseTimeDistribution;

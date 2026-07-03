import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const AxisGradientDefs = () => (
    <defs>
        <linearGradient id="axisGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#54CF68" />
            <stop offset="100%" stopColor="#00827A" />
        </linearGradient>
    </defs>
);

const YAxisGradientTick = ({ x, y, payload }) => {
    return (
        <g transform={`translate(${x},${y})`}>
            <text
                x={0}
                y={0}
                dy={6}
                textAnchor="end"              // left side align
                fill="url(#axisGradient)"     // gradient here
                fontSize={18}
                fontWeight={400}
            >
                {payload.value}
            </text>
        </g>
    );
};

const XAxisGradientTick = ({ x, y, payload }) => {
    return (
        <g transform={`translate(${x},${y})`}>
            <text
                x={0}
                y={0}
                dy={6}
                textAnchor="middle"
                fill="url(#axisGradient)"     // gradient here
                fontSize={18}
                fontWeight={400}
            >
                {payload.value}
            </text>
        </g>
    );
};


const RatingChart = ({ ratings }) => {
    console.log("RAT:", ratings);
    return (
        <div>
            <h3 className='mb-6 font-semibold text-2xl leading-8 text-[#001931]'>Ratings</h3>
            <div style={{ width: "100%", height: 350 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={ratings}
                        layout="vertical"   // left → right bars
                        barCategoryGap={24}
                        margin={{ top: 5, right: 20, bottom: 5, left: 22 }}
                    >
                        {/* 1) gradient defs must be inside the chart */}
                        <AxisGradientDefs />

                        {/* Horizontal value axis */}
                        <XAxis
                            type="ratings.count"
                            tick={<XAxisGradientTick />}
                            tickMargin={16}
                        />

                        {/* Vertical category axis */}
                        <YAxis
                            type="category"
                            dataKey="name"
                            tick={<YAxisGradientTick />}
                            tickMargin={16}
                        // hide
                        />

                        <Bar
                            barSize={32}
                            dataKey="count"
                            fill="#FF8811"
                            radius={[0, 6, 6, 0]} // rounded right side
                        />

                        <RechartsDevtools />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RatingChart;
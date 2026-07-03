import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;
    // console.log("MD", marksData);

    // Data Processing for the chart
    const marksChartData = marksData.map( studentData => {
        const student = {
            id: studentData.student_id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math
        }

        const average = (student.physics + student.chemistry) + student.math / 3;
        student.average = average;

        return student;
    })

    console.log("MD", marksChartData);

    return (
        <div>
            <BarChart width={500} height={300} data={marksChartData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'average'} fill='yellow'></Bar>
                <Bar dataKey={'chemistry'} fill='blue'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;
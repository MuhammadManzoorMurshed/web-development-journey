import React from 'react';
import { useLoaderData } from 'react-router';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'tomato', 'mediumseagreen', 'deepskyblue'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
  };

const PagesToRead = () => {
    const books = useLoaderData();
    console.log("PTR: ", books)

    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

    return (
        <div className='max-w-292.5 mx-auto mb-25'>
            <div className='bg-[rgba(19,19,19,0.03)] rounded-3xl flex justify-center items-center'>
                <BarChart
                    style={{ width: '100%', maxWidth: '100%', maxHeight: '100%', aspectRatio: isMobile ? 1 : 1.618, padding: isMobile? '25px' : '75px' }}
                    responsive
                    data={books}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" interval={0} angle={isMobile ? -55 : -40} textAnchor='end' height={110} tick={{fontSize: isMobile ? 12 : 15}}/>
                    <YAxis width="auto" />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={TriangleBar} label={{ position: 'top' }}>
                        {books.map((_entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                    <RechartsDevtools />
                </BarChart>
            </div>
        </div>
    );
};

export default PagesToRead;
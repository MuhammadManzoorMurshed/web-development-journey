import React from 'react';
import Todo from '../../components/todo/Todo';
import RatingChart from '../../components/rating-chart/RatingChart';
import { useLoaderData, useParams } from 'react-router';

const TodoList = () => {
    const appsData = useLoaderData();
    const { appId } = useParams();
    // const app = appsData.find(app => parseInt(appId) === app.id);
    const { description, ratings } = appsData;

    return (
        <div className='bg-[#f5f5f5]'>
            <div className='max-w-360 mx-auto py-20 px-4 lg:px-0'>
                <Todo appId={appId} app={appsData} />
                <hr className='border-[#00193130] my-10' />
                <RatingChart ratings={ratings} />
                <hr className='border-[#00193130] my-10' />

                <div>
                    <h3 className='mb-6 font-semibold text-2xl leading-8 text-[#001931]'>Description</h3>
                    <p className='font-normal text-[20px] leading-8 bg-linear-to-r from-[#54CF68] to-[#00827A] bg-clip-text text-transparent text-justify'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
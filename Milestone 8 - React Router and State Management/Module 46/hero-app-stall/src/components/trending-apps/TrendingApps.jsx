import React from 'react';
import TrendingApp from './trending-app/TrendingApp';
import BodyHeader from '../../components/body-header/BodyHeader';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const TrendingApps = ({ appsData }) => {
    const navigate = useNavigate();

    const title = "Trending Apps";
    const description = "Explore All Trending Apps on the Market developed by us"

    const handleClick = async (e) => {
        e.preventDefault();

        const result = await Swal.fire({
            title: 'Redirecting to All Apps',
            text: 'You will be redirected to the All Apps page to explore more apps.',
            icon: 'info',
            confirmButtonText: 'OK',
            showCancelButton: true,
            cancelButtonText: 'Cancel'
        });

        if(result.isConfirmed){
            navigate('/all-apps');

            Swal.fire({
                title: 'Redirected!',
                text: 'You have been redirected to the All Apps page.',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        }
    }

    return (
        <div className='bg-[#f5f5f5] pb-20'>
                <BodyHeader title={title} description={description} />

                <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-360 mx-auto justify-items-center sm:p-4'>
                    {
                        Array.isArray(appsData) && appsData.map(app => {
                            console.log(app);
                            return (
                                <TrendingApp key={app.id} app={app} />
                            )
                        })
                    }
                </div>

            <div className='text-center mt-10'>
                <button onClick={handleClick} className="btn font-semibold text-base text-white px-8 py-3 bg-linear-to-br from-[#632EE3] to-[#9F62F2]">Show All</button>
            </div>
        </div>
    );
};

export default TrendingApps;
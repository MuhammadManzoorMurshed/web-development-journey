import React from 'react';
import downloadIcon from './../../../assets/icon-downloads.png'
import ratingIcon from './../../../assets/icon-ratings.png'
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const TrendingApp = ({ app }) => {
    const navigate = useNavigate();
    const { image, title, downloads, ratingAvg } = app;

    const handleClick = async (e) => {
        e.preventDefault();

        const result = await Swal.fire(
            {
                title: 'Redirecting to Todo List',
                text: 'You will be redirected to the Todo List page to install the app.',
                icon: 'info',
                confirmButtonText: 'OK',
                showCancelButton: true,
                cancelButtonText: 'Cancel'
            }
        );

        if(result.isConfirmed){
            navigate(`/todo-list/${app.id}`);
        }
    }

    return (
        <Link
            // to={`/todo-list/${app.id}`}
            onClick={handleClick}
        >
            <div className="card bg-base-100 max-w-87 max-h-108.75 shadow-sm p-4">
                <figure className="">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl w-79 h-79" />
                </figure>
                <div className="card-body p-0">
                    <h2 className="card-title my-4 font-medium text-[20px] text-[#001931]">{title}</h2>
                    <div className="card-actions justify-between">
                        <div className='bg-[#F1F5E8] rounded-sm px-3 py-2'>
                            <p className='font-medium text-base text-[#00D390] flex items-center gap-2'><img className='inline w-4 h-4' src={downloadIcon} alt="" /><span>{downloads}</span>M</p>
                        </div>
                        <div className='bg-[#F1F5E8] rounded-sm px-3 py-2'>
                            <p className='font-medium text-base text-[#FF8811] flex items-center gap-2'><img className='inline w-4 h-4' src={ratingIcon} alt="" />{ratingAvg}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TrendingApp;
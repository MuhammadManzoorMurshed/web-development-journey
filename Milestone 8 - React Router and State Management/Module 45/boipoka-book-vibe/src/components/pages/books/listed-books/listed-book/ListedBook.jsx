import React from 'react';
import { MapPin, StickyNote, Users } from 'lucide-react';

const ListedBook = ({ readBook }) => {
    const { image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = readBook;
    const [tag1, tag2] = tags;

    console.log("Read  Book: ", readBook);

    return (
        <div className='flex flex-col sm:flex-row justify-start gap-6 p-6 rounded-2xl shadow-sm bg-base-100'>
            <div className='min-w-57.5 bg-[rgba(19,19,19,0.05)] rounded-2xl'>
                <figure className='flex items-center justify-center w-full h-full'>
                    <img className='max-w-32.5 mx-auto py-7.5' src={image} alt="" />
                </figure>
            </div>
            <div className='w-full'>
                <h3 className='font-bold text-[24px] text-[#131313] mb-4'>{bookName}</h3>
                <p className='mb-4 font-medium text-base text-[#13131380]'>By: <span>{author}</span></p>
                <div className='flex justify-start items-center gap-2 sm:gap-4 mb-4'>
                    <p className='leading-6.5 text-[#131313]'><b>Tag</b></p>
                    <p className='bg-[rgba(35,190,10,0.05)] font-medium text-[14px] sm:text-base text-[#23BE0A] px-2 sm:px-4 py-2 rounded-[30px]'>#<span>{tag1}</span></p>
                    <p className='bg-[rgba(35,190,10,0.05)] font-medium text-[14px] sm:text-base text-[#23BE0A] px-2 sm:px-4 py-2 rounded-[30px]'>#<span>{tag2}</span></p>
                    <p className='flex gap-2 font-normal text-[14px] sm:text-base text-[#13131380]'><MapPin></MapPin>Year of Publishing: <span> {yearOfPublishing}</span></p>
                </div>

                <div className='flex justify-start gap-4 mb-4'>
                    <p className='flex gap-2 font-normal text-base text-[#13131360]'><Users></Users> Publisher: <span>{publisher}</span></p>
                    <p className='flex gap-2 font-normal text-base text-[#13131360]'><StickyNote></StickyNote> Page:<span>{totalPages}</span></p>
                </div>

                <div className='flex justify-start gap-4 border-t border-[#13131315] py-4'>
                    <p className='bg-[#328EFF15] rounded-[30px] px-5 py-2.5 font-normal text-base text-[#328EFF]'>Category: <span>{category}</span></p>
                    <p className='bg-[#FFAC3315] rounded-[30px] px-5 py-2.5 font-normal text-base text-[#FFAC33]'>Rating: <span>{rating}</span></p>
                    <button className='bg-[#23BE0A] rounded-[30px] px-5 py-2.5 font-normal text-base text-[#FFF]'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;
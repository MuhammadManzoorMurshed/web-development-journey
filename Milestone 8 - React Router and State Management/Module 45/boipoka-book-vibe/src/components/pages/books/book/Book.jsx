import React, { } from 'react';
import starIcon from './../../../../assets/star.png'
import { Link } from 'react-router';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Book = ({ book }) => {
    // const books = use(booksPromise);
    // console.log("BP", booksPromise);
    console.log("B", book);
    const {bookId, image, tags, bookName, author, category, rating} = book;
    const [tag1, tag2] = tags;

    const handleBookCardClick = () => {
        MySwal.fire({
            title: "Good job!",
            text: "Thanks for your interest to see the details of the book.",
            icon: "success"
        });    
    }

    return (
        <Link to={`/book-details/${bookId}`}>
            <div onClick={handleBookCardClick} className="card bg-base-100 w-full sm:max-w-96 shadow-sm p-6">
                <figure className='bg-[#F3F3F3] rounded-2xl mb-6 py-8'>
                    <img className='max-w-33.5 max-h-41.5'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className='flex justify-start gap-3 mb-4'>
                    <p className='bg-[#23BE0A0D] px-4 py-2 rounded-3xl font-medium text-base  text-[#23BE0A]'>{tag1}</p>
                    <p className='bg-[#23BE0A0D] px-4 py-2 rounded-3xl font-medium text-base  text-[#23BE0A]'>{tag2}</p>
                </div>
                <div className="card-body p-0">
                    <h2 className="card-title font-bold text-2xl text-[#131313] mb-4">{bookName}</h2>
                    <p className='font-medium text-base text-[#131313] mb-5'>By: <span>{author}</span></p>
                    <div className="card-actions justify-end border-t border-[#13131315] border-dashed pt-5">
                        <p className='font-medium text-base text-[#131313]'>{category}</p>
                        <div className='flex gap-2'>
                            <p className='font-medium text-base text-[#131313]'>{rating}</p>
                            <img src={starIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            
        </Link>
    );
};

export default Book;
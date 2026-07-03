import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToLocalStorage, addWishlistBookToLS } from '../../../utilities/addToLocalStorage';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const { bookId } = useParams();
    const bId = parseInt(bookId);
    const booksData = useLoaderData();
    const book = booksData?.find(b => b.bookId === bId);

    if (!book) return <p>Book not found!</p>;

    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    const [tag1, tag2] = tags;
    console.log("Book: ", book);

    const handleMarkAsRead = id => {
        addToLocalStorage(id);
        console.log("R Clicked!");

        Swal.fire({
            title: "Good job!",
            text: "The book is added to the Reading List.",
            icon: "success"
        });
    }

    const handleAddToWishlist = id => {
        addWishlistBookToLS(id);

        Swal.fire({
            title: "Good job!",
            text: "The book is added to the Wishlist.",
            icon: "success"
        });
    }

    return (
        <div className='max-w-292.5 mx-auto mb-25'>
            <div className="card lg:card-side bg-base-100 gap-12 mx-4 sm:mr-0">
                <figure className='lg:w-1/2 bg-[rgba(19,19,19,0.05)] sm:p-18.5 rounded-2xl'>
                    <img className='max-w-106.25 p-6 sm:p-0'
                        src={image}
                        alt="Album" />
                </figure>
                <div className="flex flex-col justify-between gap-3 lg:w-1/2 py-0">
                    <div>
                        <h2 className="card-title font-bold text-[40px] text-[#131313] mb-4.5">{bookName}</h2>
                        <p className='font-medium text-[20px] text-[#13131380] mb-5.5'>By: <span>{author}</span></p>
                    </div>
                    <p className='border-y border-[#13131315] py-4 font-medium text-[20px] text-[#13131380]'>{category}</p>
                    <p className='font-normal text-base leading-6.5 text-[#13131370] text-justify'><b className='text-black'>Review:</b> {review}</p>
                    <div className='flex justify-start items-center gap-3 border-b border-[#13131315] pb-6'>
                        <p className='font-bold text-base leading-6.5 text-[#131313]'>Tag</p>
                        <p className='font-medium text-base text-[#23BE0A] px-4 py-2 rounded-[30px] bg-[#23BE0A10]'>#<span>{tag1}</span></p>
                        <p className='font-medium text-base text-[#23BE0A] px-4 py-2 rounded-[30px] bg-[#23BE0A10]'>#<span>{tag2}</span></p>
                    </div>
                    <div className='flex justify-start gap-15'>
                        <div className='font-regular text-base text-[#13131370] leading-6.5 space-y-3'>
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>
                        <div className='font-semibold text-base text-[#131313] leading-6.5 space-y-3'>
                            <p><b>{totalPages}</b></p>
                            <p><b>{publisher}</b></p>
                            <p><b>{yearOfPublishing}</b></p>
                            <p><b>{rating}</b></p>
                        </div>
                    </div>
                    <div className="card-actions justify-start items-center">
                        <button onClick={() => handleMarkAsRead(bId)} className="btn bg-white px-7 py-4 font-semibold text-[18px] border border-[#13131330]">Read</button>
                        <button onClick={() => handleAddToWishlist(bId)} className="btn bg-[#50B1C9] px-7 py-6 text-white font-semibold text-[18px]">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
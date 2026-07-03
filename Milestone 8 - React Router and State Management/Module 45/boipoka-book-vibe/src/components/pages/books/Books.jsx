import React, { Suspense } from 'react';
import BookDetails from './book-details/BookDetails';
import Book from './book/Book';

// const fetchBooks = async () => {
//     const response = await fetch('booksData.json');
//     const data = await response.json();
//     console.log(data);
//     return data;
// }

const Books = ({ booksData }) => {
    // const booksPromise = fetchBooks();
    // const [books, setBooks] = useState([]);

    // useEffect(() => {
    //     fetch('booksData.json')
    //     .then(respone => respone.json())
    //     .then(data => setBooks(data));
    // }, []);

    return (
        <div>
            <h2 className='font-bold text-[40px] text-[#131313] mb-9 text-center'>Books</h2>
            <div className='max-w-292.5 mx-auto mb-25 grid grid-cols-1 sm:grid-cols-3 gap-6'>
                <Suspense fallback={<h3>Loading...</h3>}>
                    {
                        booksData.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default Books;
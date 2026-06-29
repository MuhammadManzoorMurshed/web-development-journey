import Book from './Book';

export default function Library({books}) {
    return (
        <div>
            <h2>My national Central Librar</h2>
            <p>Book collection: {books.length}</p>
            <p>Address: </p>

            <ul>
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </ul>
        </div>
    ) 
}
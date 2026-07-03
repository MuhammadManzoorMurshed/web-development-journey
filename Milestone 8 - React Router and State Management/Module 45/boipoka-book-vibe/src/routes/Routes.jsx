import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import Root from '../components/root/Root';
import Errors from '../components/pages/errors/Errors';
import Home from '../components/pages/home/Home';
import BookDetails from '../components/pages/books/book-details/BookDetails';
import ListedBooks from '../components/pages/books/listed-books/ListedBooks';
import PagesToRead from '../components/pages/pages-to-read/PagesToRead';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <Errors></Errors>,

        children: [
            {
                index: true,
                loader: () => fetch('/booksData.json'),
                // path: '/',
                Component: Home,
                shouldRevalidate: () => false
            },
            {
                path: '/book-details/:bookId',
                loader: () => fetch('/booksData.json'),
                Component: BookDetails,
            },
            {
                path: '/listed-books',
                loader: () => fetch('/booksData.json'),
                Component: ListedBooks
            },
            {
                path: '/pages-to-read',
                loader: () => fetch('/booksData.json'),
                Component: PagesToRead
            }
        ]
    },
]);
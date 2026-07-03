import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router';
import { getStoredBook, getWishlistBook } from '../../../utilities/addToLocalStorage';
import ListedBook from './listed-book/ListedBook';
import Sort from './listed-book/sort/Sort';
import WishlistBook from './wishlist-book/WishlistBook';

const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);
    const [sortType, setSortType] = useState("");
    const booksData = useLoaderData();

    useEffect(() => {
        const getReadBooks = getStoredBook();
        const getWishlistBooks = getWishlistBook();
        let readBooksList = booksData.filter(b => getReadBooks.includes(b.bookId));
        let wishlistBooksList = booksData.filter(b => getWishlistBooks.includes(b.bookId));

        setReadBooks(readBooksList);
        setWishlistBooks(wishlistBooksList);
    }, [booksData]);

    // useEffect(() => {
    //     fetch('./booksData.json')
    //     .then(res => res.json())
    //     .then(data => setBooks(data));
    // }, []);

    const handleSort = (type) => {
        setSortType(type);
        console.log("Type: ", sortType);

        if (type === "page") {
            const sortedReadBooks = [...readBooks].sort((a, b) => a.totalPages - b.totalPages);
            const sortedWishlistBooks = [...wishlistBooks].sort((a, b) => a.totalPages - b.totalPages);

            setReadBooks(sortedReadBooks);
            setWishlistBooks(sortedWishlistBooks);

            return;
        }

        if (type === "rating") {
            const sortedReadBooks = [...readBooks].sort((a, b) => a.rating - b.rating);
            const sortedWishlistBooks = [...wishlistBooks].sort((a, b) => a.rating - b.rating);

            setReadBooks(sortedReadBooks);
            setWishlistBooks(sortedWishlistBooks);

            return;
        }
    }

    return (
        <div className='max-w-292.5 mx-auto mb-25'>
            <h2 className='bg-[rgba(19,19,19,0.05)] font-bold text-[28px] text-[#131313] rounded-2xl px-13.5 py-8.5 text-center'>Books</h2>

            <Sort handleSort={handleSort} sortType={sortType}></Sort>

            <Tabs>
                <TabList>
                    <Tab>List Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <div className='mt-8 space-y-6'>
                        {
                            readBooks.map(readBook => {
                                return (
                                    <ListedBook key={readBook.bookId} readBook={readBook}></ListedBook>
                                )
                            })
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='mt-8 space-y-6'>
                        {
                            wishlistBooks.map(wishlistBook => {
                                return (
                                    <WishlistBook key={wishlistBook.bookId} wishlistBook={wishlistBook}></WishlistBook>
                                )
                            })
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div >
    );
};

export default ListedBooks;
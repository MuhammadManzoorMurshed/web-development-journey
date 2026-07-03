import React from 'react';
import { useLoaderData } from 'react-router';
import Hero from '../../header/Hero';
import Books from '../books/Books';

const Home = () => {
    const booksData = useLoaderData();
    console.log("BD: ", booksData);

    return (
        <div>
            <Hero></Hero>
            <Books booksData={booksData}></Books>
        </div>
    );
};

export default Home;
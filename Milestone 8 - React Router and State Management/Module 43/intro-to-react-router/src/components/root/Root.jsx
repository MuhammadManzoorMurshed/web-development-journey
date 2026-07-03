import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import './root.css'

const Root = () => {
    const navigation = useNavigation();
    const isNavigatiing = Boolean(navigation.location);

    return (
        <div>
            <Header></Header>

            <div className='root-main'>
                <Sidebar></Sidebar>
                {isNavigatiing && <span>Loading...</span>}
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;
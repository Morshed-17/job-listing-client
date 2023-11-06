import { Button } from '@nextui-org/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavMenu from '../components/header/NavMenu';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div className="dark bg-[#050819] text-foreground" >
            <NavMenu/>
            <div >
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;
import React from 'react';
import About from '../About';
import Alern from '../Alern';
import Banner from '../Banner';
import GlobalPartner from '../GlobalPartner';
import Help from '../Help';
import MainFunction from '../MainFunction';
import PlatformData from '../PlatformData';
import TronMillionair from '../TronMillionair';

const Home = () => {
   const user = JSON.parse(sessionStorage.getItem('user'))
    console.log(user)
    return (
        <div>
            <Banner></Banner>
            {/* <Alern></Alern> */}
            <MainFunction></MainFunction>
            <Help></Help>
            {/* <AmmountShow></AmmountShow> */}
            <TronMillionair></TronMillionair>
            <PlatformData></PlatformData>
            <About></About>
            <GlobalPartner></GlobalPartner>
        </div>
    );
};

export default Home;
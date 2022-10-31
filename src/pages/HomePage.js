import React from 'react';
import Header from '../component/Header';
import HeroSec from '../component/HeroSec';
import MercuryFeaturesSec from '../component/MercuryFeaturesSec';
import LiabilityCentricSec from '../component/LiabilityCentricSec';
import AllStablecoinSec from '../component/AllStablecoinSec';
import MercuryFinanceSec from '../component/MercuryFinanceSec';
import JoinCommunity from '../component/JoinCommunity';
import Footer from '../component/Footer';

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSec />
            <MercuryFeaturesSec />
            <LiabilityCentricSec />
            <AllStablecoinSec />
            <MercuryFinanceSec />
            <JoinCommunity />
            <Footer />
        </>
    )
}

export default HomePage;
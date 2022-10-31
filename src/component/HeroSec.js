import React from 'react';
import { WebBotton } from './common/WebBotton';
import Container from 'react-bootstrap/Container';
import hero_1_1 from '../assets/images/HomePage/hero_1_1.svg';
import hero_2 from '../assets/images/HomePage/hero_2.png';
import Fade from 'react-reveal/Fade';

const HeroSec = () => {
    return (
        <section className='hero_sec'>
            <Container>
                <div className='row hero_sec_row'>
                    <div className='col-md-6 col-12 hero_sec_text'>
                        <Fade bottom duration={1000}>
                            <h1>Ultramodern Single-Sided DeFi 2.0
                                StableSwap.</h1>
                        </Fade>
                        <Fade bottom duration={1500}>
                            <WebBotton WebBotton="Read Documentation" link="https://docs.mercuryfi.exchange/" />
                        </Fade>
                    </div>
                    <div className='col-md-6 col-12'>
                        <div className='video_block'>
                            <video loop muted autoPlay playsInline>
                                <source src={require('../assets/images/HomePage/Logo_Animation.mp4')} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='hero_left'>
                <img src={hero_1_1} alt="hero_1" />
            </div>
            <div className='hero_right'>
                <img src={hero_2} alt="hero_2" />
            </div>
        </section>
    )
}

export default HeroSec;
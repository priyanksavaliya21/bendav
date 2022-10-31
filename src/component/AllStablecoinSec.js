import React from 'react';
import WebHeading from './common/WebHeading';
import Container from 'react-bootstrap/Container';
import features_card_arrow from '../assets/images/HomePage/features_card_arrow.svg';
import allStablecoin_animation from '../assets/images/HomePage/allStablecoin_animation.png';
import { AllStablecoin_secData } from '../AllData/AllStablecoin_secData';
import Fade from 'react-reveal/Fade';

const AllStablecoinSec = () => {
    return (
        <section className='allStablecoin_sec sam_padding'>
            <Container>
                <WebHeading heading_text="An Optimal Solution To " heading_text_color="All Stablecoin " heading_text2="AMM Problems" />
                <div className='row'>
                    {AllStablecoin_secData.slice(0, 3).map((item, index) => {
                        const { item_img, item_Heading, item_duration } = item;
                        return (
                            <Fade bottom duration={item_duration} key={index}>
                                <div className='col-lg-4 col-md-6 col-12'>
                                    <div className='fill_border'>
                                        <div className='allStablecoin_card'>
                                            <div className='mercury_card_text'>
                                                <h4>{item_Heading}</h4>
                                                <a href="#0">Read More <img src={features_card_arrow} alt="features_card_arrow" /></a>
                                            </div>
                                            <div className='allStablecoin_img'>
                                                <img src={item_img} alt="allStablecoin_img_01" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        )
                    })}
                </div>
            </Container>
            <div className='allStablecoin_animation'>
                <img src={allStablecoin_animation} alt="allStablecoin_animation" />
            </div>
        </section>
    )
}

export default AllStablecoinSec;
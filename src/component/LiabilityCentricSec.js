import React from 'react';
import Container from 'react-bootstrap/Container';
import WebHeading from './common/WebHeading';
import liability_centric_img from '../assets/images/HomePage/liability_centric_img.png';
import liability_animation_1 from '../assets/images/HomePage/liability_animation_1.png';
import liability_animation_2 from '../assets/images/HomePage/liability_animation_2.png';
import Rectangle_1 from '../assets/images/HomePage/Rectangle_1.svg';
import Rectangle_2 from '../assets/images/HomePage/Rectangle_2.svg';
import Rectangle_3 from '../assets/images/HomePage/Rectangle_3.svg';



const LiabilityCentricSec = () => {
    return (
        <section className='liability_centric_sec'>
            <Container>
                <div className='liability_centric_row'>
                    <div className='liability_text'>
                        <WebHeading heading_text="Liability-Centric " heading_text_color=" Automated " heading_text2="Market Maker " />
                    </div>
                    <div className='liability_img_block'>
                        <div className='liability_img'>
                            <img src={liability_centric_img} alt="liability_centric_img" />
                            <div className='animation_border_block'>
                                <div className='animation_border'>
                                    <div className='all_circle'>
                                        <div className='circle blue'><img src={Rectangle_1} alt="Rectangle_1" /></div>
                                        <div className='circle yellow'><img src={Rectangle_2} alt="Rectangle_1" /></div>
                                        <div className='circle teal'><img src={Rectangle_3} alt="Rectangle_1" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='liability_animation_1'>
                <img src={liability_animation_1} alt="liability_animation_1" />
            </div>
            <div className='liability_animation_2'>
                <img src={liability_animation_2} alt="liability_animation_2" />
            </div>
        </section>
    )
}

export default LiabilityCentricSec;
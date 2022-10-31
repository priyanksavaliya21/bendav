import React from 'react';
import Container from 'react-bootstrap/Container';
import join_icon_1 from '../assets/images/HomePage/join_icon_1.svg';
import join_icon_2 from '../assets/images/HomePage/join_icon_2.svg';
import join_icon_3 from '../assets/images/HomePage/join_icon_3.svg';
import join_icon_4 from '../assets/images/HomePage/join_icon_4.svg';
import join_anim_1 from '../assets/images/HomePage/join_anim_1.png';
import join_anim_2 from '../assets/images/HomePage/join_anim_2.png';
import Fade from 'react-reveal/Fade';

const JoinCommunity = () => {
    return (
        <section className='join_community'>
            <Container>
                <div className='join_community_block'>
                    <div className='join_community_bg'>
                        <Fade bottom duration={1000}>
                            <div className='web_heading'>
                                <h2>Join Our <p>Community</p></h2>
                            </div>
                        </Fade>
                        <div className='join_community_icon'>
                            <ul>
                                <Fade bottom duration={1000}>
                                    <li><a href="https://twitter.com/MercurySwap" target="/"><img src={join_icon_1} alt="join_icon" /></a></li>
                                </Fade>
                                <Fade bottom duration={1300}>
                                    <li><a href="https://www.reddit.com/" target="/"><img src={join_icon_2} alt="join_icon" /></a></li>
                                </Fade>
                                <Fade bottom duration={1600}>
                                    <li><a href="https://medium.com/" target="/"><img src={join_icon_3} alt="join_icon" /></a></li>
                                </Fade>
                                <Fade bottom duration={1900}>
                                    <li><a href="https://discord.com/" target="/"><img src={join_icon_4} alt="join_icon" /></a></li>
                                </Fade>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='join_community_animation_1'>
                <img src={join_anim_1} alt="join_anim" />
            </div>
            <div className='join_community_animation_2'>
                <img src={join_anim_2} alt="join_anim" />
            </div>
        </section>
    )
}

export default JoinCommunity;
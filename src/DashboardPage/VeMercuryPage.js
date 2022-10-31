import React from 'react';
import Vemercury_page_logo from '../assets/images/Dashboard/Vemercury_page_logo.svg';
import akar_icons_question from '../assets/images/Dashboard/akar_icons_question.svg';
import Boost_Calculator_icon from '../assets/images/Dashboard/Boost_Calculator_icon.svg';
import ConfirmStackMercurypop from '../DashboardComponent/Common/ConfirmStackMercurypop';
import { WebOffBotton } from '../component/common/WebOffBotton';
import PageFilter from '../DashboardComponent/Common/PageFilter';

const VeMercuryPage = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [Aprroved, setAprroved] = React.useState(false);
    const onAprroved = () => {
        setAprroved(true);
        handleClose();
    }
    const onAprroved1 = () => {
        handleOpen();
    }

    return (
        <>
            <div className='Dashboard_main_wrapper'>
                <div className='Pool_Page_main Vemercury_page_main'>
                <PageFilter />
                    <div className='Vemercury_page_main'>
                        <div className='box_main_border'>
                            <div className='trade_now_block'>
                                <div>
                                    <div className='Vemercury_box_logo'>
                                        <img src={Vemercury_page_logo} alt="" />
                                        <h4>Stake Mercury to Boost Yield</h4>
                                    </div>
                                    <div className='total_vemercury_supply_box'>
                                        <div className='total_vemercury_text'>
                                            <span className='Market_text_p'>Total Vemercury Supply</span>
                                            <p>299.63M <span> Vemercury </span> <img src={akar_icons_question} alt="" /></p>
                                        </div>
                                        <div className='total_vemercury_text'>
                                            <span className='Market_text_p'>Mercury Supply Staked</span>
                                            <p>52.02 <span>%</span> <img src={akar_icons_question} alt="" /></p>
                                        </div>
                                        <div className='total_vemercury_text'>
                                            <span className='Market_text_p'>Total Mercury Staked</span>
                                            <p>16.17M <span> Mercury</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='vemercury_boosts_border'>
                                    <span></span>
                                    <p>Vemercury Boosts Mercury APR <img src={akar_icons_question} alt="" /></p>
                                    <span><p>(</p>Boost Calculator <img src={Boost_Calculator_icon} alt="" /><p>)</p></span>
                                    <span></span>
                                </div>
                                <div className='Confirm_btn_show'>
                                    <div className='hero_btn'>
                                        <a href="#0" onClick={handleOpen}>Stake</a>
                                    </div>
                                    {Aprroved ? (
                                        <>
                                            <div className='Confirm_show_off_btn'>
                                                <div onClick={onAprroved1}>
                                                    <WebOffBotton WebOffBotton="Unstake" link="#0" />
                                                </div>
                                                <div onClick={onAprroved1}> 
                                                    <WebOffBotton WebOffBotton="Claim" link="#0" />
                                                </div>
                                            </div>
                                        </>
                                    ) : (null)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ConfirmStackMercurypop onAprroved={onAprroved} handleClose={handleClose} open={open} />
        </>
    )
}

export default VeMercuryPage;
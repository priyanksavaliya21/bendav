import React from 'react';
import PageFilter from '../DashboardComponent/Common/PageFilter';
import usdc_1 from '../assets/images/Dashboard/usdc_1.svg';
import usdc_3 from '../assets/images/Dashboard/usdc_3.svg';
import mer_dai_icon from '../assets/images/Dashboard/mer_dai_icon.svg';
import mer_dai_bottem_arrow from '../assets/images/Dashboard/mer_dai_bottem_arrow.svg';
import akar_icons_question from '../assets/images/Dashboard/akar_icons_question.svg';
import { WebBotton } from '../component/common/WebBotton';
import SwapTokensPop from '../DashboardComponent/Common/SwapTokensPop';
import ConfirmSwapPop from '../DashboardComponent/Common/ConfirmSwapPop';
import box_Swap_icon from '../assets/images/Dashboard/box_Swap_icon.svg';

const SwapPage = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [SwapOpen, setSwapOpen] = React.useState(false);
    const SwapHandleOpen = () => setSwapOpen(true);
    const SwapHandleClose = () => setSwapOpen(false);
    const AlertBTN = () => alert("Select a Token")
    const TokenData = [
        {
            id: "m.USDT",
            text: "m.USDT",
            imglogo: usdc_3,
            currVal: 1.5,
            Rate: 0.998668,
            fee: 0.998668,
            Minimum_Received: 0.998668,
        },
        {
            id: "m.USDC",
            text: "m.USDC",
            imglogo: usdc_1,
            currVal: 1,
            Rate: 0.998600,
            fee: 0.998600,
            Minimum_Received: 0.998600,
        },
        {
            id: "m.DAI",
            text: "m.DAI",
            imglogo: mer_dai_icon,
            currVal: 0.998668668666521293,
            Rate: 0.998610,
            fee: 0.998610,
            Minimum_Received: 0.998610,
        }

    ]

    let From_Value = 0;
    const [token, settoken] = React.useState(null);
    const [Tovalue, SetTovalue] = React.useState(null);

    const OnSubmit = (e) => {
        handleClose();
        settoken(e.currentTarget.id);

        var FilterData = TokenData.filter((Data) => Data.id === e.currentTarget.id);
        for (let val of FilterData) {
            FilterData = val;
        };
        SetTovalue(FilterData);
    };

    return (
        <>
            <div className='Dashboard_main_wrapper'>
                <div className='Pool_Page_main swap_page_main'>
                    <PageFilter />
                    <div className='swap_tokens_main'>
                        <div className='box_main_border'>
                            <div className='trade_now_block'>
                                <h4>Swap Tokens</h4>
                                <div className='trade_now_max'>
                                    <div className='trade_now_row_row'>
                                        <div className='from_text_block'>
                                            <span className='Market_text_p'>From</span>
                                            <input type="text" placeholder={token === null ? From_Value.toFixed(2) : 1} />
                                        </div>
                                        <div className='max_btn_main'>
                                            <div className='max_btn'>
                                                <a href="#0">Max</a>
                                            </div>
                                            <div className='max_icon_text'>
                                                <img src={TokenData[1].imglogo} alt="logo" />
                                                <span>{TokenData[1].text}</span>
                                                <img src={mer_dai_bottem_arrow} alt="logo" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='box_Swap_icon'>
                                        <img src={box_Swap_icon} alt="" />
                                    </div>
                                    <div className='trade_now_row_row'>
                                        <div className='from_text_block'>
                                            <span className='Market_text_p'>To</span>
                                            <input type="text" placeholder={token === null ? From_Value.toFixed(2) : Tovalue.currVal} />
                                        </div>
                                        <div className='max_btn_main'>
                                            <div className='max_btn'>
                                                <a href="#0">Max</a>
                                            </div>
                                            <div className='max_icon_text' onClick={handleOpen}>
                                                {token === null ? "" : <img src={Tovalue.imglogo} alt={Tovalue.imglogo} />}
                                                <span>{token === null ? "Select a Token" : Tovalue.text}</span>
                                                <img src={mer_dai_bottem_arrow} alt="logo" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='after_fee_show_main'>

                                        {token === null ? null : (
                                            <>
                                                <ul className='after_fee_show_ul'>
                                                    <li>
                                                        <span className='Market_text_p'>Rate (after fee) <img src={akar_icons_question} alt="logo" /></span>
                                                        <p className='Market_text_p'>{token === null ? From_Value.toFixed(2) : 1} {TokenData[1].text} =  {Tovalue.Rate} {Tovalue.text}</p>
                                                    </li>
                                                    <li>
                                                        <span className='Market_text_p'>fee <img src={akar_icons_question} alt="logo" /></span>
                                                        <p className='Market_text_p'> {Tovalue.fee} {Tovalue.text}</p>
                                                    </li>
                                                    <li>
                                                        <span className='Market_text_p'>Minimum Received <img src={akar_icons_question} alt="logo" /></span>
                                                        <p className='Market_text_p'> {Tovalue.Minimum_Received} {Tovalue.text}</p>
                                                    </li>
                                                    <li>
                                                        <span className='Market_text_p'>Route <img src={akar_icons_question} alt="logo" /></span>
                                                    </li>
                                                </ul>
                                                <div className='after_fee_bottom_btn'>
                                                    <p><img src={usdc_1} alt="logo" /> m.USDC</p>
                                                    <img src={mer_dai_bottem_arrow} alt="logo" />
                                                    {token === null ? <p> Choose Token</p> : <p><img src={Tovalue.imglogo} alt="" />{Tovalue.text}</p>}
                                                </div>
                                            </>
                                        )}

                                    </div>
                                </div>
                                <div>
                                    <WebBotton WebBotton="Swap" link="#0" click={token !== null ? SwapHandleOpen : AlertBTN}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SwapTokensPop handleClose={handleClose} TokenData={TokenData} OnSubmit={OnSubmit} open={open} />
            <ConfirmSwapPop From_Value={0} token={token} TokenData={TokenData} Tovalue={Tovalue} SwapHandleClose={SwapHandleClose} SwapOpen={SwapOpen} />
        </>
    )
}

export default SwapPage;
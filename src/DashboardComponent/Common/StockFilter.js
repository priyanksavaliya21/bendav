import React from 'react';

const StockFilter = ({Item,handleOpen}) => {
    return (
        <div className='stock_filter_row'>
            <div className='stock_list_text_row'>
                <div className='Staked_box'>
                    <div className='Staked_list_p'>
                        <p className='Market_text_p'>{Item.StakedName}</p>
                        <p className='Market_text_p'>{Item.StakableName}</p>
                    </div>
                    <div className='Staked_list_p'>
                        <h6>{Item.StakedNameNum}</h6>
                        <h5>{Item.StakableNameNum}</h5>
                    </div>
                </div>
            </div>
            <div className='Stake_All_btns'>
                <p>{Item.Stake_All_btns_text}</p>
                <div className='All_btns'>
                    <a href="#0" onClick={handleOpen}>{Item.All_btns_text}</a>
                </div>
            </div>
        </div>
    )
}

export default StockFilter;
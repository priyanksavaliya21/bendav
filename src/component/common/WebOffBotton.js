import React from 'react';

export const WebOffBotton = (propo) => {
  return (
    <div className='hero_off_btn' onClick={propo.click}>
        <a href={propo.link}>{propo.WebOffBotton} <img src={propo.img} alt="" /></a>
    </div>
  )
}
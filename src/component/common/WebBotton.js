import React from 'react';

export const WebBotton = (propo) => {
  return (
    <div className='hero_btn' onClick={propo.click}>
        <a href={propo.link}>{propo.WebBotton}</a>
    </div>
  )
}
import React from 'react';
import Fade from 'react-reveal/Fade';

const WebHeading = (props) => {
  return (
    <Fade bottom duration={1000}>
      <div className='web_heading'>
        <h2>{props.heading_text} <br /><span>{props.heading_text_color}</span>{props.heading_text2}</h2>
      </div>
    </Fade>
  )
}

export default WebHeading;
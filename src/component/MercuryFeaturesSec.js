import React from 'react';
import WebHeading from './common/WebHeading';
import Container from 'react-bootstrap/Container';
import features_card_arrow from '../assets/images/HomePage/features_card_arrow.svg';
import { MercuryFeaturesSecData } from '../AllData/MercuryFeaturesSecData';
import Fade from 'react-reveal/Fade';

const MercuryFeaturesSec = () => {
  return (
    <section className='mercury_features_sec sam_padding'>
      <Container>
        <WebHeading heading_text="MercuryFi " heading_text_color="Features" />
        <div className='row'>
          {MercuryFeaturesSecData.slice(0, 3).map((item, index) => {
            const { item_img, item_Heading ,item_duration} = item;
            return (
              <Fade bottom duration={item_duration} key={index}>
                <div className='col-lg-4 col-md-6 col-12'>
                  <div className='mercury_features_card'>
                    <div className='mercury_card_img'>
                      <img src={item_img} alt="mercury_features_card1" />
                    </div>
                    <div className='mercury_card_text'>
                      <h4>{item_Heading}</h4>
                      <a href="#0">Read More <img src={features_card_arrow} alt="features_card_arrow" /></a>
                    </div>
                  </div>
                </div>
              </Fade>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default MercuryFeaturesSec;
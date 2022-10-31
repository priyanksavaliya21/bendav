import React from 'react';
import Container from 'react-bootstrap/Container';
import footer_logo from '../assets/images/HomePage/footer_logo.svg';
import footer_icon_1 from '../assets/images/HomePage/footer_icon_1.svg';
import footer_icon_2 from '../assets/images/HomePage/footer_icon_2.svg';
import footer_icon_3 from '../assets/images/HomePage/footer_icon_3.svg';
import footer_icon_4 from '../assets/images/HomePage/footer_icon_4.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <div className='footer_block'>
          <div className='row'>
            <div className='col-6'>
              <a href="https://blabmsv.netlify.app/" className='footer_logo'>
                <img src={footer_logo} alt="footer_logo" />
              </a>
            </div>
            <div className='col-6'>
              <ul className='footer_icons'>
                <li><a href="https://twitter.com/MercurySwap" target="/"><img src={footer_icon_1} alt="footer_icon" /></a></li>
                <li><a href="https://www.reddit.com/" target="/"><img src={footer_icon_2} alt="footer_icon" /></a></li>
                <li><a href="https://medium.com/" target="/"><img src={footer_icon_3} alt="footer_icon" /></a></li>
                <li><a href="https://discord.com/" target="/"><img src={footer_icon_4} alt="footer_icon" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='copyright_block'>
            <p>Copyright © 2022 <a href="#0">Mercury</a></p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;
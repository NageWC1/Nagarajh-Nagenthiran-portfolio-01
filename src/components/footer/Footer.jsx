import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'>NAGENTHIRAN</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolios">Portfolios</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href='https://facebook.com' target='_blank'><FaFacebookF/></a>
          <a href='https://instagram.com' target='_blank'><FiInstagram/></a>
          <a href='https://twiter.com' target='_blank'><IoLogoTwitter/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; NAGARAJH NAGENTHIRAN. All rights reserve.</small>
        </div>
    </footer>
  )
}

export default Footer
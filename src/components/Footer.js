import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <p className='footer-subscription-heading'>
          Change is the end result of all True Learnings !
        </p>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/About'>How it started</Link>
            <Link to='/About'>Careers</Link>
            <Link to='/About'>Terms of Service</Link>
          </div>
          
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href = "https://www.instagram.com/perry_study_online/" target = "_blank">Instagram</a>
            <a href = "https://www.facebook.com/karam.jeet.7" target = "_blank">Facebook</a>
            <a href = "https://www.youtube.com/channel/UC85GeF8LHrPnqiD-zMlLA_g" target = "_blank">YouTube</a>
            <a href = "https://play.google.com/store/apps/details?id=tripmanager.in" target = "_blank">App</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            Perry Study Online
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Perry Study Online © 2021 All<br></br>Rights are Reserved</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <a href = "https://www.facebook.com/karam.jeet.7" target = "_blank"><i class='fab fa-facebook-f' /></a>
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <a href = "https://www.instagram.com/perry_study_online/" target = "_blank"><i class='fab fa-instagram' /></a>
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <a href = "https://www.youtube.com/channel/UC85GeF8LHrPnqiD-zMlLA_g" target = "_blank"><i class='fab fa-youtube' /></a>
            </Link>
            <Link
              class='social-icon-link app'
              to='/'
              target='_blank'
              aria-label='App'
            >
              <a href = "https://play.google.com/store/apps/details?id=tripmanager.in" target='_blank'><i class='fab fa-app-store' /></a>
            </Link>
            {/* <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <a href = "https://www.linkedin.com/" target='_blank'><i class='fab fa-linkedin' /></a>
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
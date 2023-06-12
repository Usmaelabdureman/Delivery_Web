import React from 'react';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href="#">Story</Footer.Link>
            <Footer.Link href="#">Clients</Footer.Link>
            <Footer.Link href="#">Testimonials</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="#">Selling</Footer.Link>
            <Footer.Link href="#">Deliverying</Footer.Link>
            <Footer.Link href="#">Production</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link href="#">Ethiopia</Footer.Link>
            <Footer.Link href="#">Addis Ababa</Footer.Link>
            <Footer.Link href="#">Support</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social Links</Footer.Title>
            <Footer.Link href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebookF} className="fab" />
              _Facebook
            </Footer.Link>
            <Footer.Link href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} className="fab" />
              _Instagram
            </Footer.Link>
            <Footer.Link href="https://www.youtube.com/">
              <FontAwesomeIcon icon={faYoutube} className="fab" />
              _Youtube
            </Footer.Link>
            <Footer.Link href="https://www.twitter.com/">
              <FontAwesomeIcon icon={faTwitter} className="fab" />
              _Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
        @Copyright 2023 Delivery Website
      </Footer.Wrapper>
    </Footer>
  );
}

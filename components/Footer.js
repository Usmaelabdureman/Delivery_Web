import React from 'react';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
const copyright = '&#169;'
export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href="#">
              Story Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum{' '}
            </Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="#">Selling</Footer.Link>
            <Footer.Link href="#">Deliverying</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link href="#">Ethiopia</Footer.Link>
            <Footer.Link href="#">Addis Ababa</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social Links</Footer.Title>
            <Footer.Link href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebookF} className="fab" />
              &nbsp;  Facebook
            </Footer.Link>
            <Footer.Link href="https://www.instagram.com/esmizth/">
              <FontAwesomeIcon icon={faInstagram} className="fab" />
              &nbsp; Instagram
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.EndRow>
          <Footer.Column>
            <Footer.H1>
            &copy; Copyright 2023 Delivery Website
            </Footer.H1>
          </Footer.Column>
        </Footer.EndRow>
   
      </Footer.Wrapper>
    </Footer>
  );
}

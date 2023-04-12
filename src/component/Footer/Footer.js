import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';
import LogoImage from "../../assets/images/logo-text.png";

function Footer() {
  return (
    <FooterContainer>
      <div className='footer-flex'>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership 
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time unsubscribe at any time unsubscribe at  any time There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</FooterSubText>
        {/* <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form> */}
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle to="/">Home</FooterLinkTitle>
            <FooterLink to='/'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>

          </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle to="/services">Service</FooterLinkTitle>

          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle to='/products'>About US</FooterLinkTitle>
            <FooterLink to='/'>Contact</FooterLink>
            <FooterLink to='/'>Terms and Conditions</FooterLink>
 

          </FooterLinkItems>

        </FooterLinksWrapper>
      </FooterLinksContainer>
      </div>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
          <img src={LogoImage} alt="" className='footer-logo' />
          </SocialLogo>
          <WebsiteRights>PLPDATA © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;

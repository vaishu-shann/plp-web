import React from "react";
import { Button } from "../../globalStyles";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
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
  SocialIconLink,
} from "./Footer.elements";
import LogoImage from "../../assets/images/logo-text.png";

function Footer() {
  return (
    <FooterContainer>
      <div className="footer-flex">
      <SocialMediaWrap>
          <SocialLogo to="/">
            <img src={LogoImage} alt="" className="footer-logo" />
          </SocialLogo>

          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                "//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
              }
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
        <FooterSubscription>
          {/* <FooterSubHeading>
          Join our exclusive membership 
        </FooterSubHeading> */}
          <FooterSubText>
            If you're looking for a reliable and experienced partner for your
            Banking and Financial Services needs, look no further than PLP Data.
            Contact us today to learn more about our services and how we can
            help you transform your business.
          </FooterSubText>
          {/* <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form> */}
        </FooterSubscription>

      </div>

    </FooterContainer>
  );
}

export default Footer;

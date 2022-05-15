import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+918838926572">8838926572</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:vijayjayakumar0206@gmail.com">vijayjayakumar0206@gmail.com</LinkItem>
        </LinkColumn>              
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>“Measuring programming progress by lines of code is like measuring  <br></br>  aircraft building progress by weight.”</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/vijayjayakumar02?tab=repositories" target="_blank">
        <AiFillGithub size="3rem"></AiFillGithub>
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/vijay_o6/" target="_blank">
          <AiFillInstagram size="3rem"></AiFillInstagram>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/" target="_blank">
          <AiFillLinkedin size="3rem"></AiFillLinkedin>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

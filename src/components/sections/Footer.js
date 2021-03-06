import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// import PrivacyPolicy from '@pages/PrivacyPolicy';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import TwitterIcon from '@static/icons/twitter.svg';
import FacebookIcon from '@static/icons/facebook.svg';
import MessengerIcon from '@static/icons/messenger.svg';
import EmailIcon from '@static/icons/email.svg';
import InstagramIcon from '@static/icons/instagram.svg';

const SOCIAL = [
  {
    alt: 'Like us on Facebook',
    icon: FacebookIcon,
    link: 'https://facebook.com/wesoarhighph',
  },
  {
    alt: 'Follow us on Twitter',
    icon: TwitterIcon,
    link: 'https://twitter.com/wesoarhighph',
  },
  {
    alt: 'Follow us on Instagram',
    icon: InstagramIcon,
    link: 'https://instagram.com/wesoarhighph',
  },
  {
    alt: 'Message us on Messenger',
    icon: MessengerIcon,
    link: 'https://m.me/wesoarhighapp',
  },

  {
    alt: 'Drop us an email',
    icon: EmailIcon,
    link: 'mailto:hello@wesoarhigh.com',
  },
];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "customers_pot" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Art>
          <Img
            fluid={data.art_pot.childImageSharp.fluid}
            style={{ width: 480, maxWidth: '100%', marginBottom: -16 }}
          />
        </Art>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <img
                alt="WeSoarHigh"
                src="/logo/WSHblacktext.png"
                style={{ height: 50 }}
              />
              <SocialIcons>
                {SOCIAL.map(({ alt, icon, link }) => (
                  <ExternalLink key={link} href={link}>
                    <img src={icon} alt={alt} />
                  </ExternalLink>
                ))}
              </SocialIcons>
            </Copyright>
            <span>
              <p style={{ marginBottom: 10 }}>
                <StyledExternalLink href="privacy-policy">
                  Privacy Policy
                </StyledExternalLink>
                {/* |{' '}
                <StyledExternalLink href="#wesoarhigh">
                  Terms of Service
                </StyledExternalLink> */}
              </p>
              <span>
                Illustrations by
                {` `}
                <ExternalLink
                  href="https://twitter.com/diana_valeanu"
                  style={{ textDecoration: 'none', color: '#111111' }}
                >
                  @diana_valeanu
                </ExternalLink>
              </span>
              {` | `}
              <span>
                Icons made by{' '}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  style={{ textDecoration: 'none', color: '#111111' }}
                  title="Freepik"
                >
                  Freepik
                </a>
              </span>
            </span>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

const StyledExternalLink = styled.a`
  color: inherit;
  text-decoration: underline;
  &:hover {
    color: ${props => props.theme.color.black.lighter};
  }
`;

export default Footer;

import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
// import ExternalLink from '@common/ExternalLink';

// const LOGOS = [
//   {
//     brand: 'Diet In A Box',
//     logo: 'brand/diet.png',
//     link: 'http://www.dietinaboxinc.com/',
//   },
//   {
//     brand: 'AutoServed',
//     logo: 'brand/autoserved-icon.png',
//     link: 'https://autoserved.com',
//   },
// ];

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="why-we're-different" accent>
        <StyledContainer>
          <div style={{ width: '50%', marginLeft: '50%' }}>
            <h1>Why We're Different</h1>
            {/* <LogoGrid>
              {LOGOS.map(({ brand, logo, link }) => (
                <div>
                  <ExternalLink key={link} href={link}>
                    <img src={logo} alt={brand} style={{ height: 150 }} />
                  </ExternalLink>
                  <p style={{ textAlign: 'center' }}>{brand}</p>
                </div>
              ))}
            </LogoGrid> */}
            <ul style={{ marginTop: 50 }}>
              <li><strong style={{ fontSize: 32 }}>We speak startup <span role="img" aria-labelledby="rocket">🚀</span></strong></li>
              <ul style={{ marginTop: 15, marginBottom: 30 }}><li>We help you prioritize what needs to be built first to achieve your goals and get customer validation. And, we make it lean.</li></ul>
              <li><strong style={{ fontSize: 32 }}>We eliminate the noise <span role="img" aria-labelledby="noise">🔇</span></strong></li>
              <ul style={{ marginTop: 15, marginBottom: 30 }}><li>Instead of choosing from countless applicants yourself, <strong>we narrow them down for you.</strong> We select at most 3 developers that fit your needs. From there, <strong>you have the power to choose.</strong></li></ul>
              <li><strong style={{ fontSize: 32 }}>We mentor developers <span role="img" aria-labelledby="tweet">👩🏻‍🏫</span><span role="img" aria-labelledby="tweet">👨🏽‍🏫</span></strong></li>
              <ul style={{ marginTop: 15, marginBottom: 30 }}><li>Although the developers are freelancers and not in-house, we support and advise them, so they are aligned with our vision and mission.</li></ul>
            </ul>
          </div>
          <Art>
            <Img fluid={data.art_story.childImageSharp.fluid} />
          </Art>
        </StyledContainer>
      </Section>
    )}
  />
);

// const LogoGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-gap: 64px;
//   justify-items: center;
//   margin-top: 96px;

//   a {
//     svg {
//       width: 100%;
//     }
//   }

//   @media (max-width: ${props => props.theme.screen.sm}) {
//     grid-template-columns: 1fr;
//   }
// `;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default UsedBy;

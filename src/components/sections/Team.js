import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const TEAM = [
  {
    name: 'Mobile Apps',
    image: 'icons/mobile.png',
  },
  {
    name: 'Websites',
    image: 'icons/web.png',
  },
  {
    name: 'Desktop Application',
    image: 'icons/desktop.png',
  },
  {
    name: 'Custom Systems',
    image: 'icons/custom.png',
  },
  // {
  //   name: 'PHP',
  //   image: 'icons/php.svg',
  // },
  // {
  //   name: 'Laravel',
  //   image: 'icons/laravel.png',
  // },
  // {
  //   name: 'Java',
  //   image: 'icons/java.svg',
  // },
  // {
  //   name: 'C#',
  //   image: 'icons/c-sharp.svg',
  // },
  // {
  //   name: 'Angular',
  //   image: 'icons/angular.png',
  // },
  // {
  //   name: 'Android',
  //   image: 'icons/android.svg',
  // },
  // {
  //   name: 'C / C++',
  //   image: 'icons/c.svg',
  // },
  // {
  //   name: 'Firebase',
  //   image: 'icons/firebase.png',
  // },
  // {
  //   name: 'SQL',
  //   image: 'icons/sql.svg',
  // },
  // {
  //   name: 'React/React Native',
  //   image: 'icons/react.svg',
  // },
  // {
  //   name: 'Flutter / Dart',
  //   image: 'icons/dart.png',
  // },
  // {
  //   name: 'Swift / Objective-C',
  //   image: 'icons/swift.svg',
  // },
];

const Team = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        art_team: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "team_work" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="expert-services" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>Expert Services</h1>
          <p>These are the expert services offered by our Freelance Developers</p>
          <p>Have something that is not on the list? Tell us about it.</p>
          <TeamGrid>
            {TEAM.map(({ name, image }) => {
              return (
                <div key={name} style={{ textAlign: 'center' }}>
                  <img
                    src={image}
                    alt={name}
                    style={{ width: 100, height: 100 }}
                  />
                  <br />
                  <Title>{name}</Title>
                  {/* <Subtitle>{role}</Subtitle> */}
                </div>
              );
            })}
          </TeamGrid>
          <a
            href="https://bit.ly/wesoarhighpartner"
            target="_blank"
            style={{ color: '#111111', textDecoration: 'none', width: '50%' }}
            rel="noreferrer"
          >
            <Button>
              I want one of these{' '}
              <span role="img" aria-label="idea">💡</span>
            </Button>
          </a>
          <Art>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </Art>
          <ArtMobile>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </ArtMobile>
        </Container>
      </Section>
    )}
  />
);

const Button = styled.div`
  background-color: ${props => props.theme.color.tertiary};
  padding: 20px;
  border-radius: 10px;
  font-size: 18px;
  margin-right: 10px;
  margin-top: 50px;
  width: 40%;
  text-align: center;

  :hover {
    background-color: ${props => props.theme.color.tertiaryDark};
    color: #eeeeee;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-template-rows: min-content;
  grid-gap: 20px;
  justify-content: space-between;
  width: 60%;
  margin-top: 72px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 25px;
  }
`;

const Art = styled.figure`
  width: 800px;
  margin: -80px 0;
  position: absolute;
  top: 0;
  left: 70%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -60%;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

const Title = styled.p`
  margin-top: 16px;
  display: inline;
  color: ${props => props.theme.color.black.light};
  font-size: 22px;
`;

// const Subtitle = styled.p`
//   ${props => props.theme.font_size.small};
//   color: ${props => props.theme.color.black.light};
// `;

export default Team;

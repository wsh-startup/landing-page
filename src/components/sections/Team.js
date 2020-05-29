import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

/**
Node
*/

const TEAM = [
  {
    name: 'HTML 5',
    image: 'icons/html5.svg',
  },
  {
    name: 'CSS 3',
    image: 'icons/css.svg',
  },
  {
    name: 'JavaScript',
    image: 'icons/javascript.svg',
  },
  {
    name: 'Node',
    image: 'icons/nodejs.svg',
  },
  {
    name: 'PHP',
    image: 'php.svg',
  },
  {
    name: 'Java',
    image: 'icons/java.svg',
  },
  {
    name: 'C#',
    image: 'icons/c-sharp.svg',
  },
  {
    name: 'Angular',
    image: 'angular.png',
  },
  {
    name: 'Swift',
    image: 'icons/swift.svg',
  },
  {
    name: 'Android',
    image: 'icons/android.svg',
  },
  {
    name: 'Flutter/Dart',
    image: 'icons/dart.png',
  },
  {
    name: 'React/React Native',
    image: 'icons/react.svg',
  },
  {
    name: 'C/C++',
    image: 'icons/c.svg',
  },
  {
    name: 'Firebase',
    image: 'icons/firebase.png',
  },
  {
    name: 'SQL',
    image: 'icons/sql.svg',
  },
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
      <Section id="technologies" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>Skills and Technologies</h1>
          <TeamGrid>
            {TEAM.map(({ name, image }) => {
              return (
                <div key={name}>
                  <img
                    src={image}
                    alt={name}
                    style={{ width: 75, height: 75 }}
                  />
                  <Title>{name}</Title>
                  {/* <Subtitle>{role}</Subtitle> */}
                </div>
              );
            })}
          </TeamGrid>
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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: min-content;
  grid-gap: 25px;
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
  color: ${props => props.theme.color.black.regular};
`;

// const Subtitle = styled.p`
//   ${props => props.theme.font_size.small};
//   color: ${props => props.theme.color.black.light};
// `;

export default Team;

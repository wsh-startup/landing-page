import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(sourceInstanceName: { eq: "art" }, name: { eq: "08" }) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art>
            <Text>
              <h1>
                Save on cost. Hire a Freelance Developer.
              </h1>
              <br />
              <p>
                <h3>Have a product or app in mind?</h3>

                <br />
                We connect you with skilled <strong>Freelance Developers</strong> who can build your product so you can focus on what matters.
              </p>
              <br />
              <br />
              <a
                href="https://bit.ly/wesoarhighpartner"
                target="_blank"
                style={{ color: '#111111', textDecoration: 'none' }}
                rel="noreferrer"
              >
                <Button>
                  I'm looking for a Freelance Developer to build my idea{' '}
                  <span role="img" aria-label="idea">
                    💡
                  </span>
                </Button>
              </a>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const Button = styled.div`
  background-color: ${props => props.theme.color.tertiary};
  padding: 20px;
  border-radius: 10px;
  font-size: 18px;
  margin-right: 10px;
  text-align: center;

  :hover {
    background-color: ${props => props.theme.color.tertiaryDark};
    color: #eeeeee;
  }
`;

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 100%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

export default Header;

import React from 'react';
import styled from 'styled-components';

import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import ExternalLink from '@common/ExternalLink';
import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_payment: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "13" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="how-it-works">
        <Container>
          <Grid>
            <div>
              <h2>
                <span style={{ color: '#4834d4' }}>
                  Step 1: <strong>Send a Request</strong>
                </span>
              </h2>
              <p>
                <strong>Provide details on your product or app idea.</strong>
                <br />
                At this stage, we gather relevant information that will help us
                match you to Tech Experts.
                <br />
                <br />
                Click{' '}
                <StyledExternalLink href="https://bit.ly/wesoarhighpartner">
                  here
                </StyledExternalLink>{' '}
                to send a request.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>
                <span style={{ color: '#4834d4' }}>
                  Step 2:{' '}
                  <strong>Choose a Tech Expert from at most 3 matches</strong>
                </span>
              </h2>
              <p>
                <strong>
                  We provide 3 matches to choose from, plus, our recommendations
                  and insights
                </strong>
                . But, YOU have the final say!
                <br />
                <br />
                WeSoarHigh matches the best Tech Experts that fit your goals,
                requirements, and profile. We'll help you make an informed
                choice and guide you through the process.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>
                <span style={{ color: '#4834d4' }}>
                  Step 3: <strong>Meet the Tech Expert</strong>
                </span>
              </h2>
              <p>
                Have a virtual session with the Tech Expert of your choice,
                facilitated by the WeSoarHigh team.
                <br />
                <br />
                <strong>
                  Iron out the details of the product and reach a common
                  understanding.
                </strong>
                {/* At this stage, we specify the product features, schedule,
                milestones, delivery, and payment terms. */}
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_payment.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>
                <span style={{ color: '#4834d4' }}>
                  Step 4: <strong>Product Milestones and Payment</strong>
                </span>
              </h2>
              <p>
                <strong>Track progress</strong> through WeSoarHigh's
                collaboration tools,{' '}
                <strong>
                  ensure software quality, and get incremental releases
                </strong>{' '}
                (milestones).
                <br />
                <br />
                Provide incremental payments as agreed in the payment terms.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: underline;
  &:hover {
    color: ${props => props.theme.color.primaryDark};
  }
`;

export default About;

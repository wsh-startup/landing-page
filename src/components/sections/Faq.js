import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';
import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'What is WeSoarHigh?',
    content: () => (
      <>
        More people and businesses are going digital because of the pandemic and{' '}
        <strong>
          they would need access to Tech resources for them to succeed in the
          Tech space
        </strong>
        .
        <br />
        <br />
        <strong>WeSoarHigh</strong> connects{' '}
        <u>people with product or app ideas</u> to{' '}
        <u>skilled developers or freelancers (Tech Experts)</u> who will design
        and develop the product.
        <br />
        <br />
        We believe everyone who has the courage to pursue the ideas deserve the
        best people to work on them.
        <br />
        Because of this, <strong>we will reach greater heights together</strong>
        !
      </>
    ),
  },
  {
    title: 'How does it work?',
    content: () => (
      <>
        We want you to build your product as soon and as fast as possible. So
        here's our seamless process for <strong>Partners</strong>.
        <ol>
          <li>
            <strong>Send a request</strong> through this site and provide
            details of your app idea
          </li>

          <li>
            <strong>WeSoarHigh recommends 3 of our Tech Experts</strong> that
            best fit your needs, and gives insights and recommendations
            <ul style={{ fontSize: '16px' }}>
              <li>
                Evaluate and select the Tech Expert you like best.{' '}
                <strong>You have the final say!</strong>
              </li>
            </ul>
          </li>

          <li>
            <strong>
              Have virtual sessions with Tech Expert + WeSoarHigh team
            </strong>{' '}
            to iron out details, set milestones, specify payment terms, outline
            features, etc.
          </li>
          <li>
            Fullfill <strong>Product Milestones and Payment</strong>
            <ul>
              <li>
                <span style={{ color: 'darkred' }}>*</span>Provide incremental
                payments (₱)
              </li>
              <li>
                <span style={{ color: 'darkred' }}>*</span>Receive incremental
                releases (weekly or bi-monthly), weekly progress updates and
                conduct weekly meetings
              </li>
              <li>
                <span style={{ color: 'darkred' }}>*</span>Receive the{' '}
                <strong>final product 📱💻 + Training + Support</strong>
              </li>
              <li>
                We will discuss the payment terms and milestones in detail once
                we have analyzed the product requirements.
              </li>
              <em>
                <small>
                  <span style={{ color: 'darkred' }}>*</span>Will be sorted out
                  and finalized on or before Step 4️
                </small>
              </em>
            </ul>
          </li>
        </ol>
        {/* For more info, here's our{' '}
        <StyledExternalLink href="https://bit.ly/wshpartnerfaq">
          FAQ for Interested Partners
        </StyledExternalLink>
        . */}
      </>
    ),
  },
  {
    title: 'Who are your Tech Experts?',
    content: () => (
      <>
        Our Tech Experts possess the following qualities:
        <ul>
          <li>
            Competent in Mobile Application, Web Application, and/or Desktop
            Application Development
          </li>
          <li>
            Developers who are in the startup scene or familiar with startup
            culture
          </li>
          <li>
            Tech-savvy developers that are up-to-date with the latest
            Technologies worldwide
          </li>
          <li>Motivated learners that possess a growth mindset</li>
        </ul>
        <strong>We value quality over quantity.</strong> We assess developers
        based on their Technical competencies, not on the years of experience.
      </>
    ),
  },
  {
    title: 'How do you match Partners and Tech Experts?',
    content: () => (
      <>
        We developed an algorithm that evaluates the compatibility of our
        Partners with each of our Tech Expert.
        <ol>
          <li>Assess the business and Tech requirements of our partners</li>
          <li>
            Assess the Technical expertise of our Tech Partners based on their
            profiles, interviews, portfolio, etc.
          </li>
          <li>
            Recommended Tech Partners will send proposals, which will be
            forwarded to our partners
          </li>
        </ol>
      </>
    ),
  },
  {
    title: 'How fast do I get a Tech Expert?',
    content: () => (
      <>
        After submitting the form, we'll get back to you within 24 hours.
        <br />
        <br />
        Depending on the requirements, we can match Tech Experts within 3 to 7
        days.
      </>
    ),
  },
  {
    title: "What happens if you don't find a match?",
    content: () => (
      <>
        Transparency is how we build rapport with our partners. If we don't find
        a match because all our developers are in the middle of a project,{' '}
        <strong>we'll contact you so we can work out an arrangement</strong>.
        <br />
        <br />
        Depending on our agreement, we can look for a developer to match your
        needs. Alternatively, partners will have the option to wait until a Tech
        Expert becomes available.
      </>
    ),
  },
  {
    title: "I'm a developer, how do I join your team and become a Tech Expert?",
    content: () => (
      <>
        To join our team of Tech Experts, apply{' '}
        <StyledExternalLink href="https://bit.ly/joinwesoarhigh">
          here
        </StyledExternalLink>
        .
        <br />
        <br />
        Thanks for your interest. We love proactive, passionate, and determined
        developers!
      </>
    ),
  },
  {
    title: 'If I have questions, how do I reach you?',
    content: () => (
      <>
        <strong>
          You can talk to us via the chatbox on the lower-right of this site
        </strong>
        . We'll get the message even when offline.
        <br />
        <br />
        Other Channels:
        <ul>
          <li>
            📧 Email:{' '}
            <StyledExternalLink href="mailto:hello@wesoarhigh.com">
              hello@wesoarhigh.com
            </StyledExternalLink>
          </li>
          <li>
            🐦 Twitter:{' '}
            <StyledExternalLink href="https://twitter.com/wesoarhighph">
              @wesoarhighph
            </StyledExternalLink>
          </li>
          <li>
            👍🏼 Facebook:{' '}
            <StyledExternalLink href="https://facebook.com/wesoarhighph">
              @WeSoarHighPH
            </StyledExternalLink>
          </li>
          <li>
            💬 Messenger:{' '}
            <StyledExternalLink href="https://m.me/wesoarhighph">
              Talk to us!
            </StyledExternalLink>
          </li>
        </ul>
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: underline;
  &:hover {
    color: ${props => props.theme.color.primaryDark};
  }
`;

export default Faq;

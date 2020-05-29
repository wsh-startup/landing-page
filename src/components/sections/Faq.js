import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'What is WeSoarHigh?',
    content: () => <></>,
  },
  {
    title: 'How does it work?',
    content: () => (
      <>
        Gatsby’s rich data plugin ecosystem lets you build sites with the data
        you want — from one or many sources: Pull data from headless CMSs, SaaS
        services, APIs, databases, your file system, and more directly into your
        pages using GraphQL.
      </>
    ),
  },
  {
    title: 'Who are your Tech Experts?',
    content: () => (
      <>
        Gatsby.js is Internet Scale. Forget complicated deploys with databases
        and servers and their expensive, time-consuming setup costs,
        maintenance, and scaling fears. Gatsby.js builds your site as “static”
        files which can be deployed easily on dozens of services.
      </>
    ),
  },
  {
    title: 'How do you match Partners and Tech Experts?',
    content: () => (
      <>
        Do not build a website with last decade’s tech. The future of the web is
        mobile, JavaScript and APIs—the{` `}
        <ExternalLink href="https://jamstack.org/">JAMstack</ExternalLink>.
        Every website is a web app and every web app is a website. Gatsby.js is
        the universal JavaScript framework you’ve been waiting for.
      </>
    ),
  },
  {
    title: 'How fast do I get a Tech Expert?',
    content: () => <></>,
  },
  {
    title: 'If I have questions, how do I reach you?',
    content: () => <></>,
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

export default Faq;

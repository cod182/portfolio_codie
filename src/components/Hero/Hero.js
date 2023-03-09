import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row noPadding>
    <LeftSection>
      <SectionTitle main center>
        Hello <br /> I Am Codie
      </SectionTitle>
      <SectionText>Junior Web Developer!</SectionText>
      <Button
        target="_blank"
        onClick={() => (window.location = 'https://www.google.com')}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;

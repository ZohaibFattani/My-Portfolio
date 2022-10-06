import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My purpose is to secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills. Secure a responsible career opportunity to fully utilize my training, skills, and past years of experience, while making a significant contribution to the success of the company.
      </SectionText>
      <Button onClick={()=> window.location = 'https://github.com/ZohaibFattani'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
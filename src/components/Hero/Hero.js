import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typewritter from 'typewriter-effect'

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <Typewritter 
          onInit={(typewriter) => {
            typewriter.typeString("Welcome to my <br />")
                      .typeString("Site ")
                      .deleteChars(5)
                      .typeString("Portfolio")
                      .start()
          }}
          typeSpeed={100}
        />
      </SectionTitle>
      <SectionText>
      Passionate full stack developer with 2 years of hands-on experience in developing scalable websites/applications using a wide range of front-end
      and back-end skills like angular,react, asp.net, etc. Developed 10+ websites from scratch. Looking to further enhance the skill as the full stack developer.
      </SectionText>
      <Button onClick={() => window.location ="https://github.com/vijayjayakumar02?tab=repositories"} href="#projects" target="_blank">My Projects</Button>
    </LeftSection>
  </Section>
);

export default Hero;
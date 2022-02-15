import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          UMAIR SHEHZAD
        </SectionTitle>
        <SectionText>
          A highly motivated and passionate software developer with six months
          of technical internship and 1.5 years of real-world working
          experience. Seeking to leverage strong MERN Stack development skills
          in a team oriented environment.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

import React from 'react';
import { DiDotnet, DiAngularSimple, DiDatabase, SiHiveBlockchain } from 'react-icons/di';
import { SiEthereum } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='technologies'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <DiAngularSimple size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Angular & MVC Core
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDotnet size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js & asp.net
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with <br />
            MSSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiEthereum size="3rem" />
        <ListContainer>
          <ListTitle>Blockchain</ListTitle>
          <ListParagraph>
            Basic knowledge on <br />
            Solidity
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

import React from 'react';
import styled from 'styled-components';
import Social from './Social';

const AboutStyle = styled.div`
  text-align: center;
`;

const AboutAvatar = styled.div`
  padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
  border-radius: 100%;
  width: 160px;
  height: 160px;
  border: 3px solid #29264e;
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`;

const AboutName = styled.div`
  text-align: center;
`;

const AboutH2 = styled.h2`
  font-family: 'Roboto';
  font-weight: 400;
  letter-spacing: 1.2px;
  margin: 0.5em 0 0 0;
  color: #467a99;
`;

const AboutProffession = styled.p`
  margin: 0.2em 0 1em 0;
  letter-spacing: 1.6px;
  font-weight: 300;
  color: #467a99;
`;

const AboutBio = styled.p`
  color: #6890cb;
  font-size: 1em;
  font-weight: 300;
`;

const AboutLocation = styled.p`
  color: #6890cb;
  font-size: 1em;
  font-weight: 300;
`;

const About = ({ avatar, name, profession, bio, address, social }) => (
  <AboutStyle>
    <div className="About-container">
      <AboutAvatar>
        <figure>
          <AboutImg src={avatar} alt={name} />
        </figure>
      </AboutAvatar>
      <div className="About-name">
        <AboutH2>{name}</AboutH2>
      </div>
      <div className="About-profession">
        <AboutProffession>{profession}</AboutProffession>
      </div>
      <div className="About-desc">
        <AboutBio>{bio}</AboutBio>
      </div>
      <div className="About-location">
        <AboutLocation>{address}</AboutLocation>
      </div>
      <div className="About-social">
        <Social social={social}> </Social>
      </div>
    </div>
  </AboutStyle>
);

export default About;

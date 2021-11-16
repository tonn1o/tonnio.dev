import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { appConsts } from "../constants/constants";
import avatar from "../images/avatar.jpg";
import { Helmet } from "react-helmet";

const Wrapper = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const PersonalInfo = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  top: -68px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 50%;
  max-width: 250px;
`;

const Text = styled.p`
  margin-top: 32px;
  font-size: 20px;
  text-align: center;
`;

const Socials = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  font-size: 50px;
  width: 100%;
  max-width: 700px;
  margin-bottom: 24px;
`;

const SocialLink = styled.a`
  transition: opacity 0.3s;

  &:hover,
  &:active {
    opacity: 0.7;
  }
`;

const About = () => {
  return (
    <>
      <Helmet title="about" />
      <Layout>
        <Wrapper>
          <PersonalInfo>
            <Avatar src={avatar} alt="Toni Babenko" />

            <Text>
              personal blog by <b>Toni Babenko</b>
            </Text>
          </PersonalInfo>

          <Socials>
            <SocialLink href={appConsts.externalLinks.medium} target="_blank">
              <FontAwesomeIcon icon={faMedium} />
            </SocialLink>
            <SocialLink
              href={appConsts.externalLinks.stackOverflow}
              target="_blank"
            >
              <FontAwesomeIcon icon={faStackOverflow} />
            </SocialLink>
            <SocialLink href={appConsts.externalLinks.linkedIn} target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialLink>
            <SocialLink href={appConsts.externalLinks.github} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </SocialLink>
          </Socials>
        </Wrapper>
      </Layout>
    </>
  );
};

export default About;

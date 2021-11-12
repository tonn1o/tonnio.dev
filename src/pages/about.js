import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import avatar from "../images/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #292929;
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
  width: 90%;
  max-width: 500px;
  margin-bottom: 24px;
`;

const SocialLink = styled.a`
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const About = () => {
  return (
    <Layout>
      <Wrapper>
        <PersonalInfo>
          <Avatar src={avatar} />
          <Text>
            personal blog by <b>Toni Babenko</b>
          </Text>
        </PersonalInfo>

        <Socials>
          <SocialLink>
            <FontAwesomeIcon icon={faMedium} />
          </SocialLink>
          <SocialLink>
            <FontAwesomeIcon icon={faStackOverflow} />
          </SocialLink>
          <SocialLink>
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
          <SocialLink>
            <FontAwesomeIcon icon={faGithub} />
          </SocialLink>
        </Socials>
      </Wrapper>
    </Layout>
  );
};

export default About;

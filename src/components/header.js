import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { Link } from "gatsby";

const Wrapper = styled.div`
  display: flex;
  padding-top: 16px;
  align-items: center;
`;

const Nav = styled.div`
  margin-left: auto;
`;

const Logo = styled.img`
  height: 30px;
`;

const Header = () => {
  return (
    <Wrapper>
      <Link to={"/"}>
        <Logo src={logo} alt="logo" />
      </Link>

      {/*<Nav>*/}
      {/*  <Link to={"/about"}>About</Link>*/}
      {/*</Nav>*/}
    </Wrapper>
  );
};

export default Header;

import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { Link } from "gatsby";

const Wrapper = styled.div`
  display: flex;
  padding-top: 16px;
  align-items: flex-end;
`;

const Nav = styled.div`
  margin-left: auto;
`;

const Logo = styled.img`
  height: 30px;
`;

const NavLink = styled(Link)`
  text-transform: lowercase;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
`;

const Header = () => {
  return (
    <Wrapper>
      <Link to={"/"}>
        <Logo src={logo} alt="logo" />
      </Link>

      <Nav>
        <NavLink to={"/about"}>About</NavLink>
      </Nav>
    </Wrapper>
  );
};

export default Header;

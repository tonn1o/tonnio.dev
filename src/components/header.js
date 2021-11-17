import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { Link } from "gatsby";
import { appConsts } from "../constants/constants";

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
  font-weight: 500;
  transition: opacity 0.3s;
  font-size: var(--fs-nav-link);

  &:hover,
  &:active {
    opacity: 0.7;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Link to={appConsts.routes.root}>
        <Logo src={logo} alt="tonnio" />
      </Link>

      <Nav>
        <NavLink to={appConsts.routes.about}>About</NavLink>
      </Nav>
    </Wrapper>
  );
};

export default Header;

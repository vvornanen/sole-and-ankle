import React from 'react';
import styled from 'styled-components/macro';

import {COLORS, WEIGHTS} from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader/>
      <MainHeader>
        <Baseline>
          <NavSpacer>
            <Logo/>
          </NavSpacer>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <NavSpacer/>
        </Baseline>
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: 32px;
  height: ${72 / 16}rem;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Baseline = styled.div`
  display: flex;
  align-items: baseline;
  gap: 48px;
  margin-block-start: -2px; /* Optical alignment */
`;

const NavSpacer = styled.div`
  flex: 1;
`

const Nav = styled.nav`
  width: fit-content;
  display: flex;
  gap: 48px;
  justify-content: space-between;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;

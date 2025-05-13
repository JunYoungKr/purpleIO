"use client";

import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoLink href="/">AWESOME FOOD STORE</LogoLink>
      <Nav>
        <Link href="/about">ABOUT</Link>
        <Link href="/">STORE</Link>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 24px;
  font-family: "pretendard";
  border-bottom: 1px solid #111;

  @media (min-width: 768px) {
    height: 80px;
  }
`;

const LogoLink = styled(Link)`
  font-size: 1.125rem;
  font-weight: 700;
  color: #111;
  text-decoration: none;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  font-size: 0.875rem;
  color: #111;
  text-decoration: underline;
  text-underline-offset: 4px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  a {
    color: #111;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

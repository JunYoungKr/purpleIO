"use client";

import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© 2025 김준영</p>
      <LinkGroup>
        <FooterLink
          href="https://github.com/JunYoungKr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </FooterLink>
        <FooterLink
          href="https://junyoungkr-github.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </FooterLink>
      </LinkGroup>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  height: 80px;
  padding: 0 24px;
  border-top: 1px solid #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.125rem; /* text-lg */
  color: #111;
  font-family: "pretendard";
`;

const LinkGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const FooterLink = styled.a`
  text-decoration: underline;
  color: #111;
`;

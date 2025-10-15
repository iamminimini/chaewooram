'use client';

import { css, styled } from 'styled-components';

export const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 CHAEWOORAM GALLERY. All Rights Reserved. </p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer(({ theme }) => {
  const { colors } = theme;
  return css`
    padding: 1rem;
    text-align: center;
    font-size: 10px;
    height: 48px;
    background-color: ${colors.backgroundWrapper};
    color: ${colors.textTxt70};
  `;
});

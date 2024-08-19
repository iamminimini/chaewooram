'use client';

import styled, { css } from 'styled-components';

export default function Home() {
  return (
    <>
      <Container>12345</Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: red;
`;

const Section = styled.div<{ $bgColor?: string; $customPadding?: string }>`
  ${({ theme, $bgColor, $customPadding }) => {
    const { colors } = theme;
    return css`
      width: 100%;
      background-color: ${$bgColor ? $bgColor : '#fff'};
      padding: ${$customPadding ? $customPadding : '140px 60px 120px'};
      display: flex;
      flex-direction: column;
      align-items: center;
    `;
  }}
`;

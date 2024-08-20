'use client';

import { isMobile } from 'react-device-detect';
import Lottie from 'react-lottie-player';
import Link from 'next/link';
import notFound from 'public/json/notFound.json';
import { css, styled } from 'styled-components';

export default function NotFound() {
  return (
    <Container>
      <TextWrapper>
        <Text>
          죄송합니다. 페이지를 찾을 수 없습니다. <br />
          존재하지 않는 주소를 입력하셨거나, <br />
          요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
        </Text>
        <StyleLink href="/">홈으로 돌아가기</StyleLink>
      </TextWrapper>
      {!isMobile && <StyleLottie loop animationData={notFound} play />}
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 30px;
      padding: 180px 80px;
    `;
  }}
`;

const TextWrapper = styled.div`
  ${({ theme }) => {
    const { colors, media } = theme;
    return css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      ${media.tablet} {
        align-items: center;
        text-align: center;
        line-height: 1;
      }
    `;
  }}
`;

const Text = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      font-size: 17px;
      letter-spacing: -1px;
      white-space: nowrap;
    `;
  }}
`;

const StyleLottie = styled(Lottie)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      max-width: 500px;
    `;
  }}
`;

const StyleLink = styled(Link)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: #111;
      border-radius: 10px;
      color: #fff;
      padding: 10px 16px;
      margin-top: 20px;
    `;
  }}
`;

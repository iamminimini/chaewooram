'use client';

import { isMobile } from 'react-device-detect';
import { useRouter } from 'next/navigation';
import { AnimatedText } from '@/components/animatedText/animatedText';
import { useAnimationInView } from '@/hooks/useAnimationInView';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Banner3 = () => {
  const router = useRouter();
  const { ref: textRef, getAnimationProps } = useAnimationInView();

  return (
    <Banner3Container>
      <TextContent>
        <AnimatedText ref={textRef} getAnimationProps={getAnimationProps}>
          <AnimatedTitle>
            GALLERY MARKETPLACE: {isMobile && <br />} <span>실시간 채팅으로 예술 거래를 새롭게</span>
          </AnimatedTitle>
          <AnimatedSubtitle>"예술 작품을 사고파는 새로운 방식을 경험해보세요."</AnimatedSubtitle>
          <AnimatedDescription>
            우리 플랫폼은 아티스트와 직접 연결되어 <br /> 실시간 채팅을 통해 원활한 소통과 거래를 가능하게 합니다.
            <br />전 세계의 독창적인 작품을 발견하고, 창작자들과 의미 있는 관계를 구축해보세요.
          </AnimatedDescription>
        </AnimatedText>

        <ChatButtonWrapper>
          <ChatButton
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => router.push(`/Chats`)}
            startIcon={<ArrowForwardIcon />}
          >
            Chat 시작하기
          </ChatButton>
        </ChatButtonWrapper>
      </TextContent>
      <VideoWrapper>
        <Video autoPlay loop muted>
          <source src="/video/chat-video.mp4" type="video/mp4" />
        </Video>
      </VideoWrapper>
    </Banner3Container>
  );
};

const Banner3Container = styled.div`
  ${({ theme }) => {
    const { colors, media } = theme;
    return css`
      display: flex;
      align-items: center;
      margin: 0 auto;

      ${media.tablet} {
        flex-direction: column;
        overflow: hidden;
      }
    `;
  }}
`;

const TextContent = styled.div`
  ${({ theme }) => {
    const { colors, media } = theme;
    return css`
      width: 100%;
      height: 1200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 1.5;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      padding: 20px;
      ${media.tablet} {
        width: 100%;
        height: 500px;
        background: none;
        text-align: center;
      }
    `;
  }}
`;

const AnimatedTitle = styled(motion.h1)`
  color: #2a2a2a;
  font-size: 22px;
  font-weight: bold;
  & span {
    font-weight: normal;
    font-size: 18px;
  }
`;

const AnimatedSubtitle = styled(motion.p)`
  ${({ theme }) => {
    const { colors, media } = theme;
    return css`
      font-size: 28px;
      font-weight: bold;
      position: relative;
      padding: 20px 0px;
      color: transparent;
      background: linear-gradient(135deg, #f9d423, #e0aaff, #b09adb, #9c89b8, #cfc4e0);
      background-clip: text;
      -webkit-background-clip: text;
      border: 2px solid transparent;
      background-size: 300% 300%;
      animation: gradientAnimation 7s ease infinite;

      @keyframes gradientAnimation {
        0% {
          background-position: 0% 0%;
        }
        50% {
          background-position: 100% 100%;
        }
        100% {
          background-position: 0% 0%;
        }
      }

      ${media.tablet} {
        font-size: 26px;
      }
    `;
  }}
`;
const AnimatedDescription = styled(motion.p)`
  ${({ theme }) => {
    const { colors, media } = theme;
    return css`
      color: #2a2a2a;
      font-size: 18px;
      text-align: right;
      line-height: 1.5;
      ${media.tablet} {
        text-align: center;
        font-size: 16px;
      }
    `;
  }}
`;

const VideoWrapper = styled.div`
  ${({ theme }) => {
    const { colors, media } = theme;
    return css`
      width: 30%;
      min-width: 900px;
      height: 1200px;
      display: flex;
      justify-content: center;
      background-size: auto;
      background-position: center;
      background-image: url('/images/main_banner_bg.png');
      background-repeat: no-repeat; /* 추가된 부분 */
      position: relative;
      background-size: cover;

      ${media.tablet} {
        width: 100%;
        height: 600px;
        background-image: url('/images/main_banner_mobile_bg.png');
        background-size: contain;
        margin-left: -25px;
      }
    `;
  }}
`;

const Video = styled.video`
  ${({ theme }) => {
    const { colors, media } = theme;
    return css`
      width: 450px;
      height: auto;
      position: absolute;
      top: 53%;
      left: 52%;
      transform: translate(-50%, -50%);
      ${media.tablet} {
        width: 390px;
        left: 51%;
        top: 40%;
      }
    `;
  }}
`;
const ChatButtonWrapper = styled.div`
  margin-top: 50px;
`;

const ChatButton = styled(Button)`
  && {
    color: #2a2a2a;
    font-weight: bold;
    padding: 4px 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: #b5c6e1;
    }
  }
`;

export default Banner3;

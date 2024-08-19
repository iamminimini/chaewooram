import { motion } from 'framer-motion';
import { css, styled } from 'styled-components';

const TextWrapper = styled(motion.div)`
  ${({ theme }) => {
    const { colors, media } = theme;
    return css`
      display: flex;
      width: 50%;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.5;
      ${media.tablet} {
        width: 100%;
      }
    `;
  }}
`;

const Section = styled.div`
  ${({ theme }) => {
    const { colors, media } = theme;
    return css`
      max-width: 1024px;
      display: flex;
      gap: 30px;
      padding: 50px 0 150px;
      margin: auto;

      ${media.tablet} {
        display: flex;
        flex-direction: column-reverse;
      }
    `;
  }}
`;

const AnimatedVideoWrapper = styled(motion.div)`
  width: calc(100% + 32px);
  height: 50vh; // 화면 높이의 50%로 설정 (비율에 따라 조정 가능)
  margin-left: -16px;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
`;

export { AnimatedVideoWrapper, Section, TextWrapper, Video };

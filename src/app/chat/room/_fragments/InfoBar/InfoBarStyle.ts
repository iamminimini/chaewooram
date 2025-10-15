import Link from 'next/link';
import styled, { css } from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  & svg {
    color: #fff;
  }

  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${media.mobile} {
        padding: 12px 16px;
      }
    `;
  }}
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;

  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${media.mobile} {
        gap: 8px;
      }
    `;
  }}
`;

export const ChatIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  flex-shrink: 0;

  svg {
    font-size: 20px;
  }

  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${media.mobile} {
        width: 36px;
        height: 36px;

        svg {
          font-size: 18px;
        }
      }
    `;
  }}
`;

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`;

export const UserCount = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);

  svg {
    font-size: 14px;
  }

  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${media.mobile} {
        font-size: 11px;

        svg {
          font-size: 12px;
        }
      }
    `;
  }}
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-2px);
  }

  svg {
    font-size: 20px;
  }

  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${media.mobile} {
        width: 36px;
        height: 36px;

        svg {
          font-size: 18px;
        }
      }
    `;
  }}
`;

export const TitleText = styled.div`
  ${({ theme }) => {
    const { colors, media } = theme;
    return css`
      color: #fff;
      font-size: 18px;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.2;

      ${media.tablet} {
        font-size: 16px;
      }

      ${media.mobile} {
        font-size: 15px;
      }
    `;
  }}
`;

export const MessageBox = styled.div<{ isSentByCurrentUser: boolean }>`
  background: ${({ isSentByCurrentUser }) => (isSentByCurrentUser ? '#2979FF' : '#F3F3F3')};
  border-radius: 20px;
  padding: 10px 20px;
  color: ${({ isSentByCurrentUser }) => (isSentByCurrentUser ? '#FFF' : '#000')};
  display: inline-block;
  max-width: 80%;
`;

export const MessageWrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;
`;

export const SentText = styled.div<{ isSentByCurrentUser: boolean }>`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: ${({ isSentByCurrentUser }) => (isSentByCurrentUser ? '#FFF' : '#000')};
  letter-spacing: 0.3px;
  padding: ${({ isSentByCurrentUser }) => (isSentByCurrentUser ? '0 10px 0 0' : '0 0 0 10px')};
  margin: 0;
  font-size: 12px;
`;

export const MessageText = styled.div`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
  margin: 0;
`;

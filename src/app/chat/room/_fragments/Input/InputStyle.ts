import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Button, IconButton, TextField } from '@mui/material';
import styled, { css } from 'styled-components';

interface StyledTextFieldProps {
  $hasImageFile: boolean;
}

export const Container = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      display: flex;
      flex-direction: column;
      padding: 16px;
      gap: 12px;
      background: ${colors.backgroundContent};
      margin: 0px 20px;
      border-radius: 24px;

      ${({ theme }) => {
        const { media } = theme;
        return css`
          ${media.mobile} {
            padding: 12px;
            gap: 8px;
          }
        `;
      }}
    `;
  }}
`;

export const MediaPicker = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${media.mobile} {
        gap: 4px;
      }
    `;
  }}
`;

export const InputWrapper = styled.form`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 100%;
      position: relative;
      display: flex;
      align-items: flex-end;
      gap: 12px;
      background: ${colors.backgroundInner};
      border-radius: 24px;
      padding: 8px;
      border: 2px solid transparent;
      transition: border-color 0.2s ease;

      &:focus-within {
        border-color: ${colors.primary};
        background: ${colors.backgroundContent};
      }

      ${({ theme }) => {
        const { media } = theme;
        return css`
          ${media.mobile} {
            gap: 8px;
            padding: 6px;
            border-radius: 20px;
          }
        `;
      }}
    `;
  }}
`;

export const InputField = styled.input`
  border: 2px solid #ddd;
  border-radius: 20px;
  padding: 10px 20px;
  width: 100%;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #2979ff; /* 포커스 시 테두리 색상 */
  }
`;

export const SendButton = styled(Button)(({ theme }) => {
  const { colors } = theme;
  return css`
    && {
      background: ${colors.primary};
      color: ${colors.textOnlyWhite};
      border: none;
      cursor: pointer;
      font-size: 16px;
      white-space: nowrap;
      min-width: 48px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(41, 121, 255, 0.3);
      transition: all 0.2s ease;

      &:hover {
        background: ${colors.primaryHover};
        transform: translateY(-1px);
      }

      &:active {
        transform: translateY(0);
        background: ${colors.primaryActive};
      }

      ${({ theme }) => {
        const { media } = theme;
        return css`
          ${media.mobile} {
            min-width: 40px;
            width: 40px;
            height: 40px;
            font-size: 14px;
          }
        `;
      }}
    }
  `;
});

export const StyledFileIcon = styled(AttachFileIcon)(({ theme }) => {
  const { colors, media } = theme;
  return css`
    color: ${colors.textTxt70};
    transform: rotate(35deg);
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.primary};
    }
    ${media.mobile} {
      font-size: 20px;
    }
  `;
});

export const StyledTextField = styled(TextField)<StyledTextFieldProps>`
  && {
    flex: 1;

    .MuiInputBase-root {
      height: ${({ $hasImageFile }) => ($hasImageFile ? '160px' : 'auto')};
      min-height: 40px;
      max-height: 120px;
      align-items: flex-start;
      background: transparent;
      border: none;
      border-radius: 0;
      padding: 8px 12px;

      &:hover {
        background: transparent;
      }

      &.Mui-focused {
        background: transparent;
      }
    }

    .MuiInputBase-input {
      font-size: 16px;
      line-height: 1.4;
      padding: 0;

      &::placeholder {
        color: ${({ theme }) => theme.colors.textTxt70};
        opacity: 1;
      }
    }

    .MuiOutlinedInput-notchedOutline {
      border: none;
    }

    ${({ theme }) => {
      const { media } = theme;
      return css`
        ${media.mobile} {
          .MuiInputBase-root {
            min-height: 36px;
            max-height: 100px;
            padding: 6px 10px;
          }

          .MuiInputBase-input {
            font-size: 14px;
          }
        }
      `;
    }}
  }
`;

export const ImagePreviewBox = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      position: absolute;
      bottom: 100%;
      left: 0;
      right: 0;
      background: ${colors.backgroundContent};
      border: 1px solid ${colors.borderLineSub};
      border-radius: 12px;
      padding: 12px;
      margin-bottom: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      gap: 12px;

      ${({ theme }) => {
        const { media } = theme;
        return css`
          ${media.mobile} {
            padding: 8px;
            gap: 8px;
            border-radius: 8px;
          }
        `;
      }}
    `;
  }}
`;

export const ImagePreview = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;

  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${media.mobile} {
        width: 50px;
        height: 50px;
        border-radius: 6px;
      }
    `;
  }}
`;

export const RemoveButton = styled(IconButton)(({ theme }) => {
  const { colors, media } = theme;
  return css`
    && {
      color: ${colors.textTxt70};
      background: ${colors.backgroundInner};
      width: 28px;
      height: 28px;
      flex-shrink: 0;

      svg {
        font-size: 16px;
      }

      &:hover {
        background: rgba(255, 0, 0, 0.1);
        color: #ff4444;
      }
    }

    ${media.mobile} {
      width: 24px;
      height: 24px;

      svg {
        font-size: 14px;
      }
    }
  `;
});

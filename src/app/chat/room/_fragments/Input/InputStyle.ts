import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Button, IconButton, TextField } from '@mui/material';
import styled from 'styled-components';

interface StyledTextFieldProps {
  $hasImageFile: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;
  border: 1px solid #e0e0e0;
`;

export const MediaPicker = styled.div`
  display: flex;
`;

export const InputWrapper = styled.form`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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

export const SendButton = styled(Button)`
  background: #2979ff;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  white-space: pre;
  height: 100%;
  &:hover {
    background: #2962ff; /* 호버 시 배경색 */
  }
`;

export const StyledFileIcon = styled(AttachFileIcon)`
  color: #333;
  transform: rotate(35deg);
`;

export const StyledTextField = styled(TextField)<StyledTextFieldProps>`
  & .MuiInputBase-root {
    height: ${({ $hasImageFile }) => ($hasImageFile ? '200px' : '120px')};
    align-items: flex-start;
  }
`;

export const ImagePreviewBox = styled.div`
  height: 100px;
  padding: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
`;

export const ImagePreview = styled.img`
  width: 60px;
  height: 60px;
  position: relative;
`;

export const RemoveButton = styled(IconButton)`
  color: #333;
  position: relative;
  left: -10px;
  svg {
    font-size: 16px;
  }
  &:hover {
    background: #111;
  }
`;

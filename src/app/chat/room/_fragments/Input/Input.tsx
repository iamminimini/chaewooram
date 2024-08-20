import React, { useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import EmojiPicker from 'emoji-picker-react';
import styled from 'styled-components';
import EmojiPickerComponent from '../EmojiPicker/EmojiPicker';
import * as Style from './InputStyle';

const Input = ({ setMessage, sendMessage, message, setFile }: any) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 파일 아이콘 클릭 시 파일 입력 클릭
  const handleFileIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // 파일 선택 시 이미지 미리보기 설정
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImagePreview(reader.result);
          setFile(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // 이미지 제거 및 파일 상태 초기화
  const handleRemoveImage = () => {
    setImagePreview(null);
    setFile(null); // 파일 상태 제거
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // 파일 입력 초기화
    }
  };

  // 메시지 전송 함수
  const handleSendMessage = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (imagePreview) {
      handleRemoveImage();
    }
    console.log('Sending message!');
    sendMessage(event);
  };

  // Enter 키 이벤트 처리
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.key === 'Enter' && !event.shiftKey) {
      // Shift + Enter로 줄 바꿈 방지
      handleSendMessage(event);
    }
  };

  const onEmojiClick = (event, emojiObject) => {
    setMessage((prevInput) => prevInput + event.emoji);
  };

  return (
    <Style.Container>
      <Style.MediaPicker>
        <IconButton onClick={handleFileIconClick}>
          <Style.StyledFileIcon />
        </IconButton>
        <EmojiPickerComponent onEmojiClick={onEmojiClick} />
      </Style.MediaPicker>
      <Style.InputWrapper>
        <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
        <Style.StyledTextField
          size="medium"
          multiline
          rows={4}
          fullWidth
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          onKeyUp={handleKeyUp} // Enter 키 이벤트 처리
          placeholder="전송하려는 메시지를 입력하세요."
          $hasImageFile={imagePreview !== null}
        />
        {/** 파일 미리보기 */}
        {imagePreview && (
          <Style.ImagePreviewBox>
            <Style.ImagePreview src={imagePreview} alt="Image Preview" />
            <Style.RemoveButton onClick={handleRemoveImage}>
              <CloseIcon />
            </Style.RemoveButton>
          </Style.ImagePreviewBox>
        )}
        <Style.SendButton onClick={handleSendMessage} size="large" variant={'contained'}>
          <SendIcon />
        </Style.SendButton>
      </Style.InputWrapper>
    </Style.Container>
  );
};

export default Input;

export const PickerContainer = styled(EmojiPicker)`
  width: 30%;
  position: absolute;
  top: 30px;
  bottom: 20%;
`;

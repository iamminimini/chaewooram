'use client';

import { media } from '@/const/media';
import { createTheme } from '@mui/material/styles';
import { DefaultTheme } from 'styled-components';
import { pretendard } from './localFonts.fonts';

// 테마를 설정합니다.
const muiTheme = createTheme({
  typography: {
    fontFamily: pretendard.style.fontFamily,
    fontSize: 14,
  },
  palette: {
    primary: {
      main: '#8ca03b', // 기본 색상
      contrastText: '#fff',
    },
    secondary: {
      main: '#f0f0f0', // 보조 색상
    },
  },
});

const theme: DefaultTheme = {
  ...muiTheme,
  media: media,
};

export default theme;

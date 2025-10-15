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

export const lightTheme = {
  colors: {
    backgroundWrapper: '#f6f7fb',
    backgroundContent: '#ffffff',
    backgroundInner: '#f5f5f5',

    borderLineMain: '#ededed',
    borderLineSub: '#dedede',

    primary: '#2979ff',

    textTxt100Strong: '#191919',
    textTxt90: '#4a4a4a',
    textTxt70: '#4a4a4ab2',
    textTxt30: '#4a4a4a4c',
    textTitle: '#1b2b5a',
    textOnlyWhite: '#ffffff',
  },
  media,
};

export const darkTheme = {
  colors: {
    backgroundWrapper: '#151618',
    backgroundContent: '#22242a',
    backgroundInner: '#2b2e39',

    borderMain: '#23272e',
    borderSub: '#23272e',

    primary: '#89aaff',

    textTxt100Strong: '#ffffff',
    textTxt90: '#ffffffe5',
    textTxt70: '#ffffffb2',
    textTxt30: '#ffffff4c',
    textTitle: '#ffffff',
    textOnlyWhite: '#ffffff',
  },
  media,
};

const theme: DefaultTheme = {
  ...muiTheme,
  media: media,
};

export default theme;

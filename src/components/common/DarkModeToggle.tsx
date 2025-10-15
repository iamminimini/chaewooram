import React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import styled, { css } from 'styled-components';

interface Props {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<Props> = ({ isDark, toggleDarkMode }) => (
  <StyledIconButton isDark={isDark} onClick={toggleDarkMode} color="inherit" aria-label="toggle dark mode">
    {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
  </StyledIconButton>
);

const StyledIconButton = styled(IconButton)<{ isDark: boolean }>(({ theme, isDark }) => {
  const { colors } = theme;
  return css`
    background-color: ${isDark ? '#181a1b' : '#fff'};
    border: 1px solid ${isDark ? '#ccc' : '#ccc'};
    border-radius: 50%;
    padding: 4px;
    transition: all 0.2s;
    color: ${colors.textTxt70};
  `;
});

export default DarkModeToggle;

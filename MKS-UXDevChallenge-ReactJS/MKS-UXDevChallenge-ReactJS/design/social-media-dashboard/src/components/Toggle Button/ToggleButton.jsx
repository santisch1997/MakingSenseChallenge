import React from 'react';
import { ToggleWrapper, ToggleButton, ToggleCircle, ToggleText } from './Toggle.styles';

const Toggle = ({ onClick, theme }) => {
  return (
    <ToggleWrapper>
      <ToggleText>Dark Mode</ToggleText>
      <ToggleButton onClick={onClick}>
        <ToggleCircle theme={theme} />
      </ToggleButton>
    </ToggleWrapper>
  );
};

export default Toggle;

import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    inputHeight: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    inputHeight: 36,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
    const styles = STYLES[size];
  return (

    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={16} />
      </IconWrapper>
      <TextInput 
        {...delegated} 
        style={{ 
          '--width': width + 'px', 
          '--height': styles.inputHeight / 16 + 'rem' ,
          '--border-thickness': styles.borderThickness + 'px',
          '--font-size': styles.fontSize / 16 + 'rem',
      }}/>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;


  &::placeholder {
    font-family: Roboto, sans-serif;
    font-size: ${14 / 16}rem;
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;

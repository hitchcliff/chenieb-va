import styled from 'styled-components';
import { ArrowTypes } from './types';

export const Arrow = styled.button<ArrowTypes>`
  display: none;
  right: ${(props) => props.right && props.right};
  left: ${(props) => props.left && props.left};
  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 100;
  outline: none;
  color: white;
  :focus {
    outline: none;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

export const SlideItem = styled.a`
  max-width: 350px;
  width: 100%;
  height: 275px;

  @media (min-width: 768px) {
    height: 50vh;
    /* max-width: 700px; */
  }
`;

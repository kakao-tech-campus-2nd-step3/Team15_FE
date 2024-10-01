import styled from '@emotion/styled';
import React from 'react';

interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}
const OverlayWrapper = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isOpen ? 0.5 : 0)};
  transition: opacity 0.3s ease;
`;

const Overlay = ({ isOpen }: OverlayProps) => {
  return <OverlayWrapper isOpen={isOpen}/>;
};

export default Overlay;

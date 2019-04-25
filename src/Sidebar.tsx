import React from 'react';
import styled from 'styled-components';
import SidebarContent from './SidebarContent';

const SidebarWrap = styled.div`
  height: 100%;
  width: 315px;
  background: white;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 1;
  padding: 10px;
  box-sizing: border-box;
`;

const Overlay = styled.div`
  background: black;
  opacity: 0.2;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
`;

const FixedWrap = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
`;

export default function Sidebar(props: {
  isOpen?: boolean;
  onClose?: () => void;
}) {
  if (!props.isOpen) return null;
  return (
    <FixedWrap>
      <SidebarWrap>
        <h2>Edit</h2>
        <a href="#" onClick={props.onClose}>
          Close
        </a>
        <SidebarContent />
      </SidebarWrap>
      <Overlay />
    </FixedWrap>
  );
}

import { FC, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Arrow } from '../../assets/icons';
import { Button } from '../ui';

export const Dropdown: FC<{ links: string[] }> = ({ links }) => {
  const [open, setOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(links[0]);
  const rootRef = useRef<HTMLDivElement>(null);

  const onSelectOption = (link: string) => {
    setActiveOption(link);
    setOpen(false);
  };

  useEffect(() => {
    const handelOutsideClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handelOutsideClick);

    return () => document.removeEventListener('click', handelOutsideClick);
  }, []);

  return (
    <DropdownWrap ref={rootRef}>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="dark"
        rightIcon={
          <DropdownIcon $open={open}>
            <Arrow fill="#8C939F" />
          </DropdownIcon>
        }
      >
        {activeOption}
      </Button>
      <DropdownList $open={open}>
        {links.map((link) => (
          <DropdownItem onClick={() => onSelectOption(link)} key={link}>
            {link}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownWrap>
  );
};

const DropdownWrap = styled.div`
  position: relative;
`;

const DropdownList = styled.div<{ $open: boolean }>`
  background: #ffffff;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 6px;
  width: calc(100% + 16px);
  min-width: 120px;
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
  transition: 0.08s ease-in;
  transform-origin: top center;

  ${({ $open }) => ($open
    ? css`
          opacity: 1;
          visibility: visible;
          transform: scale(1);
        `
    : css`
          opacity: 0;
          visibility: hidden;
          transform: scale(0.95);
        `)}
`;

const DropdownItem = styled.div`
  height: 40px;
  color: #000000;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  cursor: pointer;

  &:hover {
    background: #f5f8fa;
  }
`;

const DropdownIcon = styled.div<{ $open: boolean }>`
  margin-left: 8px;
  display: flex;
  align-items: center;

  svg {
    transform: rotate(${({ $open }) => ($open ? 180 : 0)}deg);
  }
`;

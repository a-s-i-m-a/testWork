import { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { Arrow, Plus } from '../../assets/icons';
import {LINKS} from "../../utils/static";


export const DropdownSidebar: FC<typeof LINKS[number]> = ({ title, links }) => {
  const [open, setOpen] = useState(false);
  const [linksHeight, setLinksHeight] = useState(0);

  return (
    <div>
      <DropDownButtonWrap>
        <DropDownButton $open={open} onClick={() => setOpen((open: boolean) => !open)}>
          <Arrow />
          <h4>{title}</h4>
        </DropDownButton>
        <DropDownButtonAdd>
          <Plus />
        </DropDownButtonAdd>
      </DropDownButtonWrap>
      <Links $height={linksHeight} $open={open} ref={(ref) => setLinksHeight(ref?.scrollHeight || 0)}>
        {links.map((link) => (
          <a href="src/components/Sidebar/DropdownSidebar.tsx" key={link}>
            {link}
          </a>
        ))}
      </Links>
    </div>
  );
};

const DropDownButton = styled.button<{ $open: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;

  svg {
    transform: rotate(${({ $open }) => ($open ? 180 : 0)}deg);
  }

  h4 {
    padding: 0 8px;
    color: white;
    font-weight: 400;
    flex-grow: 1;
    text-align: left;
  }
`;

const DropDownButtonAdd = styled.div`
  flex-shrink: 0;
  display: none;
  align-items: center;
  cursor: pointer;
`;

const DropDownButtonWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  &:hover ${DropDownButtonAdd} {
    display: flex;
  }
`;

const Links = styled.div<{ $open: boolean; $height: number }>`
  ${({ $open, $height }) => ($open
    ? css`
          padding-top: 18px;
          height: ${`${$height + 18}px`};
          opacity: 1;
        `
    : css`
          padding-top: 0;
          height: 0;
          opacity: 0;
        `)}
  overflow: hidden;
  gap: 18px;
  display: grid;
  transition: 0.2s;

  a {
    text-decoration: none;
    color: #8c939f;
    cursor: pointer;
  }
`;

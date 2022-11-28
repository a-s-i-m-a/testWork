import { FC } from 'react';
import styled from 'styled-components';
import { Logo } from '../../assets/icons';
import { Input } from '../ui';
import { DropdownSidebar } from './DropdownSidebar';
import {LINKS} from "../../utils/static";
import avatar from '../../assets/images/avatar.png';

export const Main: FC = () => (
  <Root>
    <Logo />
    <Input variant="square" placeholder="Search..." containerStyle={{ margin: '26px 0 19px' }} />
    <User>
        <img src={avatar} alt="avatar" />
        My workspace
    </User>
    <LinksGrid>
      {LINKS.map(({ title, links }) => (
        <DropdownSidebar key={title} title={title} links={links} />
      ))}
    </LinksGrid>
  </Root>
);

const Root = styled.div`
  background: #0f1d40;
  padding: 26px 16px;
`;

const User = styled.div`
  background: #2d4071;
  margin: 0 -16px;
  padding: 6px 16px;
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;

  img {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 8px;
  }
`;

const LinksGrid = styled.div`
  display: grid;
  margin-top: 13px;
  gap: 18px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

import { FC } from 'react';
import styled from 'styled-components';
import { Bell, Plus } from '../../assets/icons';
import avatar from '../../assets/images/avatar.png';
import { DROPDOWN } from '../../utils/static';
import { Button, Input } from '../ui';
import { Dropdown } from './Dropdown';


export const Header: FC = () => (
  <Root>
    <Grid>
      <Button leftIcon={<Plus />}>Add new</Button>
      {DROPDOWN.map((links, index) => (
        <Dropdown key={index} links={links} />
      ))}
    </Grid>
    <Grid>
      <Input placeholder="Search..." containerStyle={{ maxWidth: 180 }} />
      <Notification>
        <Bell />
        <NotificationQuantity>99+</NotificationQuantity>
      </Notification>
      <Avatar src={avatar} />
    </Grid>
  </Root>
);

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 768px;
  padding: 20px;
  box-shadow: 0 2px 4px #f0f1f2;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  gap: 16px;
`;

const Notification = styled.div`
  position: relative;
  margin-right: 6px;
`;

const NotificationQuantity = styled.div`
  position: absolute;
  bottom: 60%;
  left: 50%;
  color: #ffffff;
  font-size: 10px;
  background: #f21247;
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 3px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

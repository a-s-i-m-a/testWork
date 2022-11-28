import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';
import { Main } from './Main';
import { Tools } from './Tools';

interface Props {
  setSidebarWidth: Dispatch<SetStateAction<number>>;
}

export const Sidebar: FC<Props> = ({ setSidebarWidth }) => (
  <Root ref={(ref) => setSidebarWidth(ref?.clientWidth || 0)}>
    <Main />
    <Tools />
  </Root>
);

const Root = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 220px 155px;
`;

import './assets/fonts/Roboto/stylesheet.css';
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';
import { Board, Header, Sidebar } from './components';

export const App = () => {
  const [sidebarWidth, setSidebarWidth] = useState(0);

  return (
    <Root>
      <Sidebar setSidebarWidth={setSidebarWidth} />
      <Content style={{ maxWidth: `calc(100% - ${sidebarWidth}px)` }}>
        <Header />
        <DndProvider backend={HTML5Backend}>
          <Board />
        </DndProvider>
      </Content>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
`;

const Content = styled.div`
  overflow-x: auto;
  background: white;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

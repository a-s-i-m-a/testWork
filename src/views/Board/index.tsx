import { FC, useState } from 'react';
import styled from 'styled-components';
import { Plus } from '../../assets/icons';
import { ColumnItem } from './ColumnItem';
import {STATIC_BOARD} from "../../utils/static";

export type TaskItemProps = typeof STATIC_BOARD[number]['tasks'][number] & {
  completed: boolean;
  oldColumnTitle: string;
};

export const Board: FC = () => {
  const [data, setData] = useState(STATIC_BOARD);

  return (
    <Root>
      {data.map((item) => (
        <ColumnItem key={item.title} {...item} setData={setData} />
      ))}
      <Column className="empty">
        <ColumnHeader className="empty">
          <ColumHeaderButton className="addButton">
            <Plus fill="#8C939F" />
            Create status
          </ColumHeaderButton>
        </ColumnHeader>
      </Column>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  overflow: auto;
  flex-grow: 1;
`;

export const ColumnHeader = styled.div`
  padding-top: 25px;
  height: 58px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 1px solid #f3f3f3;

  &.empty {
    justify-content: flex-start;
    padding-left: 36px;
  }
`;

export const ColumHeaderButton = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #222222;

  &.addButton {
    color: #8c939f;
    font-weight: 400;
    cursor: pointer;
  }
`;

export const TaskList = styled.div`
  display: grid;
  align-content: start;
  gap: 10px;
  padding: 40px 10px;
  border-right: 1px solid #f3f3f3;
  flex-grow: 1;
`;

export const Column = styled.div`
  width: 290px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  &:first-child {
    width: 300px;

    ${TaskList} {
      padding-left: 20px;
    }
  }

  &.empty {
    flex-grow: 1;
  }
`;

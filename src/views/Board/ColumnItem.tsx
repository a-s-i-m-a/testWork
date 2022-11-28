import { Dispatch, FC, SetStateAction } from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import { TaskItem } from './TaskItem';
import { ColumHeaderButton, Column, ColumnHeader, TaskList, TaskItemProps } from './index';
import {STATIC_BOARD} from "../../utils/static";

type Props = typeof STATIC_BOARD[number] & {
  setData: Dispatch<SetStateAction<typeof STATIC_BOARD>>;
};

export const ColumnItem: FC<Props> = ({ title, tasks, completed = false, setData }) => {
  const [, drop] = useDrop(
    () => ({
      accept: 'Task',
      drop: ({ id, oldColumnTitle, ...props }: Omit<TaskItemProps, 'completed'>) => {
        setData((prevState) => {
          if (oldColumnTitle === title) {
            return prevState;
          }

          const state: typeof prevState = [...prevState];
          const oldColumn = state.find((column) => column.title === oldColumnTitle)!;

          oldColumn.tasks = oldColumn.tasks.filter((task) => task.id !== id);
          state.find((column) => column.title === title)!.tasks.push({ id, ...props });

          return state;
        });
      },
    }),
    [],
  );

  return (
    <Column key={title} ref={drop}>
      <ColumnHeader>
        <ColumHeaderButton>
          {title} <ColumnQuantity>{tasks.length}</ColumnQuantity>
        </ColumHeaderButton>
      </ColumnHeader>
      <TaskList>
        {tasks.map((item) => (
          <TaskItem key={item.id} completed={completed} oldColumnTitle={title} {...item} />
        ))}
      </TaskList>
    </Column>
  );
};

const ColumnQuantity = styled.div`
  color: #8c939f;
  background: #e8ebef;
  padding: 2px 10px;
  border-radius: 10px;
  margin-left: 10px;
  font-weight: 400;
`;

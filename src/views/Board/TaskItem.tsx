import { FC } from 'react';
import { useDrag } from 'react-dnd';
import styled, { css } from 'styled-components';
import { TaskItemProps as Props } from './index';

export const TaskItem: FC<Props> = ({ title, time, color, id, completed, oldColumnTitle }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'Task',
    item: () => ({ title, time, color, id, oldColumnTitle }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Root
      ref={drag}
      key={title + time}
      $color={color}
      $isDragging={isDragging}
      $completed={completed}
    >
      <p>{title}</p>
      <span>{time}</span>
    </Root>
  );
};

const Root = styled.div<{ $color: string; $isDragging: boolean; $completed: boolean }>`
  border-radius: 8px;
  padding: 15px;
  cursor: move;
  display: ${({ $isDragging }) => ($isDragging ? 'none' : 'block')};

  p {
    font-weight: 400;
    margin-bottom: 4px;
    color: #222222;
  }

  span {
    font-size: 13px;
    color: inherit;
    font-weight: 400;
  }

  ${({ $color, $completed }) => {
    if ($completed) {
      return css`
        background: #f0f0f0;
        color: #a5a5a5;

        p {
          color: inherit;
          text-decoration: line-through;
        }
      `;
    }

    switch ($color) {
      case 'purple':
        return css`
          background: #d8dcff;
          color: #404784;
        `;
      case 'orange':
        return css`
          background: #ffdfba;
          color: #662e1e;
        `;
      case 'red':
        return css`
          background: #fec6b7;
          color: #662e1e;
        `;
      case 'salad':
        return css`
          background: #d9e6a2;
          color: #4a4d3a;
        `;
      case 'pink':
        return css`
          background: #f2bae1;
          color: #8e4778;
        `;
      default:
        return css`
          background: #abe9ce;
          color: #435e52;
        `;
    }
  }}
`;

import { FC } from 'react';
import styled, { css } from 'styled-components';
import {STATIC_TOOLS} from "../../utils/static";

export const Tools: FC = () => (
  <Root>
    <Title>Tools</Title>
    <div>
      {STATIC_TOOLS.map(({ title, Icon, active = false }) => (
        <Tool $active={active} key={title}>
          <Icon fill={active ? '#0094FF' : '#8C939F'} />
          <p>{title}</p>
        </Tool>
      ))}
    </div>
  </Root>
);

const Root = styled.div`
  padding: 24px 16px 24px 0;
  background: #f5f8fa;
`;

const Title = styled.h3`
  font-size: 18px;
  color: #222222;
  font-weight: 400;
  padding-left: 16px;
  margin-bottom: 30px;
`;

const Tool = styled.button<{ $active: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  height: 50px;
  padding: 0 4px 0 16px;
  border-radius: 0 8px 8px 0;
  position: relative;
  cursor: pointer;

  ${({ $active }) => $active &&
    css`
      background: white;

      &::before {
        content: '';
        display: block;
        height: 100%;
        width: 4px;
        background: #0094ff;
        border-radius: 0 4px 4px 0;
        position: absolute;
        top: 0;
        left: 0;
      }
    `}

  p {
    color: ${({ $active }) => ($active ? '#0094ff' : '#222222')};
    margin-left: 10px;
  }
`;

import { CSSProperties, FC, InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Search } from '../../assets/icons';

type InputVariant = 'circle' | 'square';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  containerStyle?: CSSProperties;
}

export const Input: FC<Props> = ({ variant = 'circle', containerStyle, ...props }) => (
  <Root $variant={variant} style={{ ...containerStyle }}>
    <RootInput {...props} />
    <Icon>
      <Search />
    </Icon>
  </Root>
);

const Root = styled.div<{ $variant: InputVariant }>`
  position: relative;
  ${({ $variant }) => ($variant === 'circle'
    ? css`
          height: 40px;
          border-radius: 20px;
          background: #f5f8fa;

          ${RootInput} {
            padding: 0 40px 0 16px;
          }

          ${Icon} {
            right: 16px;
          }
        `
    : css`
          background: #2d4071;
          border-radius: 4px;
          height: 32px;

          ${RootInput} {
            padding: 0 34px 0 10px;
            color: white;
          }

          ${Icon} {
            right: 10px;
          }
        `)}
`;

const RootInput = styled.input`
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;

  &::placeholder {
    color: #8c939f;
  }
`;

const Icon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
`;

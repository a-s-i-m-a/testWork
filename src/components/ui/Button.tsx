import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';

type ButtonVariant = 'light' | 'dark';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: ButtonVariant;
}

export const Button: FC<Props> = ({
  children,
  variant = 'light',
  leftIcon,
  rightIcon,
  ...props
}) => (
  <Root $variant={variant} {...props}>
    {leftIcon}
    {children}
    {rightIcon}
  </Root>
);

const Root = styled.button<{ $variant: ButtonVariant }>`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  border-radius: 20px;
  transition: 0.2s;
  cursor: pointer;

  ${({ $variant }) => ($variant === 'light'
    ? css`
          color: white;
          background: #0094ff;
        `
    : css`
          color: #222222;
          background: #f5f8fa;

          &:focus {
            background: #e1e4e7;
          }
        `)}
`;

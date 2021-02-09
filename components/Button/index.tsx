import styled from 'styled-components';

export type ButtonComponentProps = {
  children?: HTMLCollection | string,
  onClick: (e?: React.MouseEvent) => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, onClick, ...otherProps }: ButtonComponentProps) {
  return <StyledButton onClick={onClick} {...otherProps}>{children}</StyledButton>
}

export const StyledButton = styled.button`
  cursor:pointer;
  font-size: 1em;
  display:block;
  margin: 0 auto;
  padding: 0.25em 1em;
  border-radius: 3px;
  color:${({ theme }) => (theme.colors.primary)};
  background:${({ theme }) => (theme.colors.white)};
  border: 1px solid ${({ theme }) => (theme.colors.primary)};
  outline: none;

  &: hover{
  background: ${({ theme }) => (theme.colors.primary)};;
  color:${({ theme }) => (theme.colors.white)};
}
`
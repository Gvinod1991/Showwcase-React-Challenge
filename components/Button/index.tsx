import { StyledButton } from './button.styles';

interface ButtonComponentProps {
  children?: HTMLCollection | string,
  onClick: (e?: React.MouseEvent) => void
}

export default function Button({ children, onClick, ...otherProps }: ButtonComponentProps) {
  return <StyledButton onClick={onClick} {...otherProps}>{children}</StyledButton>
}
import styled from 'styled-components';
import { ChangeEvent } from 'react';

export type InputComponentProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  value: string,
  placeholder: string,
}

export default function Input({ onChange, ...otherProps }: InputComponentProps) {
  return <StyledInput onChange={onChange} {...otherProps} />
}

export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => (theme.colors.primary)};
  background:${({ theme }) => (theme.colors.grey)};
  width:100%;
  height:3rem;
  border-radius:0.2rem;
  outline:none;
  font-size:1rem;
`


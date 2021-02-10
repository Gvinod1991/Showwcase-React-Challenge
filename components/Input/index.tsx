import styled from 'styled-components';
import { ChangeEvent, KeyboardEvent } from 'react';

export type InputComponentProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void,
  value: string,
  placeholder: string,
  inputType?: string
}

export default function Input({ onChange, inputType, ...otherProps }: InputComponentProps) {
  return <StyledInput onChange={onChange} inputType={inputType} {...otherProps} />
}

interface StylesProps {
  inputType?: string
}
export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => (theme.colors.primary)};
  background:${({ theme }) => (theme.colors.grey)};
  width:100%;
  height:${(props: StylesProps) => (props.inputType === "description" ? '5rem' : '3rem')};;
  border-radius:0.2rem;
  outline:none;
  font-size:1rem;
`


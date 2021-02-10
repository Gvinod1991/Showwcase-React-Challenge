import styled from 'styled-components';

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
`;
import styled from 'styled-components';

export const H1 = styled.h1`
  font-size:2rem;
  text-align:center;
  font-weight:normal;
  color:${({ theme }) => (theme.colors.text)}
`;
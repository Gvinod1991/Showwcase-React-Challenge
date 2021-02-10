import styled from 'styled-components';

export const HomeWrapper = styled.div`
  padding: 2rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.25rem;
`;

export const Label = styled.p`
  font-size:1rem;
  color:${({ theme }) => (theme.colors.text)}
`
export const ButtonWrapper = styled.div`
  padding: 1rem
`;
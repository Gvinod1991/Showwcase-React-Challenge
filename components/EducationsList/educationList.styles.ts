import styled from 'styled-components';

export const ContentBox = styled.div`
border-bottom:1px solid ${({ theme }) => theme.colors.grey};
padding:1rem;
margin-bottom:1rem;
`

export const Title = styled.h1`
  font-size:1.5rem;
  font-weight:normal;
  line-height:1.2rem;
  color:${({ theme }) => theme.colors.dark};
`;

export const Text = styled.p`
  font-size:1rem;
  font-weight:normal;
  line-height:1rem;
  color:${({ theme }) => theme.colors.darkGrey};
`;
import styled from 'styled-components';

export const ShowcaseWrapper = styled.div`
  padding: 1rem 0;
  font-size: 1.25rem;
  margin-left:3rem;
  margin-right:3rem;
`;

export const ContentWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: flex-start;
  margin-top:1rem;
`;

export const RowBox = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: center;
  margin:1rem;
  img{
    display:none;
    @media screen and (max-width:420px){
      display:block;
    } 
  }
`;

export const ContentBox = styled.div`
  border:1px solid ${({ theme }) => theme.colors.grey};
  background-color:  ${({ theme }) => theme.colors.white};
  border-radius:0.2rem;
  border-radius:0;
  padding:1rem;
`;
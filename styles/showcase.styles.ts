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

export const AddNewBtnWrapper = styled.div`
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
export const RowBox = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  @media screen and (max-width:420px){
    flex-direction:column;
  } 
`;
export const ColumnBox = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
`;

export const ModalContentWrapper = styled.div`
  width:100%
`;

export const H1 = styled.h1`
  font-size:1.5rem;
  text-align:center;
  font-weight:normal;
  color:${({ theme }) => (theme.colors.text)}
`;

export const ColumnBoxEnd = styled.div`
  display:flex;
  justify-content:flex-end;
  margin-top: 1rem
`;

export const Label = styled.p`
  font-size:1rem;
  color:${({ theme }) => (theme.colors.text)}
`
import styled from 'styled-components';

interface Props {
  showSideNav: Boolean
}

export const Div = styled.div`
  width: 250px;
  border:1px solid ${({ theme }) => theme.colors.grey};
  box-shadow:${(props: Props) => (props.showSideNav ? '0.5rem 0 0.5rem 0 rgba(0, 0, 0, 0.16)' : 'none')};
  
  background-color: #ffffff;
  border-radius:0.2rem;
  position: sticky;
  left: 0;
  z-index: 999;
  top: 6rem;
  margin-right: 1rem;
  height: 100%;
  min-height:500px;
  flex: 0 0 auto;
  ul {
    list-style:none;
  }
  ul li {
    padding:0.4rem;
    cursor:pointer;
  }
  ul li:hover{
    color: ${({ theme }) => theme.colors.light};
  }
  @media screen and (min-width:421px){
    display:block;
  }
  @media screen and (max-width:420px){
    display:${(props: Props) => (props.showSideNav ? 'block' : 'none')};
  }
  @media screen and (min-width:420px){
    box-shadow:none;
  }
`
import styled from 'styled-components';

export const Dropdown = styled.div`
  position: relative;
  display:  block;
`;

export const DropdownContent = styled.div`
  display: block;
  position: absolute;
  background-color: ${({ theme }) => (theme.colors.grey)};
  width: 100%;
  overflow: auto;
  border-radius: 0 0 0.4rem 0.4rem;
  z-index: 1;
  max-height: 40vh;
  cursor: pointer;
  margin-top: -0.1rem;
`;

export const DropdownContentSpan = styled.div`
  color: black;
  padding: 0.4rem;
  text-decoration: none;
  display: block;
  &:hover{
    background-color: #f6f6f6;
  }
`;

export const Label = styled.p`
  font-size:1rem;
  text-align:center;
  color:${({ theme }) => (theme.colors.text)}
`;

export const Loader = styled.div`
  position:absolute;
  left:12rem;
  top:10rem;
  border: 0.2rem solid  ${({ theme }) => (theme.colors.grey)}; /* Light grey */
  border-top: 0.2rem solid ${({ theme }) => (theme.colors.light)};; /* Blue */
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
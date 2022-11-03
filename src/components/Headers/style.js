import styled from 'styled-components';
export const HeaderContainer = styled.span`
  width: 100vw;
  height: 8vh;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  //position: fixed;
  font-size: 1rem;
`;
export const AttributeBtnContainer = styled.div`
  width: 100vw;
  height: fit-content;
  border-bottom: 1px solid black;
  display: flex;
  overflow: hidden;
`;
export const AttributeBtn = styled.button`
  border-radius: 1rem;
  font-size: 1rem;
  width: fit-content;
  height: fit-content;
  border: 1px solid #000000;
  background-color: D9D9D9;
  color: #000000;
  margin: 0.3rem 0.1rem 0.3rem 0.3rem;
  padding: 3px 10px;
  overflow: hidden;

  &:focus {
    background-color: #000000;
    color: #d9d9d9;
  }
`;

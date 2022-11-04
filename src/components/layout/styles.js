import styled from 'styled-components';

// Blank
export const BlankDiv = styled.div`
  height: 100px;
`;

// Empty
export const EmptyDiv = styled.div`
  height: calc(100% - 44px);
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 17px;
  font-weight: 700;

  span {
    padding: 20px 0;
  }
`;

// Main
export const MainLayout = styled.main`
  height: calc(100% - 60px);
`;

// Header
export const HeaderStyle = styled.header`
  position: relative;
  width: 100%;
  height: 60px;
  text-align: center;
  padding: 19px 0;

  font-size: 17px;
  font-weight: 700;
  line-height: 21px;

  border-bottom: 1px solid #000;

  a {
    color: #000;
  }
  span {
    position: absolute;
    padding: 18px 20px;
    left: 0;
    top: 0;
    line-height: 11px;
  }
`;

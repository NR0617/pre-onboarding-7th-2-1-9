import styled from 'styled-components';

// FilterBar
export const FilterSection = styled.section`
  padding: 8px 4px;

  border-bottom: 1px solid #000;
  overflow: auto;
  white-space: nowrap;

  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

// CarSection
export const CarListSection = styled.section`
  width: 100%;
  height: calc(100% - 60px);

  overflow: auto;

  > a {
    text-decoration: none;
    color: #000;
  }
`;

// CarItem
export const CarArticle = styled.article`
  display: flex;

  width: 100%;
  height: 120px;
  border-bottom: 1px solid #000;

  :hover {
    background-color: #ededed;
  }
`;
export const CarDescDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 50%;
  padding: 24px 20px;
`;
export const CarTitleSpan = styled.span`
  font-size: 14px;
  font-weight: 700;
`;
export const CarContentSpan = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

export const CarBGDiv = styled.div`
  position: relative;
  width: 50%;
  padding: 20px;

  background-color: #d9d9d9;
  background-clip: content-box;

  div {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

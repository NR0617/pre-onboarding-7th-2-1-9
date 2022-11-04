import styled from 'styled-components';

// Detail Container
export const DetailSection = styled.section`
  overflow: auto;
  height: 100%;
`;

// Summary
export const BGArticle = styled.article`
  width: 100%;
  height: 205px;

  background-color: #d9d9d9;
  background-clip: content-box;

  div {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;
export const DescArticle = styled.article`
  width: 100%;
  height: 140px;
`;
export const NameDiv = styled.div`
  display: flex;
  height: 92px;
  align-content: center;
  flex-direction: column;
  justify-content: center;

  p {
    font-weight: 700;
    padding-left: 20px;
    font-size: 20px;
  }
  p.name_tag {
    font-size: 24px;
  }
`;
export const PriceDiv = styled.div`
  height: 48px;
`;

// SubDescription
export const NameP = styled.p`
  font-size: 17px;
  font-weight: 700;
  padding: 13px 0 14px 19px;
  line-height: 20px;
`;
export const ValueP = styled.p`
  font-size: 17px;
  font-weight: 400;
  text-align: right;
  padding: 13px 21px 14px 0;
  line-height: 20px;
`;
export const SubArticle = styled.article`
  width: 100%;

  header {
    height: 48px;
    background-color: #0094ff;
    color: #fff;

    font-size: 17px;
    font-weight: 700;
    padding: 13px 0 14px 20px;
  }

  main article {
    display: flex;
    justify-content: space-between;
    height: 48px;
  }
`;

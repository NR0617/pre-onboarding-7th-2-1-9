import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Text } from '../../styles/Text';
import { Theme } from '../../styles/Theme';
import { BsArrowLeft } from 'react-icons/bs';

function Heading({ text }) {
  const navigate = useNavigate();
  const titile = text === '차량상세';

  return (
    <HeadingLayout>
      {titile && <ArrowIcon onClick={() => navigate(-1)} />}
      <Text fontWeight={Theme.text.bold} fontSize={Theme.text.mid} text={text} />
    </HeadingLayout>
  );
}

export default Heading;

const HeadingLayout = styled.div`
  padding: 25px 0px;
  text-align: center;
  position: relative;
  border-bottom: 1px solid ${Theme.color.black};
`;
const ArrowIcon = styled(BsArrowLeft)`
  font-size: 20px;
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
`;

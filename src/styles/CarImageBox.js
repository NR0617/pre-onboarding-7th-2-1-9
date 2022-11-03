import styled from 'styled-components';
import { StyledImageBox, StyledImageNew } from './Theme';
import { Theme } from './Theme';

export const CarImageBox = ({ image, isNew }) => {
  return (
    <CarImageBoxLayout>
      {isNew ? <StyledImageNew>{Theme.text.new}</StyledImageNew> : null}
      <StyledImageBox src={image} />
    </CarImageBoxLayout>
  );
};

const CarImageBoxLayout = styled.div`
  width: 150px;
  height: 80px;
  position: relative;
`;

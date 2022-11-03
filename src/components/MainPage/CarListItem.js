import { useNavigate } from 'react-router-dom';
import * as Styled from './style';
import { Attribute } from '../../constant/AttributeBttons';

const CarListItem = ({ id, attribute, amount }) => {
  const navigate = useNavigate();

  const onChangePage = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <>
      <Styled.CarItems onClick={onChangePage}>
        <Styled.ContentContainer>
          <Styled.CarBrandName>{attribute.brand}</Styled.CarBrandName>
          <Styled.CarBrandName>{attribute.name}</Styled.CarBrandName>
          <Styled.CarAttribute>
            {Attribute.segment[attribute.segment]}/{Attribute.fuelType[attribute.fuelType]}
          </Styled.CarAttribute>
          <Styled.CarAttribute>월{amount}원 부터</Styled.CarAttribute>
        </Styled.ContentContainer>
        <Styled.ImageContainer>
          <Styled.ThumbnailImg src={attribute.imageUrl} alt="" />
        </Styled.ImageContainer>
      </Styled.CarItems>
    </>
  );
};

export default CarListItem;

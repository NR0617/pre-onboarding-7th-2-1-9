import Image from 'next/legacy/image';
import { useCarDetail } from '../../../stores/CarDetailProvider';
import { convertCurrency } from '../../../utils/convertCurrency';
import { BGArticle, DescArticle, NameDiv, PriceDiv, ValueP } from './styles';

const Summary = () => {
  const {
    detail: { attribute, amount },
  } = useCarDetail();
  const currency_month = convertCurrency(amount);

  return (
    <>
      <BGArticle>
        <div>
          <Image layout="fill" objectFit="contain" src={attribute.imageUrl} alt="car" />
        </div>
      </BGArticle>
      <DescArticle>
        <NameDiv>
          <p>{attribute.brand}</p>
          <p className="name_tag">{attribute.name}</p>
        </NameDiv>
        <PriceDiv>
          <ValueP>{currency_month}</ValueP>
        </PriceDiv>
      </DescArticle>
    </>
  );
};

export default Summary;

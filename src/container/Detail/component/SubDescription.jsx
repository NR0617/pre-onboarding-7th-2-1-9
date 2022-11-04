import Empty from '../../../components/layout/Empty';
import { useCarDetail } from '../../../stores/CarDetailProvider';
import { convertCurrency } from '../../../utils/convertCurrency';
import { convertDate } from '../../../utils/convertDate';
import { findFuelName, findSegmentName } from '../../../utils/FilterType';
import { NameP, SubArticle, ValueP } from './styles';

const SubDecription = () => {
  const {
    detail: { attribute, startDate, insurance, additionalProducts },
  } = useCarDetail();

  const segment = findSegmentName(attribute.segment);
  const fueltype = findFuelName(attribute.fuelType);
  const start_date = convertDate(startDate);
  return (
    <>
      <SubArticle>
        <header>차량 정보</header>
        <main>
          <article>
            <NameP>차종</NameP>
            <ValueP>{segment}</ValueP>
          </article>
          <article>
            <NameP>연료</NameP>
            <ValueP>{fueltype}</ValueP>
          </article>
          <article>
            <NameP>이용 가능일</NameP>
            <ValueP>{start_date}</ValueP>
          </article>
        </main>
      </SubArticle>
      <SubArticle>
        <header>보험</header>
        <main>
          {insurance.map((item, index) => (
            <article key={index}>
              <NameP>{item.name}</NameP>
              <ValueP>{item.description}</ValueP>
            </article>
          ))}

          {!insurance.length && <Empty text={'보험이 없습니다.'} />}
        </main>
      </SubArticle>
      <SubArticle>
        <header>추가상품</header>
        <main>
          {additionalProducts.map((item, index) => (
            <article key={index}>
              <NameP>{item.name}</NameP>
              <ValueP>{convertCurrency(item.amount)}</ValueP>
            </article>
          ))}
          {!additionalProducts.length && <Empty text={'추가상품이 없습니다.'} />}
        </main>
      </SubArticle>
    </>
  );
};

export default SubDecription;

import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/Headers/PageHeader';
import AttributeHeader from '../../components/Headers/AttributeHeader';
import { getCarsData } from '../../api/fetchData';
import Loading from '../../components/PageEmpty/Loading';
import NoData from '../../components/PageEmpty/NoData';
import CarListItem from '../../components/MainPage/CarListItem';

const MainPage = () => {
  const [carListItems, setcarListItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNoData, setHasNoData] = useState(false);
  const [checkedQuery, setCheckedQuery] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getCarsData(checkedQuery).then(payLoad => {
      if (!payLoad !== false) return;
      if (payLoad.length === 0) {
        setHasNoData(true);
        setcarListItems(payLoad);
      } else {
        setHasNoData(false);
        setcarListItems(payLoad);
        console.log(payLoad);
      }
      setIsLoading(false);
    });
  }, [checkedQuery]);

  return (
    <>
      <PageHeader>전체차량</PageHeader>
      <AttributeHeader setCheckedQuery={setCheckedQuery} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {hasNoData ? (
            <NoData />
          ) : (
            <>
              {!!carListItems && (
                <>
                  {carListItems?.map((el, idx) => {
                    return (
                      <CarListItem
                        key={idx}
                        id={el.id}
                        attribute={el.attribute}
                        // startDate={el.startDate}
                        amount={el.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        // insurance={el.insurance}
                        // additionalProducts={el.additionalProducts}
                      />
                    );
                  })}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default MainPage;

import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Headers/PageHeader';
import DetailInfo from '../../components/DetailPage/DetaiInfo';
import { useParams } from 'react-router-dom';
import { getCarsData } from '../../api/fetchData';
import NoData from '../../components/PageEmpty/NoData';
import Loading from '../../components/PageEmpty/Loading';

const DetailPage = () => {
  const { id } = useParams();
  const [detailItem, setDetailItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNoData, setHasNoData] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCarsData().then(payLoad => {
      let arr = payLoad?.filter(el => el.id === Number(id));
      if (arr.length === 0) {
        setHasNoData(true);
        setDetailItem(arr);
      } else {
        setHasNoData(false);
        setDetailItem(arr);
      }
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <PageHeader>차량상세</PageHeader>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {hasNoData ? (
            <NoData />
          ) : (
            <>
              {!!detailItem && (
                <>
                  {detailItem?.map((el, idx) => {
                    return (
                      <DetailInfo
                        key={idx}
                        id={el.id}
                        attribute={el.attribute}
                        startDate={el.startDate}
                        amount={el.amount}
                        insurance={el.insurance}
                        additionalProducts={el.additionalProducts}
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

export default DetailPage;

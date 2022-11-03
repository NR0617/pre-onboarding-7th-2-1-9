import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CarDetailInfo from './CarDetailInfo';
import CarDetailProfileBox from './CarDetailProfileBox';
import { setMetaTags } from '../../Seo/MetaTag';

function CarDetail({ carList }) {
  const { id } = useParams();

  let detail;

  if (carList?.length) {
    const idx = id - 1;
    detail = carList[idx];
  }

  useEffect(() => {
    if (detail?.length) {
      setMetaTags({
        title: `${detail?.attribute.brand} ${detail?.attribute?.name}`,
        description: `월 ${detail?.amount} 원`,
        imageUrl: `${detail?.attribute.imagUrl}`,
      });
    }
  }, [detail]);

  return (
    <div>
      <CarDetailProfileBox image={detail?.attribute.imageUrl} brand={detail} />
      <CarDetailInfo info={detail} />
    </div>
  );
}

export default CarDetail;

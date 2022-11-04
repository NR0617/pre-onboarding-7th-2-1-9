import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CarDetailInfo from './CarDetailInfo';
import CarDetailProfileBox from './CarDetailProfileBox';
import { Helmet } from 'react-helmet';

function CarDetail({ carList }) {
  const { id } = useParams();

  let detail;

  if (carList?.length) {
    const idx = id - 1;
    detail = carList[idx];
  }

  useEffect(() => {
    if (detail?.length) {
      <Helmet
        title="알티모빌리티"
        meta={[
          {
            name: `${detail?.attribute.brand} ${detail?.attribute?.name}`,
            content: `월 ${detail?.amount} 원`,
          },
          { property: 'og:type', content: `월 ${detail?.amount} 원` },
          {
            property: 'og:title',
            content: `${detail?.attribute.brand} ${detail?.attribute?.name}`,
          },
          { property: 'og:image', content: `${detail?.attribute.imagUrl}` },
          { property: 'og:url', content: window.location.href },
        ]}
      />;
    }
    return () => {};
  }, [detail]);

  return (
    <div>
      <CarDetailProfileBox image={detail?.attribute.imageUrl} brand={detail} />
      <CarDetailInfo info={detail} />
    </div>
  );
}

export default CarDetail;

import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import { CarService } from '../../src/api/request';
import Layout from '../../src/components/layout/Layout';
import DetailContainer from '../../src/container/Detail/Detail';
import { CarActionType } from '../../src/stores/ActionTypes';
import { useCarDetailChange } from '../../src/stores/CarDetailProvider';
import { convertCurrency } from '../../src/utils/convertCurrency';

const CarDetail = ({ data }) => {
  const dispatch = useCarDetailChange();
  useEffect(() => {
    if (data.length) {
      dispatch({ type: CarActionType.GET_CAR_DETAIL, detail: data[0] });
    }
  }, [data, dispatch]);

  const curreny = convertCurrency(data[0].amount);
  return (
    <>
      <NextSeo
        title={`${data[0].attribute.brand} ${data[0].attribute.name}`}
        description={curreny}
        canonical="https://pre-onboarding-7th-2-1-9.vercel.app/"
        openGraph={{
          type: 'website',
          url: `https://pre-onboarding-7th-2-1-9.vercel.app/car/${data[0].id}`,
          title: `${data[0].attribute.brand} ${data[0].attribute.name}`,
          description: curreny,
          images: [{ url: data[0].attribute.imageUrl }],
          site_name: 'B2C 차량대여 서비스',
        }}
      />
      <Layout content={<DetailContainer />} isDetail />
    </>
  );
};

export const getStaticPaths = async () => {
  const {
    data: { payload },
  } = await CarService.getCarList();
  const paths = payload.map(({ id }) => ({ params: { id: String(id) } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async context => {
  try {
    const { id } = context.params;
    const {
      data: { payload },
    } = await CarService.getCarList();
    const data = payload.filter(car => car.id === Number(id));

    return {
      props: { data },
      revalidate: 30,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default CarDetail;

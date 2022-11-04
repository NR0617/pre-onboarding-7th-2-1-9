import React from 'react';
import Header from './Header';
import { MainLayout } from './styles';

const Layout = ({ content, isDetail }) => {
  return (
    <>
      <Header isDetail={isDetail} />
      <MainLayout>{content}</MainLayout>
    </>
  );
};
export default Layout;

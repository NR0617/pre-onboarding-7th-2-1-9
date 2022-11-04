import React from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import Link from 'next/link';
import { HeaderStyle } from './styles';

const Header = ({ isDetail }) => {
  const title = isDetail ? '차량상세' : '전체차량';
  return (
    <HeaderStyle>
      {isDetail && (
        <Link href={'/'}>
          <span>
            <ArrowBackRoundedIcon />
          </span>
        </Link>
      )}
      {title}
    </HeaderStyle>
  );
};

export default Header;

import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../styles/Button';
import { Theme } from '../../styles/Theme';
import { segmentList } from '../../utils/filterList';
import { getCarFilter, useCarDispatch } from '../../context/carContext';

function Filtering() {
  const [buttonActive, setButtonActive] = useState('');
  const dispatch = useCarDispatch();

  const onClickMenu = e => {
    e.preventDefault();
    const seg = e.target.value;
    setButtonActive(e.target.value);
    getCarFilter(dispatch, seg);
  };

  return (
    <FilterLayout>
      {segmentList.map((el, idx) => {
        return (
          <Button
            onClick={onClickMenu}
            key={idx}
            value={el.value}
            children={el.name}
            ClassName={el.value === buttonActive ? 'active' : ''}
          />
        );
      })}
    </FilterLayout>
  );
}

export default Filtering;

const FilterLayout = styled.div`
  padding: 0px 10px;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Theme.color.black};
  gap: 10px;
`;

import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import { StyledPagination } from './PaginationPhones.styled';
import { useSearchParams } from 'react-router-dom';

const PaginationPhones = () => {
  const [current, setCurrent] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

    const onChange = (page, pageSize) => {
    
    const params = {};
    
    if (page) params.p = page;
    if (pageSize) params.perPage = pageSize;

    // console.log(params)

    setSearchParams(params);
    setCurrent(page);
  };


  return (
    <StyledPagination current={current} onChange={onChange} total={50} showSizeChanger />
  );
};
export default PaginationPhones;
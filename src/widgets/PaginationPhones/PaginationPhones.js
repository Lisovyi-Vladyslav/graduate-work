import React, { useState } from 'react';
import { Pagination } from 'antd';

const PaginationPhones = () => {
  const [current, setCurrent] = useState(3);
  const onChange = (page, pageSize) => {
    console.log(page, pageSize);
    setCurrent(page);
  };
  return <Pagination current={current} onChange={onChange} total={50} showSizeChanger />;
};
export default PaginationPhones;
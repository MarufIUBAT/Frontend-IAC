import React from 'react';
import axios from 'axios';

const ProductList = () => {
  axios
    .get('/task')
    .then((res) => {
      const data = res.data;
      console.log('data has been receive', data);
    })
    .catch(() => {
      alert('error retrival data');
    });
  return <div></div>;
};

export default ProductList;

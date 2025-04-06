import React, { useState } from 'react';
import { Button } from 'antd';
import { PATH } from '../hooks/usePath';
import { useLocation, useNavigate } from 'react-router-dom';
const LoadingBtn = ({title}) => {
  
  const [loadings, setLoadings] = useState([]);
  const Located = useLocation().pathname
  const Navigate = useNavigate()
  const enterLoading = (index) => {
    if(Located == PATH.teachers){
      setTimeout(() => {
        Navigate(PATH.addteacher)
      }, 1000);
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });
      
    }else{
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });
    }
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 1000);
  };
  return (
      <Button className='font-semibold' type="primary" htmlType='Submit' size='large' loading={loadings[0]} onClick={() => enterLoading(0)}>
         {title}
        </Button>
    );
};
export default LoadingBtn;
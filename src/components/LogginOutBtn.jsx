import React, { useState } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const LogginOutBtn = ({ title, type, extraClass }) => {
  const Navigate = useNavigate()
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setTimeout(() => {
      localStorage.removeItem("token")
    }, 1000);
    setTimeout(() => {
      Navigate("/")
      window.location.reload();
    }, 1000);
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings]
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 1000);
  };
  return (
    <Button className={`font-semibold ${extraClass}`} type={type} htmlType='Button' size='large' loading={loadings[0]} onClick={() => enterLoading(0)}>
      {title}
    </Button>
  );
};
export default LogginOutBtn;
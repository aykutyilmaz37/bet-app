// @ts-nocheck
import React, { useState, createContext, useMemo } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [coupon, setCoupon] = useState([]);

  const addCoupon = (value) => {
    const checkOdd = coupon.some((item) => value.index === item.index);

    if (checkOdd) {
      setCoupon(coupon.filter((_coupon) => _coupon.index !== value.index));
      value.isSelected = false;
    } else {
      const filteredOdd = coupon.filter(
        (_coupon) => _coupon.index.split('-')[0] === value.index.split('-')[0]
      );
      const deleteItem = filteredOdd.slice(-1);
      if (deleteItem.length > 0) {
        deleteItem[0].isSelected = false;
        setCoupon(
          coupon.filter(
            (_coupon) =>
              _coupon.index.split('-')[0] !== value.index.split('-')[0]
          )
        );
        setCoupon((_coupon) => [..._coupon, value]);
        value.isSelected = true;
      } else {
        setCoupon((_coupon) => [..._coupon, value]);
        value.isSelected = true;
      }
    }
  };

  const value = useMemo(() => ({ coupon, addCoupon }), [coupon]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;

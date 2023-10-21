import React, { useContext, useState } from 'react';
import AppContext from 'context';

const Cart = () => {
  const { coupon,addCoupon }: any = useContext(AppContext);

  const [toggleCoupon, setToggleCoupon] = useState(true);

  const totalRate = coupon?.map((sum: any) => {
    const odd = [Number(sum?.O)];
    // @ts-ignore
    return [odd]?.reduce((a, b) => a * b);
  }, 0);

  const total = parseFloat(
    totalRate.reduce((a: number, b: number) => a * b, 1)
  );
  const totalPrice =
    coupon?.length < 1
      ? 0.0
      : total.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
    
  const deleteCouponItem = (value:any) => {
      addCoupon(value);
  }

  return (
    <div className='fixed bottom-0 right-2 rounded-t-md bg-yellow-300 p-2 w-[300px]'>
      <div>
        <div className='text-sm flex items-center justify-between mb-2'>
          <span
            className='cursor-pointer'
            onClick={() => setToggleCoupon(!toggleCoupon)}
          >
             <svg
               xmlns='http://www.w3.org/2000/svg'
               fill='none'
               viewBox='0 0 24 24'
               strokeWidth={1.5}
               stroke='currentColor'
               className={`${toggleCoupon && 'rotate-180'} w-6 h-6`}
             >
               <path
                 strokeLinecap='round'
                 strokeLinejoin='round'
                 d='M4.5 15.75l7.5-7.5 7.5 7.5'
               />
             </svg>
           
          </span>
          <span className='font-bold'>Kuponum</span>
          <span className='bg-gray-200 rounded-sm p-2'>
            {coupon?.length} Maç
          </span>
        </div>
        {toggleCoupon && (
          <ul className='mb-2 max-h-[500px] overflow-auto'>
            {coupon.map((couponItem: any, key: number) => (
              <li key={key} className='flex gap-1 text-[10px] mb-2'>
                <span onClick={() => deleteCouponItem(couponItem)}>X</span>
                <span className='font-bold'>
                  {couponItem?.code}
                  {' - '}
                  {couponItem?.matchName}
                </span>
                <span>
                  Oran:
                  {couponItem?.O}
                </span>
                <span>
                  MBS:
                  {couponItem?.MBS}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div className='text-sm sticky bottom-0 bg-gray-200 rounded-sm p-2'>
          <span>Toplam Tutar:</span>
          <span>{totalPrice} TL</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;

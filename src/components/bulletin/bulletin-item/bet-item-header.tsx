import React from 'react';

type Props = {
  bet: any;
};

const BetItemHeader = ({ bet }: Props) => {
  return (
    <div className='flex gap-1 items-center  w-[300px] min-w-[200px]'>
      <div className='flex flex-col md:flex-row gap-1'>
        <div className='font-bold'>{bet.C}</div>
        <div>{bet.T}</div>
      </div>
      <div className='flex-auto whitespace-nowrap'>{bet.N}</div>
    </div>
  );
};

export default BetItemHeader;

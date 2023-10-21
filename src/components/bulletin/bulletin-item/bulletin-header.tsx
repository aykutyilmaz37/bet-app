import React from 'react';

type Props = {
  bet: any;
  index: number;
};

const BulletinHeader = ({ bet, index }: Props) => {
  return (
    <div className='bg-gray-600 text-yellow-300 rounded-sm px-1 flex items-center gap-1'>
      <div>{index}</div>
      <div>{bet.D} </div>
      <div>{bet.DAY} </div>
      <div>{bet.LN}</div>
    </div>
  );
};

export default BulletinHeader;

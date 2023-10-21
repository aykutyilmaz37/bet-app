import React from 'react';
import BetItem from './bet-item';
import BulletinHeader from './bulletin-header';
import BetItemHeader from './bet-item-header';

type Props = {
  bet: any;
  index: number;
  timestamp: number;
};

const BulletinItem = ({ bet, index, timestamp }: Props) => {
  return (
    <li className='bg-gray-200'>
      <BulletinHeader bet={bet} index={index} />
      <div className='flex justify-start overflow-x-auto  md:justify-between items-center p-1 mb-2'>
        <BetItemHeader bet={bet} />
        <div className='bg-yellow-300 rounded-sm px-1 mr-2 md:mr-0'>
          <div title='Minimum Bahis Sayisi'>{bet.OCG[1]?.MBS}</div>
        </div>
        {Object.values(bet.OCG).map((ocgItem: any, ocgIndex: number) => {
          ocgItem.matchName = bet.N;
          ocgItem.code = bet.C;
          return (
            <BetItem
              key={ocgIndex}
              betInfo={ocgItem}
              index={index}
              timestamp={timestamp}
            />
          );
        })}
      </div>
    </li>
  );
};

export default BulletinItem;

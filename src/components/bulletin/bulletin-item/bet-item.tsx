import React, { useContext } from 'react';
import AppContext from 'context';

type Props = {
  betInfo: any;
  index:number;
  timestamp:number;
};

const BetItem = ({ betInfo,index,timestamp }: Props) => {
  const { addCoupon }: any = useContext(AppContext);

  const selectedOC = (oc: any) => {
    if (oc?.O !== '-') {
      addCoupon(oc);
    }
  };
  return (
    <div className='flex flex-col text-center'>
      <div className='font-bold text-[10px]'>{betInfo?.N}</div>
      <ul className='flex gap-1'>
        {Object.values(betInfo?.OC).map((oc: any, ocIndex: number) => {
            oc.index =  `${index}-${timestamp}-${oc?.ID || 'null'}`;
            oc.matchName = betInfo.matchName;
            oc.code = betInfo.code;
            return (
                <li
                  onClick={() => selectedOC(oc)}
                  key={ocIndex}
                  className={`
                  ${ oc?.isSelected && 'bg-yellow-300'}
                  ${
                    oc.O !== '-' && 'cursor-pointer md:hover:bg-yellow-200'
                  } flex flex-col justify-center items-center border rounded-sm bg-gray-300  px-2 w-10`}
                >
                  <span>{oc.N}</span>
                  <span className='font-bold'>{oc.O}</span>
                </li>
              )
        })}
      </ul>
    </div>
  );
};

export default BetItem;

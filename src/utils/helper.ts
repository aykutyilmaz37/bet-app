const MATCHRESULT = {
  N: '2',
  O: '-',
};

const OC = {
  1: { O: '-', N: '1' },
  2: { O: '-', N: 'X' },
  3: { O: '-', N: '2' },
};

const KG = {
  1: { O: '-', N: 'Var' },
  2: { O: '-', N: 'Yok' },
};


export const tableMapping = (bets:any) =>{
  const list:any = [];
  bets.map((bet:any) => {
    bet.OCG['1'] = {
      ...bet.OCG['1'],
      OC:{
        ...bet.OCG['1'].OC,
        "2":{ ...MATCHRESULT}
      }
    }
    bet.OCG['3'] = { ID: '3', N: 'H1 Maç Sonucu', OC };
    bet.OCG['4'] = { ID: '4', N: 'H2 Maç Sonucu', OC };
    bet.OCG['6'] = { ID: '6', N: 'KG Var/Yok', OC: KG };
    
    list.push(bet);
  })
  return list;
}

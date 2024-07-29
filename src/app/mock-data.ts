import { UserEtfData } from './etf-history-response';

// Note: Date 會 default 從 1970 1/1 開始計算, 因為會偏移一個月, 所以在輸入都要先扣掉 1 個月
export const mockData: UserEtfData[] = [
  {
    code: '00907',
    name: '永豐優息存股',
    startDate: new Date(2023, 7, 11),
    endDate: undefined,
    amountOfStock: 1000,
  },
  {
    code: '00907',
    name: '永豐優息存股',
    startDate: new Date(2023, 7, 22),
    endDate: undefined,
    amountOfStock: 1000,
  },
  {
    code: '00907',
    name: '永豐優息存股',
    startDate: new Date(2023, 8, 7),
    endDate: undefined,
    amountOfStock: 1000,
  },
  {
    code: '00907',
    name: '永豐優息存股',
    startDate: new Date(2023, 9, 5),
    endDate: undefined,
    amountOfStock: 1000,
  },
  {
    code: '00907',
    name: '永豐優息存股',
    startDate: new Date(2023, 9, 23),
    endDate: undefined,
    amountOfStock: 1000,
  },
  {
    code: '00907',
    name: '永豐優息存股',
    startDate: new Date(2024, 0, 25),
    endDate: undefined,
    amountOfStock: 2000,
  },
  {
    code: '00907',
    name: '永豐優息存股',
    startDate: new Date(2024, 5, 3),
    endDate: undefined,
    amountOfStock: 1000,
  },
];

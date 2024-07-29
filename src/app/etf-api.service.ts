import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EtfHistoryResponse } from './etf-history-response';

@Injectable({
  providedIn: 'root',
})
export class EtfApiService {
  constructor(private http: HttpClient) {}

  getEtfInfo(endDate: string) {
    console.log(endDate);
    const response = this.http.get<EtfHistoryResponse>(
      'https://www.twse.com.tw/rwd/zh/ETF/etfDiv?stkNo=&startDate=20050101&endDate=' +
        endDate +
        '&response=json'
    );
    return response;
  }
}

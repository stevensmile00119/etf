import { Component, OnInit } from '@angular/core';
import {
  EtfData,
  EtfHistoryResponse,
  UserEtfData,
} from '../etf-history-response';
import { EtfApiService } from '../etf-api.service';
import { formatDate } from '@angular/common';
import { mockData } from '../mock-data';

@Component({
  selector: 'app-etf-api',
  templateUrl: './etf-api.component.html',
  styleUrls: ['./etf-api.component.scss'],
})
export class EtfApiComponent implements OnInit {
  readonly title = 'etf測試用';
  etfApiService: EtfApiService;

  userEtfRawDataList: UserEtfData[] = [];
  userEtfDataList: UserEtfData[] = [];
  userTotalBenefit = 0;
  searchCode: string = '';
  displayedColumns: string[] = [];
  etfRawDataList: EtfData[] = [];
  etfDataList: EtfData[] = [];
  readonly now = new Date();
  readonly userHeaderList = [
    '證券代號',
    '證券簡稱',
    '證卷購入日',
    '證卷賣出日',
    '股數',
    '累計配息',
  ];
  rawData: EtfHistoryResponse = {
    fields: [],
    data: [],
    status: '',
    title: '',
  };

  constructor(etfApiService: EtfApiService) {
    this.etfApiService = etfApiService;
  }

  ngOnInit(): void {
    this.initrawData();
    console.log(this.rawData);
  }

  initrawData() {
    const endDate = formatDate(this.now, 'yyyyMMdd', 'zh-Hant-TW', '+0800');
    this.etfApiService.getEtfInfo(endDate).subscribe((response) => {
      console.log(response);
      this.rawData = response;
      this.displayedColumns = response.fields;
      this.etfRawDataList = response.data.map((item) => ({
        code: item[0] ?? '',
        name: item[1] ?? '',
        exDividendDate: this.parseDate(item[2]),
        baseDate: this.parseDate(item[3]),
        paymentDate: this.parseDate(item[4]),
        amount: item[5] ?? '',
        standard: item[6] ?? '',
        year: parseInt(item[7] ?? '0'),
      }));
      this.etfDataList = this.etfRawDataList;
    });
  }

  filterButton() {
    if (this.searchCode == '') {
      return;
    }
    this.etfDataList = this.etfRawDataList.filter(
      (data) => data.code === this.searchCode
    );
    console.log(this.etfDataList);
    console.log(
      this.getPerBenefitBetweenStartTimeAndEndTime(
        this.searchCode,
        new Date(2004, 10, 1),
        new Date(2024, 7, 26)
      )
    );
  }

  getPerBenefitBetweenStartTimeAndEndTime(
    searchCode: string,
    startDate: Date,
    endDate: Date
  ) {
    const filteredData = this.etfRawDataList.filter(
      (data) =>
        data.code === searchCode &&
        data.baseDate >= startDate &&
        data.baseDate <= endDate
    );
    console.log(filteredData);
    if (null === filteredData) {
      return 0;
    }

    let allBenefitPerStock = 0;
    filteredData.forEach(
      (data) => (allBenefitPerStock += parseFloat(data.amount ?? '0'))
    );
    return allBenefitPerStock;
  }

  returnButton() {
    this.etfDataList = this.etfRawDataList;
  }

  parseDate(dateString: string | null): Date {
    if (dateString === null) {
      return new Date(1911, 1, 1);
    }
    const [year, month, day] = dateString
      .split('年')
      .join('-')
      .split('月')
      .join('-')
      .split('日')
      .join('')
      .split('-')
      .map(Number);
    return new Date(year + 1911, month - 1, day);
  }

  onSearchCodeChange(value: string): void {
    this.searchCode = value;
  }

  mockUserData() {
    console.log('test??');
    const code = '00907';
    this.userEtfRawDataList = mockData;
    this.userEtfDataList = this.userEtfRawDataList;
  }

  getStockName(code: string) {
    const result = this.etfRawDataList.filter((data) => data.code === code);

    if (!result || result.length === 0) {
      return 'Not in data list';
    }

    return result[0].name;
  }
}

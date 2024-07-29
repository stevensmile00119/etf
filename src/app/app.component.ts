import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, filter, map, Subject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private localStorageService: LocalStorageService) {}
  ngOnDestroy(): void {
    // this.saveList(this.testStringList2);
    throw new Error('Method not implemented.');
  }
  source = new Subject();
  subscription: any = null;
  title = 'rxjs-practice';
  temp = 0;
  testStringList = {
    myTest: ['a', 'b', 'c', 'd'],
  };

  testStringList2 = {
    myTest: ['e', 'f', 'g', 'h'],
  };

  ngOnInit() {
    this.startTest();
    const lastNumber = localStorage.getItem('test');
    this.temp = Number(lastNumber);
    console.log(localStorage.getItem('test'));
    fromEvent(document, 'click').subscribe(() => this.saveLocalStorage());
  }

  startTest() {
    this.temp = 0;
    if (this.subscription && !this.subscription.closed) {
      this.cancelTest();
    }
    this.source = new Subject();
    this.subscription = this.source.subscribe(
      (data: any) => (this.temp = this.temp + data)
    );
  }

  callTest() {
    this.source.next(1);

    console.log(this.subscription.closed);
  }

  cancelTest() {
    this.subscription.unsubscribe(); // 取消訂閱
  }

  saveLocalStorage() {
    localStorage.setItem('test', this.temp?.toString() ?? '');
  }

  saveList(justTest?: any) {
    const input = justTest ?? this.testStringList;
    localStorage.setItem('testList', JSON.stringify(input));
  }

  showList() {
    const testList = localStorage.getItem('testList');
    console.log(testList);
    const testListFromJson = JSON.parse(testList || '');
    console.log(testListFromJson);
  }
}

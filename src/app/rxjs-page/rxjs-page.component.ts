import { Component } from '@angular/core';
import { fromEvent, filter, map, Subject } from 'rxjs';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-page',
  templateUrl: './rxjs-page.component.html',
  styleUrls: ['./rxjs-page.component.scss'],
})
export class RxjsPageComponent {
  callTest() {
    const source = new Subject();
    const subscription: Subscription = source.subscribe((data) =>
      console.log(data)
    );

    source.next(1); // 顯示 1
    source.next(2); // 顯示 2

    subscription.unsubscribe(); // 取消訂閱

    source.next(3); // 這時候就不會處理了

    console.log(subscription.closed);
  }
}

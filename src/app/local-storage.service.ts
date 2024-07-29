import { Injectable } from '@angular/core';

const storageName = 'chsheo_test';

const defaultObject = {
  test: ['a'],
};

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private testObject;

  constructor() {
    this.testObject = JSON.parse(
      localStorage.getItem(storageName) || JSON.stringify(defaultObject)
    );
  }

  // get items
  get() {
    return this.testObject;
  }

  post(updateObject: any) {
    this.testObject = updateObject;
    return this.update();
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.testObject));

    return this.get();
  }
}

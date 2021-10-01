import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class StorageService {
  storageName: string;
  getAll(): any {
    return JSON.parse(localStorage.getItem(this.storageName));
  }

  save(data: any): any {
    let actualData = this.getAll();
    if (actualData) {
      actualData.push(data);
    } else {
      actualData = [data];
    }
    localStorage.setItem(this.storageName, JSON.stringify(data));
  }

  removeAll(): void {
    localStorage.removeItem(this.storageName);
  }
}

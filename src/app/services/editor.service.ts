import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  CHECK_LIST = 'checkList'

  constructor() { }

  savePage(data) {
    const saveData = data && typeof data === 'object' ? JSON.stringify(data) : data
    window.localStorage.setItem(this.CHECK_LIST, saveData)
  }

  getPage() {
    return window.localStorage.getItem(this.CHECK_LIST)
  }
}

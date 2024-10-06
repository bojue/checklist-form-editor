import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-operation',
  templateUrl: './nav-operation.component.html',
  styleUrls: ['./nav-operation.component.scss']
})
export class NavOperationComponent implements OnInit {
  @Output() operationEvent = new EventEmitter()
  size = "smail"
  btns = {
    preview: '预览',
    save: '保存'
  }

  constructor() { }

  ngOnInit(): void {
  }


  operation(state: string) {
    this.operationEvent.emit(state)
  }
}

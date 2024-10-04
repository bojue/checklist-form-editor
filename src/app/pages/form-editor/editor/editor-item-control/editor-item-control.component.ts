import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editor-item-control',
  templateUrl: './editor-item-control.component.html',
  styleUrls: ['./editor-item-control.component.scss']
})
export class EditorItemControlComponent implements OnInit {
  @Input() type: string
  @Output() addItem = new EventEmitter()
  @Output() deleteItem = new EventEmitter()
  addEntity = 'addEntity'
  size = 'small'
  constructor() { }

  ngOnInit(): void {
  }

  controlItem(state) {
    switch(state) {
      case 'add':
        this.addItem.emit()
        break;
      case 'del':
        this.deleteItem.emit()
    }
  }

}

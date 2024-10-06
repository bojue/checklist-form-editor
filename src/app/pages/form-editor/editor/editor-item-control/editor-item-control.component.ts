import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editor-item-control',
  templateUrl: './editor-item-control.component.html',
  styleUrls: ['./editor-item-control.component.scss']
})
export class EditorItemControlComponent implements OnInit {
  @Input() type: string
  @Input() data: any
  @Input() list: any[]
  @Output() editorDataEvent = new EventEmitter()

  size = 'small'
  btns = {
    add: '新增',
    copy: '复制新建',
    editor: '编辑',
    delete: '删除(至少有一条数据)'
  }
  constructor() { }

  ngOnInit(): void {
  }

  controlItem(state) {
    const isEditorState = ['editor', 'save'].includes(state)
    if(isEditorState) {
      this.data._active = !this.data._active
    } else {
      this.editorDataEvent.emit(state)
    }
  }

}

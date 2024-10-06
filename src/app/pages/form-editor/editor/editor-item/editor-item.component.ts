import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editor-item',
  templateUrl: './editor-item.component.html',
  styleUrls: ['./editor-item.component.scss']
})
export class EditorItemComponent implements OnInit {
  @Input() dataList: any[]
  @Input() formEditorTitle: any[]
  @Output() formDataOperation = new EventEmitter()
  size = 'small'
  subTitle = [ {
    name: '赋值类型',
    type: "dataType"
  },{
    name: '赋值来源',
    type: "dataSourceType"
  }, {
    name: '数据源配置',
    type: "dataConfig"
  },{
    name: '描述',
    type: "description"
  }, {
    name: "操作",
    type: 'control'
  }]

  constructor() { }

  ngOnInit(): void {
  }
  
  /**
   * 表单操作事件
   * @param currentParentData  add, delete,copy,editor
   * @param eventType 
   * @param index 
   * @param level 
   */
  formControlEvent(eventType, currentParentData, index, level, parentData) {
    this.formDataOperation.emit({
      index,
      level,
      type: eventType,
      data: currentParentData,
      parentData: parentData
    })
  }

}

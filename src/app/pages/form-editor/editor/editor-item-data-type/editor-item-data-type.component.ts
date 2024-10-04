import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-item-data-type',
  templateUrl: './editor-item-data-type.component.html',
  styleUrls: ['./editor-item-data-type.component.scss']
})
export class EditorItemDataTypeComponent implements OnInit {
  @Input() data: any
  dataTypeList = [ {
    label: '文本域',
    value: 'textarea'
  },{
    label:'输入框',
    value: 'string'
  },  {
    label: '下拉框',
    value: 'select'
  },{
    label: '数字',
    value: 'number'
  }, {
    label: '布尔',
    value: 'boolean'
  }, {
    label: '日期',
    value: 'date'
  },  {
    label: '时间',
    value: 'time'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}

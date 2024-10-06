import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash'

@Component({
  selector: 'app-editor-item-data-type',
  templateUrl: './editor-item-data-type.component.html',
  styleUrls: ['./editor-item-data-type.component.scss']
})
export class EditorItemDataTypeComponent implements OnInit {
  @Input() data: any
  dataTypeList = [ {
    label: '文本域输入',
    value: 'textarea'
  },{
    label:'单行输入',
    value: 'string'
  },  {
    label: '选择下拉',
    value: 'select'
  },{
    label: '数字输入',
    value: 'number'
  }, {
    label: '开关',
    value: 'boolean'
  }, {
    label: '日期选择',
    value: 'date'
  },  {
    label: '时间选择',
    value: 'time'
  }, 
  {
    label: '仅显示文本',
    value: 'text'
  }
]

  constructor() { }

  ngOnInit(): void {
  }


  getValue(value) {
    return _.filter(this.dataTypeList, {
      value
    })?.[0]?.label
  }
}

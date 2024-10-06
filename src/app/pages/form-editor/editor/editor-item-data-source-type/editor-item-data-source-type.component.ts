import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash'

@Component({
  selector: 'app-editor-item-data-source-type',
  templateUrl: './editor-item-data-source-type.component.html',
  styleUrls: ['./editor-item-data-source-type.component.scss']
})
export class EditorItemDataSourceTypeComponent implements OnInit {
  @Input() data: any
  dataSourceTypeList = [{
    label: '用户输入',
    value: 'input'
  }, {
    label: '系统预制数据源',
    value: 'select'
  }, {
    label: '接口请求',
    value: 'api'
  }, {
    label: '自定义',
    value: 'custom'
  }]
  constructor() { }

  ngOnInit(): void {
  }


  getValue(value) {
    return _.filter(this.dataSourceTypeList, item => item.value === value)?.[0]?.label
  }

}

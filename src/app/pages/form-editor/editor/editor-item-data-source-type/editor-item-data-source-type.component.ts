import { Component, Input, OnInit } from '@angular/core';

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
    label: '选择数据源',
    value: 'select'
  }, {
    label: '接口请求',
    value: 'api'
  }, {
    label: '用户自定义',
    value: 'custom'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}

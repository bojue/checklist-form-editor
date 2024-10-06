import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash'

@Component({
  selector: 'app-editor-item-data-config',
  templateUrl: './editor-item-data-config.component.html',
  styleUrls: ['./editor-item-data-config.component.scss']
})
export class EditorItemDataConfigComponent implements OnInit {
  @Input() data: any
  selectDataSourceList = [{
    label: '[是,否]',
    value: '[是,否]',
  }, {
    label: '[有效,无效]',
    value: '[有效,无效]',
  }, {
    label: '[合格,不合格]',
    value: '[合格,不合格]',
  }, {
    label: '[合法,非法]',
    value: '[合法,非法]',
  }, {
    label: '[过高,正常,过低,低,高]',
    value: '[过高,正常,过低,低,高]',
  }]

  placeholder = "请输入自定义数据源"

  constructor() { }

  ngOnInit(): void {
  }

  getValue(value) {
    return _.filter(this.selectDataSourceList, value)?.[0]?.label
  }

}

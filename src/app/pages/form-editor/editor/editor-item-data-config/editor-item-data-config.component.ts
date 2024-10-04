import { Component, Input, OnInit } from '@angular/core';

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
    label: '[合法,非法]',
    value: '[合法,非法]',
  }, {
    label: '[过高,正常,过低,低,高]',
    value: '[过高,正常,过低,低,高]',
  }]

  placeholder = "自定义数据源结构<string>[],举例:[是,否]"

  constructor() { }

  ngOnInit(): void {
  }

}

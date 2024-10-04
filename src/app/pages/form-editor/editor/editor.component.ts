import { Component, OnInit } from '@angular/core';
import { formEditorForm, formEditorFormData } from 'src/app/types/editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  formEditorTitle = [{
    name: '检查分类',
    type: 'type'
  },{
    name: '检查项目',
    type: 'sub-type'
  },{
    name: '检查标准',
    type: 'standard'
  }, {
    name: '交互组件',
    type: "dataType"
  },{
    name: '数据来源',
    type: "dataSourceType"
  }, {
    name: '数据源配置',
    type: "dataConfig"
  },{
    name: '备注',
    type: 'description'
  },  {
    name: "操作",
    type: 'control'
  }]


  addFormItem = {
    label: '请数据名称',
    dataType: 'string',
    dataSourceType: 'string',
    dataSource: 'api',
    children: []
  }

  addEntityItem = {
    label: '',
    dataType: 'string',
    dataSourceType: 'string',
    dataSource: 'input'
  }

  testData: any = [{
    label: '',
    dataType: 'string',
    dataSourceType: 'string',
    dataSource: 'input',
    children: []
  }]

  formEditorContentData:formEditorForm = {
    name: '表单名称',
    data: [...this.testData]
  }


  constructor() { }

  ngOnInit(): void {
    
  }


  /**
   * 表单数据操作
   * @param event 
   */
  formDataOperation(event) {
    const {
      index,
      type, 
      data,
      parentData
    } = event

    console.log(event, data)
    const list = parentData || this.formEditorContentData.data
    switch(type) {
      case 'add':
        // @ts-ignore
        list.splice(index, 0, this.addEntityItem)
        break;
      case 'del':
        list.splice(index, 1)
    }

    console.log(this.formEditorContentData, data)

    if(data) {
      
      // data.children.push(this.addFormItem)
    }

    console.log(data)
  }

}

import { Component, OnInit } from '@angular/core';
import { formEditorForm, formEditorFormData } from 'src/app/types/editor';
import * as _ from 'lodash';
import { EditorService } from 'src/app/services/editor.service';
import { PreviewService } from 'src/app/services/preview.service';

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
  //   name: '备注',
  //   type: 'description'
  // },  {
    name: "操作",
    type: 'control'
  }]


  /**
   * 添加检查项
   */
  addEntityItem = {
    label: '',
    dataType: 'string',
    dataSourceType: 'input',
  }

  /**
   * 添加分类元素
   */
  addFormItem: any = {
    label: '',
    dataType: 'string',
    dataSourceType: 'input',
    children: [_.cloneDeep(this.addEntityItem)]
  }


  initFormData: any = {
    name: '检查单名称',
    data: [_.cloneDeep(this.addFormItem)]
  }

  formEditorContentData:formEditorForm = {
    ...this.initFormData
  }


  constructor(
    public service: EditorService,
    public previewService: PreviewService
  ) { }

  ngOnInit(): void {
    const data = this.service.getPage()
    if(data) {
      this.formEditorContentData = JSON.parse(data)
    }
  }

  /**
   * 创建表单
   */
  createForm() {
    this.formEditorContentData = {...this.initFormData}
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
      level,
      parentData
    } = event

    // 根目录
    const isRootData = level === 1
    if(isRootData) {
      this.dataOperations(type, this.formEditorContentData.data, index, this.addFormItem)
    } else {
      this.dataOperations(type,  parentData.children, index, this.addEntityItem)
    }
  }

  /**
   * 数据操作
   */
  dataOperations(type: string, list: any[], index: number, addItem: any) {
    switch(type) {
      case 'add':
        // @ts-ignore
        list.splice(index + 1, 0, _.cloneDeep(addItem))
        break;
      case 'delete':
        list.splice(index, 1)
        break
      case 'copy': 
        list.splice(index +1, 0, _.cloneDeep(list[index] || addItem))
    }
  }

  /**
   * 保存和预览等操作
   */
  operation(state: string) {
    if(state === 'save') {
      this.savePage()
    } else if(state === 'preview') {
      this.previewPage()
    }
  }

  savePage() {
    this.service.savePage(this.formEditorContentData)
  }

  previewPage() {
    this.previewService.preview(this.formEditorContentData)
  }


}

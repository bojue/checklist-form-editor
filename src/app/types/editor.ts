export interface formEditorFormData {
  label: string // 标题
  dataType: string// 赋值类型
  data: string // 数据
  dataSourceType:  string// 数据类型
  children?: formEditorFormData[]
  customData?: string
  //TODO 数据来源分为：客制化，api,sql,excel
}

export interface formEditorForm {
  name: string // 表单名称
  data: formEditorFormData[] // 数据
}
export const editorMockData = [{
  label: '机房环境',
  dataType: 'string',
  dataSourceType: 'string',
  dataSource: 'input',
  children: [{
    label: '机房情况',
    dataType: 'string',
    dataSourceType: 'string',
    dataSource: 'input',
    children: [{
      label: '自建',
      dataType: 'string',
      dataSourceType: 'string',
      dataSource: 'input',
      data: "['合格','不合格']"
    }]
  }]
}]
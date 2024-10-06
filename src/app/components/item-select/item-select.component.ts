import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-select',
  templateUrl: './item-select.component.html',
  styleUrls: ['./item-select.component.scss']
})
export class ItemSelectComponent implements OnInit {
  @Input() data: any
  list: any[]
  placeholder: string

  constructor() { }

  ngOnInit(): void {
    const {
      dataConfig,
      label,
      dataSourceType,
      customData
    } = this.data
    this.placeholder = `请选择${label}`
    const selectList = dataSourceType === 'custom' ? customData : dataConfig

    if(selectList) {
      const startIndex = selectList.indexOf('[')
      const lastIndex = selectList.indexOf(']')
      const str  = selectList.slice(startIndex + 1, lastIndex)
      this.list = str && str.split(',')
    
    }
    
  }

}

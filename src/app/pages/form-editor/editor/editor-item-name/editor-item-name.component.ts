import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-item-name',
  templateUrl: './editor-item-name.component.html',
  styleUrls: ['./editor-item-name.component.scss']
})
export class EditorItemNameComponent implements OnInit {
  @Input() item: any
  @Input() full: boolean
  @Input() param: string
  size = 'small'
  isTitle =  false 

  constructor() { }

  ngOnInit(): void {
    this.isTitle = this.param === 'name'
  }

  changeValue(event) {
    this.item[this.param || 'label'] = event.target.textContent
  }

}

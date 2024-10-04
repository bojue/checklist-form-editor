import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-item-name',
  templateUrl: './editor-item-name.component.html',
  styleUrls: ['./editor-item-name.component.scss']
})
export class EditorItemNameComponent implements OnInit {
  @Input() item: any
  @Input() full: boolean
  size = 'small'

  constructor() { }

  ngOnInit(): void {
  }

  changeValue(event) {
    console.log(event.target.textContent, )
    this.item.label = event.target.textContent
  }

}

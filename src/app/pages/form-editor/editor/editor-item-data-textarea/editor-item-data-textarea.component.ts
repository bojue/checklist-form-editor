import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-item-data-textarea',
  templateUrl: './editor-item-data-textarea.component.html',
  styleUrls: ['./editor-item-data-textarea.component.scss']
})
export class EditorItemDataTextareaComponent implements OnInit {
  @Input() data: any
  @Input() param: string
  @Input() placeholder: string 

  constructor() { }

  ngOnInit(): void {
  }

}

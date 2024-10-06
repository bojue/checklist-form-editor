import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-editor-preview',
  templateUrl: './form-editor-preview.component.html',
  styleUrls: ['./form-editor-preview.component.scss']
})
export class FormEditorPreviewComponent implements OnInit {
  @Input() pageData: any

  terminal = 'phone'
  constructor() { }

  ngOnInit(): void {

    console.log(this.pageData)
  }

}

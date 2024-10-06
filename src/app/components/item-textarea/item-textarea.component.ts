import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-textarea',
  templateUrl: './item-textarea.component.html',
  styleUrls: ['./item-textarea.component.scss']
})
export class ItemTextareaComponent implements OnInit {
  @Input() data: any 
  placeholder: string

  constructor() { }

  ngOnInit(): void {
    const {
      label,
    } = this.data
    this.placeholder = `请输入${label}`
  }

}

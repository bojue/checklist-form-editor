import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.scss']
})
export class ItemInputComponent implements OnInit {
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

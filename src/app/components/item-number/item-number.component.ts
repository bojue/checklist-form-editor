import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-number',
  templateUrl: './item-number.component.html',
  styleUrls: ['./item-number.component.scss']
})
export class ItemNumberComponent implements OnInit {
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

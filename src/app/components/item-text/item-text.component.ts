import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-text',
  templateUrl: './item-text.component.html',
  styleUrls: ['./item-text.component.scss']
})
export class ItemTextComponent implements OnInit {
  @Input() data: any
  constructor() { }

  ngOnInit(): void {
  }

}

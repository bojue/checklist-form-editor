import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-switch',
  templateUrl: './item-switch.component.html',
  styleUrls: ['./item-switch.component.scss']
})
export class ItemSwitchComponent implements OnInit {
  @Input() data: any
  constructor() { }

  ngOnInit(): void {
  }

}

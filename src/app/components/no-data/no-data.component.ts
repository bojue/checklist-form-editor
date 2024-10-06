import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent implements OnInit {
  @Input() title: string
  @Input() buttonText: string
  @Output() createForm = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.createForm.emit()
  }

}

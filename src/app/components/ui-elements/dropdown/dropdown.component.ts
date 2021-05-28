import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  // Angular variables
  @Input() options: any[] = [];
  @Input() title: string = '';
  @Output() selectChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  // Page events
  onChangeValue = (e: any) => {
    this.selectChange.emit(e);
  }
}

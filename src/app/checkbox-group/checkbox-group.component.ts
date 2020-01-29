import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckboxItem } from './CheckboxItem';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css']
})
export class CheckboxGroupComponent implements OnInit {
  @Input() options = Array<CheckboxItem>();
  @Output() toggle = new EventEmitter<any[]>();

 constructor() {}

 ngOnInit() {}

 onToggle() {
  const checkedOptions = this.options.filter(x => x.checked);
  this.toggle.emit(checkedOptions.map(x => x.label));
  }
}

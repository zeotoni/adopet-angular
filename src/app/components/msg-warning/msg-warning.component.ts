import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-msg-warning',
  templateUrl: './msg-warning.component.html',
  styleUrls: ['./msg-warning.component.scss']
})
export class MsgComponent {

  @Input() text = '';
}

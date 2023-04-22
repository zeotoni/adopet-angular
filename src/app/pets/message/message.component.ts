import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit{

  msgForm!: FormGroup;
  msgSuccess: string = '';

  constructor(
    private builder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.msgForm = this.builder.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      phone: ['', [Validators.required, Validators.pattern(/^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/)]],
      petName: ['', [Validators.required]],
      msg: ['', [Validators.required, Validators.minLength(30)]]
    })
  }

  sendMessage() {
    this.msgSuccess = 'Mensagem enviada com sucesso!'
    this.msgForm.reset();
  }
}

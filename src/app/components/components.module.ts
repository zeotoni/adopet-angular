import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MessageComponent
  ]
})
export class ComponentsModule { }

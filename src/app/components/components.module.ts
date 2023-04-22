import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { RouterModule } from '@angular/router';
import { MsgComponent } from './msg-warning/msg-warning.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MsgComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MsgComponent
  ]
})
export class ComponentsModule { }

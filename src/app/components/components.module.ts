import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MsgComponent } from './msg-warning/msg-warning.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MsgComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MsgComponent,
    LoaderComponent
  ]
})
export class ComponentsModule { }

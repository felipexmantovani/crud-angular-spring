import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListComponent } from './cursos-list/cursos-list.component';

@NgModule({
  declarations: [
    CursosListComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }

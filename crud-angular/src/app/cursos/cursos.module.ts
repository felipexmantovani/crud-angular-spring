import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { CursosListComponent } from './cursos-list/cursos-list.component';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [
    CursosListComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatTableModule
  ]
})
export class CursosModule { }

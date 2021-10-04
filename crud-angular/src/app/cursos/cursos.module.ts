import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [
    CursosListComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AppMaterialModule
  ]
})
export class CursosModule { }

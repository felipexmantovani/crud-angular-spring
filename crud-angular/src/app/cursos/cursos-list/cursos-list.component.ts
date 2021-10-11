import { Component, OnInit } from '@angular/core';

import { Curso } from '../models/curso.interface';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit {

  cursos = new Array<Curso>();

  displayedColumns = ['name', 'category'];

  constructor(
    private cursosService: CursosService
  ) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.findAll();
  }

}

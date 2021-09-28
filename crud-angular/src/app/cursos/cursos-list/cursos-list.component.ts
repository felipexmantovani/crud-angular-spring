import { Component, OnInit } from '@angular/core';

import { Curso } from '../models/curso.interface';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit {

  cursos: Curso[] = [
    {
      _id: '1',
      category: 'JS',
      name: 'Angular Expert'
    }
  ];

  displayedColumns = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}

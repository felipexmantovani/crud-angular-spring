import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Curso } from '../models/curso.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(
    private httpClient: HttpClient
  ) { }

  findAll(): Array<Curso> {
    return [
      {
        _id: '1',
        category: 'JS',
        name: 'Angular Expert'
      }
    ];
  }
}

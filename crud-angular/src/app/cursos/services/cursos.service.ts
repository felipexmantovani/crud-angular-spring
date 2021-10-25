import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, first } from 'rxjs/operators';

import { Curso } from '../models/curso.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = '/assets/cursos.json';

  constructor(
    private httpClient: HttpClient
  ) { }

  findAll(): Observable<Array<Curso>> {
    return this.httpClient.get<Array<Curso>>(this.API)
      .pipe(
        first(),
        delay(5000)
      );
  }
}

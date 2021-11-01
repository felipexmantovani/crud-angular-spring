import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

import { Curso } from '../models/curso.interface';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit {

  cursos$ = new Observable<Array<Curso>>();

  displayedColumns = ['name', 'category'];

  constructor(
    private cursosService: CursosService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursosService.findAll()
      .pipe(
        catchError(erro => {
          this.onError('Não foi possível carregar os cursos.');
          return of([]);
        })
      );
  }

  onError(errorMsg: string): void {
    this.matDialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}

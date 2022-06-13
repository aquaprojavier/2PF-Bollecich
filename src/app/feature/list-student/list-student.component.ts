import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { StudentService } from '../../services/student.service';
import { Student } from './student';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationMessageComponent } from 'src/app/shared/confirmation-message/confirmation-message.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'telefono', 'fechaIngreso', 'curso', 'acciones'];
  dataSource = new MatTableDataSource<Student>();
  listStudent: Student[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private studentService: StudentService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fillStudent();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  fillStudent() {
    this.listStudent = this.studentService.getStudents();
    this.dataSource = new MatTableDataSource(this.listStudent);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  delStudent(index: number) {

    const dialogRef = this.dialog.open(ConfirmationMessageComponent, {
      width: '350px',
      data: { mensaje: 'Esta seguro de eliminar el Estudiante?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'aceptar') {
        this.studentService.delStudents(index);
        this.fillStudent();
        this.snackBar.open('El estudiante fue elimimado con exito!', '', {
          duration: 3000
        })
      }
    });
  }

}

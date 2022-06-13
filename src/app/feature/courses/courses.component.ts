import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Course } from './course';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationMessageComponent } from 'src/app/shared/confirmation-message/confirmation-message.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  
  titulo: string = 'Cursos FrontEnd';
  displayedColumns: string[] = ['nombre', 'duracion', 'fechaInicio', 'acciones'];
  dataSource = new MatTableDataSource<Course>();
  listCourses: Course[];
  
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private courseService: CourseService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fillCourse();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  fillCourse() {
    this.listCourses = this.courseService.getCourses();
    this.dataSource = new MatTableDataSource(this.listCourses);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  delCourse(index: number) {

    const dialogRef = this.dialog.open(ConfirmationMessageComponent, {
      width: '350px',
      data: { mensaje: 'Esta seguro de eliminar el Curso?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'aceptar') {
        this.courseService.delCourse(index);
        this.fillCourse();
        this.snackBar.open('El curso fue elimimado con exito!', '', {
          duration: 3000
        })
      }
    });
  }

}

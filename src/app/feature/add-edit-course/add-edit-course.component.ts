import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CourseService } from 'src/app/services/course.service';
import { Course } from '../courses/course';

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.scss']
})
export class AddEditCourseComponent implements OnInit {

  idCourse: any;
  accion = 'Crear';
  myForm: FormGroup;

  constructor(private fb: FormBuilder,
    private courseService: CourseService,
    private route: Router,
    private snackBar: MatSnackBar,
    private aRoute: ActivatedRoute) {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(15)]],
      duracion: ['', [Validators.required, Validators.maxLength(3)]],
      fechaInicio: ['', Validators.required]
    });
    const idParams = 'id';
    this.idCourse = this.aRoute.snapshot.params[idParams];
  }

  ngOnInit(): void {
    if (this.idCourse !== undefined) {
      this.accion = 'Editar';
      this.cEditar();
    }
  }

  guardarCurso() {
    const curso: Course = {
      nombre: this.myForm.get('nombre')?.value,
      duracion: this.myForm.get('duracion')?.value,
      fechaInicio: this.myForm.get('fechaInicio')?.value
    };
    if (this.idCourse !== undefined) {
      this.editCourse(curso)
    } else {
      this.agregarCurso(curso)
    }

  }

  agregarCurso(curso: Course) {
    this.courseService.addCourse(curso);
    this.snackBar.open('El curso fue elimimado con exito!', '', {
      duration: 3000
    })
    this.route.navigate(['/curso']);
  }

  editCourse(curso: Course){
    this.courseService.editCourse(curso, this.idCourse);
    this.snackBar.open('El curso fue actualizado con exito!', '', {
      duration: 3000
    })
    this.route.navigate(['/curso']);
  }

  cEditar() {
    const course: Course = this.courseService.getCourse(this.idCourse)
    console.log(course);
    this.myForm.patchValue({
      nombre: course.nombre,
      duracion: course.duracion,
      fechaInicio: course.fechaInicio
    })
  }

}

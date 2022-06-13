import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../list-student/student';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.scss']
})
export class AddEditStudentComponent implements OnInit {

  cursos: any[] = ['Angular', 'React', 'Vue']
  idStudent: any;
  accion = 'Crear';
  myForm: FormGroup;

  constructor(private fb: FormBuilder,
    private estudianteService: StudentService,
    private route: Router,
    private snackBar: MatSnackBar,
    private aRoute: ActivatedRoute) {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(15)]],
      apellido: ['', [Validators.required, Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      fechaIngreso: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.maxLength(20)]],
      curso: ['', Validators.required]
    });
    const idParams = 'id';
    this.idStudent = this.aRoute.snapshot.params[idParams];
  }

  ngOnInit(): void {
    if (this.idStudent !== undefined) {
      this.accion = 'Editar';
      this.esEditar();
    }
  }

  guardarEstudiante() {
    const estudiante: Student = {
      nombre: this.myForm.get('nombre')?.value,
      apellido: this.myForm.get('apellido')?.value,
      email: this.myForm.get('email')?.value,
      fechaIngreso: this.myForm.get('fechaIngreso')?.value,
      telefono: this.myForm.get('telefono')?.value,
      curso: this.myForm.get('curso')?.value
    };
    if (this.idStudent !== undefined) {
      this.editStudent(estudiante)
    } else {
      this.agregarStudent(estudiante)
    }

  }

  agregarStudent(estudiante: Student) {
    this.estudianteService.addStudent(estudiante);
    this.snackBar.open('El estudiante fue elimimado con exito!', '', {
      duration: 3000
    })
    this.route.navigate(['/']);
  }

  editStudent(estudiante: Student){
    this.estudianteService.editStudent(estudiante, this.idStudent);
    this.snackBar.open('El estudiante fue actualizado con exito!', '', {
      duration: 3000
    })
    this.route.navigate(['/']);
  }

  esEditar() {
    const student: Student = this.estudianteService.getStudent(this.idStudent)
    console.log(student);
    this.myForm.patchValue({
      nombre: student.nombre,
      apellido: student.apellido,
      email: student.email,
      telefono: student.telefono,
      fechaIngreso: student.fechaIngreso,
      curso: student.curso
    })
  }

}

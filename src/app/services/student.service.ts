import { Injectable } from '@angular/core';
import { Student } from '../feature/list-student/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  listStudent: Student[] = [
    {nombre: 'javier', apellido: 'Bollecich', email: 'jbollecich@gmail.com', telefono: 2613743443, curso: 'Angular', 
    fechaIngreso: new Date()},
    {nombre: 'Lucas', apellido: 'Vera', email: 'lVera@gmail.com', telefono: 26134647675, curso:'Vue',
    fechaIngreso: new Date('2018-04-26')},
    {nombre: 'Cecilia', apellido: 'Arias', email: 'carias@gmail.com', telefono: 26137467383, curso:'React',
    fechaIngreso: new Date('2017-12-01')},
    {nombre: 'Federico', apellido: 'Bollecich', email: 'fbollecich@gmail.com', telefono: 26137784931, curso:'Vue',
    fechaIngreso: new Date('2022-01-11')},
    {nombre: 'Carolina', apellido: 'Ceballos', email: 'cgomez@gmail.com', telefono: 2613361010, curso:'Angular',
    fechaIngreso: new Date('2014-11-05')},
    {nombre: 'Veronica', apellido: 'munoz', email: 'vero@gmail.com', telefono: 2613432832, curso:'Angular',
    fechaIngreso: new Date('2019-03-12')},
    {nombre: 'Carina', apellido: 'Gomez', email: 'cgomez@gmail.com', telefono: 261389434931, curso:'Vue',
    fechaIngreso: new Date('2022-01-11')},
    {nombre: 'Tom', apellido: 'Hughes', email: 'hughes@gmail.com', telefono: 2613369750, curso:'Reac',
    fechaIngreso: new Date('2014-11-05')},
    {nombre: 'Raquel', apellido: 'Roca', email: 'roca@gmail.com', telefono: 2613711984, curso:'Angular',
    fechaIngreso: new Date('2019-03-12')} 
  ];

  constructor() { }

  getStudents(){
    return this.listStudent.slice();
  }

  delStudents(index:number){
    this.listStudent.splice(index, 1)
  }

  addStudent(estudiante: Student){
    this.listStudent.unshift(estudiante)
  }

  getStudent (index: number){
    return this.listStudent[index]
  }

  editStudent(student: Student, idStudent: number){
    this.listStudent[idStudent].nombre = student.nombre;
    this.listStudent[idStudent].apellido = student.apellido;
    this.listStudent[idStudent].email = student.email;
    this.listStudent[idStudent].telefono = student.telefono;
    this.listStudent[idStudent].fechaIngreso = student.fechaIngreso;
    this.listStudent[idStudent].curso = student.curso;
  }
}

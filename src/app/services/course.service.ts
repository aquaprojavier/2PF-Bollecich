import { Injectable } from '@angular/core';
import { Course } from '../feature/courses/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  listCourses: Course[] = [
    { nombre: 'Angular', duracion: 50, fechaInicio: new Date('2022-09-01') },
    { nombre: 'React', duracion: 40, fechaInicio: new Date('2022-10-01') },
    { nombre: 'Vue', duracion: 40, fechaInicio: new Date('2022-09-15') },
    { nombre: 'Svelte', duracion: 35, fechaInicio: new Date('2022-09-21') },
  ]

  lista: string[];

  constructor() { }

  getCourses() {
    return this.listCourses.slice();
  }

  delCourse(index: number) {
    this.listCourses.splice(index, 1)
  }

  addCourse(curso: Course) {
    this.listCourses.unshift(curso)
  }

  getCourse(index: number) {
    return this.listCourses[index]
  }

  editCourse(course: Course, idCourse: number) {
    this.listCourses[idCourse].nombre = course.nombre;
    this.listCourses[idCourse].duracion = course.duracion;
    this.listCourses[idCourse].fechaInicio = course.fechaInicio;
  }
}

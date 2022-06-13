import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentComponent } from './list-student/list-student.component';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';




@NgModule({
  declarations: [
    ListStudentComponent,
    AddEditStudentComponent,
    CoursesComponent,
    AddEditCourseComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ListStudentComponent,
    AddEditStudentComponent
  ]
})
export class FeatureModule { }

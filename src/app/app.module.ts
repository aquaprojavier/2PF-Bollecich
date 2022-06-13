import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { SharedModule } from './shared/shared.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { ListStudentComponent } from './feature/list-student/list-student.component';
import { AddEditStudentComponent } from './feature/add-edit-student/add-edit-student.component';
import { CoursesComponent } from './feature/courses/courses.component';
import { AddEditCourseComponent } from './feature/add-edit-course/add-edit-course.component';


const appRoutes = [
  {path: '', component: ListStudentComponent},
  {path: 'estudiante', component: AddEditStudentComponent},
  {path: 'estudiante/:id', component: AddEditStudentComponent},
  {path: 'curso', component: CoursesComponent},
  {path: 'curso/add', component: AddEditCourseComponent},
  {path: 'curso/add/:id', component: AddEditCourseComponent},
  {path: '**', component: ListStudentComponent},
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FeatureModule,
    SharedModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

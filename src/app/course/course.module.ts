import { NgModule } from '@angular/core';
import { CourseEffects } from './store/course.effect'
import { CommonModule } from '@angular/common';
import { CourseService } from '../course/services/course.service'
import { StoreModule } from '@ngrx/store'
import { FormsModule } from '@angular/forms'
import { courseReducer } from './store/course.reducers'
import { EffectsModule } from '@ngrx/effects'




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('courses', courseReducer),
    EffectsModule.forFeature([CourseEffects])
  ],
  providers: [CourseModule]
})
export class CourseModule { }

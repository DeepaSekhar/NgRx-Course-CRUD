import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CreateCourseComponent } from '../app/course/components/create-course/create-course.component'
import { CourseListComponent } from '../app/course/components/course-list/course-list.component'
import { EffectsModule } from '@ngrx/effects'
import { CourseModule } from './course/course.module'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { CourseResolver } from './course/course.resolver'


const routes = [
  {
    path: 'courses',
    component: CourseListComponent,
    resolver: {
      courses: CourseResolver
    }
  },
  {
    path: 'create-course',
    component: CreateCourseComponent
  },
  {
    path: '**',
    redirectTo: 'courses'
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CourseModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),

  ],

  providers: [CourseResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

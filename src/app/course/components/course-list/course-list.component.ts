import { Component, OnInit } from '@angular/core';
import { getAllCourses } from '../../../course/store/course.selectors'
import { CourseActionTypes } from '../../../course/store/course.action'
import { AppState } from '../../../store/reducers'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Course } from '../../model/course.model'
import { CourseService } from '../../services/course.service'
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms'
import { Update } from '@ngrx/entity'
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses$: Observable<Course[]>
  courseToBeUpdated: Course;
  isUpdateActivated = false;

  constructor(private courseServe: CourseService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.courses$ = this.store.select(getAllCourses);
  }
  showUpdateForm(course: Course) {
    this.courseToBeUpdated = { ...course };
    this.isUpdateActivated = true;
  }
  deleteCourse(courseId: string) {
    this.store.dispatch(CourseActionTypes.deleteCourse({ courseId }))
  }
}

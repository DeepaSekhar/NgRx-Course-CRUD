import { Component, OnInit } from '@angular/core';
import { Course } from '../../../course/model/course.model'
import { createCourse } from '../../../course/store/course.action'
import * as uuid from 'uuid'
import { AppState } from '../../../store/reducers';
import { Store } from '@ngrx/store'
@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }


  onSubmit(submittedForm) {
    console.log(submittedForm.value)
    if (submittedForm.invalid) {
      return
    }
    const course: Course = {
      id: uuid.v4(),
      name: submittedForm.value.name,
      description: submittedForm.value.description
    }
    this.store.dispatch(createCourse({ course }))
  }
}

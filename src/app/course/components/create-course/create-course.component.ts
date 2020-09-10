import { Component, OnInit } from '@angular/core';
import { getAllCourses } from '../../../course/store/course.selectors'
import { CourseActionTypes } from '../../../course/store/course.action'
@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courseURL = "http://localhost:3000/course"
  constructor(private http: HttpClient) { }
  //get all the course
  getAllCouse(): Observable<Course[]> {
    return this.http.get<Course[]>(this.courseURL)
  }
  //create a course
  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.courseURL, course)
  }
  //delete a couse
  deleteCourse(courseId: string): Observable<Course> {
    return this.http.delete<Course>(this.courseURL + courseId)
  }
  //update a course
  updateCourse(courseId: number | string, updates: Partial<Course>) {
    return this.http.put(this.courseURL + courseId, updates)
  }
}
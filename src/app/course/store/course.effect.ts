import { CourseService } from '../services/course.service'
import { CourseActionTypes, coursesLoaded, updateCourse } from './course.action'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { concatMap, map, tap } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { createEffects } from '@ngrx/effects/src/effects_module'

@Injectable()
export class CourseEffects {
    constructor(private courseService: CourseService, private actions$: Actions, private router: Router) { }
    //load course

    loadCourses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CourseActionTypes.loadCourses),
            concatMap(() => this.courseService.getAllCouse()),
            map(courses => CourseActionTypes.coursesLoaded({ courses }))
        ))
    //create course

    createCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CourseActionTypes.createCourse),
            concatMap((action) => this.courseService.createCourse(action.course)),
            tap(() => this.router.navigateByUrl('/courses')),
        ),
        { dispatch: false }
    )
    //delete course
    deleteCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CourseActionTypes.deleteCourse),
            concatMap((action) => this.courseService.deleteCourse(action.courseId)),
        ),
        { dispatch: false }
    )

    //update course

    updateCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CourseActionTypes.updateCourse),
            concatMap((action) => this.courseService.updateCourse(action.update.id, action.update.changes))
        ),
        { dispatch: false }
    )
}
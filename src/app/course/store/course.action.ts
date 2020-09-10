import { Course } from '../model/course.model';
import { createAction, props } from '@ngrx/store'
import { Update } from '@ngrx/entity'

export const loadCourses = createAction(
    '[Course List]Load Courses via Service'
)
export const coursesLoaded = createAction(
    '[Courses Effect ] Courses Loaded Successfully',
    props<{ courses: Course[] }>()
)
//create
export const createCourse = createAction(
    '[Create Course Component ] Create Course',
    props<{ course: Course }>()
)
//delete
export const deleteCourse = createAction(
    '[Couse List Operation] Delete Course',
    props<{ courseId: string }>()
)
//update

export const updateCourse = createAction(
    '[Couse List Operation] Update Course',
    props<{ update: Update<Course> }>()
)
export const CourseActionTypes = {
    loadCourses,
    coursesLoaded,
    createCourse,
    deleteCourse,
    updateCourse
}
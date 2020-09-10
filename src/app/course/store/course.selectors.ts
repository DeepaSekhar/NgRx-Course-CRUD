import { CourseState } from '../store/course.reducers'
import { Course } from '../model/course.model'
import { createSelector, createFeatureSelector } from '@ngrx/store'
import { selectAll, selectIds } from '../store/course.reducers'

export const CourseFeatureSelector = createFeatureSelector<CourseState>('courses')

export const getAllCourses = createSelector(
    CourseFeatureSelector, selectAll
);
export const areCoursesLoaded = createSelector(
    CourseFeatureSelector,
    state => state.coursesLoaded
)
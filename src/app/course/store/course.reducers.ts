import { Course } from '../model/course.model'
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'
import { createReducer, on } from '@ngrx/store'
import { CourseActionTypes, coursesLoaded } from './course.action'

export interface CourseState extends EntityState<Course> {
    coursesLoaded: boolean
}
export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>()

export const initialState = adapter.getInitialState({
    coursesLoaded: false
})

export const courseReducer = createReducer(
    initialState,

    //read

    on(CourseActionTypes.coursesLoaded, (state, action) => {
        return adapter.addAll(
            action.courses,
            { ...state, coursesLoaded: true }

        )
    }),

    //create 

    on(CourseActionTypes.createCourse, (state, action) => {
        return adapter.addOne(action.courses, state)
    }),

    //delete

    on(CourseActionTypes.deleteCourse, (state, action) => {
        return adapter.removeOne(action.courseId, state)
    }),

    //update

    on(CourseActionTypes.updateCourse, (state, action) => {
        return adapter.updateOne(action.update, state)
    })
);
export const { selectAll, selectIds } = adapter.getSelectors()

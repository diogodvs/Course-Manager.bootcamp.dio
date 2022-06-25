import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: './course-list.component.html'

})

export class CourseListComponent implements OnInit {

  _courses: Course[] = [];

  _filterby!: string;

  filteredCourses: Course[] = [];

  constructor(private courseService: CourseService) {

  }

  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;

  }

  set filter(value: string) {
    this._filterby = value;

    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterby.toLocaleLowerCase()) > -1)
  }

  get filter() {
    return this._filterby;
  }

}

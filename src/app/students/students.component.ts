import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
  students = [
    { name: 'Camila', birthday: new Date(1994, 5, 17), courseStatus: true },
    { name: 'Martin', birthday: new Date(1998, 2, 15), courseStatus: false },
    { name: 'Gimena', birthday: new Date(1996, 9, 21), courseStatus: true },
    { name: 'Juan Pablo', birthday: new Date(1991, 9, 3), courseStatus: false },
    { name: 'Paulina', birthday: new Date(1999, 10, 19), courseStatus: false },
    { name: 'Gladys', birthday: new Date(2001, 1, 28), courseStatus: true },
    { name: 'Juan', birthday: new Date(1986, 2, 24), courseStatus: false },
    { name: 'Juana', birthday: new Date(1997, 5, 6), courseStatus: false },
    { name: 'Macarena', birthday: new Date(1993, 6, 10), courseStatus: true },
    { name: 'Lucía', birthday: new Date(2009, 9, 5), courseStatus: false },
    { name: 'Nicolas', birthday: new Date(1991, 12, 3), courseStatus: true },
  ];
}

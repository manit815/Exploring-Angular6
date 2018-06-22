import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  students = [{"name": "Student1", "description": "Student description"},
  {"name": "Student2", "description": "Student description"},
  {"name": "Student3", "description": "Student description"},
]

}

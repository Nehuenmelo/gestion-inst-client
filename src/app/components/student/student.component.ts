import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/core/models/student.model';
import { CalculateAgePipe } from 'src/app/core/pipes/calculateAgePipe';
import * as student1 from 'src/assets/mocks/students/student1.json';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  student: Student = student1 as Student;  // Inicializamos como un objeto vacío
	//age: Number = null;
  constructor() {
    console.log(this.student);
  }

  ngOnInit() {
  }
}

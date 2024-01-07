import { Component, Input } from '@angular/core';
import { Student } from 'src/app/core/models/student.model';
import { Mark } from 'src/app/core/models/student/mark.model';

@Component({
  selector: 'marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss']
})
export class MarksComponent {
	@Input() marks!: Mark[]; // Use the "!" non-null assertion operator

  constructor() {
    this.marks = {} as Mark[]; // or initialize it with appropriate values

  }

	ngOnInit(): void {
		console.log(this.marks)
	}
}

import { Component, Input } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { Asist } from 'src/app/core/models/student/asist.model';

@Component({
  selector: 'asists',
  templateUrl: './asists.component.html',
  styleUrls: ['./asists.component.scss']
})
export class AsistsComponent {
	@Input() asists: Asist[] = [];
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
	view: CalendarView = CalendarView.Month;
	activeDayIsOpen: boolean = true;
	locale: string = 'es';

  ngOnInit(): void {
    // Check if the 'asists' array is not empty before mapping
    if (this.asists && this.asists.length > 0) {
      // Map Asist objects to CalendarEvent objects
      this.events = this.asists.map(asist => ({
        start: new Date(asist.date),
        title: asist.attended ? 'Presente' : 'Ausente',
        color: asist.attended ? { primary: '#00FF00', secondary: '#66FF66' } : { primary: '#FF0000', secondary: '#FF6666' },
        // Other properties based on your requirements
      }));
    } else {
      // Handle the case where 'asists' array is empty
      console.warn('The asists array is empty.');
    }

    console.log(this.events);
  }

	closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}

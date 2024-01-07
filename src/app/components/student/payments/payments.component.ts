import { Component, Input } from '@angular/core';
import { Payment } from 'src/app/core/models/student/payment.model';

@Component({
  selector: 'payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {
	@Input() payments!: Payment[]; // Use the "!" non-null assertion operator

  constructor() {
    this.payments = {} as Payment[]; // or initialize it with appropriate values

  }

	ngOnInit(): void {
		console.log(this.payments)
	}
}

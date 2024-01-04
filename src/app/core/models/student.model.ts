import { Payment } from "./student/payment.model";
import { Mark } from "./student/mark.model";
import { Asist } from "./student/asist.model";
import { Occasion } from "./student/occasion.model";

export class Student{
  constructor(
  public category: String,
  public name: String,
	public dateOfBirth: Date,
	public subjects: Array<String>,
	public payments: Array<Payment>,
	public marks: Array<Mark>,
	public attendance: Array<Asist>,
	public events: Array<Occasion>
  ){}
}
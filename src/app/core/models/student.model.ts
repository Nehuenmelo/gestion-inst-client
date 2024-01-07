import { Payment } from "./student/payment.model";
import { Mark } from "./student/mark.model";
import { Asist } from "./student/asist.model";
import { Occasion } from "./student/occasion.model";

export interface Student {
  category: string,
  name: string,
  dateOfBirth: string,
  subjects: string[],
  payments: Payment[],
  marks: Mark[],
  attendance: Asist[],
  events: Occasion[]
}

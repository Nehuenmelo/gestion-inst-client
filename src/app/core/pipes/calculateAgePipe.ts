import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateAge'
})
export class CalculateAgePipe implements PipeTransform {
  transform(birthDate: string): number {
    const birthDateDate = new Date(birthDate);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDateDate.getFullYear();

    // Adjust the age if the birthday hasn't occurred yet this year
    if (
      currentDate.getMonth() < birthDateDate.getMonth() ||
      (currentDate.getMonth() === birthDateDate.getMonth() &&
        currentDate.getDate() < birthDateDate.getDate())
    ) {
      age--;
    }

    return age;
  }
}

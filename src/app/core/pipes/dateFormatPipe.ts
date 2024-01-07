import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    // Parse the input date and format it as DD/MM/YYYY
    const [year, month, day] = value.split('-');
    return `${day}/${month}/${year}`;
  }
}

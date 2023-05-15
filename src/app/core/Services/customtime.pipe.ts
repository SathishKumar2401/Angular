import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customtime'
})
export class CustomtimePipe implements PipeTransform {

  transform(value: string): string {
    const hours = parseInt(value.substring(0, 2));
    const minutes = parseInt(value.substring(3, 5));
    return `${hours}h ${minutes}m`;
  }

}

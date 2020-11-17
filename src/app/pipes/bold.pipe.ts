import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bold'
})
export class BoldPipe implements PipeTransform {
 transform(value: string): string {
    const regex = new RegExp(/[a-zA-Z0-9]/g, 'gi');
    return value.replace(regex, (match) => `<b>${match.replace(/\*/g,'')}</b>`);
  }
}

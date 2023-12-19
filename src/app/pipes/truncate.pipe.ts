import { Pipe, PipeTransform } from '@angular/core';
// This is a Angular pipe because of the @Pipe decorator, along with transforming the input with the PipeTransform interface.
@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(input: string, maxLength: number): string {
    if (input.length <= maxLength) return input;
    else return input.substring(0, maxLength) + '...';
  }
}

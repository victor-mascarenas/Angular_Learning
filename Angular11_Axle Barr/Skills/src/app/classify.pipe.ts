import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classify'
})
export class ClassifyPipe implements PipeTransform {

  transform(value: string): string {
    let classifiedValue: string;
    const valueInt = parseInt(value);
    if (valueInt < 1000)
      classifiedValue = `${valueInt}: Class A`
    else
      classifiedValue = `${valueInt}: Class B`
    return classifiedValue;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cut'
})
export class CutPipe implements PipeTransform{

    transform(value: string, length: number){
        return value.substr(0,length)+"...";

    }
}
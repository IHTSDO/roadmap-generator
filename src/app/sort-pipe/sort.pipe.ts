import { Injectable, Pipe, PipeTransform } from '@angular/core';

export type SortOrder = 'asc' | 'desc';

@Injectable()
@Pipe({
    name: 'sort',
})
export class SortPipe implements PipeTransform {
    transform(value: any[], sortOrder: SortOrder | string = 'asc', sortKey?: string): any {
        sortOrder = sortOrder && (sortOrder.toLowerCase() as any);

        if (!value || (sortOrder !== 'asc' && sortOrder !== 'desc')) return value;

        let numberArray = [];
        let stringArray = [];
        let dateArray = [];

        if (!sortKey) {
            numberArray = value.filter(item => typeof item === 'number').sort();
            stringArray = value.filter(item => typeof item === 'string').sort();
            dateArray = value.filter(item => item instanceof Date).sort();
        } else {
            numberArray = value.filter(item => typeof item[sortKey] === 'number').sort((a, b) => a[sortKey] - b[sortKey]);
            stringArray = value
                .filter(item => typeof item[sortKey] === 'string')
                .sort((a, b) => {
                    if (a[sortKey] < b[sortKey]) return -1;
                    else if (a[sortKey] > b[sortKey]) return 1;
                    else return 0;
                });
            dateArray = value
                .filter(item => item[sortKey] instanceof Date)
                .sort((a, b) => {
                    if (a[sortKey] < b[sortKey]) return -1;
                    else if (a[sortKey] > b[sortKey]) return 1;
                    else return 0;
                });
        }
        const sorted = numberArray.concat(stringArray).concat(dateArray);
        return sortOrder === 'asc' ? sorted : sorted.reverse();
    }
}

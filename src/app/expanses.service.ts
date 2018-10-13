import {Injectable} from '@angular/core';
import {MyBasePseudoservice} from './my-base-pseudoservice';
import {Expanses} from './models/Expanses';
import {Observable} from 'rxjs';
import { Expanse } from './structures/expanse';
import * as moment from 'moment';
import { format } from './structures/date-format';

@Injectable({
    providedIn: 'root'
})
export class ExpansesService extends MyBasePseudoservice {

    constructor() { super(new Expanses()); }

    getListByDate(date: Date): Observable<Expanse[]> {
        const dateString = moment(date).format(format);
        return this.my_instance.getListByDate(dateString);
    }

    getListByDaterange(dateRange: Date[]): Observable<Expanse[]> {
        const dateRangeStr: string[] = dateRange.map(el => moment(el).format(format));
        return this.my_instance.getListByDaterange(dateRangeStr);
    }
}

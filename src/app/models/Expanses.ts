import {BaseModel} from './base/BaseModel';
import {Observable} from 'rxjs';
import {Expanse} from '../structures/expanse';

export class Expanses extends BaseModel {
    constructor() { super('expanses'); }

    getListByDate(dateString: string): Observable<Expanse[]> {
        return this.storage.getListByDate(dateString);
    }

    getListByDaterange(dateRange: string[]): Observable<Expanse[]> {
        return this.storage.getListByDaterange(dateRange);
    }
}

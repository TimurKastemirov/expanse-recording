import {Injectable} from '@angular/core';
import { Categories } from './models/Categories';
import {MyBasePseudoservice} from './my-base-pseudoservice';
import {Observable} from 'rxjs';
import {Category} from './structures/category';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService extends MyBasePseudoservice {
    constructor() { super(new Categories()); }

    getList(): Observable<Category[]> {
        return super.getList();
    }
}

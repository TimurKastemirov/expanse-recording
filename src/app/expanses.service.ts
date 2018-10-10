import {Injectable} from '@angular/core';
import {MyBasePseudoservice} from './my-base-pseudoservice';
import {Expanses} from './models/Expanses';

@Injectable({
    providedIn: 'root'
})
export class ExpansesService extends MyBasePseudoservice {

    constructor() { super(new Expanses()); }
}

import {Storage} from './Storage';
import {Observable} from 'rxjs';
import {Category} from '../../structures/category';

export class BaseModel {
    storage;

    constructor (table) {
        this.storage = new Storage(table);
    }

    getList(): Observable<Category[]> {
        return this.storage.getList();
    }

    getItem(id: number = null): Observable<Category> {
        return this.storage.getItem(id);
    }

    saveItem(id: number, item: {}): Observable<number> {
        return this.storage.saveItem(id, item);
    }

    addItem(item): Observable<number> {
        return this.storage.addItem(item);
    }

    deleteItem(id): Observable<number> {
        return this.storage.deleteItem(id);
    }
}

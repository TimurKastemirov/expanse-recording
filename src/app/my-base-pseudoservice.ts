import {Observable} from 'rxjs';

export class MyBasePseudoservice {

    my_instance;
    constructor(my_instance) {
        this.my_instance = my_instance;
    }

    getList(): Observable<any> {
        return this.my_instance.getList();
    }

    getItem(id: number = null): Observable<any> {
        return this.my_instance.getItem(id);
    }

    saveItem(id: number = null, item): Observable<number> {
        return id ? this.my_instance.saveItem(id, item) : this.my_instance.addItem(item);
    }

    deleteItem(id: number): Observable<number> {
        return this.my_instance.deleteItem(id);
    }
}

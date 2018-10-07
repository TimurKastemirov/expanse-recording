import { Observable, of } from 'rxjs';

export class Storage {

    key;

    constructor(tableName) {
        this.init(tableName);
        this.key = tableName;
    }

    init(tableName) {
        if (!window.localStorage.getItem(tableName)) {
            const initialData = {
                list: [],
                lastId: 0
            };
            window.localStorage.setItem(tableName, this.mySetter(initialData));
        }
    }

    myGetter(s: string): any {
        return JSON.parse(s);
    }

    mySetter(a: any): string {
        return JSON.stringify(a);
    }

    getList(): Observable<any[]> {
        const data = this.myGetter(window.localStorage.getItem(this.key));
        const list = data.list;
        return of(list);
    }

    getItem(id: number|null = null): Observable<any> {
        if (id) {
            const list = this.myGetter(window.localStorage.getItem(this.key)).list;
            const item = list.filter((el) => el.id === id)[0];
            if (item) {
                return of(item);
            }
            // throw new Error('No item with id ' + id); // don't need error
        }
        return of({});
    }

    saveItem(id: number, item): Observable<number> {
        if (!id) {
            if (!item.id) {
                throw new Error('No id to save Item');
            } else {
                id = parseInt(item.id, 10);
            }
        }
        if (Object.keys(item).length === 0) {
            throw new Error('Item is empty, nothing to save');
        }
        if (item.id) { delete item.id; }
        const data = this.myGetter(window.localStorage.getItem(this.key));
        let list = data.list;
        list = list.map((el) => {
            // console.log(el, id);
            if (el.id === id) {
                return Object.assign({}, el, item);
            } else {
                return el;
            }
        });
        data.list = list;
        window.localStorage.setItem(this.key, this.mySetter(data));
        return of(id);
    }

    addItem(item): Observable<number> {
        if (Object.keys(item).length === 0) {
            throw new Error('Item is empty, nothing to save');
        }
        const data = this.myGetter(window.localStorage.getItem(this.key));
        const list = data.list;
        item.id = ++data.lastId;
        list.push(item);
        data.list = list;
        window.localStorage.setItem(this.key, this.mySetter(data));
        return of(item.id);
    }

    deleteItem(id: number): Observable<number> {
        if (!id) {
            throw new Error('No id for delete the Item');
        }
        const data = this.myGetter(window.localStorage.getItem(this.key));
        let list = data.list;
        const itemForDelete = list.filter((el) => el.id === id)[0];
        if (!itemForDelete) {
            throw new Error('No item with this id for delete');
        }
        list = list.filter(el => el.id !== id);
        data.list = list;
        window.localStorage.setItem(this.key, this.mySetter(data));
        return of(itemForDelete.id);
    }
}

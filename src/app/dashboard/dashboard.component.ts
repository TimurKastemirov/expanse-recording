import {Component, OnInit} from '@angular/core';
import {Expanse} from '../structures/expanse';
import {ExpansesService} from '../expanses.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    list: Expanse[] = [];
    dateRange: Date[];

    constructor(
        private expanseService: ExpansesService
    ) {}

    ngOnInit() {}

    calculateTotal(): number {
        return this.list.reduce((accum, el) => accum + el.amount, 0);
    }

    rangeHiddenHandler() {
        this.expanseService.getListByDaterange(this.dateRange).subscribe(
            list => {
                this.list = list;
                console.log(list);
            }
        ).unsubscribe();
    }

}

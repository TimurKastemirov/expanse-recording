import {Component, OnInit} from '@angular/core';
import {Expanse} from '../structures/expanse';
import {ExpansesService} from '../expanses.service';
import * as moment from 'moment';

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

    ngOnInit() {
        const startOfMonth = moment().startOf('month').toDate();
        // const endOfMonth   = moment().endOf('month').toDate();
        const today   = moment().toDate();
        this.dateRange = [startOfMonth, today];
        this.getListByDateRange();
    }

    calculateTotal(): number {
        return this.list.reduce((accum, el) => accum + el.amount, 0);
    }

    rangeHiddenHandler() {
        this.getListByDateRange();
    }

    getListByDateRange() {
        if (this.dateRange && this.dateRange.length === 2) {
            this.expanseService.getListByDaterange(this.dateRange).subscribe(
                list => {
                    this.list = list;
                }
            ).unsubscribe();
        }
    }

}

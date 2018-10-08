import {Component, OnInit} from '@angular/core';
import { format } from '../structures/date-format';

@Component({
    selector: 'app-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

    bsValue = new Date();
    bsConfig = { dateInputFormat: format };

    constructor() {}

    ngOnInit() {}

}

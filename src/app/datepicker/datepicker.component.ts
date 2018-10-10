import {Component, OnInit, Input} from '@angular/core';
import { format } from '../structures/date-format';

@Component({
    selector: 'app-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
    @Input() date: Date;

    bsConfig = { dateInputFormat: format };

    constructor() {}

    ngOnInit() {}

    onValueChange(value: Date): void {
        console.log(value);
    }

}

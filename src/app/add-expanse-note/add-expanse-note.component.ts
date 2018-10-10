import {Component, OnInit} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-add-expanse-note',
    templateUrl: './add-expanse-note.component.html',
    styleUrls: ['./add-expanse-note.component.css']
})
export class AddExpanseNoteComponent implements OnInit {
    title: string;
    item;
    reason: boolean;

    constructor(public bsModalRef: BsModalRef) {}

    ngOnInit() {}

    save() {
        this.reason = true;
        this.bsModalRef.hide();
    }

    close() {
        this.reason = false;
        this.bsModalRef.hide();
    }

}

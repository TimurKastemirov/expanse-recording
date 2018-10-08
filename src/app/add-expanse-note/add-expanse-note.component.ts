import {Component, OnInit} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-add-expanse-note',
    templateUrl: './add-expanse-note.component.html',
    styleUrls: ['./add-expanse-note.component.css']
})
export class AddExpanseNoteComponent implements OnInit {
    title: string;

    constructor(public bsModalRef: BsModalRef) {}

    ngOnInit() {}

    close() {
        this.bsModalRef.hide();
    }

}

import {Component, OnInit} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AddExpanseNoteComponent } from '../add-expanse-note/add-expanse-note.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
    selector: 'app-expanse-notes',
    templateUrl: './expanse-notes.component.html',
    styleUrls: ['./expanse-notes.component.css']
})
export class ExpanseNotesComponent implements OnInit {
    bsModalRef: BsModalRef;

    constructor(private modalService: BsModalService) {}

    ngOnInit() {}

    editNote(id: number) {
        const initialState = {
            title: id ? 'Edit expanse note # ' + id : 'Add expanse note',
        };
        this.bsModalRef = this.modalService.show(AddExpanseNoteComponent, {initialState});
    }

    removeNote(id: number) {
        if (!id) {
            throw new Error('No id set for remove');
        }
        const config = {
            class: 'modal-md',
            initialState: {
                message: 'Are You sure to remove note #' + id + ' ?'
            }
        };
        this.bsModalRef = this.modalService.show(ConfirmModalComponent, config);
    }
}

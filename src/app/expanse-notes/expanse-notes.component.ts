import {Component, OnInit} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AddExpanseNoteComponent } from '../add-expanse-note/add-expanse-note.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { ExpansesService } from '../expanses.service';
import {Expanse} from '../structures/expanse';
import * as moment from 'moment';
import { format } from '../structures/date-format';

@Component({
    selector: 'app-expanse-notes',
    templateUrl: './expanse-notes.component.html',
    styleUrls: ['./expanse-notes.component.css']
})
export class ExpanseNotesComponent implements OnInit {
    bsModalRef: BsModalRef;
    date = new Date();
    bsConfig = { dateInputFormat: format };
    list: Expanse[];

    constructor(
        private modalService: BsModalService,
        private expanseService: ExpansesService
    ) {}

    ngOnInit() {
        this.getListByDate();
    }

    getListByDate() {
        this.expanseService.getListByDate(this.date)
            .subscribe( list => {this.list = list; })
            .unsubscribe();
    }

    editNote(id: number) {
        this.expanseService.getItem(id).subscribe( item => {
            const initialState = {
                title: !!id ? 'Edit expanse note # ' + id : 'Add expanse note',
                item: !!id ? item : {date: moment(this.date).format(format)}
            };
            this.bsModalRef = this.modalService.show(AddExpanseNoteComponent, {initialState});
        }).unsubscribe();

        const a = this.modalService.onHidden.subscribe(() => {
            const item = this.bsModalRef.content.item;
            const reason = this.bsModalRef.content.reason;
            if (reason) {
                this.expanseService.saveItem(id, item).subscribe( () => {
                    // can be argument for savedID
                    this.getListByDate();
                }).unsubscribe();
            }
            a.unsubscribe();
        });
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

        const a = this.modalService.onHidden.subscribe( () => {
            const result = this.bsModalRef.content.result;
            if (result) {
                this.expanseService.deleteItem(id).subscribe( () => {
                    // can be argument for deletedID
                    this.getListByDate();
                }).unsubscribe();
            }
            a.unsubscribe();
        });
    }

    onValueChange(value: Date) {
        if (value) {
            this.date = value;
        }
        this.getListByDate();
    }
}

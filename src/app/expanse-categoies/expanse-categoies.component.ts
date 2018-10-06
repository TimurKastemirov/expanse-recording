import {Component, OnInit} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AddCategoryModalComponent } from '../add-category-modal/add-category-modal.component';

@Component({
    selector: 'app-expanse-categoies',
    templateUrl: './expanse-categoies.component.html',
    styleUrls: ['./expanse-categoies.component.css']
})
export class ExpanseCategoiesComponent implements OnInit {

    bsModalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}

    ngOnInit() {
    }

    addCategory() {
        const initialState = {
            list: [
                'Open a modal with component',
                'Pass your data',
                'Do something else',
                '...'
            ],
            title: 'Modal with component'
        };
        this.bsModalRef = this.modalService.show(AddCategoryModalComponent, {initialState});
        this.bsModalRef.content.closeBtnName = 'Close';
    }

}

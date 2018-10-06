import {Component, OnInit} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AddCategoryModalComponent } from '../add-category-modal/add-category-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

import { Category } from '../category';
import { CATEGORIES } from '../mock-categories';

@Component({
    selector: 'app-expanse-categoies',
    templateUrl: './expanse-categoies.component.html',
    styleUrls: ['./expanse-categoies.component.css']
})
export class ExpanseCategoiesComponent implements OnInit {

    list: Category[] = CATEGORIES;
    bsModalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}

    ngOnInit() {}

    editCategory(id) {
        const initialState = {
            title: id ? 'Edit category #' + id : 'Add new category'
        };
        this.bsModalRef = this.modalService.show(AddCategoryModalComponent, {initialState});
        this.bsModalRef.content.closeBtnName = 'Close';
    }

    removeCategory(id) {
        const config = {
            class: 'modal-md',
            initialState: {
                message: 'Are You sure to remove category #' + id + ' ?'
            }
        };
        this.bsModalRef = this.modalService.show(ConfirmModalComponent, config);
    }

}

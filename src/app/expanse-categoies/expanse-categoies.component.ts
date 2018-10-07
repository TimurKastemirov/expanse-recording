import {Component, OnInit} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AddCategoryModalComponent } from '../add-category-modal/add-category-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

import { Category } from '../structures/category';
import { CategoriesService } from '../categories.service';

@Component({
    selector: 'app-expanse-categoies',
    templateUrl: './expanse-categoies.component.html',
    styleUrls: ['./expanse-categoies.component.css']
})
export class ExpanseCategoiesComponent implements OnInit {

    list: Category[];
    bsModalRef: BsModalRef;
    constructor(
        private modalService: BsModalService,
        private categoriesService: CategoriesService
    ) {}

    ngOnInit() {
        this.getList();
    }

    getList(): void {
        this.categoriesService.getList()
            .subscribe(categoriesList => this.list = categoriesList);
    }

    editCategory(id) {
        // console.log('call edit category');
        this.categoriesService.getItem(id)
            .subscribe(categoryItem => {
                // console.log(categoryItem);
                const initialState = {
                    title: id ? 'Edit category #' + id : 'Add new category',
                    item: categoryItem || {}
                };
                this.bsModalRef = this.modalService.show(AddCategoryModalComponent, {initialState});
            }).unsubscribe();

        const a = this.modalService.onHidden.subscribe(() => {
            // console.log('call onHidden');
            const item = this.bsModalRef.content.item;
            const reason = this.bsModalRef.content.reason;
            if (reason) {
                this.categoriesService.saveItem(id, item)
                    .subscribe((savedId) => {
                        this.getList();
                    }).unsubscribe();
            }
            a.unsubscribe();
        });
    }

    removeCategory(id) {
        const config = {
            class: 'modal-md',
            initialState: {
                message: 'Are You sure to remove category #' + id + ' ?'
            }
        };
        this.bsModalRef = this.modalService.show(ConfirmModalComponent, config);
        const a = this.modalService.onHidden.subscribe(() => {
            const result = this.bsModalRef.content.result;
            if (result) {
                this.categoriesService.deleteItem(id)
                    .subscribe((deletedId) => {
                        this.getList();
                    }).unsubscribe();
            }
            a.unsubscribe();
        });
    }

}

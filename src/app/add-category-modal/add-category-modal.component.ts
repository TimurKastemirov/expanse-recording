import {Component, OnInit} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
    selector: 'app-add-category-modal',
    templateUrl: './add-category-modal.component.html',
    styleUrls: ['./add-category-modal.component.css']
})
export class AddCategoryModalComponent implements OnInit {

    title: string;
    result: boolean;

    constructor(public bsModalRef: BsModalRef) {}

    ngOnInit() {}

    save() {
        this.result = true;
        this.bsModalRef.hide();
    }
}

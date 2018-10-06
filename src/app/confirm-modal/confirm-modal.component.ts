import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
    selector: 'app-confirm-modal',
    templateUrl: './confirm-modal.component.html',
    styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

    message: string;
    result: boolean;
    constructor(public bsModalRef: BsModalRef) {}

    ngOnInit() {}

    confirm(): void {
        this.result = true;
        this.bsModalRef.hide();
    }

    decline(): void {
        this.result = false;
        this.bsModalRef.hide();
    }

}

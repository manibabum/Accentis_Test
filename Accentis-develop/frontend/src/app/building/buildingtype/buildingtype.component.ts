import { Component, ViewChild, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { process, State } from '@progress/kendo-data-query';
import { GridComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { BuildingType } from '../../shared/data/TypeGebouw';
import * as alertFunctions from '../../shared/data/sweet-alerts';
import swal from 'sweetalert2';

export class NgbdModalContent {
    @Input() name;
    constructor(public activeModal: NgbActiveModal) { }
}

@Component({
    selector: 'app-buildingtype',
    templateUrl: './buildingtype.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./buildingtype.component.scss']
})
export class BuildingtypeComponent {

    regularForm: FormGroup;
    closeResult: string;

    @ViewChild('f') floatingLabelForm: NgForm;
    @ViewChild('vform') validationForm: FormGroup;

    constructor(private modalService: NgbModal) {
    }

    ngOnInit() {
        this.regularForm = new FormGroup({
            'eventRegInput1': new FormControl(null, [Validators.required])
        }, { updateOn: 'blur' });
    }

    //modal form submit
    onReactiveFormSubmit() {
        this.regularForm.reset();
    }

    // Open default modal
    open(content, e) {
        e.preventDefault();
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    // This function is used in open
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
    
    //Initial filter descriptor
    public state: State = {
        skip: 0,
        take: 5,
        filter: {
            logic: 'or',
            filters: [{ field: 'TypeName', operator: 'isnotnull', value: '' }]
        }
    };

    //fill kendo grid
    public gridData: GridDataResult = process(BuildingType, this.state);

    // fliter data 
    public dataStateChange(state: DataStateChangeEvent): void {

        this.state = state;
        this.gridData = process(BuildingType, this.state);
    }

    confirmCancelButton() {
        // sweet alert confrim cancel button
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success btn-raised mr-5',
            cancelButtonClass: 'btn btn-danger btn-raised',
            buttonsStyling: false
        }).then(function (dismiss) {

            if (dismiss.value) {
                swal(
                    'Deleted!',
                    'Your imaginary file has been deleted.',
                    'success'
                )
            } else {
                swal(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }
}

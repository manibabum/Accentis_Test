import { Component, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { process, State } from '@progress/kendo-data-query';
import { RoofComponent } from '../../models/settings.model';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { RoofcomponentService } from '../../services/roofcomponent.service';


export class NgbdModalContent {
    @Input() name;
    constructor(public activeModal: NgbActiveModal) { }
}

@Component({
    selector: 'app-roof-components',
    templateUrl: './roof-components.component.html',
    styleUrls: ['./roof-components.component.scss']
})
export class RoofComponentsComponent {
    regularForm: FormGroup;
    [x: string]: any;
    closeResult: string;

    constructor(private modalService: NgbModal, private roofcomponentService: RoofcomponentService, public toastr: ToastsManager) {
    }
    ngOnInit() {
        this.regularForm = new FormGroup({
            'Rcid': new FormControl(null, null),
            'Description': new FormControl(null, [Validators.required]),
            'Unit': new FormControl(null, [Validators.required]),
            'CreatedDate': new FormControl(null, null)
        }, { updateOn: 'change' });
        this.getGridData();
    }

    onReactiveFormSubmit(form: NgForm) {
        this.show = true;
        this.buttonDisabled = true;
        if (this.regularForm.controls['Rcid'].value == null || this.regularForm.controls['Rcid'].value == '') {
            this.roofcomponentService.addRoofComponent(form.value)
                .subscribe(data => {
                    this.show = false;
                    this.buttonDisabled = false;
                    if (data != null) {
                        this.regularForm.reset();
                        if (data['Success'] == true) {
                            this.toastr.success(data['Message'], 'Success!');
                        } else {
                            this.toastr.error(data['Message'], 'Inconceivable!');
                        }
                        $('#btnClose').trigger('click');
                        this.getGridData();
                    }
                },
                    (err: Error) => {
                        this.show = false;
                        this.buttonDisabled = false;
                        this.toastr.error(err.message, 'Inconceivable!');
                    }
                );
        } else {
            this.roofcomponentService.updateRoofComponent(form.value)
                .subscribe(data => {
                    this.show = false;
                    this.buttonDisabled = false;
                    if (data != null) {
                        this.regularForm.reset();
                        if (data['Success'] == true) {
                            this.toastr.success(data['Message'], 'Success!');
                        } else {
                            this.toastr.error(data['Message'], 'Inconceivable!');
                        }
                        $('#btnClose').trigger('click');
                        this.getGridData();
                    }
                },
                    (err: Error) => {
                        this.show = false;
                        this.buttonDisabled = false;
                        this.toastr.error(err.message, 'Inconceivable!');
                    }
                );
        }

    }

    public getGridData() {
        this.roofcomponentService.getRoofComponentList(this.state)
            .subscribe((data: any[]) => {
                this.gridData = process(data['data'], this.state);
                this.gridData.total=data["total"];
            })
    }

    //Initial filter descriptor
    public state: State = {
        skip: 0,
        take: 5,
    };

    //fill kendo grid
    public gridData: GridDataResult;

    // fliter data 
    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.roofcomponentService.getRoofComponentList(this.state)
            .subscribe((data: any[]) => {
                this.gridData.data = data['data'];
                this.gridData.total=data["total"];
            })
    }

    // Open default modal
    open(content, e) {
        this.Pagetitle = "Add Roof Component";
        e.preventDefault();
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason, content, e)}`;
        });
    }

    openEdit(content, e, Controls) {
        this.Pagetitle = "Edit Roof Component";
        this.regularForm = new FormGroup({
            'Rcid': new FormControl(Controls.Rcid, [Validators.required]),
            'Description': new FormControl(Controls.Description, [Validators.required]),
            'Unit': new FormControl(Controls.Unit, [Validators.required]),
            'CreatedDate': new FormControl(Controls.CreatedDate, null)
        }, { updateOn: 'change' });
        e.preventDefault();
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason, content, e)}`;
        });
    }

    private getDismissReason(reason: any, content, e): string {
        if (reason === ModalDismissReasons.ESC) {
            e.preventDefault();
            this.modalService.open(content).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason, content, e)}`;
            });
            //return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            e.preventDefault();
            this.modalService.open(content).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason, content, e)}`;
            });
            //return 'by clicking on a backdrop';
        } else {
            this.regularForm.reset();
            return `with: ${reason}`;
        }
    }


    public delete(Id: number) {
        this.show = true;
        this.buttonDisabled = true;
        this.roofcomponentService.deleteRoofComponent(Id)
            .subscribe(detail => {
                this.show = false;
                this.buttonDisabled = false;
                $('#btnClose').trigger('click');
                if (detail['Success'] = true) {
                    this.toastr.success('Your data has been deleted.', 'Success!');
                    this.getGridData();
                }
                else {
                    this.toastr.error('Your data has not been deleted', 'Inconceivable!');
                }
            }, error => {
                this.show = false;
                this.buttonDisabled = false;
                this.toastr.error('Somthing goes wrong! :)', 'error!');
            });
    }

    public confirmCancelButton(content, e, Id: number) {
        this.rcid = Id;
        e.preventDefault();
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason, content, e)}`;
        });
    }

}

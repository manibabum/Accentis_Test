
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { process, State } from '@progress/kendo-data-query';
import { DesignationService } from '../../services/designation.service';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';

export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}


@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss']
})
export class DesignationComponent implements OnInit {
  [x: string]: any;
  regularForm: FormGroup;
  closeResult: string;
  constructor(private modalService: NgbModal, private designationService: DesignationService, public toastr: ToastsManager) {
  }

  ngOnInit() {
    this.regularForm = new FormGroup({
      'DesignationID': new FormControl(null, null),
      'DesignationName': new FormControl(null, [Validators.required]),
      'CreatedDate': new FormControl(null, null)
    }, { updateOn: 'change' });
    this.getGridData();
  }

  onReactiveFormSubmit(form: NgForm) {
    this.show = true;
    this.buttonDisabled = true;
    if (this.regularForm.controls['DesignationID'].value == null || this.regularForm.controls['DesignationID'].value == '') {
      this.designationService.addDesignation(form.value)
        .subscribe(data => {
          this.show = false;
          this.buttonDisabled = false;
          if (data != null) {
            this.regularForm.reset();
            if (data['success'] == true) {
              this.toastr.success(data['message'], 'Success!');
            }else{
              this.toastr.error(data['message'], 'Inconceivable!');
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
      this.designationService.updateDesignation(form.value)
        .subscribe(data => {
          this.show = false;
          this.buttonDisabled = false;
          if (data != null) {
            this.regularForm.reset();
            if (data['success'] == true) {
            this.toastr.success(data['message'], 'Success!');
            }else{
              this.toastr.error(data['message'], 'Inconceivable!');
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
    this.designationService.getSDesignationList(this.state)
      .subscribe((data: any[]) => {
        this.gridData = process(data['data'], this.state);
        this.gridData.total = data["total"];
      })
  }
  // Open default modal
  open(content, e) {
    this.Pagetitle = "Add Designation";
    e.preventDefault();
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason, content, e)}`;
    });
  }

  openEdit(content, e, Controls) {
    this.Pagetitle = "Edit Designation";
    this.regularForm = new FormGroup({
      'DesignationID': new FormControl(Controls.designationId, null),
      'DesignationName': new FormControl(Controls.designationName, [Validators.required]),
      'CreatedDate': new FormControl(Controls.createdDate, null)
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

  //Initial filter descriptor
  public state: State = {
    skip: 0,
    take: 5,
  };

  public gridData: GridDataResult;
  // fliter data 
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.designationService.getSDesignationList(this.state)
    .subscribe((data: any[]) => {
      this.gridData.data =data['data'];
      this.gridData.total = data["total"];
    })
  }

  public delete(Id: number) {
    
    this.show = true;
    this.buttonDisabled = true;
    this.designationService.deleteDesignation(Id)
      .subscribe(detail => {
        this.show = false;
        this.buttonDisabled = false;
        $('#btncloseac').trigger('click');
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
    this.designationId = Id;
    e.preventDefault();
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason, content, e)}`;
    });
  }
 
}

import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { process, State } from '@progress/kendo-data-query';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { RoleService } from '../../services/role.service';


export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  [x: string]: any;
  regularForm: FormGroup;
  closeResult: string;

  constructor(private modalService: NgbModal, private roleService: RoleService, public toastr: ToastsManager) {
  }

  ngOnInit() {
    this.regularForm = new FormGroup({
      'Id': new FormControl(null, null),
      'Name': new FormControl(null, [Validators.required])
    }, { updateOn: 'change' });
    this.getGridData();
  }

  onReactiveFormSubmit(form: NgForm) {
    this.show = true;
    this.buttonDisabled = true;
    if (this.regularForm.controls['Id'].value == null || this.regularForm.controls['Id'].value == '') {
      this.roleService.addRole(form.value)
        .subscribe(data => {
          this.show = false;
          this.buttonDisabled = false;
          if (data != null) {
            this.regularForm.reset();
            if (data['success'] == true) {
              this.toastr.success(data['message'], 'Success!');
            } else {
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
      this.roleService.updateRole(form.value)
        .subscribe(data => {
          this.show = false;
          this.buttonDisabled = false;
          if (data != null) {
            this.regularForm.reset();
            if (data['success'] == true) {
              this.toastr.success(data['message'], 'Success!');
            } else {
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
    this.roleService.getRoleList(this.state)
      .subscribe((data: any[]) => {
        this.gridData = process(data['data'], this.state);
        this.gridData.total = data["total"];
      })
  }

  open(content, e) {
    this.Pagetitle = "Add Role";
    e.preventDefault();
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason, content, e)}`;
    });
  }

  openEdit(content, e, Controls) {
    this.Pagetitle = "Edit Role";
    this.regularForm = new FormGroup({
      'Id': new FormControl(Controls.id, null),
      'Name': new FormControl(Controls.name, [Validators.required])
    }, { updateOn: 'change' });
    e.preventDefault();
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason, content, e)}`;
    });
  }
  // This function is used in open
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

  //fill kendo grid
  public gridData: GridDataResult;

  // fliter data 
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.roleService.getRoleList(this.state)
      .subscribe((data: any[]) => {
        this.gridData.data =data['data'];
        this.gridData.total = data["total"];
      })
  }


}

import { Component, ViewEncapsulation, Input, OnInit, } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { process, State } from '@progress/kendo-data-query';
import { UserService } from '../../services/user.service';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { RoleService } from '../../services/role.service';
import { DesignationService } from '../../services/designation.service';



export class NgbdModalContent {
    @Input() name;
    constructor(public activeModal: NgbActiveModal) { }
}

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class UsersComponent implements OnInit {

    //----------For validation--------------------------
    regularForm: FormGroup;
    ChangeregularForm: FormGroup;
    closeResult: string;
    [x: string]: any;


    constructor(private modalService: NgbModal, private userService: UserService, public toastr: ToastsManager, private roleService: RoleService, private designationService: DesignationService) {
    }

    ngOnInit() {
        this.regularForm = new FormGroup({
            'Id': new FormControl(null, null),
            'RoleID': new FormControl(null, [Validators.required]),
            'FirstName': new FormControl(null, [Validators.required]),
            'MiddelName': new FormControl(null, [Validators.required]),
            'LastName': new FormControl(null, [Validators.required]),
            'Email': new FormControl(null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
            'Password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
            'Contact': new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
            'Address': new FormControl(null, [Validators.required]),
            'DesignationID': new FormControl(null, [Validators.required]),
            'CreatedDate': new FormControl(null, null),
            'SecurityStamp': new FormControl(null, null),
            'RoleName': new FormControl(null, null)
        }, { updateOn: 'change' });

        this.ChangeregularForm = new FormGroup({
            'NewPwd': new FormControl(null, [Validators.required]),
            'ConfirmPwd': new FormControl(null, [Validators.required]),
        }, { updateOn: 'change' });

        this.getGridData();
        this.getRoledropdowndetail();
        this.getDesignationdropdowndetail();
    }


    //-------------------------------------------------------
    public Rolestate: State = {
        skip: 0,
        take: null,
    };

    public Designationstate: State = {
        skip: 0,
        take: null,
    };

    getRoledropdowndetail() {
        this.roleService.getRoleList(this.Rolestate)
            .subscribe((data: any[]) => {
                this.RoleList = data['data'];
            })
    }

    getDesignationdropdowndetail() {
        this.designationService.getSDesignationList(this.Designationstate)
            .subscribe((data: any[]) => {
                this.DesignationList = data['data'];
            })
    }


    onReactiveFormSubmit(form: NgForm) {
        this.show = true;
        this.buttonDisabled = true;
        if (this.regularForm.controls['Id'].value == null || this.regularForm.controls['Id'].value == '') {
            form.value.RoleName = this.RoleNamebyID;
            this.userService.addUser(form.value)
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
            this.userService.updateUser(form.value)
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
        this.userService.getUserList(this.state)
            .subscribe((data: any[]) => {
                this.gridData = process(data['data'], this.state);
                this.gridData.total=data["total"];
            })
    }

    ChangeonReactiveFormSubmit() {
        this.ChangeregularForm.reset();
    }

    open(content, e) {
        this.getRoledropdowndetail();
        this.getDesignationdropdowndetail();
        this.Pagetitle = "Add User";
        this.showDiv=true;
        e.preventDefault();
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason, content, e)}`;
        });
    }

    openEdit(content, e, Controls) {
        this.getRoledropdowndetail();
        this.getDesignationdropdowndetail();
        this.Pagetitle = "Edit User";
        this.showDiv=false;
        this.regularForm = new FormGroup({
            'Id': new FormControl(Controls.id, null),
            'RoleID': new FormControl(Controls.roleId, [Validators.required]),
            'FirstName': new FormControl(Controls.firstName, [Validators.required]),
            'MiddelName': new FormControl(Controls.middelName, [Validators.required]),
            'LastName': new FormControl(Controls.lastName, [Validators.required]),
            'Email': new FormControl(Controls.email, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
            'Password': new FormControl(Controls.passwordHash, [Validators.required, Validators.minLength(6)]),
            'Contact': new FormControl(Controls.contact, [Validators.required, Validators.pattern('[0-9]*')]),
            'Address': new FormControl(Controls.address, [Validators.required]),
            'DesignationID': new FormControl(Controls.designationId, [Validators.required]),
            'CreatedDate': new FormControl(Controls.createdDate, null),
            'SecurityStamp': new FormControl(Controls.securityStamp, null),
            'RoleName': new FormControl(Controls.role.name, null)
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

    // change password pop up modal
    Changeopen(content, e) {
        this.Pagetitle = "Add Roof Component";
        e.preventDefault();
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason, content, e)}`;
        });
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
        this.userService.getUserList(this.state)
            .subscribe((data: any[]) => {
                this.gridData.data =data['data'];
                this.gridData.total=data["total"];
            })
    }


    selectchange(args) {
        this.RoleNamebyID = args.target.options[args.target.selectedIndex].text;
    }

    public delete(Id: number) {
        this.show = true;
        this.buttonDisabled = true;
        this.userService.deleteUser(Id)
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
            this.toastr.error('Somthing goes wrong!', 'error!');
          });
      }
    
      public confirmCancelButton(content, e, id: number) {
        this.id = id;
        e.preventDefault();
        this.modalService.open(content).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason, content, e)}`;
        });
      }

}

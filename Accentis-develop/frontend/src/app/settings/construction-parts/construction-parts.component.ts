import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { process, State } from '@progress/kendo-data-query';
import { ConstructionpartsService } from '../../services/constructionparts.service';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';



export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}


@Component({
  selector: 'app-construction-parts',
  templateUrl: './construction-parts.component.html',
  styleUrls: ['./construction-parts.component.scss']
})
export class ConstructionPartsComponent {
  [x: string]: any;
  regularForm: FormGroup;
  closeResult: string;

  constructor(private modalService: NgbModal, private constructionService: ConstructionpartsService, public toastr: ToastsManager) {

  }
  ngOnInit() {
    this.regularForm = new FormGroup({
      'Cpid': new FormControl(null, null),
      'LayerType': new FormControl(null, [Validators.required]),
      'Description': new FormControl(null, [Validators.required]),
      'Lamda': new FormControl(null, [Validators.required]),
      'CreatedDate': new FormControl(null, null)
    }, { updateOn: 'change' });
    this.getGridData();
  }

  onReactiveFormSubmit(form: NgForm) {
    this.show = true;
    this.buttonDisabled = true;
    if (this.regularForm.controls['Cpid'].value == null || this.regularForm.controls['Cpid'].value == '') {
      this.constructionService.addConstructionPart(form.value)
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
      this.constructionService.updateConstructionPart(form.value)
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
    this.constructionService.getConstructionPartList(this.state)
      .subscribe((data: any[]) => {
        this.gridData = process(data['data'], this.state);
        this.gridData.total = data["total"];
      })
  }

  // Open default modal
  open(content, e) {
    this.Pagetitle = "Add Construction Part";
    e.preventDefault();
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason, content, e)}`;
    });
  }

  openEdit(content, e, Controls) {
    this.Pagetitle = "Edit Construction Part";
    this.regularForm = new FormGroup({
      'Cpid': new FormControl(Controls.cpid, [Validators.required]),
      'LayerType': new FormControl(Controls.layerType, [Validators.required]),
      'Description': new FormControl(Controls.description, [Validators.required]),
      'Lamda': new FormControl(Controls.lamda, [Validators.required]),
      'CreatedDate': new FormControl(Controls.createdDate, [Validators.required])
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

  //fill kendo grid
  public gridData: GridDataResult;

  // fliter data 
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.constructionService.getConstructionPartList(this.state)
      .subscribe((data: any[]) => {
        this.gridData.data =data['data'];
        this.gridData.total = data["total"];
      })
  }

  public delete(Id: number) {

    this.show = true;
    this.buttonDisabled = true;
    this.constructionService.deleteConstructionPart(Id)
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
    this.cpid = Id;
    e.preventDefault();
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason, content, e)}`;
    });
  }
}

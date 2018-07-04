import { Component, OnInit, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { process, State } from '@progress/kendo-data-query';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import * as alertFunctions from '../../shared/data/sweet-alerts';
import swal from 'sweetalert2';

import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { JobOrderContarct } from '../../shared/data/Jobordercontract';
import { JobOrderTaken } from '../../shared/data/Jobordertaken';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}

@Component({
  selector: 'app-job-order-details',
  templateUrl: './job-order-details.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./job-order-details.component.scss']
})
export class JobOrderDetailsComponent implements OnInit {
  constructor(private modalService: NgbModal) {

  }
  closeResult: string;
  //Variable Declaration
  currentPage: string = "JobOrderContractTaken"
  @ViewChild('f') floatingLabelForm: NgForm;
  @ViewChild('vform') validationForm: FormGroup;
  ModifyregularForm: FormGroup;
  showPage(page: string) {
    this.currentPage = page;
  }

  ModifyonReactiveFormSubmit() {
    this.ModifyregularForm.reset();
  }

  // Open default modal
  Modifyopen(content, e) {
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
  ngOnInit() {
    // Horizontal Timeline js for user timeline
    $.getScript('./assets/js/vertical-timeline.js');

    this.ModifyregularForm = new FormGroup({
      'ModifyContractnummer': new FormControl(null, [Validators.required]),
      'ModifyKlantreferentie': new FormControl(null, [Validators.required]),
      'ModifyMedewerker': new FormControl(null, [Validators.required])
    }, { updateOn: 'blur' });
  }

  t: any;
  currentJustify = 'start';
  currentOrientation = 'horizontal';

  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'bar') {
      $event.preventDefault();
    }
  };

  //------------------table 1 start--------------------------
  //Initial filter descriptor
  public state: State = {
    skip: 0,
    take: 5
    ,
    filter: {
      logic: 'or',
      filters: [{ field: 'Omschrijving', operator: 'isnotnull', value: '' }]
    }
  };

  //fill kendo grid
  public gridData: GridDataResult = process(JobOrderContarct, this.state);

  // fliter data 
  public dataStateChange(state: DataStateChangeEvent): void {

    this.state = state;
    this.gridData = process(JobOrderContarct, this.state);
  }
  //------------------table 1 end--------------------------

  //------------------table 2 start--------------------------
  public state2: State = {
    skip: 0,
    take: 5,
    filter: {
      logic: 'or',
      filters: [{ field: 'Omschrijving', operator: 'isnotnull', value: '' }]
    }
  };

  //fill kendo grid
  public gridData2: GridDataResult = process(JobOrderTaken, this.state2);

  // fliter data 
  public dataStateChange2(state2: DataStateChangeEvent): void {

    this.state2 = state2;
    this.gridData = process(JobOrderTaken, this.state2);
  }
  //------------------table 2 end--------------------------

  //==================================================================
  DeleteconfirmCancelButton() {
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

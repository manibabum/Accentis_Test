import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import * as alertFunctions from '../../shared/data/sweet-alerts';
import swal from 'sweetalert2';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { process, State } from '@progress/kendo-data-query';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import { roofConstructionelementList } from 'app/shared/data/ConstructionElement';

export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}


@Component({
  selector: 'app-constructionelement',
  templateUrl: './constructionelement.component.html',
  styleUrls: ['./constructionelement.component.scss']
})
export class ConstructionelementComponent implements OnInit {
  //Variable Declaration
  currentPage: string = "About"
  closeResult: string;
  constructor(private modalService: NgbModal) { }

  regularForm: FormGroup;
  ModifyregularForm: FormGroup;


  @ViewChild('f') floatingLabelForm: NgForm;

  onReactiveFormSubmit() {
    this.regularForm.reset();
  }

  ModifyonReactiveFormSubmit() {
    this.ModifyregularForm.reset();
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

  // Open default modal
  Modifyopen(content, e) {
    e.preventDefault();
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  t: any;
  currentJustify = 'start';
  currentOrientation = 'horizontal';

  ngOnInit() {
    // Horizontal Timeline js for user timeline
    $.getScript('./assets/js/vertical-timeline.js');

    this.regularForm = new FormGroup({
      'txtOnderdeel': new FormControl(null, [Validators.required]),
      'txtLaagomschrijving': new FormControl(null, [Validators.required]),
      'txtDikte': new FormControl(null, [Validators.required]),
      'txtLambda': new FormControl(null, [Validators.required])
    }, { updateOn: 'blur' });

    this.ModifyregularForm = new FormGroup({
      'ModifyDak': new FormControl(null, [Validators.required]),
      'ModifyOnderdeel': new FormControl(null, [Validators.required]),
      'ModiSoort_constr': new FormControl(null, [Validators.required]),
      'ModifyToelichting': new FormControl(null, [Validators.required])
    }, { updateOn: 'blur' });
  }

  //Initial filter descriptor
  public state: State = {
    skip: 0,
    take: 5
    ,
    filter: {
      logic: 'or',
      filters: [{ field: 'Onderdeel', operator: 'isnotnull', value: '' }]
    }
  };

  //fill kendo grid
  public gridData: GridDataResult = process(roofConstructionelementList, this.state);

  // fliter data 
  public dataStateChange(state: DataStateChangeEvent): void {

    this.state = state;
    this.gridData = process(roofConstructionelementList, this.state);
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

  //=========================================================================
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

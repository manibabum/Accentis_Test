import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { process, State } from '@progress/kendo-data-query';
import * as alertFunctions from '../../shared/data/sweet-alerts';
import swal from 'sweetalert2';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { ChartType, ChartEvent } from "ng-chartist/dist/chartist.component";
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ElementList } from 'app/shared/data/Elementen';
import { RoofelementList } from 'app/shared/data/roofelement';

declare var require: any;

const data: any = require('../../shared/data/chartist.json');
export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}
export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}


@Component({
  selector: 'app-roofelement',
  templateUrl: './roofelement.component.html',
  styleUrls: ['./roofelement.component.scss']
})
export class RoofelementComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal) { }
  regularForm: FormGroup;
  ModifyregularForm: FormGroup;


  @ViewChild('f') floatingLabelForm: NgForm;

  //Variable Declaration
  currentPage: string = "About"

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

  // Open modify pop up modal
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

    this.regularForm = new FormGroup({
      'txtInspectiedatum': new FormControl(null, [Validators.required]),
      'txtInspecteur': new FormControl(null, [Validators.required]),
      'txtHuidige_conditie': new FormControl(null, [Validators.required]),
      'txtNorm': new FormControl(null, [Validators.required]),
      'txtInspectiemethode': new FormControl(null, [Validators.required]),
      'txtGebreken': new FormControl(null, [Validators.required]),
      'txtAfbeeldingen': new FormControl(null, [Validators.required]),
      'txtHersteld': new FormControl(null, [Validators.required])
    }, { updateOn: 'blur' });

    this.ModifyregularForm = new FormGroup({
      'Omvang': new FormControl(null, [Validators.required]),
      'ModifyType': new FormControl(null, [Validators.required]),
      'Modifymerk': new FormControl(null, [Validators.required]),
      'ModifyReferentie': new FormControl(null, [Validators.required]),
      'ModifyGeinstalleerd': new FormControl(null, [Validators.required])
    }, { updateOn: 'blur' });

  }


  showPage(page: string) {
    this.currentPage = page;
  }

  t: any;
  currentJustify = 'start';
  currentOrientation = 'horizontal';

  //Initial filter descriptor
  public state: State = {
    skip: 0,
    take: 5
    ,
    filter: {
      logic: 'or',
      filters: [{ field: 'Inspecteur', operator: 'isnotnull', value: '' }]
    }
  };

  //fill kendo grid
  public gridData: GridDataResult = process(RoofelementList, this.state);

  // fliter data 
  public dataStateChange(state: DataStateChangeEvent): void {

    this.state = state;
    this.gridData = process(RoofelementList, this.state);
  }

  // Line area chart configuration Starts
  lineArea: Chart = {
    type: 'Line',
    data: data['lineAreaDashboard'],
    options: {
      low: 0,
      showArea: true,
      fullWidth: true,
      onlyInteger: true,
      axisY: {
        low: 0,
        scaleMinSpace: 50,
      },
      axisX: {
        showGrid: false
      }
    },
    events: {
      created(data: any): void {
        var defs = data.svg.elem('defs');
        defs.elem('linearGradient', {
          id: 'gradient',
          x1: 0,
          y1: 1,
          x2: 1,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': 'rgba(0, 201, 255, 1)'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': 'rgba(146, 254, 157, 1)'
        });

        defs.elem('linearGradient', {
          id: 'gradient1',
          x1: 0,
          y1: 1,
          x2: 1,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': 'rgba(132, 60, 247, 1)'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': 'rgba(56, 184, 242, 1)'
        });
      },

    },
  };
  // Line area chart configuration Ends

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

  //============================================================================================
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

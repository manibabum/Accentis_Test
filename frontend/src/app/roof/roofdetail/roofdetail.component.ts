import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { process, State } from '@progress/kendo-data-query';
import * as alertFunctions from '../../shared/data/sweet-alerts';
import swal from 'sweetalert2';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { ElementList } from 'app/shared/data/Elementen';
import { ConditionList } from 'app/shared/data/Condtitieverloop';
import { ChartType, ChartEvent } from "ng-chartist/dist/chartist.component";
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { RoofConstructionList } from 'app/shared/data/Dakconstructies';
import { AdviesPlanmatigList } from 'app/shared/data/AdviesPlanmatig';
import { AdviesCorrectiefList } from 'app/shared/data/AdviesCorrectief';


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
  constructor(public activeModal: NgbActiveModal) {

  }
}

@Component({
  selector: 'app-roofdetail',
  templateUrl: './roofdetail.component.html',
  styleUrls: ['./roofdetail.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class RoofdetailComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal) { }

  regularForm: FormGroup;
  regularFormDak: FormGroup;
  PlanmatigregularForm: FormGroup;
  ModifyregularForm: FormGroup;

  @ViewChild('f') floatingLabelForm: NgForm;

  //Variable Declaration
  currentPage: string = "RoofDetails"

  onReactiveFormSubmit() {
    this.regularForm.reset();
  }

  DakonReactiveFormSubmit() {
    this.regularFormDak.reset();
  }

  PlanmatigonReactiveFormSubmit() {
    this.PlanmatigregularForm.reset();
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
      'basicSelect': new FormControl(null, [Validators.required]),
      'ElementSelect': new FormControl(null, [Validators.required]),
      'eventRegInput1': new FormControl(null, [Validators.required]),
      'eventRegInput2': new FormControl(null, [Validators.required]),
      'eventRegInput3': new FormControl(null, [Validators.required]),
      'NormconditieSelect': new FormControl(null, [Validators.required]),

      'DakConstctieSelect': new FormControl(null, [Validators.required]),
      'Datum_opnameSelect': new FormControl(null, [Validators.required]),
      'txtInspecteur': new FormControl(null, [Validators.required]),
      'txtSoort_constructie': new FormControl(null, [Validators.required]),
      'txtToelichting': new FormControl(null, [Validators.required])
    }, { updateOn: 'blur' });

    this.regularFormDak = new FormGroup({
      'DakConstctieSelect': new FormControl(null, [Validators.required]),
      'Datum_opnameSelect': new FormControl(null, [Validators.required]),
      'txtInspecteur': new FormControl(null, [Validators.required]),
      'txtSoort_constructie': new FormControl(null, [Validators.required]),
      'txtToelichting': new FormControl(null, [Validators.required])
    }, { updateOn: 'blur' });


    this.PlanmatigregularForm = new FormGroup({
      'RuimteSelect': new FormControl(null, [Validators.required]),
      'OnderdeelSelect': new FormControl(null, [Validators.required]),
      'Element1Select': new FormControl(null, [Validators.required]),
      'txtPlanmatigOmvang': new FormControl(null, [Validators.required]),
      'txtMaatregel': new FormControl(null, [Validators.required]),
      'txtJaartal': new FormControl(null, [Validators.required]),
      'txtKostenSelect': new FormControl(null, [Validators.required]),
      'KostenSelect': new FormControl(null, [Validators.required]),
      'AdviesSelect': new FormControl(null, [Validators.required])
    }, { updateOn: 'blur' });

    this.ModifyregularForm = new FormGroup({
      'Omschrijving': new FormControl(null, [Validators.required]),
      'Omvang': new FormControl(null, [Validators.required]),
      'Orientatie': new FormControl(null, [Validators.required]),
      'Hoogte': new FormControl(null, [Validators.required]),
      'Normconditie': new FormControl(null, [Validators.required])
    }, { updateOn: 'blur' });
  }

  showPage(page: string) {
    this.currentPage = page;
  }

  t: any;
  currentJustify = 'start';
  currentOrientation = 'horizontal';

  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'bar') {
      $event.preventDefault();
    }
  };

  //Initial filter descriptor
  public state: State = {
    skip: 0,
    take: 5
    ,
    filter: {
      logic: 'or',
      filters: [{ field: 'Element', operator: 'isnotnull', value: '' }]
    }
  };

  //fill kendo grid
  public gridData: GridDataResult = process(ElementList, this.state);

  // fliter data 
  public dataStateChange(state: DataStateChangeEvent): void {

    this.state = state;
    this.gridData = process(ElementList, this.state);
  }

  //================================Condtitieverloop grid start====================
  //Initial filter descriptor
  public Condtitieverstate: State = {
    skip: 0,
    take: 5
    ,
    filter: {
      logic: 'or',
      filters: [{ field: 'Inspectiedatum', operator: 'isnotnull', value: '' }]
    }
  };

  //fill kendo grid
  public CondtitievergridData: GridDataResult = process(ConditionList, this.Condtitieverstate);

  // fliter data 
  public CondtitieverdataStateChange(Condtitieverstate: DataStateChangeEvent): void {

    this.Condtitieverstate = Condtitieverstate;
    this.gridData = process(ConditionList, this.Condtitieverstate);
  }
  //============================================================================

  //================================Dakconstructies grid start====================
  //Initial filter descriptor
  public stateRoof: State = {
    skip: 0,
    take: 5
    ,
    filter: {
      logic: 'or',
      filters: [{ field: 'Datum_opname', operator: 'isnotnull', value: '' }]
    }
  };

  //fill kendo grid
  public gridDataDakconstructies: GridDataResult = process(RoofConstructionList, this.stateRoof);

  // fliter data 
  public dataStateChangestateDakconstructies(stateRoof: DataStateChangeEvent): void {

    this.stateRoof = stateRoof;
    this.gridData = process(RoofConstructionList, this.stateRoof);
  }
  //============================================================================

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
  //=============================================================================================
  
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

  //=========================================================================================================
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

  //=====================Dakconstructies delete start==================================
  DakconstructiesconfirmCancelButton() {
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
  //=====================Dakconstructies delete end==================================

  //================Open Dakconstructies modal start
  Dakconstructiesopen(content, e) {
    e.preventDefault();
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  //================Open Dakconstructies modal end

  //================================Advies planmatig grid start====================
  //Initial filter descriptor
  public statePlanmatig: State = {
    skip: 0,
    take: 5
    ,
    filter: {
      logic: 'or',
      filters: [{ field: 'Onderdeel', operator: 'isnotnull', value: '' }]
    }
  };

  //fill kendo grid
  public gridDataPlanmatig: GridDataResult = process(AdviesPlanmatigList, this.statePlanmatig);

  // fliter data 
  public dataStateChangestatePlanmatig(statePlanmatig: DataStateChangeEvent): void {

    this.statePlanmatig = statePlanmatig;
    this.gridData = process(AdviesPlanmatigList, this.statePlanmatig);
  }
  //============================================================================

  //================================Advies Correctief grid start====================
  //Initial filter descriptor
  public stateCorrectief: State = {
    skip: 0,
    take: 5
    ,
    filter: {
      logic: 'or',
      filters: [{ field: 'cOnderdeel', operator: 'isnotnull', value: '' }]
    }
  };

  //fill kendo grid
  public gridDataCorrectief: GridDataResult = process(AdviesCorrectiefList, this.stateCorrectief);

  // fliter data 
  public dataStateChangestateCorrectief(stateCorrectief: DataStateChangeEvent): void {

    this.stateCorrectief = stateCorrectief;
    this.gridData = process(AdviesCorrectiefList, this.stateCorrectief);
  }
  //============================================================================

  //=====================Advies planmatig delete start==================================
  PlanmatigconfirmCancelButton() {
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
  //=====================Advies planmatig delete end==================================

  //=====================Advies Correctief delete start==================================
  CorrectiefconfirmCancelButton() {
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
  //=====================Advies Correctief delete end==================================


  // Open Advies Planmatig modal
  Planmatigopen(content, e) {
    e.preventDefault();
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}

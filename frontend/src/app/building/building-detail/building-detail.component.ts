import { Component, OnInit, ViewChild, Input, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { process, State } from '@progress/kendo-data-query';
import { GridComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { Daken } from '../../shared/data/daken';
import { DakenImages } from '../../shared/data/dakenimages';
import { PlannedMaintance } from '../../shared/data/planned-maintance';
import { CorrectiefMaintance } from '../../shared/data/Correctief-maintance';
import * as alertFunctions from '../../shared/data/sweet-alerts';
import swal from 'sweetalert2';
import { BuildingContractTakenList } from 'app/shared/data/buildingContractTaken';
import { BuildingDocumentList } from 'app/shared/data/BuildingDocument';
import { BuildingReportDataList } from 'app/shared/data/BuildingReport';
import { TranslateService } from '@ngx-translate/core';

declare var require: any;

export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./building-detail.component.scss']
})

export class BuildingDetailComponent implements OnInit {
  closeResult: string;
  selected: any[] = [];
  name: string;

  @ViewChild('f') floatingLabelForm: NgForm;
  @ViewChild('vform') validationForm: FormGroup;
  regularForm: FormGroup;
  DocumentregularForm: FormGroup;
  BuildingDetailregularForm: FormGroup;
  BuildingImageregularForm: FormGroup;

  PlanmatigregularForm: FormGroup;
  constructor(private modalService: NgbModal, public translate: TranslateService) {

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

  // Open Building image modal
  BuildingImgopen(content, e) {
    e.preventDefault();
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  // This function is used in open



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

  PlanmatigonReactiveFormSubmit() {
    this.PlanmatigregularForm.reset();
  }

  DocumentonReactiveFormSubmit() {
    this.PlanmatigregularForm.reset();
  }

  BuildingDetailReactiveFormSubmit() {
    this.BuildingDetailregularForm.reset();
  }

  BuildingImageonReactiveFormSubmit() {
    this.BuildingImageregularForm.reset();
  }

  //Variable Declaration
  currentPage: string = "BuildingDakenCondities"

  ngOnInit() {
    // Horizontal Timeline js for user timeline
    $.getScript('./assets/js/vertical-timeline.js');
    this.regularForm = new FormGroup({
      'Omschrijving': new FormControl(null, [Validators.required]),
      'Omvang': new FormControl(null, [Validators.required]),
      'Orientatie': new FormControl(null, [Validators.required]),
      'Hoogte': new FormControl(null, [Validators.required]),
      'Normconditie': new FormControl(null, [Validators.required]),
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



    this.DocumentregularForm = new FormGroup({
      'txtOmschrijving': new FormControl(null, [Validators.required]),
      'basicInputFile': new FormControl(null, [Validators.required])
    }, { updateOn: 'blur' });


    this.BuildingDetailregularForm = new FormGroup({
      'txtGebouwnummer': new FormControl(null, [Validators.required]),
      'txtBouwjaar': new FormControl(null, [Validators.required]),
      'txtTypegebouw': new FormControl(null, [Validators.required]),
      'txtBeheercode': new FormControl(null, [Validators.required]),
      'txtContractnr': new FormControl(null, [Validators.required]),
      'txtOpedrachtgever': new FormControl(null, [Validators.required]),
      'txtAdres': new FormControl(null, [Validators.required]),
      'txtContactpersoon': new FormControl(null, [Validators.required]),
      'txtTelefoon': new FormControl(null, [Validators.required]),
      'txtEmail': new FormControl(null, [Validators.required, Validators.email])
    }, { updateOn: 'blur' });

    this.BuildingImageregularForm = new FormGroup({
      'BestandInputFile': new FormControl(null, [Validators.required])
    }, { updateOn: 'blur' });
  }

  onReactiveFormSubmit() {
    this.regularForm.reset();
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
  // building images
  Images = ['https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img1.jpg',
    'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img2.jpg',
    'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img3.jpg',
    'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img4.jpg',
    'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img5.jpg'];

  openImg(img, contentImg, e) {
    e.preventDefault();

    this.modalService.open(contentImg).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    $("#tempImgShow").attr('src', img);
  }

  //Initial filter descriptor
  public state: State = {
    skip: 0,
    take: 5,
    filter: {
      logic: 'or',
      filters: [{ field: 'Omschrijving', operator: 'contains', value: '' }]
    }
  };

  //fill kendo grid
  public gridData: GridDataResult = process(Daken, this.state);

  // fliter data 
  public dataStateChange(state: DataStateChangeEvent): void {

    this.state = state;
    this.gridData = process(Daken, this.state);
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

  //=============================Building image delete start================
  BuildingImageConfirmCancelButton() {
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
  //=============================Building image delete end================



  // Advice planned maintance Grid code start

  public plannedmaintancestate: State = {
    skip: 0,
    take: 5,
    filter: {
      logic: 'or',
      filters: [{ field: 'Onderdeel', operator: 'contains', value: '' }]
    }
  };
  //fill kendo grid
  public adviceGridData: GridDataResult = process(PlannedMaintance, this.plannedmaintancestate);

  // fliter data 
  public adviceDataStateChange(plannedmaintancestate: DataStateChangeEvent): void {

    this.plannedmaintancestate = plannedmaintancestate;
    this.adviceGridData = process(PlannedMaintance, this.plannedmaintancestate);
  }

  plannedMaintanceAdviceConfirmCancelButton() {
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
  // Advice correctief maintance Grid code start

  public correctiefmaintancestate: State = {
    skip: 0,
    take: 5,
    filter: {
      logic: 'or',
      filters: [{ field: 'Onderdeel', operator: 'contains', value: '' }]
    }
  };
  //fill kendo grid
  public adviceCorrectiefGridData: GridDataResult = process(CorrectiefMaintance, this.correctiefmaintancestate);

  // fliter data 
  public adviceCorrectiefDataStateChange(correctiefmaintancestate: DataStateChangeEvent): void {
    this.correctiefmaintancestate = correctiefmaintancestate;
    this.adviceCorrectiefGridData = process(PlannedMaintance, this.correctiefmaintancestate);
  }

  correctiefMaintanceAdviceConfirmCancelButton() {
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

  // Open Advies Planmatig modal
  Planmatigopen(content, e) {
    e.preventDefault();
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  //============Contract & taken grid start================================

  public Contractstate: State = {
    skip: 0,
    take: 5,
    filter: {
      logic: 'or',
      filters: [{ field: 'Onderdeel', operator: 'contains', value: '' }]
    }
  };
  //fill kendo grid
  public ContractgridData: GridDataResult = process(BuildingContractTakenList, this.Contractstate);

  // fliter data 
  public ContractdataStateChange(Contractstate: DataStateChangeEvent): void {

    this.Contractstate = Contractstate;
    this.adviceGridData = process(BuildingContractTakenList, this.Contractstate);
  }
  //=============Contract & taken grid end======================================

  //============Document grid start================================

  public Documentstate: State = {
    skip: 0,
    take: 5,
    filter: {
      logic: 'or',
      filters: [{ field: 'Omschrijving', operator: 'isnotnull', value: '' }]
    }
  };
  //fill kendo grid
  public DocumentgridData: GridDataResult = process(BuildingDocumentList, this.Documentstate);

  // fliter data 
  public DocumentdataStateChange(Documentstate: DataStateChangeEvent): void {

    this.Documentstate = Documentstate;
    this.adviceGridData = process(BuildingDocumentList, this.Documentstate);
  }
  //=============Document & taken grid end======================================

  //============Reportages grid start================================

  public Rapportagesstate: State = {
    skip: 0,
    take: 5,
    filter: {
      logic: 'or',
      filters: [{ field: 'Uitvoeringsdatum', operator: 'isnotnull', value: '' }]
    }
  };
  //fill kendo grid
  public RapportagesgridData: GridDataResult = process(BuildingReportDataList, this.Rapportagesstate);

  // fliter data 
  public RapportagesdataStateChange(Rapportagesstate: DataStateChangeEvent): void {

    this.Rapportagesstate = Rapportagesstate;
    this.adviceGridData = process(BuildingReportDataList, this.Rapportagesstate);
  }
  //=============Reportages & taken grid end======================================

  //===========================Document delete start============================
  DocumentenConfirmCancelButton() {
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
  //===========================Document delete end============================

  //===================Document pop up start=============
  // Open default modal
  Documentopen(content, e) {
    e.preventDefault();
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  //===================Document pop up end=============

  //===================Building detail pop up start=============
  // Open default modal
  BuildingDetailopen(content, e) {
    e.preventDefault();
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  //===================Building detail pop up end=============

 //Image Gallery Grid

//Initial filter descriptor
public ImageGellerystate: State = {
  skip: 0,
  take: 3 
};

//fill kendo grid
public gridImageGalleryData: GridDataResult = process(DakenImages, this.ImageGellerystate);

// fliter data 
public StateImageGalleryChange(ImageGellerystate: DataStateChangeEvent): void {

  this.ImageGellerystate = ImageGellerystate;
  this.gridImageGalleryData = process(DakenImages, this.ImageGellerystate);
}
confirmImageGelleryCancelButton() {
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

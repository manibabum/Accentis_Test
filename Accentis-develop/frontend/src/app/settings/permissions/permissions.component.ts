import { Component, ViewChild, Input, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { PermissionList } from 'app/shared/data/Permissies';
import swal from 'sweetalert2';
import * as alertFunctions from '../../shared/data/sweet-alerts';
import { process, State } from '@progress/kendo-data-query';

import { CheckableSettings } from '@progress/kendo-angular-treeview';
import { Observable } from 'rxjs/Observable';
  import { of } from 'rxjs/observable/of';



export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}


@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {

  @ViewChild('f') floatingLabelForm: NgForm;
  @ViewChild('vform') validationForm: FormGroup;
  regularForm: FormGroup;

  ngOnInit() {
    this.regularForm = new FormGroup({
      'eventRegInput1': new FormControl(null, [Validators.required])
    }, { updateOn: 'blur' });
  }

  onReactiveFormSubmit() {
    this.regularForm.reset();
  }

  closeResult: string;
  constructor(private modalService: NgbModal) {
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
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  //Initial filter descriptor
  public state: State = {
    skip: 0,
    take: 5,
    filter: {
      logic: 'or',
      filters: [{ field: 'Module naam', operator: 'isnotnull', value: '' }]
    }
  };

  //fill kendo grid
  public gridData: GridDataResult = process(PermissionList, this.state);

  // fliter data 
  public dataStateChange(state: DataStateChangeEvent): void {

    this.state = state;
    this.gridData = process(PermissionList, this.state);
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
//==============Tree view start=====================================================================

  public checkedKeys: any[] = [];

    // public enableCheck = true;
    // public checkChildren = true;
    // public checkParents = true;
    // public checkMode: any = 'multiple';
    // public selectionMode: any = 'single';

    // public get checkableSettings(): CheckableSettings {
    //     return {
    //         checkChildren: this.checkChildren,
    //         checkParents: this.checkParents,
    //         enabled: this.enableCheck,
    //         mode: this.checkMode
    //     };
    // }

    public data: any[] = [
        {
          text: 'Gebouwen', items: [
            { text: 'Gebouwen',items : [{text:'Overview' },
            {text:'Add' },
            {text:'Edit' },
            {text:'Delete' }] },
            { text: 'Type Gebouw',items : [{text:'Overview' },
            {text:'Add' },
            {text:'Edit' },
            {text:'Delete' }] },
          ]
        },
        { text: 'Werk bestellingen',items : [{text:'Overview' },
        {text:'Add' },
        {text:'Edit' },
        {text:'Delete' }]  },
        { text: 'Instellingen',items : [{text:'Aanwijzing',items : [{text:'Overview' },
        {text:'Add' },
        {text:'Edit' },
        {text:'Delete' }] },{text:'Rollen',items : [{text:'Overview' },
        {text:'Add' },
        {text:'Edit' },
        {text:'Delete' }] },{text:'Permissies',items : [{text:'Overview' },
        {text:'Add' },
        {text:'Edit' },
        {text:'Delete' }] },{text:'Gebruikers',items : [{text:'Overview' },
        {text:'Add' },
        {text:'Edit' },
        {text:'Delete' }] },{text:'Constructiedelen',items : [{text:'Overview' },
        {text:'Add' },
        {text:'Edit' },
        {text:'Delete' }] },{text:'Dakbouwdelen',items : [{text:'Overview' },
        {text:'Add' },
        {text:'Edit' },
        {text:'Delete' }] },{text:'Gebreken',items : [{text:'Overview' },
        {text:'Add' },
        {text:'Edit' },
        {text:'Delete' }] }] }
    ];

    
      public children(data: any): Observable<any[]> {
      //return the parent node's items collection as children
      return of(data.items);
    }
    public hasChildren = (dataItem: any): boolean => !!dataItem.items;
   


}

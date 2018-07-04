import { Component, ViewChild, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { UserRoleList } from 'app/shared/data/GebruikersRollen';
import swal from 'sweetalert2';
import * as alertFunctions from '../../shared/data/sweet-alerts';
import { process, State } from '@progress/kendo-data-query';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators, NgForm } from '@angular/forms';

export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}


@Component({
  selector: 'app-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserroleComponent implements OnInit {

  @ViewChild('f') floatingLabelForm: NgForm;
  @ViewChild('vform') validationForm: FormGroup;
  regularForm: FormGroup;

  onReactiveFormSubmit() {
      this.regularForm.reset();
  }

  closeResult: string;

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
      filters: [{ field: 'Omschrijving', operator: 'isnotnull', value: '' }]
    }
  };

  //fill kendo grid
  public gridData: GridDataResult = process(UserRoleList, this.state);

  // fliter data 
  public dataStateChange(state: DataStateChangeEvent): void {

    this.state = state;
    this.gridData = process(UserRoleList, this.state);
  }
  //==========================================multiselect dropdown start==================
  myForm:FormGroup;
        disabled = false;
        ShowFilter = false;
        limitSelection = false;
        permissies = []; 
        selectedItems = [];
        dropdownSettings: any = {};
        constructor(private fb: FormBuilder,private modalService: NgbModal) {

        }
  
  

    ngOnInit(){
      this.regularForm = new FormGroup({
        'eventRegInput1': new FormControl(null, [Validators.required])
        }, { updateOn: 'blur' });

         this.permissies = [
            { item_id: 1, item_text: 'Contracten' },
            { item_id: 2, item_text: 'Gebouwen' },
            { item_id: 3, item_text: 'Werkopdrachten' },
            { item_id: 4, item_text: 'Instellingen' },
            { item_id: 5, item_text: 'Webapplicatie' },
            { item_id: 6, item_text: 'Mobile app' },
            { item_id: 7, item_text: 'Gebruikers' }
        ];
        this.selectedItems = [
             { item_id: 3, item_text: 'Werkopdrachten' },
             { item_id: 4, item_text: 'Instellingen' }
        ];
        this.dropdownSettings = {
             singleSelection: false,
                idField: 'item_id',
                textField: 'item_text',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 3,
                allowSearchFilter: this.ShowFilter  
        };

        this.myForm = this.fb.group({
          permission: [this.selectedItems]
      });
    }
    onItemSelect(item: any) {
      console.log('onItemSelect', item);
  }
  onSelectAll(items: any) {
      console.log('onSelectAll', items);
  }
  toogleShowFilter() {
      this.ShowFilter = !this.ShowFilter;
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, { allowSearchFilter: this.ShowFilter });
  }

  handleLimitSelection() {
      if (this.limitSelection) {
          this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: 2 });
      } else {
          this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: null });
      }
  }

//======================================================================================    
}

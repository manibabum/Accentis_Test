import { Component, ViewChild, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { process, State } from '@progress/kendo-data-query';
import { GridComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { BuildingList } from '../../shared/data/gebouwen';
import * as alertFunctions from '../../shared/data/sweet-alerts';
import swal from 'sweetalert2';


@Component({
  selector: 'app-bulilding-list',
  templateUrl: './bulilding-list.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./bulilding-list.component.scss']
})

export class BulildingListComponent {

    constructor() {

    }

    //Initial filter descriptor
     public state: State = {
        skip: 0,
        take: 10,
        filter: {
            logic: 'or',
            filters: [{ field: 'Gebouw', operator: 'isnotnull', value: '' }]
        }
    };

   //fill kendo grid
    public gridData: GridDataResult = process(BuildingList, this.state);

    // fliter data 
    public dataStateChange(state: DataStateChangeEvent): void {

        this.state = state;
        this.gridData = process(BuildingList, this.state);
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

}

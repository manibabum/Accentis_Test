import { Component, ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import { process, State } from '@progress/kendo-data-query';
import { GridComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';

import * as alertFunctions from '../../shared/data/sweet-alerts';
import swal from 'sweetalert2';
import { JobOrderList } from 'app/shared/data/Joborderlist';



@Component({
    selector: 'app-job-order-list',
    templateUrl: './job-order-list.component.html',
    styleUrls: ['./job-order-list.component.scss']
})
export class JobOrderListComponent {

    //Initial filter descriptor
    public state: State = {
        skip: 0,
        take: 5,
        filter: {
            logic: 'or',
            filters: [{ field: 'Nummer', operator: 'isnotnull', value: '' }]
        }
    };

    //fill kendo grid
    public gridData: GridDataResult = process(JobOrderList, this.state);

    // fliter data 
    public dataStateChange(state: DataStateChangeEvent): void {

        this.state = state;
        this.gridData = process(JobOrderList, this.state);
    }



}

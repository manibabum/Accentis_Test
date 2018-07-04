import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobOrderListComponent } from './job-order-list/job-order-list.component';
import { JobOrderDetailsComponent } from './job-order-details/job-order-details.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'job-order-list',
        component: JobOrderListComponent,
        data: {
          title: 'Listing'
        }
      },
      {
        path: 'job-order-details',
        component: JobOrderDetailsComponent,
        data: {
          title: 'Detail'
        }
      },
      {
        path: 'reports',
        component: ReportsComponent,
        data: {
          title: 'Reports'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoborderRoutingModule { }

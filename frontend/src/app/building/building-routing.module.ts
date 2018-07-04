import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulildingListComponent } from 'app/building/bulilding-list/bulilding-list.component';
import { BuildingDetailComponent } from 'app/building/building-detail/building-detail.component';
import { BuildingtypeComponent } from 'app/building/buildingtype/buildingtype.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: BulildingListComponent,
        data: {
          title: 'Listing'
        }
      },
      {
        path: 'detail',
        component: BuildingDetailComponent,
        data: {
          title: 'Detail'
        }
      },
      {
        path: 'test',
        component: TestComponent,
        data: {
          title: 'Detail'
        }
      },
      {
        path: '',
        children: [
          {
            path: 'buildingtype',
            component: BuildingtypeComponent,
            data: {
              title: 'Building Type'
            }
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildingRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoofdetailComponent } from './roofdetail/roofdetail.component';
import { RoofelementComponent } from './roofelement/roofelement.component';
import { RoofelementConditionComponent } from './roofelement-condition/roofelement-condition.component';
import { ConstructionelementComponent } from './constructionelement/constructionelement.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'roofdetail',
        component: RoofdetailComponent,
        data: {
          title: 'Details'
        }
      },
      {
        path: 'roofelement',
        component: RoofelementComponent,
        data: {
          title: 'Details'
        }
      },
      {
        path: 'roofelement-condition',
        component: RoofelementConditionComponent,
        data: {
          title: 'Details'
        }
      },
      {
        path: 'constructionelement',
        component: ConstructionelementComponent,
        data: {
          title: 'Details'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoofRoutingModule { }

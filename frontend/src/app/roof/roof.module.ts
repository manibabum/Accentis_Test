import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoofRoutingModule } from './roof-routing.module';
import { RoofdetailComponent } from './roofdetail/roofdetail.component';
import { GridModule,PDFModule,ExcelModule } from '@progress/kendo-angular-grid';
import { ChartistModule } from 'ng-chartist';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { QuillModule } from 'ngx-quill'
import { DragulaModule } from 'ng2-dragula';
import { MatchHeightModule } from "../shared/directives/match-height.directive";
import { ImageCropperModule } from 'ng2-img-cropper';
import { TagInputModule } from 'ngx-chips';
import { HttpModule } from '@angular/http';
import { UiSwitchModule } from 'ngx-ui-switch';
import { RoofelementComponent } from './roofelement/roofelement.component';
import { RoofelementConditionComponent } from './roofelement-condition/roofelement-condition.component';
import { ConstructionelementComponent } from './constructionelement/constructionelement.component';


@NgModule({
  imports: [
    CommonModule,
    RoofRoutingModule,
    NgbModule,
    GridModule,
    PDFModule,
    ChartistModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule,
    QuillModule,
    DragulaModule,
    MatchHeightModule,
    ImageCropperModule,
    TagInputModule,
    HttpModule,
    UiSwitchModule,
    ExcelModule
  ],
  declarations: [RoofdetailComponent, RoofelementComponent, RoofelementConditionComponent, ConstructionelementComponent],
  exports:[RoofdetailComponent,RoofelementComponent,RoofelementConditionComponent,ConstructionelementComponent]
})
export class RoofModule { }

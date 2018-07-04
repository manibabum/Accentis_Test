import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonpModule } from '@angular/http';
import { QuillModule } from 'ngx-quill'
import { DragulaModule } from 'ng2-dragula';
import { MatchHeightModule } from "../shared/directives/match-height.directive";
import { ImageCropperModule } from 'ng2-img-cropper';
import { TagInputModule } from 'ngx-chips';
import { HttpModule } from '@angular/http';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ChartistModule } from 'ng-chartist';
import { AgmCoreModule } from '@agm/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { JoborderRoutingModule } from './joborder-routing.module';
import { JobOrderListComponent } from './job-order-list/job-order-list.component';
import { JobOrderDetailsComponent } from './job-order-details/job-order-details.component';
import { ReportsComponent } from './reports/reports.component';

import { BrowserModule } from '@angular/platform-browser';
import { GridModule,PDFModule,ExcelModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    JoborderRoutingModule,
    NgxDatatableModule,
     FormsModule,
    ChartistModule,
     AgmCoreModule,
     NgbModule,
     GridModule,
    PDFModule,
    ReactiveFormsModule,
    FileUploadModule,
    JsonpModule,
    QuillModule,
    DragulaModule,
    MatchHeightModule,
    ImageCropperModule,
    TagInputModule,
    HttpModule,
    UiSwitchModule,
    ExcelModule
  ],
  declarations: [JobOrderListComponent, JobOrderDetailsComponent, ReportsComponent],
  exports:[JobOrderListComponent, JobOrderDetailsComponent,ReportsComponent]
})
export class JoborderModule { }

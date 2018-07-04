import { NgModule } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";

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



import { BulildingListComponent } from 'app/building/bulilding-list/bulilding-list.component';
import { BuildingRoutingModule } from 'app/building/building-routing.module';
import { BuildingDetailComponent } from './building-detail/building-detail.component';
import { BuildingtypeComponent } from 'app/building/buildingtype/buildingtype.component';
import { TestComponent } from './test/test.component';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule,PDFModule,ExcelModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    BuildingRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ChartistModule,
    AgmCoreModule,
    NgbModule,
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
    GridModule,
    PDFModule,
    ExcelModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  }),
  ],
  declarations: [
    BulildingListComponent,
    BuildingDetailComponent,
    BuildingtypeComponent,
    TestComponent
  ],
  exports:[BulildingListComponent,BuildingDetailComponent,BuildingtypeComponent,TestComponent,TranslateModule]
})
export class BuildingModule { }

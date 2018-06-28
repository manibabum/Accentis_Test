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

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { UsersComponent } from 'app/settings/users/users.component';
import { ConstructionPartsComponent } from 'app/settings/construction-parts/construction-parts.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { RoofComponentsComponent } from 'app/settings/roof-components/roof-components.component';
import { DefectsComponent } from 'app/settings/defects/defects.component';
import { GridModule,PDFModule,ExcelModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserroleComponent } from './userrole/userrole.component';
import { RoleComponent } from './role/role.component';

import { PermissionsComponent } from './permissions/permissions.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { DesignationComponent } from './designation/designation.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { MyprofileComponent } from './myprofile/myprofile.component';


@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    
    FileUploadModule,
    JsonpModule,
    NgbModule,
    QuillModule,
    DragulaModule,
    MatchHeightModule,
    ImageCropperModule,
    TagInputModule,
    HttpModule,
    UiSwitchModule,
    GridModule,
    PDFModule,
    NgMultiSelectDropDownModule,
    TreeViewModule,
    ExcelModule
    

       
  ],
  declarations: [
    UsersComponent,
    ConstructionPartsComponent,
    RoofComponentsComponent,
    DefectsComponent,
    UserroleComponent,
    RoleComponent,
    PermissionsComponent,
    DesignationComponent,
    MyprofileComponent,
  ],
  exports:[ConstructionPartsComponent,UsersComponent,RoofComponentsComponent,DefectsComponent,UserroleComponent,RoleComponent,PermissionsComponent,DesignationComponent,TreeViewModule,MyprofileComponent ]
  //exports:[UsersComponent,ConstructionPartsComponent]
})
export class SettingsModule { }

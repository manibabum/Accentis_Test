import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';

import { MyApp } from './app.component';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { LoginPage } from '../pages/login/login';
import { SearchContractPage } from '../pages/search-contract/search-contract';
import { HomePage } from '../pages/home/home';
import { InspectionPage } from '../pages/inspection/inspection';
import { LogoutPage } from '../pages/logout/logout';
import { InspectionDetailPage } from '../pages/inspection_detail/inspection_detail';
import { InspectionAddPage } from '../pages/inspection_add/inspection_add';
import { InspectionEditPhotoPage } from '../pages/inspection_edit_photo/inspection_edit_photo';
import { RoofAddEditPage } from '../pages/roof_add_edit/roof_add_edit';
import { RoofDetailPage } from '../pages/roof_detail/roof_detail';
import { ImageZoomPage } from '../pages/imageZoom/imageZoom';
import { MaintainanceAdvicePage } from '../pages/maintainance_advice/maintainance_advice';
import { InspectingRoofSurfacePage } from '../pages/inspecting_roof_surface/inspecting_roof_surface';
import { RoofCleanPage } from '../pages/roof_clean/roof_clean';
import { FileRecordingPage } from '../pages/fileRecording/fileRecording';
import { RoofDrawingPage } from '../pages/roof_drawing/roof_drawing';
import { InventoryTimbersPage } from '../pages/inventroy_timbers/inventroy_timbers';
import { StructuralPartPage } from '../pages/structural_part/structural_part';
import { StructuralDataAddPage } from '../pages/structural_data_add/structural_data_add';
import { InventoryRoofComponentsPage } from '../pages/inventory_roof_components/inventory_roof_components';
import { RoofConstructionPartPage } from '../pages/roof_construction_part/roof_construction_part';
import { RoofConstructionDataAddPage } from '../pages/roof_construction_data_add/roof_construction_data_add';
import { InspectionRoofComponentsPage } from '../pages/inspection_roof_components/inspection_roof_components';
import { AssessmentDefectsPage } from '../pages/assessment_defects/assessment_defects';
import { ChooseDefectPage } from '../pages/choose_defect/choose_defect';
import { ChooseDefectDataAddPage } from '../pages/choose_defect_data_add/choose_defect_data_add';
import { ChooseDefectAddImagePage } from '../pages/choose_defect_add_image/choose_defect_add_image';
import { AdviceCorrectiveMaintainancePage } from '../pages/advice_corrective_maintainance/advice_corrective_maintainance';
import { AssessmentCorrectiveMaintainancePage } from '../pages/assessment_corrective_maintainance/assessment_corrective_maintainance';
import { CorrectiveMaintainanceDataAddPage } from '../pages/corrective_maintainance_data_add/corrective_maintainance_data_add';
import { FileRecordingMJOBSubtaskPage } from '../pages/file_recording_MJOB_subtask/file_recording_MJOB_subtask';
import { RoofComponentsConditionPage } from '../pages/roof_components_condition/roof_components_condition';
import { AdvicePlannedMaintainancePage } from '../pages/advice_planned_maintainance/advice_planned_maintainance';
import { EditProfilePage } from '../pages/edit_profile/edit_profile';
import { MenuPage } from '../pages/menu/menu';
// import { inspectNativeElement } from '@angular/platform-browser/src/dom/debug/ng_probe';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SearchContractPage,
    HomePage,
    InspectionPage,
    LogoutPage,
    InspectionAddPage,
    InspectionDetailPage,
    InspectionEditPhotoPage,
    RoofAddEditPage,
    RoofDetailPage,
    ImageZoomPage,
    MaintainanceAdvicePage,
    InspectingRoofSurfacePage,
    RoofCleanPage,
    FileRecordingPage,
    RoofDrawingPage,
    InventoryTimbersPage,
    StructuralPartPage,
    StructuralDataAddPage,
    InventoryRoofComponentsPage,
    RoofConstructionPartPage,
    RoofConstructionDataAddPage,
    InspectionRoofComponentsPage,
    AssessmentDefectsPage,
    ChooseDefectPage,
    ChooseDefectDataAddPage,
    ChooseDefectAddImagePage,
    AdviceCorrectiveMaintainancePage,
    AssessmentCorrectiveMaintainancePage,
    CorrectiveMaintainanceDataAddPage,
    FileRecordingMJOBSubtaskPage,
    RoofComponentsConditionPage,
    AdvicePlannedMaintainancePage,
    EditProfilePage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    IonicImageViewerModule,
    BrowserAnimationsModule, 
    GridModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    },
    
  )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SearchContractPage,
    HomePage,
    InspectionPage,
    LogoutPage,
    InspectionAddPage,
    InspectionDetailPage,
    InspectionEditPhotoPage,
    RoofAddEditPage,
    RoofDetailPage,
    ImageZoomPage,
    MaintainanceAdvicePage,
    InspectingRoofSurfacePage,
    RoofCleanPage,
    FileRecordingPage,
    RoofDrawingPage,
    InventoryTimbersPage,
    StructuralPartPage,
    StructuralDataAddPage,
    InventoryRoofComponentsPage,
    RoofConstructionPartPage,
    RoofConstructionDataAddPage,
    InspectionRoofComponentsPage,
    AssessmentDefectsPage,
    ChooseDefectPage,
    ChooseDefectDataAddPage,
    ChooseDefectAddImagePage,
    AdviceCorrectiveMaintainancePage,
    AssessmentCorrectiveMaintainancePage,
    CorrectiveMaintainanceDataAddPage,
    FileRecordingMJOBSubtaskPage,
    RoofComponentsConditionPage,
    AdvicePlannedMaintainancePage,
    EditProfilePage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

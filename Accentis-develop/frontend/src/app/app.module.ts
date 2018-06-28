
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { HorizontalLayoutComponent } from "./layouts/horizontal/horizontal-layout.component";

import { CustomOption } from "./shared/toastr/custom-option";

import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';

import * as $ from 'jquery';
import { HorizontalMenuComponent } from 'app/shared/horizontal-menu/horizontal-menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BuildingModule } from 'app/building/building.module';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { DesignationService } from './services/designation.service';
import { RoleService } from './services/role.service';
import { ConstructionpartsService } from './services/constructionparts.service';
import { DefectService } from './services/defect.service';
import { RoofcomponentService } from './services/roofcomponent.service';
import { UserService } from './services/user.service';


export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        HorizontalLayoutComponent,
        ContentLayoutComponent,
        HorizontalMenuComponent,
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        
        
    ],
    imports: [
        StoreModule.forRoot({}),
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        ToastModule.forRoot(),
        NgbModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBr5_picK8YJK7fFR2CPzTVMj6GG1TtRGo'
        }),
        FormsModule,
        BuildingModule,
        BrowserAnimationsModule,
        TreeViewModule,
        ReactiveFormsModule
        
        
    ],
    providers: [
        //Toastr and auth providers
        { provide: ToastOptions, useClass: CustomOption },
        AuthService,
        AuthGuard,
        DesignationService,
        RoleService,
        ConstructionpartsService,
        DefectService,
        RoofcomponentService,
        UserService
        
    ],
    bootstrap: [AppComponent],
    exports: [FullLayoutComponent,TreeViewModule]
})
export class AppModule { }
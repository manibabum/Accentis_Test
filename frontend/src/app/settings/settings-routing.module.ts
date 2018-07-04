import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ConstructionPartsComponent } from './construction-parts/construction-parts.component';
import { RoofComponentsComponent } from './roof-components/roof-components.component';
import { DefectsComponent } from './defects/defects.component';
import { UserroleComponent } from './userrole/userrole.component';
import { RoleComponent } from './role/role.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { DesignationComponent } from './designation/designation.component';
import { MyprofileComponent } from './myprofile/myprofile.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Users'
        }
      },
      
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'construction-parts',
        component: ConstructionPartsComponent,
        data: {
          title: 'Construction-parts'
        }
      },
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'roof-components',
        component: RoofComponentsComponent,
        data: {
          title: 'Roof Component'
        }
      },
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'defects',
        component: DefectsComponent,
        data: {
          title: 'Defects'
        }
      },
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'userrole',
        component: UserroleComponent,
        data: {
          title: 'UserRole'
        }
      },
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'role',
        component: RoleComponent,
        data: {
          title: 'Role'
        }
      },
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'permissions',
        component: PermissionsComponent,
        data: {
          title: 'Permissions'
        }
      },
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'designation',
        component: DesignationComponent,
        data: {
          title: 'Designation'
        }
      },
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'myprofile',
        component: MyprofileComponent,
        data: {
          title: 'MyProfile'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

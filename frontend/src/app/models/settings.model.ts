export class Settings {
}
export class Designation {
    DesignationID:number;
    DesignationName:string;
    Status:boolean;
    Delete:boolean;
    CreatedDate:Date;
    ModifiedDate:Date;
}
export class Role{
    Id:string;
    Name:string;
}

export class ConstructionParts{
    CPID:number;
    LayerType:string;
    Description:string;
    Lamda:string;
    Status:boolean;
    Delete:boolean;
    CreatedDate:Date;
    ModifiedDate:Date;
}
export class Users{
    Id:string;
    Email:string;
    EmailConfirmed:boolean;
    Password:string;
    SecurityStamp:string;
    PhoneNumber:string;
    PhoneNumberConfirmed:boolean;
    TwoFactorEnabled:boolean;
    LockoutEndDateUtc:Date;
    LockoutEnabled:boolean;
    AccessFailedCount:number;
    UserName:string;
    FirstName:string;
    MiddelName:string;
    LastName:string;
    Contact:string;
    designationId:number;
    RoleID:number;
    RoleName:string;
    Address:string;
    Status:boolean;
    Delete:boolean;
    CreatedDate:Date;
    ModifiedDate:Date;
    DesignationName:string;
    ConcurrencyStamp:string;
    LockoutEnd:Date;
    NormalizedEmail:string;
    NormalizedUserName:string;
}

export class Defect{
    DefactID:number;
    Description:string;
    Status:boolean;
    Delete:boolean;
    CreatedDate:Date;
    ModifiedDate:Date;
}

export class RoofComponent{
    RCID:number;
    Description:string;
    Unit:string;
    Status:boolean;
    Delete:boolean;
    CreatedDate:Date;
    ModifiedDate:Date;
}
export class Login{
    UserName:string;
    Password:string;
}
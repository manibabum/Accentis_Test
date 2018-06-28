export class Building {
    BuildingId: number;
    BuildingTypeId: number;
    Title: string;
    BuildingNumber: string;
    YearOfConstruction: string;
    ManagementCode: string;
    ContractNumber: string;
    Client: string;
    Address: string;
    ContactPerson: string;
    Telephone: string;
    Email: string;
    StreetView: string;
    Photo: string;
    Status: boolean;
    Delete: boolean;
    CreatedDate: Date;
    ModifiedDate: Date;
    BuildingType : BuildingType[];
}
export class BuildingType{
    BuildingTypeID:number;
    TypeName:string;
    Status: boolean;
    Delete: boolean;
    CreatedDate: Date;
    ModifiedDate: Date;
}


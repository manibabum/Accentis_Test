using Accentis.Business.Model;
using Accentis.Database.Domain;
using Accentis.Database.Domain.Domain;
using AutoMapper;

namespace Accentis.Api.Mappings
{
    public  class AutoMapperConfiguration : Profile
    {
        public  AutoMapperConfiguration()
        {
            CreateMap<DesignationModel, Designation>();
            CreateMap<Designation, DesignationModel>();

            
            CreateMap<UserEditModel, ApplicationUser>();
            CreateMap<ApplicationUser, UserEditModel>();

            CreateMap<BuildingTypeModel, BuildingType>();
            CreateMap<BuildingType, BuildingTypeModel>();

            CreateMap<RoofTypeModel, RoofType>();
            CreateMap<RoofType, RoofTypeModel>();

            CreateMap<DefactsModel, Defacts>();
            CreateMap<Defacts, DefactsModel>();

            CreateMap<ConstructionPartsModel, ConstructionParts>();
            CreateMap<ConstructionParts, ConstructionPartsModel>();
            
            CreateMap<BuildingModel, Building>();
            CreateMap<Building, BuildingModel>();

            CreateMap<RoofComponentsModel, RoofComponents>();
            CreateMap<RoofComponents, RoofComponentsModel>();

            CreateMap<InspectionModel, Inspections>();
            CreateMap<Inspections, InspectionModel>();

            CreateMap<RoofModel, Roof>();
            CreateMap<Roof, RoofModel>();

            CreateMap<RoofElementModel, RoofElement>();
            CreateMap<RoofElement, RoofElementModel>();

            CreateMap<RoofDetailElementConditionModel, RoofDetailElementConditions>();
            CreateMap<RoofDetailElementConditions, RoofDetailElementConditionModel>();

            CreateMap<ObservedDefectsModel, ObservedDefects>();
            CreateMap<ObservedDefects, ObservedDefectsModel>();

            CreateMap<RoofConstructionModel, RoofConstruction>();
            CreateMap<RoofConstruction, RoofConstructionModel>();

            CreateMap<ElementConstructionModel, ElementConstructions>();
            CreateMap<ElementConstructions, ElementConstructionModel>();

            CreateMap<RoofAdviceMaintenanceModel, RoofAdviceMaintenance>();
            CreateMap<RoofAdviceMaintenance, RoofAdviceMaintenanceModel>();

            CreateMap<BuildingAdviceMaintenanceModel, BuildingAdviceMaintenance>();
            CreateMap<BuildingAdviceMaintenance, BuildingAdviceMaintenanceModel>();

            CreateMap<BuildingPicturesModel, BuildingPictures>();
            CreateMap<BuildingPictures, BuildingPicturesModel>();

            CreateMap<ContractDutyModel, ContractDuty>();
            CreateMap<ContractDuty, ContractDutyModel>();

            CreateMap<BuildingDocumentModel, BuildingDocument>();
            CreateMap<BuildingDocument, BuildingDocumentModel>();

            CreateMap<TaskMasterModel, TaskMaster>();
            CreateMap<TaskMaster, TaskMasterModel>();
        }
    }
}

using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Services.BuildingTypes
{
    public interface IBuildingTypeService
    {
        void CreateBuildingType(BuildingType buildingtype);

        void UpdateBuildingType(BuildingType buildingtype);

        BuildingType GetBuildingType(int id);

        List<BuildingType> Get();

        List<BuildingType> GetBuildingTypes();
    }
}

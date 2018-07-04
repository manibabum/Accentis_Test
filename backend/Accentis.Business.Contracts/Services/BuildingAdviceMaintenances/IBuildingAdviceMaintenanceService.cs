using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Services.BuildingAdviceMaintenances
{
    public interface IBuildingAdviceMaintenanceService
    {
        void CreateBuildingAdviceMaintenance(BuildingAdviceMaintenance buildingAdviceMaintenance);

        void UpdateBuildingAdviceMaintenance(BuildingAdviceMaintenance buildingAdviceMaintenance);

        BuildingAdviceMaintenance GetBuildingAdviceMaintenance(int id);

        List<BuildingAdviceMaintenance> Get();

        List<BuildingAdviceMaintenance> GetAllBuildingAdviceMaintenance();
    }
}

using Accentis.Business.Contracts.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Repositories.BuildingAdviceMaintenances
{
    public interface IBuildingAdviceMaintenanceRepository:IBaseRepository<BuildingAdviceMaintenance>
    {
        List<BuildingAdviceMaintenance> GetAllBuildingAdviceMaintenance();
    }
}

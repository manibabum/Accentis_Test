using Accentis.Business.Contracts.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Repositories.RoofAdvicesMaintenance
{
    public interface IRoofAdvicesMaintenanceRepository:IBaseRepository<RoofAdviceMaintenance>
    {
        List<RoofAdviceMaintenance> GetAllRoofAdviceMaintenance();
    }
}

using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Services.RoofAdvicesMaintenance
{
   public interface IRoofAdvicesMaintenanceService
    {
        void CreateRoofAdvicesMaintenance(RoofAdviceMaintenance roofAdviceMaintenance);

        void UpdateRoofAdvicesMaintenance(RoofAdviceMaintenance roofAdviceMaintenance);

        //non-deleted data
        List<RoofAdviceMaintenance> GetAllRoofAdviceMaintenance();

        //All data
        List<RoofAdviceMaintenance> Get();

        RoofAdviceMaintenance GetRoofAdviceMaintenance(int id);
    }
}

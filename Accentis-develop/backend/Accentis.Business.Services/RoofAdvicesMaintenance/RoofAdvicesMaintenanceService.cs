using System.Collections.Generic;
using Accentis.Business.Contracts.Services.RoofAdvicesMaintenance;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Services.RoofAdvicesMaintenance
{
    public class RoofAdvicesMaintenanceService : IRoofAdvicesMaintenanceService
    {
        public void CreateRoofAdvicesMaintenance(RoofAdviceMaintenance roofAdviceMaintenance)
        {
            using (var unitOfWork=new UnitOfWork())
            {
                unitOfWork.RoofAdvicesMaintenanceRepository.Insert(roofAdviceMaintenance);
                unitOfWork.RoofAdvicesMaintenanceRepository.Save();
            }
        }

        public List<RoofAdviceMaintenance> Get()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofAdvicesMaintenanceRepository.Get();
            }
        }

        public List<RoofAdviceMaintenance> GetAllRoofAdviceMaintenance()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofAdvicesMaintenanceRepository.GetAllRoofAdviceMaintenance();
            }
        }

        public RoofAdviceMaintenance GetRoofAdviceMaintenance(int id)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofAdvicesMaintenanceRepository.Get(id);
            }
        }

        public void UpdateRoofAdvicesMaintenance(RoofAdviceMaintenance roofAdviceMaintenance)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.RoofAdvicesMaintenanceRepository.Update(roofAdviceMaintenance);
                unitOfWork.RoofAdvicesMaintenanceRepository.Save();
            }
        }
    }
}

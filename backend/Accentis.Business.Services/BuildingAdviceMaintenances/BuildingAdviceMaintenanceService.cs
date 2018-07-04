using System.Collections.Generic;
using Accentis.Business.Contracts.Services.BuildingAdviceMaintenances;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Services.BuildingAdviceMaintenances
{
    public class BuildingAdviceMaintenanceService : IBuildingAdviceMaintenanceService
    {
        public void CreateBuildingAdviceMaintenance(BuildingAdviceMaintenance buildingAdviceMaintenance)
        {
            using (var unitOfWork=new UnitOfWork())
            {
                unitOfWork.BuildingAdviceMaintenanceRepository.Insert(buildingAdviceMaintenance);
                unitOfWork.BuildingAdviceMaintenanceRepository.Save();
            }
        }

        public List<BuildingAdviceMaintenance> Get()
        {
            using (var unitOfWork=new UnitOfWork())
            {
                return unitOfWork.BuildingAdviceMaintenanceRepository.Get();
            }
        }

        public List<BuildingAdviceMaintenance> GetAllBuildingAdviceMaintenance()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.BuildingAdviceMaintenanceRepository.GetAllBuildingAdviceMaintenance();
            }
        }

        public BuildingAdviceMaintenance GetBuildingAdviceMaintenance(int id)
        {
            using (var unitOfWork=new UnitOfWork())
            {
                return unitOfWork.BuildingAdviceMaintenanceRepository.Get(id);
            }
        }

        public void UpdateBuildingAdviceMaintenance(BuildingAdviceMaintenance buildingAdviceMaintenance)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.BuildingAdviceMaintenanceRepository.Update(buildingAdviceMaintenance);
                unitOfWork.BuildingAdviceMaintenanceRepository.Save();
            }
        }
    }
}

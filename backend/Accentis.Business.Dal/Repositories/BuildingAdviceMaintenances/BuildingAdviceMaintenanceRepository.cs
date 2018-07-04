using System.Collections.Generic;
using System.Linq;
using Accentis.Business.Contracts.Repositories.BuildingAdviceMaintenances;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Dal.Repositories.BuildingAdviceMaintenances
{
    public class BuildingAdviceMaintenanceRepository : BaseRepository<BuildingAdviceMaintenance>, IBuildingAdviceMaintenanceRepository
    {
        public BuildingAdviceMaintenanceRepository(Accentis_NewContext context) : base(context)
        {
            Context = context;
        }

        public List<BuildingAdviceMaintenance> GetAllBuildingAdviceMaintenance()
        {
            return Context.BuildingAdviceMaintenance.OrderByDescending(x=>x.AdviceId).Where(x => x.Delete == false && x.Status == true).ToList();
        }
    }
}

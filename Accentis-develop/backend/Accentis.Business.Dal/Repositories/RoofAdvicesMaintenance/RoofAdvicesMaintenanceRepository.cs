using System.Collections.Generic;
using System.Linq;
using Accentis.Business.Contracts.Repositories.RoofAdvicesMaintenance;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Dal.Repositories.RoofAdvicesMaintenance
{
    class RoofAdvicesMaintenanceRepository : BaseRepository<RoofAdviceMaintenance>, IRoofAdvicesMaintenanceRepository
    {
        public RoofAdvicesMaintenanceRepository(Accentis_NewContext context) : base(context)
        {
            Context = context;
        }

        public List<RoofAdviceMaintenance> GetAllRoofAdviceMaintenance()
        {
           return Context.RoofAdviceMaintenance.OrderByDescending(x=>x.AdviceId).Where(x => x.Delete == false && x.Status == true).ToList();
        }
    }
}

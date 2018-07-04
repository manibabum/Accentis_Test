using System.Collections.Generic;
using System.Linq;
using Accentis.Business.Contracts.Repositories.RoofConstructions;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Dal.Repositories.RoofConstructions
{
    public class RoofConstructionRepository : BaseRepository<RoofConstruction>,IRoofConstructionRepository
    {
        public RoofConstructionRepository(Accentis_NewContext context) : base(context)
        {
            Context = context;
        }

        public List<RoofConstruction> GetAllRoofConstructions()
        {
            return Context.RoofConstruction.OrderByDescending(x=>x.Rsid).Where(x => x.Delete == false && x.Status == true).ToList();
        }
    }
}

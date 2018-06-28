using System.Collections.Generic;
using System.Linq;
using Accentis.Business.Contracts.Repositories.Roofs;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Dal.Repositories.Roofs
{
    public class RoofRepository : BaseRepository<Roof>, IRoofRepository
    {
        public RoofRepository(Accentis_NewContext context) : base(context)
        {
            Context = context;
        }

        public List<Roof> GetAllRoofs()
        {
            return Context.Roof.OrderByDescending(x=>x.RoofId).Where(x => x.Delete == false && x.Status == true).ToList();
        }
    }
}

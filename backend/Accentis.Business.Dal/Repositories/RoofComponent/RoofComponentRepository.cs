using System.Collections.Generic;
using System.Linq;
using Accentis.Business.Contracts.Repositories.RoofComponent;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Dal.Repositories.RoofComponent
{
    public class RoofComponentRepository : BaseRepository<RoofComponents>, IRoofComponentsRepository
    {
        public RoofComponentRepository(Accentis_NewContext _context) : base(_context)
        {
            Context = _context;
        }

        public List<RoofComponents> GetAllRoofComponents()
        {
            return Context.RoofComponents.OrderByDescending(x=>x.Rcid).Where(x => x.Delete == false && x.Status == true).ToList();
        }
    }
}

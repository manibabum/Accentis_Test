using System.Collections.Generic;
using System.Linq;
using Accentis.Business.Contracts.Repositories.RoofElements;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Dal.Repositories.RoofElements
{
    public class RoofElementRepository : BaseRepository<RoofElement>,IRoofElementRepository
    {
        public RoofElementRepository(Accentis_NewContext context) : base(context)
        {
            Context = context;
        }

        public List<RoofElement> GetAllRoofElements()
        {
            return Context.RoofElement.OrderByDescending(x=>x.Reid).Where(x => x.Delete == false && x.Status == true).ToList();
        }
    }
}

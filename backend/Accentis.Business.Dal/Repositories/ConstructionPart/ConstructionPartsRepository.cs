using Accentis.Business.Contracts.Repositories.ConstructionPart;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;
using System.Linq;

namespace Accentis.Business.Dal.Repositories.ConstructionPart
{
    public class ConstructionPartsRepository : BaseRepository<ConstructionParts>, IConstructionPartRepository
    {
        public ConstructionPartsRepository(Accentis_NewContext context) : base(context)
        {
            Context = context;
        }
        public List<ConstructionParts> GetAllConstructionParts()
        {
            return Context.ConstructionParts.OrderByDescending(x=>x.Cpid).Where(x => x.Delete == false && x.Status==true).ToList();
        }
    }
}

using System.Collections.Generic;
using System.Linq;
using Accentis.Business.Contracts.Repositories.ElementConstruction;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Dal.Repositories.ElementConstruction
{
    public class ElementConstructionRepository : BaseRepository<ElementConstructions>, IElementConstructionRepository
    {
        public ElementConstructionRepository(Accentis_NewContext context) : base(context)
        {
            Context = context;
        }

        public List<ElementConstructions> GetAllElementConstructions()
        {
            return Context.ElementConstructions.OrderByDescending(x=>x.Rseid).Where(x => x.Delete == false && x.Status == true).ToList();
        }
    }
}

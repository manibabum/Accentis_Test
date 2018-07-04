using Accentis.Business.Contracts.Repositories.RoofDetailElementCondition;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;
using System.Linq;

namespace Accentis.Business.Dal.Repositories
{
    public class RoofDetailElementConditionRepository : BaseRepository<RoofDetailElementConditions>, IRoofDetailElementConditionRepository
    {
        public RoofDetailElementConditionRepository(Accentis_NewContext context) : base(context)
        {
            Context = context;
        }

        public List<RoofDetailElementConditions> GetAllRoofDetailElementConditions()
        {
            return Context.RoofDetailElementConditions.OrderByDescending(x=>x.Rdecid).Where(x => x.Delete == false && x.Status == true).ToList();
        }
    }
}

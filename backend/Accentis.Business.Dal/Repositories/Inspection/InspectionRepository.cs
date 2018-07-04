using System.Collections.Generic;
using System.Linq;
using Accentis.Business.Contracts.Repositories.Inspection;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Dal.Repositories.Inspection
{
    public class InspectionRepository : BaseRepository<Inspections>, IInspectionRepository
    {
        public InspectionRepository(Accentis_NewContext context) : base(context)
        {
            Context = context;
        }

        public List<Inspections> GetAllInspections()
        {
            return Context.Inspections.OrderByDescending(x=>x.InspectionId).Where(x => x.Delete == false && x.Status == true).ToList();
        }
    }
}

using System.Collections.Generic;
using System.Linq;
using Accentis.Business.Contracts.Repositories.ObservedDefect;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Dal.Repositories
{
    public class ObservedDefectRepository : BaseRepository<ObservedDefects>, IObservedDefectRepository
    {
        public ObservedDefectRepository(Accentis_NewContext context) : base(context)
        {
            Context = context;
        }

        public List<ObservedDefects> GetAllObservedDefects()
        {
            return Context.ObservedDefects.OrderByDescending(x=>x.Odid).Where(x => x.Delete == false).ToList();
        }
    }
}

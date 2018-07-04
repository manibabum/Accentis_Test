using Accentis.Business.Contracts.Repositories.Defact;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;
using System.Linq;

namespace Accentis.Business.Dal.Repositories.Defact
{
    public class DefactsRepository: BaseRepository<Defacts>, IDefactsRepository
    {
        public DefactsRepository(Accentis_NewContext context) : base(context)
        {
            Context = context;
        }

        public List<Defacts> GetAllDefacts()
        {
            return Context.Defacts.OrderByDescending(x=>x.DefactId).Where(x => x.Delete == false && x.Status == true).ToList();
        }
    }
}

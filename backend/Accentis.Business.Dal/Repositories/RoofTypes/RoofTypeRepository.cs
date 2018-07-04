using Accentis.Business.Contracts.Repositories.RoofTypes;
using Accentis.Database.Domain.Domain;
using Accentis.Business.Dal.Repositories.General;
using System.Linq;
using System.Collections.Generic;

namespace Accentis.Business.Dal.Repositories.RoofTypes
{
   public class RoofTypeRepository: BaseRepository<RoofType>, IRoofTypeRepository
    {
        public RoofTypeRepository(Accentis_NewContext _context) : base ( _context)
        {
            Context = _context;
        }

        public List<RoofType> GetAllRoofTypes()
        {
            return Context.RoofType.OrderByDescending(x=>x.Rtid).Where(x => x.Delete == false && x.Status == true).ToList();
        }
    }
}

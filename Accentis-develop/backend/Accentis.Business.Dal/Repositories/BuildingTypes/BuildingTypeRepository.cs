using Accentis.Business.Contracts.Repositories.BuildingTypes;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;
using System.Linq;

namespace Accentis.Business.Dal.Repositories.BuildingTypes
{
   public class BuildingTypeRepository: BaseRepository<BuildingType>, IBuildingTypeRepository
    {
        public BuildingTypeRepository(Accentis_NewContext _context) : base(_context)
        {
            Context = _context;
        }

        public List<BuildingType> GetBuildingTypes()
        {
           return Context.BuildingType.OrderByDescending(x=>x.BuildingTypeId).Where(x => x.Delete == false && x.Status == true).ToList();
        }
    }
}

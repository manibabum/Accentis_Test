using Accentis.Business.Contracts.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Repositories.RoofConstructions
{
   public interface IRoofConstructionRepository:IBaseRepository<RoofConstruction>
    {
        List<RoofConstruction> GetAllRoofConstructions();
    }
}

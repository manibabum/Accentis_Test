using Accentis.Business.Contracts.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Repositories.ConstructionPart
{
    public interface IConstructionPartRepository: IBaseRepository<ConstructionParts>
    {
        List<ConstructionParts> GetAllConstructionParts();
    }
}

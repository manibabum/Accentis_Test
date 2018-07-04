using Accentis.Business.Contracts.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Repositories.ElementConstruction
{
    public interface IElementConstructionRepository:IBaseRepository<ElementConstructions>
    {
        List<ElementConstructions> GetAllElementConstructions();
    }
}

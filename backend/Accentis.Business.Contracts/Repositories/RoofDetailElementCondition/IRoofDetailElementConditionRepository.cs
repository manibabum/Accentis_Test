using Accentis.Business.Contracts.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Repositories.RoofDetailElementCondition
{
    public interface IRoofDetailElementConditionRepository:IBaseRepository<RoofDetailElementConditions>
    {
        List<RoofDetailElementConditions> GetAllRoofDetailElementConditions();
    }
}

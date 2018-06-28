using Accentis.Business.Contracts.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Repositories.RoofElements
{
    public interface IRoofElementRepository: IBaseRepository<RoofElement>
    {
        List<RoofElement> GetAllRoofElements();
    }
}

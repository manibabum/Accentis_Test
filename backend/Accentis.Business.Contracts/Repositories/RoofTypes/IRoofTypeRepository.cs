using Accentis.Business.Contracts.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Repositories.RoofTypes
{
    public interface IRoofTypeRepository: IBaseRepository<RoofType>
    {
        List<RoofType> GetAllRoofTypes();
    }
}

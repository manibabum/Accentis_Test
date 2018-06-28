using Accentis.Business.Contracts.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Repositories.RoofComponent
{
  public  interface IRoofComponentsRepository: IBaseRepository<RoofComponents>
    {
        List<RoofComponents> GetAllRoofComponents();
    }
}

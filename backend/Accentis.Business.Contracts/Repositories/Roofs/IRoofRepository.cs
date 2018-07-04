using Accentis.Business.Contracts.Repositories.General;
using Accentis.Database.Domain.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accentis.Business.Contracts.Repositories.Roofs
{
   public interface IRoofRepository:IBaseRepository<Roof>
    {
        List<Roof> GetAllRoofs();
    }
}

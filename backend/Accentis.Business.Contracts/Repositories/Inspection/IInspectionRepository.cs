using Accentis.Business.Contracts.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Repositories.Inspection
{
   public interface IInspectionRepository: IBaseRepository<Inspections>
    {
        List<Inspections> GetAllInspections();
    }
}

using Accentis.Business.Contracts.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Repositories.BuildingDocuments
{
   public interface IBuildingDocumentsRepository :IBaseRepository<BuildingDocument>
    {
        List<BuildingDocument> GetAllBuildingDocuments();
    }
}

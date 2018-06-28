using System.Collections.Generic;
using System.Linq;
using Accentis.Business.Contracts.Repositories.BuildingDocuments;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Dal.Repositories.BuildingDocuments
{
    public class BuildingDocumentsRepository : BaseRepository<BuildingDocument>, IBuildingDocumentsRepository
    {
        public BuildingDocumentsRepository(Accentis_NewContext context) : base(context)
        {
            Context = context;
        }

        public List<BuildingDocument> GetAllBuildingDocuments()
        {
            return Context.BuildingDocument.Where(x => x.Delete == false && x.Status == true).OrderByDescending(x=>x.DocumentId).ToList();
        }
    }
}

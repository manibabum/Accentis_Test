using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Services.BuildingDocuments
{
    public interface IBuildingDocumentsService
    {
        void CreateBuildingDocuments(BuildingDocument buildingDocument);

        void UpdateBuildingDocuments(BuildingDocument buildingDocument);

        List<BuildingDocument> Get();

        List<BuildingDocument> GetAllBuildingDocuments();

        BuildingDocument GetBuildingDocument(int id);
    }
}

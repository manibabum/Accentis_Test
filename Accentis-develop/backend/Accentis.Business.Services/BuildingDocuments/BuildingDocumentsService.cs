using System.Collections.Generic;
using Accentis.Business.Contracts.Services.BuildingDocuments;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Services.BuildingDocuments
{
    public class BuildingDocumentsService : IBuildingDocumentsService
    {
        public void CreateBuildingDocuments(BuildingDocument buildingDocument)
        {
            using (var unitOfWork=new UnitOfWork())
            {
                unitOfWork.BuildingDocumentsRepository.Insert(buildingDocument);
                unitOfWork.BuildingDocumentsRepository.Save();
            }
        }

        public List<BuildingDocument> Get()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.BuildingDocumentsRepository.Get();
            }
        }

        public List<BuildingDocument> GetAllBuildingDocuments()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.BuildingDocumentsRepository.GetAllBuildingDocuments();
            }
        }

        public BuildingDocument GetBuildingDocument(int id)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.BuildingDocumentsRepository.Get(id);
            }
        }

        public void UpdateBuildingDocuments(BuildingDocument buildingDocument)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.BuildingDocumentsRepository.Update(buildingDocument);
                unitOfWork.BuildingDocumentsRepository.Save();
            }
        }
    }
}

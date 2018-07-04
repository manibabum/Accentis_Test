using Accentis.Business.Contracts.Services.ConstructionPart;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Services.ConstructionPart
{
    public class ConstructionPartsService : IConstructionPartsService
    {
        public List<ConstructionParts> GetAllConstructionParts()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.ConstructionPartsRepository.GetAllConstructionParts();
            }
        }
        public void CreateConstructionParts(ConstructionParts constructionParts)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.ConstructionPartsRepository.Insert(constructionParts);
                unitOfWork.ConstructionPartsRepository.Save();
            }
        }

        public ConstructionParts GetConstructionParts(int id)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.ConstructionPartsRepository.Get(id);
            }
        }

        public void UpdateConstructionParts(ConstructionParts constructionParts)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.ConstructionPartsRepository.Update(constructionParts);
                unitOfWork.ConstructionPartsRepository.Save();
            }
        }

        public List<ConstructionParts> Get()
        {
            using (var unitOfWork=new UnitOfWork())
            {
               return unitOfWork.ConstructionPartsRepository.Get();
            }
        }
    }
}

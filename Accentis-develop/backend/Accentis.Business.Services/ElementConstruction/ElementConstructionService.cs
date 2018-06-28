using System.Collections.Generic;
using Accentis.Business.Contracts.Services.ElementConstruction;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Services.ElementConstruction
{
    public class ElementConstructionService : IElementConstructionService
    {
        public void CreateElementConstruction(ElementConstructions elementConstructions)
        {
            using (var unitOfWork=new UnitOfWork())
            {
                unitOfWork.ElementConstructionRepository.Insert(elementConstructions);
                unitOfWork.ElementConstructionRepository.Save();
            }
        }

        public List<ElementConstructions> Get()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.ElementConstructionRepository.Get();
            }
        }

        public List<ElementConstructions> GetAllElementConstructions()
        {
            using (var unitOfWork = new UnitOfWork())
            {
               return unitOfWork.ElementConstructionRepository.GetAllElementConstructions();
            }
        }

        public ElementConstructions GetElementConstruction(int id)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.ElementConstructionRepository.Get(id);
            }
        }

        public void UpdateElementConstruction(ElementConstructions elementConstructions)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.ElementConstructionRepository.Update(elementConstructions);
                unitOfWork.ElementConstructionRepository.Save();
            }
        }
    }
}

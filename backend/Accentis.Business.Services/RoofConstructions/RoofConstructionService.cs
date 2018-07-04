using System.Collections.Generic;
using Accentis.Business.Contracts.Services.RoofConstructions;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Services.RoofConstructions
{
    public class RoofConstructionService : IRoofConstructionsService
    {
        public void CreateRoofConstruction(RoofConstruction roofConstruction)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.RoofConstructionRepository.Insert(roofConstruction);
                unitOfWork.RoofConstructionRepository.Save();
            }
        }

        public List<RoofConstruction> Get()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofConstructionRepository.Get();
            }
        }

        public List<RoofConstruction> GetAllRoofConstructions()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofConstructionRepository.GetAllRoofConstructions();
            }
        }

        public RoofConstruction GetRoofConstruction(int id)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofConstructionRepository.Get(id);
            }
        }

        public void UpdateRoofConstruction(RoofConstruction roofConstruction)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.RoofConstructionRepository.Update(roofConstruction);
                unitOfWork.RoofConstructionRepository.Save();
            }
        }
    }
}

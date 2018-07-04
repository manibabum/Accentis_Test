using System.Collections.Generic;
using Accentis.Business.Contracts.Services.RoofComponent;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Services.RoofComponent
{
    public class RoofComponentService : IRoofComponentsService
    {
        public void CreateRoofComponents(RoofComponents roofComponents)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.RoofComponentsRepository.Insert(roofComponents);
                unitOfWork.RoofComponentsRepository.Save();
            }
        }

        public List<RoofComponents> Get()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofComponentsRepository.Get();
            }
        }

        public List<RoofComponents> GetAllRoofComponents()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofComponentsRepository.GetAllRoofComponents();
            }
        }

        public RoofComponents GetRoofComponentsById(int id)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofComponentsRepository.Get(id);
            }
        }

        public void UpdateRoofComponents(RoofComponents roofComponents)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.RoofComponentsRepository.Update(roofComponents);
                unitOfWork.RoofComponentsRepository.Save();
            }
        }
    }
}

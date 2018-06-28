using Accentis.Business.Contracts.Services.Roofs;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Services.Roofs
{
    public class RoofService : IRoofService
    {
        public void CreateRoof(Roof roof)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.RoofRepository.Insert(roof);
                unitOfWork.RoofRepository.Save();
            }
        }

        public List<Roof> Get()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofRepository.Get();
            }
        }

        public List<Roof> GetAllRoofs()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofRepository.GetAllRoofs();
            }
        }

        public Roof GetRoof(int id)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofRepository.Get(id);
            }
        }

        public void UpdateRoof(Roof roof)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.RoofRepository.Update(roof);
                unitOfWork.RoofRepository.Save();
            }
        }
    }
}

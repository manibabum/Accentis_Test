using Accentis.Business.Contracts.Services.RoofElements;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;


namespace Accentis.Business.Services.RoofElements
{
    public class RoofElementService : IRoofElementService
    {
        public void CreateRoofElement(RoofElement roofElement)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.RoofElementRepository.Insert(roofElement);
                unitOfWork.RoofElementRepository.Save();
            }
        }

        public List<RoofElement> Get()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofElementRepository.Get();
            }
        }

        public List<RoofElement> GetAllRoofElements()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofElementRepository.GetAllRoofElements();
            }
        }

        public RoofElement GetRoofElement(int id)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofElementRepository.Get(id);
            }
        }

        public void UpdateRoofElement(RoofElement roofElement)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.RoofElementRepository.Update(roofElement);
                unitOfWork.RoofElementRepository.Save();
            }
        }
    }
}

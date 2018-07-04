using System.Collections.Generic;
using Accentis.Business.Contracts.Services.RoofTypes;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Services.RoofTypes
{
    public class RoofTypeService: IRoofTypeService
    {

        public void CreateRoofType(RoofType rooftype)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.RoofTypeRepository.Insert(rooftype);
                unitOfWork.RoofTypeRepository.Save();
            }
        }

        public List<RoofType> Get()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofTypeRepository.Get();
            }
        }

        public List<RoofType> GetAllRoofTypes()
        {
            using (var unitOfWork = new UnitOfWork())
            {
               return unitOfWork.RoofTypeRepository.GetAllRoofTypes();
            }
        }

        public RoofType GetRoofType(int id)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.RoofTypeRepository.Get(id);
            }
        }

        public void UpdateRoofType(RoofType rooftype)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.RoofTypeRepository.Update(rooftype);
                unitOfWork.RoofTypeRepository.Save();
            }
        }
    }
}
